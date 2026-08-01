import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {

  title: "Haproven | Student Benefits & Opportunities",

  description:
    "Explore student benefits, certificates, discounts and partnership programs with Haproven."

};



export default function RootLayout({
  children,
}) {


  return (

    <html lang="en">

      <body>


        <Navbar />


        <main>

          {children}

        </main>


        <Footer />


      </body>

    </html>

  );

}
