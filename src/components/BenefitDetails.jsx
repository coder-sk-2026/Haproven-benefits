"use client";

import Link from "next/link";


export default function BenefitDetails({
  benefit
}) {


  return (

    <>

      <div className="container">


        <div className="header">

          <span className="status">
            {benefit.status}
          </span>


          <h1>
            {benefit.title}
          </h1>


          <p>
            {benefit.description}
          </p>


        </div>



        <div className="grid">


          <div className="card">

            <h3>
              Institute
            </h3>

            <p>
              {benefit.institute.name}
            </p>

            <small>
              {benefit.institute.city},{" "}
              {benefit.institute.state}
            </small>

          </div>




          <div className="card">

            <h3>
              Benefit
            </h3>

            <p>

              {
                benefit.discount.type === "Percentage"

                ? `${benefit.discount.value}% Discount`

                : "Free"

              }

            </p>

          </div>





          <div className="card">

            <h3>
              Certificate
            </h3>

            <p>
              {benefit.certificate}
            </p>

          </div>





          <div className="card">

            <h3>
              Validity
            </h3>

            <p>
              {benefit.validity.startDate}
            </p>

            <p>
              To
            </p>

            <p>
              {benefit.validity.endDate}
            </p>

          </div>



        </div>




        <section className="box">


          <h2>
            Eligibility
          </h2>


          <ul>

            {
              benefit.eligibility.map(
                (item,index)=>(

                  <li key={index}>
                    {item}
                  </li>

                )
              )
            }

          </ul>


        </section>





        <section className="box">


          <h2>
            Required Documents
          </h2>


          <ul>

            {
              benefit.requiredDocuments.map(
                (item,index)=>(

                  <li key={index}>
                    {item}
                  </li>

                )
              )
            }

          </ul>


        </section>




        <Link
          href={`/benefits/apply?id=${benefit.id}`}
          className="btn"
        >

          Apply Now

        </Link>



      </div>





      <style jsx>{`

        .container{

          font-family:Arial;

        }



        .header{

          text-align:center;

          margin-bottom:40px;

        }



        .status{

          display:inline-block;

          background:#dcfce7;

          color:#15803d;

          padding:8px 15px;

          border-radius:30px;

          font-size:14px;

        }



        h1{

          font-size:38px;

          margin:20px 0;

        }



        .header p{

          color:#666;

          line-height:1.7;

        }





        .grid{

          display:grid;

          grid-template-columns:repeat(
            auto-fit,
            minmax(220px,1fr)
          );

          gap:20px;

        }




        .card,
        .box{

          border:1px solid #eee;

          border-radius:12px;

          padding:20px;

        }





        .box{

          margin-top:30px;

        }





        li{

          margin:10px 0;

        }





        .btn{

          display:block;

          text-align:center;

          margin-top:30px;

          padding:15px;

          background:#2563eb;

          color:white;

          border-radius:8px;

          text-decoration:none;

          font-weight:bold;

        }

      `}</style>

    </>

  );

}"use client";

import Link from "next/link";


export default function BenefitDetails({
  benefit
}) {


  return (

    <>

      <div className="container">


        <div className="header">

          <span className="status">
            {benefit.status}
          </span>


          <h1>
            {benefit.title}
          </h1>


          <p>
            {benefit.description}
          </p>


        </div>



        <div className="grid">


          <div className="card">

            <h3>
              Institute
            </h3>

            <p>
              {benefit.institute.name}
            </p>

            <small>
              {benefit.institute.city},{" "}
              {benefit.institute.state}
            </small>

          </div>




          <div className="card">

            <h3>
              Benefit
            </h3>

            <p>

              {
                benefit.discount.type === "Percentage"

                ? `${benefit.discount.value}% Discount`

                : "Free"

              }

            </p>

          </div>





          <div className="card">

            <h3>
              Certificate
            </h3>

            <p>
              {benefit.certificate}
            </p>

          </div>





          <div className="card">

            <h3>
              Validity
            </h3>

            <p>
              {benefit.validity.startDate}
            </p>

            <p>
              To
            </p>

            <p>
              {benefit.validity.endDate}
            </p>

          </div>



        </div>




        <section className="box">


          <h2>
            Eligibility
          </h2>


          <ul>

            {
              benefit.eligibility.map(
                (item,index)=>(

                  <li key={index}>
                    {item}
                  </li>

                )
              )
            }

          </ul>


        </section>





        <section className="box">


          <h2>
            Required Documents
          </h2>


          <ul>

            {
              benefit.requiredDocuments.map(
                (item,index)=>(

                  <li key={index}>
                    {item}
                  </li>

                )
              )
            }

          </ul>


        </section>




        <Link
          href={`/benefits/apply?id=${benefit.id}`}
          className="btn"
        >

          Apply Now

        </Link>



      </div>





      <style jsx>{`

        .container{

          font-family:Arial;

        }



        .header{

          text-align:center;

          margin-bottom:40px;

        }



        .status{

          display:inline-block;

          background:#dcfce7;

          color:#15803d;

          padding:8px 15px;

          border-radius:30px;

          font-size:14px;

        }



        h1{

          font-size:38px;

          margin:20px 0;

        }



        .header p{

          color:#666;

          line-height:1.7;

        }





        .grid{

          display:grid;

          grid-template-columns:repeat(
            auto-fit,
            minmax(220px,1fr)
          );

          gap:20px;

        }




        .card,
        .box{

          border:1px solid #eee;

          border-radius:12px;

          padding:20px;

        }





        .box{

          margin-top:30px;

        }





        li{

          margin:10px 0;

        }





        .btn{

          display:block;

          text-align:center;

          margin-top:30px;

          padding:15px;

          background:#2563eb;

          color:white;

          border-radius:8px;

          text-decoration:none;

          font-weight:bold;

        }

      `}</style>

    </>

  );

}
