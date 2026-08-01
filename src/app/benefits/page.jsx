"use client";

import Link from "next/link";

export default function StudentBenefitsPage() {
  return (
    <>
      <main className="container">
        {/* Hero */}
        <section className="hero">
          <span className="badge">🎓 Haproven Student Benefits</span>

          <h1>Student Benefits</h1>

          <p>
            Discover exclusive student discounts, verified certificates,
            scholarships, workshops, hackathons, internships, and many more
            opportunities through Haproven.
          </p>

          <Link href="#guide" className="btn">
            Get Started →
          </Link>
        </section>

        {/* Guide */}
        <section id="guide" className="guide">
          <h2>How to Apply for Student Benefits</h2>

          <div className="steps">
            <div className="step">
              <span>1</span>
              <h3>Browse Benefits</h3>
              <p>
                Explore all available student benefits, certificates,
                discounts, and opportunities.
              </p>
            </div>

            <div className="step">
              <span>2</span>
              <h3>View Details</h3>
              <p>
                Open a benefit to check eligibility, validity, institute,
                discount percentage and requirements.
              </p>
            </div>

            <div className="step">
              <span>3</span>
              <h3>Apply</h3>
              <p>
                Click the Apply button and complete your benefit request.
              </p>
            </div>

            <div className="step">
              <span>4</span>
              <h3>Download PDF</h3>
              <p>
                Generate your Benefit Pass PDF and show it to your coaching or
                institute.
              </p>
            </div>
          </div>

          <div className="center">
            <Link href="/benefits/list" className="btn">
              Explore Benefits
            </Link>
          </div>
        </section>
      </main>

      <style jsx>{`
        .container {
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
        }

        .hero {
          text-align: center;
          padding: 60px 20px;
        }

        .badge {
          display: inline-block;
          background: #eef4ff;
          color: #2563eb;
          padding: 8px 14px;
          border-radius: 50px;
          font-size: 14px;
          margin-bottom: 15px;
        }

        h1 {
          font-size: 42px;
          margin-bottom: 15px;
        }

        .hero p {
          max-width: 700px;
          margin: auto;
          color: #666;
          line-height: 1.7;
          font-size: 18px;
        }

        .btn {
          display: inline-block;
          margin-top: 30px;
          padding: 14px 28px;
          background: #2563eb;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: 0.3s;
        }

        .btn:hover {
          background: #1d4ed8;
        }

        .guide {
          margin-top: 70px;
        }

        h2 {
          text-align: center;
          margin-bottom: 40px;
          font-size: 32px;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 20px;
        }

        .step {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 25px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .step span {
          width: 45px;
          height: 45px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #2563eb;
          color: #fff;
          border-radius: 50%;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .step h3 {
          margin-bottom: 10px;
        }

        .step p {
          color: #666;
          line-height: 1.6;
          font-size: 15px;
        }

        .center {
          text-align: center;
          margin-top: 45px;
        }

        @media (max-width:768px) {
          h1 {
            font-size: 34px;
          }

          h2 {
            font-size: 26px;
          }
        }
      `}</style>
    </>
  );
}
