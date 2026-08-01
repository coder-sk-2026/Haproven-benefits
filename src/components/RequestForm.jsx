"use client";

import { useState } from "react";

import {
  createInstituteRequest
} from "@/services/instituteService";


export default function RequestForm() {

  const [formData, setFormData] = useState({

    studentId: "STD-1001",

    studentName: "",

    email: "",

    mobile: "",

    instituteName: "",

    city: "",

    state: "",

    message: ""

  });


  const [message, setMessage] = useState("");



  function handleChange(e) {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  }



  function handleSubmit(e) {

    e.preventDefault();


    const request =
      createInstituteRequest(formData);


    console.log(request);


    setMessage(
      "Institute request submitted successfully!"
    );


    setFormData({

      ...formData,

      studentName: "",

      email: "",

      mobile: "",

      instituteName: "",

      city: "",

      state: "",

      message: ""

    });

  }



  return (

    <>

      <form
        className="form"
        onSubmit={handleSubmit}
      >


        <input
          name="studentName"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={handleChange}
          required
        />


        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />


        <input
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />


        <input
          name="instituteName"
          placeholder="Institute / Coaching Name"
          value={formData.instituteName}
          onChange={handleChange}
          required
        />


        <input
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />


        <input
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          required
        />


        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />


        <button type="submit">
          Submit Request
        </button>


        {
          message &&

          <p className="success">
            {message}
          </p>
        }


      </form>



      <style jsx>{`

        .form{

          display:grid;

          gap:15px;

        }


        input,
        textarea{

          padding:14px;

          border:1px solid #ddd;

          border-radius:8px;

          font-size:15px;

        }


        textarea{

          min-height:120px;

          resize:none;

        }


        button{

          padding:14px;

          background:#2563eb;

          color:white;

          border:none;

          border-radius:8px;

          cursor:pointer;

          font-weight:bold;

        }


        button:hover{

          background:#1d4ed8;

        }


        .success{

          background:#dcfce7;

          padding:12px;

          border-radius:8px;

          color:#15803d;

        }


      `}</style>


    </>

  );

}
