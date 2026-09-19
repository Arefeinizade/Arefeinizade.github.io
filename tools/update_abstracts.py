#!/usr/bin/env python3
"""Optional metadata enrichment. Run before publishing (not in the visitor browser).
Only DOI-exact OpenAlex matches are accepted. Preserve cached abstracts on failures.
Never invent abstract text or classify a title as though an abstract were retrieved.
"""
import json, pathlib, re, subprocess, urllib.parse, urllib.request, time
ROOT = pathlib.Path(__file__).resolve().parents[1]
DATA = ROOT / 'assets/data/publication-abstracts.json'
JS = ROOT / 'assets/js/site-data.js'
# site-data.js is a JS object, not JSON; extract publication records using Node's vm.
SCRIPT = """const fs=require('fs'),vm=require('vm');const box={window:{}};vm.runInNewContext(fs.readFileSync(process.argv[1],'utf8'),box);console.log(JSON.stringify(box.window.SITE_DATA.publications.map(p=>({title:p.title,doi:p.links?.doi||''}))));"""
records = json.loads(subprocess.check_output(['node','-e',SCRIPT,str(JS)],text=True))
cache = json.loads(DATA.read_text()) if DATA.exists() else {'papers':{}}
cache.setdefault('papers',{})
def norm(s):return re.sub('[^a-z0-9]+',' ',s.lower()).strip()
def abstract_text(index):
    if not index:return ''
    tokens=[]
    for word, positions in index.items():
        tokens.extend((pos,word) for pos in positions)
    return ' '.join(word for _,word in sorted(tokens))
updated=0
for record in records:
    key=norm(record['title'])
    if cache['papers'].get(key,{}).get('abstract'):continue
    doi=record.get('doi','')
    if 'doi.org/' not in doi:continue
    identifier=doi.split('doi.org/',1)[-1].split('?',1)[0]
    url='https://api.openalex.org/works/https://doi.org/'+urllib.parse.quote(identifier,safe='/')
    try:
        req=urllib.request.Request(url,headers={'User-Agent':'ArefAcademicWebsite/1.0 (metadata enrichment)'})
        with urllib.request.urlopen(req,timeout=12) as response:work=json.load(response)
        actual=work.get('doi') or ''
        if actual.lower().rstrip('/') != ('https://doi.org/'+identifier).lower().rstrip('/'):
            continue
        abstract=abstract_text(work.get('abstract_inverted_index'))
        if not abstract:continue
        cache['papers'][key]={'abstract':abstract,'doi':actual,'source':'OpenAlex DOI-exact'}
        updated+=1
    except (OSError,ValueError,KeyError) as error:
        print('Skipped:',record['title'],'(',str(error)[:90],')')
    time.sleep(.12)
DATA.write_text(json.dumps(cache,ensure_ascii=False,indent=2)+'\n')
print('New DOI-verified abstracts:',updated,'; cached total:',sum(bool(v.get('abstract')) for v in cache['papers'].values()))
