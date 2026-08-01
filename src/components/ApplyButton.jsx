"use client";

import Link from "next/link";


export default function ApplyButton({
  benefitId,
  text = "Apply Now"
}) {


  return (

    <Link
      href={`/benefits/apply?id=${benefitId}`}
      className="btn"
    >

      {text}

      <style jsx>{`

        .btn{

          display:inline-block;

          width:100%;

          padding:14px 20px;

          background:#2563eb;

          color:white;

          text-align:center;

          border-radius:8px;

          text-decoration:none;

          font-weight:600;

          transition:.3s;

        }



        .btn:hover{

          background:#1d4ed8;

          transform:translateY(-2px);

        }


      `}</style>

    </Link>

  );

}
