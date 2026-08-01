"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (

    <nav className="navbar">


      <div className="logo">

        <Link href="/">
          HAPROVEN
        </Link>

      </div>



      <button
        className="menu"
        onClick={() => setOpen(!open)}
      >

        ☰

      </button>




      <div className={`links ${open ? "active" : ""}`}>



        <Link href="/">
          Home
        </Link>



        <Link href="/benefits">
          Benefits
        </Link>



        <Link href="/benefits/my-benefits">
          My Benefits
        </Link>



        <Link href="/benefits/verify">
          Verify
        </Link>



        <Link href="/benefits/request-institute">
          Partner
        </Link>



      </div>



      <style jsx>{`

        .navbar{

          display:flex;

          justify-content:space-between;

          align-items:center;

          padding:18px 40px;

          border-bottom:1px solid #eee;

          background:white;

          position:sticky;

          top:0;

          z-index:100;

        }



        .logo a{

          font-size:24px;

          font-weight:bold;

          color:#2563eb;

          text-decoration:none;

        }




        .links{

          display:flex;

          gap:25px;

          align-items:center;

        }




        .links a{

          text-decoration:none;

          color:#333;

          font-weight:500;

        }



        .links a:hover{

          color:#2563eb;

        }



        .menu{

          display:none;

          background:none;

          border:none;

          font-size:25px;

          cursor:pointer;

        }



        @media(max-width:768px){



          .navbar{

            padding:15px 20px;

          }



          .menu{

            display:block;

          }




          .links{

            position:absolute;

            top:70px;

            left:0;

            width:100%;

            background:white;

            display:none;

            flex-direction:column;

            padding:20px;

            border-bottom:1px solid #eee;

          }



          .links.active{

            display:flex;

          }


        }


      `}</style>


    </nav>

  );

}
