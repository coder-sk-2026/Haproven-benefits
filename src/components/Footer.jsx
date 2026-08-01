import Link from "next/link";


export default function Footer() {


  return (

    <footer className="footer">


      <div className="container">


        <div className="columns">



          <div>

            <h2>
              HAPROVEN
            </h2>


            <p>
              Empowering students with verified
              benefits, certificates, discounts
              and learning opportunities.
            </p>


          </div>




          <div>

            <h3>
              Quick Links
            </h3>


            <Link href="/">
              Home
            </Link>


            <Link href="/benefits">
              Benefits
            </Link>


            <Link href="/benefits/my-benefits">
              My Benefits
            </Link>


          </div>





          <div>

            <h3>
              Student
            </h3>


            <Link href="/benefits/verify">
              Verify Benefit
            </Link>


            <Link href="/benefits/faq">
              FAQ
            </Link>


            <Link href="/benefits/contact">
              Support
            </Link>


          </div>





          <div>

            <h3>
              Partner
            </h3>


            <Link href="/benefits/request-institute">
              Join Haproven
            </Link>


            <Link href="/benefits/verify">
              Verify Student
            </Link>


          </div>



        </div>




        <div className="bottom">


          <p>
            © {new Date().getFullYear()} Haproven.
            All rights reserved.
          </p>


        </div>


      </div>





      <style jsx>{`

        .footer{

          margin-top:60px;

          background:#0f172a;

          color:white;

          padding:50px 20px 20px;

          font-family:Arial;

        }



        .container{

          max-width:1200px;

          margin:auto;

        }



        .columns{

          display:grid;

          grid-template-columns:
          repeat(auto-fit,minmax(220px,1fr));

          gap:30px;

        }



        h2{

          color:white;

        }



        h3{

          margin-bottom:15px;

        }



        p{

          color:#cbd5e1;

          line-height:1.6;

        }



        a{

          display:block;

          color:#cbd5e1;

          text-decoration:none;

          margin:10px 0;

        }



        a:hover{

          color:white;

        }



        .bottom{

          margin-top:40px;

          padding-top:20px;

          border-top:1px solid #334155;

          text-align:center;

        }


      `}</style>


    </footer>

  );

}
