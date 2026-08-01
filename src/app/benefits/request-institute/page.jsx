"use client";

import { useState } from "react";

export default function RequestInstitutePage() {

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // Future me yahan API/database connect hoga
    setSubmitted(true);
  }

  return (
    <>
      <main className="container">

        <section className="hero">
          <h1>Request Your Institute</h1>

          <p>
            Can't find your coaching, college, or institute?
            Send us a request and we will help connect it with Haproven Benefits.
          </p>
        </section>


        {!submitted ? (

          <form className="form" onSubmit={handleSubmit}>

            <label>
              Student Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              required
            />


            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />


            <label>
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="Enter mobile number"
              required
            />


            <label>
              Institute / Coaching Name
            </label>

            <input
              type="text"
              placeholder="Enter institute name"
              required
            />


            <label>
              City
            </label>

            <input
              type="text"
              placeholder="Enter city"
              required
            />


            <label>
              State
            </label>

            <input
              type="text"
              placeholder="Enter state"
              required
            />


            <label>
              Message
            </label>

            <textarea
              placeholder="Tell us about your institute"
            />


            <button
