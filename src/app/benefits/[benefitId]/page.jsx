import Link from "next/link";
import benefits from "@/data/benefits.json";

export default async function BenefitDetails({ params }) {
  const { benefitId } = await params;

  const benefit = benefits.find((item) => item.id === benefitId);

  if (!benefit) {
    return (
      <main className="container">
        <h1>Benefit Not Found</h1>
        <p>This benefit does not exist.</p>

        <Link href="/benefits/list" className="btn">
          ← Back to Benefits
        </Link>

        <style jsx>{`
          .container{
            max-width:900px;
            margin:auto;
            padding:50px 20px;
            text-align:center;
          }

          .btn{
            display:inline-block;
            margin-top:20px;
            padding:12px 24px;
            background:#2563eb;
            color:#fff;
            border-radius:8px;
            text-decoration:none;
          }
        `}</style>
      </main>
    );
  }

  return (
    <>
      <main className="container">

        <span className="status">{benefit.status}</span>

        <h1>{benefit.title}</h1>

        <p className="description">
          {benefit.description}
        </p>

        <div className="grid">

          <div className="card">
            <h3>Institute</h3>
            <p>{benefit.institute.name}</p>
            <p>{benefit.institute.city}, {benefit.institute.state}</p>
          </div>

          <div className="card">
            <h3>Certificate</h3>
            <p>{benefit.certificate}</p>
          </div>

          <div className="card">
            <h3>Benefit</h3>
            <p>
              {benefit.discount.type === "Percentage"
                ? `${benefit.discount.value}% Discount`
                : "Free"}
            </p>
          </div>

          <div className="card">
            <h3>Validity</h3>
            <p>{benefit.validity.startDate}</p>
            <p>to</p>
            <p>{benefit.validity.endDate}</p>
          </div>

        </div>

        <section className="box">

          <h2>Eligibility</h2>

          <ul>
            {benefit.eligibility.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </section>

        <section className="box">

          <h2>Required Documents</h2>

          <ul>
            {benefit.requiredDocuments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </section>

        <div className="buttons">

          <Link
            href={`/benefits/apply?id=${benefit.id}`}
            className="apply"
          >
            Apply Now
          </Link>

          <Link
            href="/benefits/list"
            className="back"
          >
            Back
          </Link>

        </div>

      </main>

      <style jsx>{`
        .container{
          max-width:1000px;
          margin:auto;
          padding:40px 20px;
          font-family:Arial,sans-serif;
        }

        .status{
          background:#dcfce7;
          color:#15803d;
          padding:8px 14px;
          border-radius:30px;
          display:inline-block;
        }

        h1{
          margin:20px 0;
          font-size:40px;
        }

        .description{
          color:#666;
          line-height:1.8;
          margin-bottom:35px;
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:20px;
        }

        .card{
          border:1px solid #eee;
          border-radius:12px;
          padding:20px;
        }

        .box{
          margin-top:40px;
          border:1px solid #eee;
          border-radius:12px;
          padding:25px;
        }

        .box ul{
          padding-left:20px;
        }

        .box li{
          margin:12px 0;
        }

        .buttons{
          margin-top:40px;
          display:flex;
          gap:15px;
        }

        .apply,.back{
          padding:14px 25px;
          border-radius:8px;
          text-decoration:none;
          color:#fff;
        }

        .apply{
          background:#2563eb;
        }

        .back{
          background:#555;
        }
      `}</style>

    </>
  );
}
