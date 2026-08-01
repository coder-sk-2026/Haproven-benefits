"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

import students from "@/data/students.json";
import benefits from "@/data/benefits.json";
import applications from "@/data/applications.json";

import checkEligibility from "@/utils/checkEligibility";
import generateBenefitId from "@/utils/generateBenefitId";

export default function ApplyBenefitPage() {
  const searchParams = useSearchParams();

  const benefitId = searchParams.get("id");

  // Demo: First student logged in
  const student = students[0];

  const benefit = benefits.find(item => item.id === benefitId);

  const [result, setResult] = useState(null);

  function handleApply() {

    const eligibility = checkEligibility(student, benefit);

    if (!eligibility.eligible) {
      setResult({
        success: false,
        message: eligibility.message
      });
      return;
    }

    const benefitCode = generateBenefitId(applications);

    const application = {
      applicationId: `APP-${applications.length + 1}`,
      benefitCode,
      studentId: student.id,
      benefitId: benefit.id,
      status: "Pending",
      appliedAt: new Date().toISOString()
    };

    console.log(application);

    setResult({
      success: true,
      benefitCode
    });
  }

  if (!benefit) {
    return <h2>Benefit not found.</h2>;
  }

  return (
    <>
      <main className="container">

        <h1>Apply for Benefit</h1>

        <div className="card">

          <h2>{benefit.title}</h2>

          <p>
            Student :
            <strong> {student.fullName}</strong>
          </p>

          <p>
            Institute :
            <strong> {student.institute.name}</strong>
          </p>

          <p>
            Benefit :
            <strong>
              {" "}
              {benefit.discount.type === "Percentage"
                ? `${benefit.discount.value}% Discount`
                : "Free"}
            </strong>
          </p>

          <button onClick={handleApply}>
            Apply Now
          </button>

        </div>

        {result && (

          <div
            className={
              result.success
                ? "success"
                : "error"
            }
          >

            {result.success ? (
              <>
                <h3>Application Submitted 🎉</h3>

                <p>
                  Benefit Code:
                  <strong>
                    {" "}
                    {result.benefitCode}
                  </strong>
                </p>

                <button>
                  Download PDF
                </button>
              </>
            ) : (
              <>
                <h3>Application Failed</h3>

                <p>{result.message}</p>
              </>
            )}

          </div>

        )}

      </main>

      <style jsx>{`
        .container{
          max-width:700px;
          margin:auto;
          padding:40px 20px;
          font-family:Arial;
        }

        h1{
          text-align:center;
          margin-bottom:30px;
        }

        .card{
          border:1px solid #ddd;
          border-radius:12px;
          padding:25px;
        }

        p{
          margin:12px 0;
        }

        button{
          margin-top:20px;
          padding:14px 24px;
          border:none;
          background:#2563eb;
          color:white;
          border-radius:8px;
          cursor:pointer;
          width:100%;
        }

        .success{
          margin-top:25px;
          background:#dcfce7;
          padding:20px;
          border-radius:10px;
        }

        .error{
          margin-top:25px;
          background:#fee2e2;
          padding:20px;
          border-radius:10px;
        }
      `}</style>

    </>
  );
}
