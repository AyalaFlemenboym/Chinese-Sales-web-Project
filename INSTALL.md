INSTALL.md
markdown
Copy code
# 🚀 הפעלת פרויקט – מערכת מכירה סינית

פרויקט זה בנוי משני חלקים:
- `client/` – אפליקציית Angular לניהול ממשק המשתמש
- `server/` – Web API מבוסס ASP.NET Core (C#) לטיפול בלוגיקה העסקית והחיבור למסד נתונים

---

## ✅ דרישות מוקדמות

### 🔧 להרצת הקליינט:
- Node.js (מומלץ: גרסה 18 ומעלה)
- Angular CLI:
  ```bash
  npm install -g @angular/cli
🔧 להרצת הסרבר:
Visual Studio 2022 או חדש יותר

.NET SDK : 6.0 

SQL Server (מותקן מקומית או בגישה דרך Azure/שרת אחר)

🛠 הוראות התקנה והרצה
📂 1. התקנת הקליינט (Angular)
bash
Copy code
cd client
npm install
ng serve
לאחר ההרצה, האפליקציה תעלה בברירת מחדל בכתובת:
http://localhost:4200

⚙️ 2. הרצת הסרבר (ASP.NET Core API)
פתחי את התיקייה server ב־Visual Studio.

ערכי את הקובץ appsettings.json ומלאי בו את מחרוזת החיבור למסד הנתונים שלך.
לדוגמה:

json
Copy code
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=ChineseSales;Trusted_Connection=True;"
}
הריצי את הסרבר באמצעות F5 או Ctrl + F5.

ה־API ירוץ בד"כ על:

https://localhost:5001

http://localhost:5000

⚠️ שימו לב
קוד המקור אינו כולל מסד נתונים. כדי שהמערכת תעבוד כראוי, יש לבצע את הפעולות הבאות:
יצירת מסד נתונים עם Entity Framework
אם זו הפעם הראשונה שאתם מריצים את הפרויקט – ניתן ליצור את מסד הנתונים דרך ה־Migration שכבר כלול בקוד.

⚙️ שלבים:
ודאו שהמחרוזת DefaultConnection מוגדרת כראוי.

ודאו שבקובץ Program.cs קיימת שורה דומה לזו:

csharp
Copy code
db.Database.Migrate();
להרצת ה־Migration:

bash
Copy code
cd server
dotnet ef database update
שימו לב: יש להריץ את הפקודה הזו בסביבת פיתוח פעם אחת – לאחר מכן כל שינוי יתבצע דרך add migration.

🛠 יצירת Migration חדשה (למפתחים)
bash
Copy code
cd server
dotnet ef migrations add AddSomeTable
🧪 בדיקות
ודאי שהפרונטאנד מצליח לתקשר עם ה־API (ניתן לבדוק דרך Network ב־DevTools).
בפרויקט קיימים רכיבים בסיסיים לבדיקה ידנית של הפעולות:

הרשמה והתחברות

ניהול מתנות ותורמים

קנייה והגרלה

בהצלחה!

אם קיימת שגיאת CORS, יש להוסיף הגדרות מתאימות ב־Program.cs, לדוגמה:

csharp
Copy code
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

app.UseCors("AllowAll");


בהצלחה!


מפתחת: אילה פלמנבוים 🌸



