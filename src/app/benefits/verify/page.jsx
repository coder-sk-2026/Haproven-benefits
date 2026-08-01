"use client";

import { useState } from "react";

import applications from "@/data/applications.json";
import students from "@/data/students.json";
import benefits from "@/data/benefits.json";


export default function VerifyBenefitPage() {

  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);


  function verifyBenefit() {

    const application = applications.find(
      (item) => item.benefitCode === code
    );


    if (!application) {
      setResult({
        success: false,
        message: "Invalid Benefit Code"
      });

      return;
    }


    const student = students.find(
      (item) => item.id === application.studentId
    );


    const benefit = benefits.find(
      (item) => item.id === application.benefitId
    );


    setResult({
      success: true,
      student,
      benefit,
      application
    });

  }


  return (
    <>
      <main className="container">

        <h1>Verify Student Benefit</h1>

        <p>
          Enter Benefit Code to verify the student benefit.
        </p>


        <div className="box">

          <input
            type="text"
            placeholder="Enter HPB Code"
            value={code}
            onChange={(e)=>setCode(e.target.value)}
          />


          <button onClick={verifyBenefit}>
            Verify
          </button>

        </div>



        {result && (

          <div className={
            result.success
            ? "success"
            : "error"
          }>


          {result.success ? (

            <>
              <h2>✅ Valid Benefit</h2>

              <p>
                <strong>Student:</strong>
                {" "}
                {result.student.fullName}
              </p>


              <p>
                <strong>Institute:</strong>
                {" "}
                {result.student.institute.name}
              </p>


              <p>
                <strong>Benefit:</strong>
                {" "}
                {result.benefit.title}
              </p>


              <p>
                <strong>Status:</strong>
                {" "}
                {result.application.status}
              </p>

            </>

          ) : (

            <h2>
              ❌ {result.message}
            </h2>

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
          text-align:center;
        }


        h1{
          font-size:38px;
        }


        .box{
          margin-top:30px;
          display:flex;
          gap:10px;
        }


        input{
          flex:1;
          padding:14px;
          border:1px solid #ddd;
          border-radius:8px;
        }


        button{
          padding:14px 25px;
          background:#2563eb;
          color:white;
          border:none;
          border-radius:8px;
          cursor:pointer;
        }


        .success,
        .error{
          margin-top:30px;
          padding:25px;
          border-radius:12px;
          text-align:left;
        }


        .success{
          background:#dcfce7;
        }


        .error{
          background:#fee2e2;
        }

      `}</style>

    </>
  );
}
