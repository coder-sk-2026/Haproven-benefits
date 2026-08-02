# 🎓 Haproven Benefits

Haproven Benefits is a Next.js based web application that helps students discover, explore, and apply for various educational benefits, scholarships, and government schemes through a simple and user-friendly interface.

---

## ✨ Features

- 📚 Browse all available benefits
- 🔍 View complete benefit details
- 📝 Apply for benefits online
- ✅ Eligibility checking system
- 🏫 Institute-wise benefit support
- 🆔 Automatic Benefit/Application ID generation
- 📄 PDF generation for applications
- 💾 JSON-based data storage
- ⚡ Built with Next.js App Router

---

## 📁 Project Structure

```text
src/
│
├── app/
│   ├── benefits/
│   │   ├── page.jsx
│   │   │
│   │   ├── [benefitId]/
│   │   │   └── page.jsx
│   │   │
│   │   ├── apply/
│   │   │   └── page.jsx
│   │   │
│   │   └── index/
│   │       └── page.jsx
│   │
│   └── page.jsx
│
├── components/
│   ├── BenefitCard.jsx
│   ├── BenefitDetails.jsx
│   └── ApplyButton.jsx
│
├── data/
│   ├── students.json
│   ├── benefits.json
│   ├── institutes.json
│   └── applications.json
│
├── utils/
│   ├── checkEligibility.js
│   ├── generateBenefitId.js
│   └── generatePdf.js
│
└── services/
    └── applicationService.js
```

---

# 📂 Folder Explanation

## 📁 app/

Contains all application routes using the Next.js App Router.

| Path | Description |
|------|-------------|
| `app/page.jsx` | Home page of the website |
| `benefits/page.jsx` | Displays all available benefits |
| `benefits/[benefitId]/page.jsx` | Dynamic page showing detailed information of a selected benefit |
| `benefits/apply/page.jsx` | Benefit application form |
| `benefits/index/page.jsx` | Step-by-step guide on how to apply |

---

## 📁 components/

Reusable UI components.

### BenefitCard.jsx

Displays a benefit card including:

- Benefit Name
- Description
- Category
- Apply Button

---

### BenefitDetails.jsx

Shows complete information about a selected benefit.

Includes:

- Benefit Description
- Eligibility
- Required Documents
- Last Date
- Application Process

---

### ApplyButton.jsx

Reusable button that redirects users to the application page.

---

## 📁 data/

Stores application data in JSON format.

| File | Purpose |
|------|---------|
| students.json | Student records |
| benefits.json | All available benefits |
| institutes.json | Institute information |
| applications.json | Submitted applications |

---

## 📁 utils/

Utility helper functions.

### checkEligibility.js

Checks whether a student is eligible for a benefit.

---

### generateBenefitId.js

Generates a unique Benefit/Application ID.

Example:

```
HB-2026-0001
```

---

### generatePdf.js

Generates a downloadable PDF copy of the submitted application.

---

## 📁 services/

### applicationService.js

Handles all application-related operations such as:

- Save application
- Fetch applications
- Update application status
- Validate application data

---

# 🚀 Getting Started

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

---

Open your browser and visit:

```
http://localhost:3000
```

---

## Build Project

```bash
npm run build
```

---

## Start Production Server

```bash
npm start
```

---

# 🛠️ Technologies Used

- Next.js
- React
- JavaScript
- App Router
- JSON Data Storage
- CSS

---

# 🎯 Future Improvements

- Authentication
- Admin Dashboard
- Database Integration
- Email Notifications
- File Upload Support
- Payment Gateway
- Student Dashboard
- Institute Dashboard

---

# 📜 License

This project is intended for educational and demonstration purposes.

---

# 👨‍💻 Developed By

**Haproven Team**

Building smart digital solutions for students and educational institutions.****
