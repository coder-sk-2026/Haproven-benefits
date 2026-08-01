"use client";

import Link from "next/link";

export default function BenefitCard({ benefit }) {
  return (
    <>
      <div className="card">
        <div className="top">
          <span className={`status ${benefit.status.toLowerCase().replace(/\s/g, "-")}`}>
            {benefit.status}
          </span>

          <span className="category">{benefit.category}</span>
        </div>

        <h2>{benefit.title}</h2>

        <p className="description">
          {benefit.description}
        </p>

        <div className="info">
          <div>
            <strong>Institute</strong>
            <span>{benefit.institute.name}</span>
          </div>

          <div>
            <strong>Certificate</strong>
            <span>{benefit.certificate}</span>
          </div>

          <div>
            <strong>Benefit</strong>
            <span>
              {benefit.discount.type === "Percentage"
                ? `${benefit.discount.value}% Discount`
                : "Free"}
            </span>
          </div>

          <div>
            <strong>Valid Until</strong>
            <span>{benefit.validity.endDate}</span>
          </div>
        </div>

        <Link
          href={`/benefits/${benefit.id}`}
          className="btn"
        >
          View Details →
        </Link>
      </div>

      <style jsx>{`
        .card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 24px;
          transition: .3s;
          box-shadow: 0 6px 20px rgba(0,0,0,.05);
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 28px rgba(0,0,0,.08);
        }

        .top{
          display:flex;
          justify-content:space-between;
          margin-bottom:16px;
        }

        .status{
          padding:6px 12px;
          border-radius:50px;
          font-size:13px;
          font-weight:600;
        }

        .active{
          background:#dcfce7;
          color:#15803d;
        }

        .upcoming{
          background:#dbeafe;
          color:#2563eb;
        }

        .coming-soon{
          background:#fef3c7;
          color:#b45309;
        }

        .category{
          color:#666;
          font-size:14px;
        }

        h2{
          margin:0 0 12px;
          font-size:24px;
        }

        .description{
          color:#666;
          line-height:1.7;
          margin-bottom:20px;
        }

        .info{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:15px;
          margin-bottom:22px;
        }

        .info strong{
          display:block;
          font-size:13px;
          color:#888;
          margin-bottom:5px;
        }

        .info span{
          font-size:15px;
        }

        .btn{
          display:inline-block;
          width:100%;
          text-align:center;
          padding:14px;
          background:#2563eb;
          color:#fff;
          border-radius:8px;
          text-decoration:none;
          font-weight:600;
        }

        .btn:hover{
          background:#1d4ed8;
        }

        @media(max-width:600px){
          .info{
            grid-template-columns:1fr;
          }
        }
      `}</style>
    </>
  );
}
