# King Soft - API Server with Authentication

مشروع خادم برمجي احترافي مع نظام مصادقة ولوحة تحكم

## المميزات ✨

- ✅ خادم Node.js + Express
- ✅ قاعدة بيانات PostgreSQL
- ✅ نظام مصادقة كامل (تسجيل دخول/تسجيل)
- ✅ JWT Token Authentication
- ✅ لوحة تحكم HTML/CSS/JavaScript
- ✅ API RESTful

## المتطلبات

- Node.js (v14 أو أحدث)
- PostgreSQL (v12 أو أحدث)
- npm أو yarn

## التثبيت

### 1. استنساخ المستودع
```bash
git clone https://github.com/hulooltech/king-soft.git
cd king-soft
```

### 2. تثبيت المكتبات
```bash
npm install
```

### 3. إعداد قاعدة البيانات
- إنشء قاعدة بيانات جديدة في PostgreSQL باسم `king_soft_db`
- تشغيل ملف `database.sql` لإنشاء الجداول

### 4. إعداد متغيرات البيئة
عدّل ملف `.env` بمعلومات قاعدة البيانات الخاصة بك

### 5. تشغيل الخادم
```bash
npm run dev
```

الخادم سيعمل على: http://localhost:3000

## الهيكل

```
king-soft/
├── server/
│   ├── index.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── users.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── auth.js
│   └── config/
│       └── database.js
├── public/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── auth.js
│       └── dashboard.js
├── database.sql
├── package.json
├── .env
└── README.md
```

## API Endpoints

### المصادقة
- `POST /api/auth/register` - تسجيل مستخدم جديد
- `POST /api/auth/login` - تسجيل الدخول
- `GET /api/auth/profile` - الحصول على بيانات المستخدم

### المستخدمون
- `GET /api/users` - قائمة المستخدمين
- `GET /api/users/:id` - بيانات مستخدم معين
- `PUT /api/users/:id` - تحديث بيانات مستخدم
- `DELETE /api/users/:id` - حذف مستخدم

## الترخيص

MIT License

---

**تم الإنشاء بواسطة**: King Soft Team 🚀