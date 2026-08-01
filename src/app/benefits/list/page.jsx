"use client";

import benefits from "@/data/benefits.json";
import BenefitCard from "@/components/BenefitCard";

export default function BenefitsListPage() {
  return (
    <>
      <main className="container">

        {/* Header */}
        <section className="hero">
          <span className="badge">🎓 Haproven Benefits</span>

          <h1>Student Benefits</h1>

          <p>
            Explore all active, upcoming, and exclusive student benefits,
            discounts, certificates, workshops, internships, and opportunities
            available through Haproven.
          </p>
        </section>

        {/* Stats */}
        <section className="stats">

          <div className="stat">
            <h2>{benefits.length}</h2>
            <span>Total Benefits</span>
          </div>

          <div className="stat">
            <h2>
              {benefits.filter(item => item.status === "Active").length}
            </h2>
            <span>Active</span>
          </div>

          <div className="stat">
            <h2>
              {benefits.filter(item => item.status === "Upcoming").length}
            </h2>
            <span>Upcoming</span>
          </div>

        </section>

        {/* Cards */}

        <section className="grid">

          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              benefit={benefit}
            />
          ))}

        </section>

      </main>

      <style jsx>{`
        .container{
          max-width:1200px;
          margin:auto;
          padding:40px 20px;
          font-family:Arial,sans-serif;
        }

        .hero{
          text-align:center;
          margin-bottom:50px;
        }

        .badge{
          background:#eef4ff;
          color:#2563eb;
          padding:8px 14px;
          border-radius:30px;
          font-size:14px;
        }

        h1{
          font-size:42px;
          margin:20px 0;
        }

        .hero p{
          max-width:750px;
          margin:auto;
          line-height:1.8;
          color:#666;
        }

        .stats{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
          gap:20px;
          margin:40px 0;
        }

        .stat{
          background:#fff;
          border:1px solid #eee;
          border-radius:12px;
          text-align:center;
          padding:25px;
        }

        .stat h2{
          color:#2563eb;
          font-size:34px;
          margin-bottom:8px;
        }

        .stat span{
          color:#666;
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
          gap:25px;
        }

      `}</style>

    </>
  );
}
