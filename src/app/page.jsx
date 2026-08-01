import Link from "next/link";


export default function HomePage() {

  return (

    <>

      <main className="container">


        {/* Hero Section */}

        <section className="hero">

          <span className="badge">
            🎓 Haproven Student Benefits Program
          </span>


          <h1>
            Unlock Benefits,
            Certificates & Opportunities
          </h1>


          <p>
            Haproven connects students with verified
            institutes, discounts, certificates,
            workshops and career opportunities.
          </p>



          <div className="buttons">

            <Link
              href="/benefits"
              className="primary"
            >
              Explore Benefits
            </Link>


            <Link
              href="/benefits/verify"
              className="secondary"
            >
              Verify Benefit
            </Link>


          </div>


        </section>




        {/* How It Works */}

        <section className="section">


          <h2>
            How Haproven Benefits Works
          </h2>



          <div className="cards">


            <div className="card">

              <h3>
                1. Find Benefits
              </h3>

              <p>
                Explore available discounts,
                certificates and programs.
              </p>

            </div>



            <div className="card">

              <h3>
                2. Apply Online
              </h3>

              <p>
                Submit your request and
                verify eligibility.
              </p>

            </div>



            <div className="card">

              <h3>
                3. Get Benefit Pass
              </h3>

              <p>
                Download your digital benefit
                pass PDF.
              </p>

            </div>



          </div>


        </section>






        {/* Partner Section */}

        <section className="partner">


          <h2>
            Partner With Haproven
          </h2>


          <p>
            Coaching institutes and colleges can
            join Haproven to provide exclusive
            benefits to students.
          </p>



          <Link
            href="/benefits/request-institute"
            className="primary"
          >

            Become Partner

          </Link>


        </section>



      </main>




      <style jsx>{`

        .container{

          max-width:1200px;

          margin:auto;

          padding:40px 20px;

          font-family:Arial;

        }



        .hero{

          text-align:center;

          padding:70px 20px;

        }



        .badge{

          background:#eef4ff;

          color:#2563eb;

          padding:8px 15px;

          border-radius:30px;

          font-size:14px;

        }



        h1{

          font-size:48px;

          margin:25px 0;

        }



        .hero p{

          max-width:700px;

          margin:auto;

          color:#666;

          line-height:1.8;

          font-size:18px;

        }



        .buttons{

          margin-top:30px;

          display:flex;

          justify-content:center;

          gap:15px;

        }



        .primary,
        .secondary{

          padding:14px 25px;

          border-radius:8px;

          text-decoration:none;

          font-weight:bold;

        }



        .primary{

          background:#2563eb;

          color:white;

        }



        .secondary{

          border:1px solid #2563eb;

          color:#2563eb;

        }





        .section{

          margin-top:70px;

          text-align:center;

        }



        .cards{

          display:grid;

          grid-template-columns:
          repeat(auto-fit,minmax(250px,1fr));

          gap:20px;

          margin-top:30px;

        }



        .card{

          padding:25px;

          border:1px solid #eee;

          border-radius:12px;

        }



        .card p,
        .partner p{

          color:#666;

          line-height:1.6;

        }



        .partner{

          margin-top:70px;

          text-align:center;

          padding:50px 20px;

          background:#f8fafc;

          border-radius:15px;

        }



        @media(max-width:700px){

          h1{

            font-size:34px;

          }


          .buttons{

            flex-direction:column;

          }

        }

      `}</style>


    </>

  );

}
