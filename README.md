# گزارش آزمایش اول

دستور کار:
https://github.com/ssc-public/Software-Engineering-Lab/blob/main/courseworks/experiments/git.md

در ابتدا ما راجع به موضوع صحبت نموده و به نتیجه رسیدیم که وبسایتی برای معرفی تیم تاسیس کنیم.

نام تیم را قیف! گذاشتیم که حرف اول نام خانوادگی اعضای تیم می‌باشد.

سپس مشغول ساخت مخزن و پروژه شدیم.
پس از آن تمام لیست کارها را با توجه به مستندات در آورده و در کانبان بورد خود وارد کردیم.

در ادامه مشغول پیاده‌سازی شدیم و وبسایت نهایی را در زیر مشاهده می‌نمایید:

https://abolfazlghalandary.github.io/Ghif-Team-SE-Lab-1/


# پاسخ به سوالات
# سوال 1
این پوشه یکی از پوشه های اساسی در گیت می باشد که هنگامی که یک مخزنی را ایجاد می کنیم، این پوشه نیز در همان مخزن ایجاد می شود و می توان به عنوان قلب یک مخزن از آن یاد کرد زیرا اهمیت و کاربرد زیادی برای ما دارد. در واقع در این پوشه تمامی اطلاعاتی که گیت نیاز دارد تا بداند چه تغییراتی در کد پروژه ایجاد شده است نگه‌داری می‌شود. در این پوشه فایل‌ها و پوشه‌های مختلفی وجود دارد که از جمله فایل های مهم آن می توان به index, head description , fetch_head اشاره کرد. نمی خواهیم به توضیح این فایل ها بپردازیم اما برای نمونه کارکرد فایل head را بیان می کنیم که هنگامی که ما به یک برنچ checkout انجام می دهیم، این فایل تغییر کرده و اطلاعاتی درون آن نوشته می شود.از جمله پوشه های آن می توان به objects و refs اشاره کرد. در پوشه objects کدهای پروژه همانند فریم های عکس قرار دارند و در فایل config مربوط به این پوشه تنظیمات مخزن نگهداری می شود. در پوشه refs به کامیت های موجود در پروژه اشاره می کنیم.


## سوال ۴ (قدرت گرفته از perplexity.ai)

| دستور      | عملکرد اصلی                                        | تأثیر بر تاریخچه    |
|------------|---------------------------------------------------|---------------------|
| **reset**  | بازگرداندن به یک commit خاص                       | تغییر تاریخچه       |
| **revert** | معکوس کردن تغییرات یک commit                     | حفظ تاریخچه         |
| **checkout** | جابجایی بین شاخه‌ها یا بررسی فایل‌ها          | بدون تغییر تاریخچه  |
| **restore** | بازیابی فایل‌های حذف شده یا تغییر یافته        | بدون تغییر تاریخچه  |
| **switch** | جابجایی بین شاخه‌ها                              | بدون تغییر تاریخچه  |


## سوال ۵ (قدرت گرفته از perplexity.ai)

### مفهوم Stage (Index) درGit

این دستور به عنوان یک ناحیه موقتی بین دایرکتوری کاری (Working Directory) و مخزن (Repository) عمل می‌کند. این ناحیه به توسعه‌دهندگان اجازه می‌دهد تا تغییرات را قبل از انجام commit آماده کنند. به عبارت دیگر، staging area محلی است که تغییرات را برای commit بعدی جمع‌آوری می‌کند.

### ویژگی‌های Stage (Index)
 
حفظ تغییرات: تغییراتی که در دایرکتوری کاری انجام می‌شوند، ابتدا باید به staging area اضافه شوند تا در commit بعدی لحاظ شوند.

انتخابی بودن: توسعه‌دهندگان می‌توانند تصمیم بگیرند که کدام تغییرات را به staging area اضافه کنند و کدام را کنار بگذارند. این امکان به آن‌ها اجازه می‌دهد تا commitهای منطقی و مرتبط بسازند.

دستور git add: برای افزودن فایل‌ها به staging area از این دستور استفاده می‌شود. به عنوان مثال، با استفاده از git add <file>، فایل مورد نظر به staging area اضافه می‌شود.

### دستور Stash در Git

دستور git stash برای ذخیره موقت تغییرات در دایرکتوری کاری استفاده می‌شود. این دستور به شما اجازه می‌دهد تا تغییرات فعلی خود را ذخیره کنید و دایرکتوری کاری را به حالت آخرین commit برگردانید. این کار بسیار مفید است زمانی که شما نیاز دارید به یک شاخه دیگر بروید یا کار دیگری انجام دهید بدون اینکه تغییرات فعلی شما از بین برود.

### ویژگی‌های دستور Stash

ذخیره موقت: تغییرات ذخیره‌شده با git stash در یک لیست قرار می‌گیرند و می‌توانند بعداً بازیابی شوند.

دستور git stash pop: برای بازیابی آخرین stash و حذف آن از لیست استفاده می‌شود.

دستور git stash apply: برای بازیابی آخرین stash بدون حذف آن از لیست استفاده می‌شود.

