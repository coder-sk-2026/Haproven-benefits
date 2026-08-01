# Haproven-benefits


src/
│
├── app/
│   ├── benefits/
│   │   ├── page.jsx                 # Benefits List
│   │   ├── [benefitId]/
│   │   │   └── page.jsx             # Benefit Details
│   │   ├── apply/
│   │   │   └── page.jsx             # Apply for Benefit
│   │   └── index/
│   │       └── page.jsx             # How to Apply (Guide)
│   │
│   └── page.jsx                     # Website Home
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
