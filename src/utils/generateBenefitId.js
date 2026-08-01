// src/utils/generateBenefitId.js

export default function generateBenefitId(applications = []) {
  const year = new Date().getFullYear();

  // Last application number
  const lastNumber = applications.length + 1;

  // 000001 format
  const serial = String(lastNumber).padStart(6, "0");

  // Final Benefit Code
  return `HPB-${year}-${serial}`;
}











// import generateBenefitId from "@/utils/generateBenefitId";
// import applications from "@/data/applications.json";

// const benefitCode = generateBenefitId(applications);

// console.log(benefitCode);
