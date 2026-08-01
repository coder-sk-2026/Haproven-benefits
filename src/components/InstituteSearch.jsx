"use client";

import { useState } from "react";
import institutes from "@/data/institutes.json";
import searchInstitute from "@/utils/searchInstitute";

import Link from "next/link";


export default function InstituteSearch() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);


  function handleSearch(value) {

    setQuery(value);

    const data = searchInstitute(
      institutes,
      value
    );

    setResults(data);

  }


  return (
    <>
      <div className="searchBox">

        <h2>
          Search Your Institute
        </h2>


        <input
          type="text"
          placeholder="Search coaching, college, city..."
          value={query}
          onChange={(e)=>handleSearch(e.target.value)}
        />


        {query && (

          <div className="results">

            {results.length > 0 ? (

              results.map((institute)=>(

                <div
                  className="card"
                  key={institute.id}
                >

                  <h3>
                    {institute.name}
                  </h3>


                  <p>
                    {institute.type}
                  </p>


                  <p>
                    {institute.location.city},{" "}
                    {institute.location.state}
                  </p>


                  <span>
                    ✅ Connected with Haproven
                  </span>


                </div>

              ))

            ) : (

              <div className="notFound">

                <p>
                  Institute not found.
                </p>


                <Link href="/benefits/request-institute">
                  Request Your Institute
                </Link>

              </div>

            )}

          </div>

        )}

      </div>



      <style jsx>{`

        .searchBox{
          max-width:700px;
          margin:auto;
          padding:25px;
        }


        h2{
          margin-bottom:20px;
        }


        input{

          width:100%;
          padding:15px;

          border:1px solid #ddd;
          border-radius:8px;

          font-size:16px;

        }


        .results{
          margin-top:20px;
          display:grid;
          gap:15px;
        }


        .card{

          border:1px solid #eee;
          padding:20px;
          border-radius:12px;

        }


        .card h3{
          margin:0 0 10px;
        }


        .card span{
          color:#15803d;
          font-size:14px;
        }


        .notFound{

          margin-top:20px;
          padding:20px;
          background:#f8fafc;
          border-radius:10px;

        }


        .notFound a{

          display:inline-block;

          margin-top:10px;

          color:#2563eb;

          text-decoration:none;

          font-weight:bold;

        }

      `}</style>

    </>
  );
}
