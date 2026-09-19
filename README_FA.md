# سایت آکادمیک عارف — نسخه محلی برای VS Code

این پروژه یک وب‌سایت **کاملاً استاتیک** است؛ یعنی برای اجرا به Python، Node.js یا دیتابیس نیاز ندارد.

## 1) اجرا در VS Code

1. پوشه `aref-parakkat-site` را از ZIP خارج کن.
2. VS Code را باز کن.
3. از منوی **File > Open Folder** همین پوشه را انتخاب کن.
4. Extension با نام **Live Server** (از Ritwick Dey) را نصب کن.
5. روی `index.html` راست‌کلیک کن.
6. **Open with Live Server** را بزن.
7. سایت در مرورگر با آدرسی شبیه `http://127.0.0.1:5500/` باز می‌شود.

بدون Live Server هم می‌توانی `index.html` را مستقیم با مرورگر باز کنی، ولی Live Server برای توسعه بهتر است.

## 2) فایل‌هایی که بیشتر با آن‌ها کار داری

- `index.html` → اسکلت و ترتیب بخش‌ها
- `assets/css/style.css` → ظاهر سایت، رنگ‌ها، فاصله‌ها، موبایل
- `assets/js/site-data.js` → **مهم‌ترین فایل برای آپدیت محتوا**: مقاله، دانشجو، خبر، Teaching و Career
- `assets/js/app.js` → منطق سایت، فیلتر مقالات، منو، modal و animation
- `assets/images/placeholder.jpg` → فعلاً برای همه عکس‌ها استفاده شده
- `assets/files/Aref_Einizade_CV.pdf` → رزومه فعلی

## 3) عوض کردن عکس عارف

عکس واقعی را مثلاً با نام `aref.jpg` داخل `assets/images/` بگذار و در `index.html` این عبارت را پیدا کن:

```html
assets/images/placeholder.jpg
```

در بخش Hero آن را به این تغییر بده:

```html
assets/images/aref.jpg
```

## 4) اضافه کردن دانشجو

فایل `assets/js/site-data.js` را باز کن و `currentPeople` را پیدا کن. هر کارت چنین شکلی دارد:

```js
{
  name: "Student Name",
  role: "PhD student",
  topic: "Research topic",
  image: "assets/images/student.jpg",
  link: "https://..."
}
```

## 5) اضافه کردن مقاله

در همان فایل، در آرایه `publications` یک object جدید به بالای لیست اضافه کن:

```js
{
  year: 2026,
  type: "conference",
  title: "Paper title",
  authors: "A. Author, Aref Einizade, ...",
  venue: "Conference name",
  image: "assets/images/paper.jpg",
  links: {
    arxiv: "https://arxiv.org/...",
    doi: "https://doi.org/...",
    code: "https://github.com/..."
  }
}
```

مقادیر قابل استفاده برای `type`:

- `conference`
- `journal`
- `preprint`

## 6) قبل از GitHub

تا وقتی سایت را کامل نکرده‌ای، فقط روی Live Server اجرا کن. هیچ چیزی روی اینترنت منتشر نمی‌شود.

وقتی نسخه نهایی شد می‌توانیم مرحله بعد را انجام دهیم:

1. ساخت repository در GitHub
2. push کردن همین پوشه
3. فعال‌کردن GitHub Pages
4. اتصال domain در صورت نیاز

## نکته مهم درباره Team

نام دانشجوهای جدید سال 2026 از منابع عمومی‌ای که بررسی شد با اطمینان قابل استخراج نبود، بنابراین عمداً اسم ساختگی وارد نشده است. سه کارت Current Members آماده‌اند تا اسم‌های واقعی را جایگزین کنیم.
