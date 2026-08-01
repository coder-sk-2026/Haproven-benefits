"use client";

import students from "@/data/students.json";
import benefits from "@/data/benefits.json";
import applications from "@/data/applications.json";
import generatePdf from "@/utils/generatePdf";

export default function MyBenefitsPage() {
  // Demo Login Student
  const student = students[0];

  // Student ki applications
  const myApplications = applications.filter(
    (item) => item.studentId === student.id
  );

  return (
    <>
      <main className="container">
        <div className="hero">
          <h1>My Benefits</h1>
          <p>
            View all your applied benefits, application status, benefit code,
            and download your Benefit Pass anytime.
          </p>
        </div>

        {myApplications.length === 0 ? (
          <div className="empty">
            <h2>No Benefits Found</h2>
            <p>You haven't applied for any benefits yet.</p>
          </div>
        ) : (
          <div className="grid">
            {myApplications.map((application) => {
              const benefit = benefits.find(
                (b) => b.id === application.benefitId
              );

              return (
                <div className="card" key={application.applicationId}>
                  <span className={`status ${application.status.toLowerCase()}`}>
                    {application.status}
                  </span>

                  <h2>{benefit.title}</h2>

                  <p>
                    <strong>Benefit Code:</strong>
                    <br />
                    {application.benefitCode}
                  </p>

                  <p>
                    <strong>Applied Date:</strong>
                    <br />
                    {new Date(application.appliedAt).toLocaleDateString()}
                  </p>

                  <p>
                    <strong>Institute:</strong>
                    <br />
                    {benefit.institute.name}
                  </p>

                  <button
                    onClick={() =>
                      generatePdf({
                        student,
                        benefit,
                        benefitCode: application.benefitCode,
                      })
                    }
                  >
                    Download PDF
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: auto;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
        }

        .hero {
          text-align: center;
          margin-bottom: 40px;
        }

        .hero h1 {
          font-size: 40px;
          margin-bottom: 10px;
        }

        .hero p {
          color: #666;
          max-width: 700px;
          margin: auto;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px;
        }

        .card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 25px;
          background: #fff;
          box-shadow: 0 6px 18px rgba(0,0,0,.05);
        }

        .status {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 30px;
          margin-bottom: 15px;
          font-size: 13px;
          font-weight: bold;
        }

        .approved {
          background: #dcfce7;
          color: #15803d;
        }

        .pending {
          background: #dbeafe;
          color: #2563eb;
        }

        .rejected {
          background: #fee2e2;
          color: #dc2626;
        }

        button {
          width: 100%;
          margin-top: 20px;
          padding: 14px;
          border: none;
          border-radius: 8px;
          background: #2563eb;
          color: white;
          font-size: 15px;
          cursor: pointer;
        }

        button:hover {
          background: #1d4ed8;
        }

        .empty {
          text-align: center;
          padding: 80px 20px;
          border: 1px dashed #ccc;
          border-radius: 12px;
        }
      `}</style>
    </>
  );
}
