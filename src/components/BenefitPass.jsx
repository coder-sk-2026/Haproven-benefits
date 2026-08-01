"use client";

import generatePdf from "@/utils/generatePdf";


export default function BenefitPass({
  student,
  benefit,
  application
}) {


  function downloadPdf(){

    generatePdf({

      student,

      benefit,

      benefitCode: application.benefitCode

    });

  }


  return (

    <>

      <div className="pass">


        <div className="header">

          <h2>
            HAPROVEN
          </h2>

          <span>
            Student Benefit Pass
          </span>

        </div>



        <div className="info">


          <p>
            <strong>
              Student:
            </strong>

            {" "}
            {student.fullName}

          </p>


          <p>
            <strong>
              Haproven ID:
            </strong>

            {" "}
            {student.haprovenId}

          </p>



          <p>
            <strong>
              Benefit:
            </strong>

            {" "}
            {benefit.title}

          </p>



          <p>
            <strong>
              Benefit Code:
            </strong>

            {" "}
            {application.benefitCode}

          </p>



          <p>
            <strong>
              Status:
            </strong>

            {" "}
            {application.status}

          </p>



          <p>
            <strong>
              Valid Till:
            </strong>

            {" "}
            {benefit.validity.endDate}

          </p>


        </div>



        <button onClick={downloadPdf}>

          Download Benefit PDF

        </button>



      </div>



      <style jsx>{`

        .pass{

          max-width:400px;

          padding:25px;

          border-radius:15px;

          border:1px solid #ddd;

          background:white;

          box-shadow:0 8px 25px rgba(0,0,0,.08);

        }



        .header{

          text-align:center;

          border-bottom:1px solid #eee;

          padding-bottom:15px;

          margin-bottom:20px;

        }



        .header h2{

          margin:0;

          color:#2563eb;

          font-size:24px;

        }



        .header span{

          color:#666;

          font-size:14px;

        }



        .info p{

          margin:12px 0;

          font-size:15px;

        }



        button{

          width:100%;

          padding:13px;

          margin-top:20px;

          border:none;

          border-radius:8px;

          background:#2563eb;

          color:white;

          cursor:pointer;

          font-weight:bold;

        }



        button:hover{

          background:#1d4ed8;

        }


      `}</style>

    </>

  );

}
