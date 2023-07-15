import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "phosphor-react";
import Footer from "./Footer";
import Apartment from "./Apartment";
import axios from "../API/axios";

const Home = () => {
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get("/content");
        // Process the response data as needed
        console.log(response.data[0].heading); // Log the heading
        setInfo(response.data[0].heading);
      } catch (error) {
        // Handle errors
        console.error(error);
      }
    };

    fetchInfo();
  }, []);

  const [info, setInfo] = useState('');
  console.log(info)

  return (
    <div>
      <div className="real-estate position-relative">
        <div className="d-flex justify-content-between align-items-center text-white menu ">
          <div className="d-flex align-items-center ">
            <img src="./images/logo.png" className="d-block logo mx-4" />
          </div>
          <div className="d-flex align-items-center px-5 justify-content-between">
            <Link
              to="/"
              className="text-white  d-block text-decoration-none me-4"
            >
              Home
            </Link>
            <Link
              to="/estate"
              className="text-white d-block text-decoration-none me-4"
            >
              Real Estate
            </Link>
            <Link
              to="/construction"
              className="text-white d-block text-decoration-none me-4"
            >
              Construction
            </Link>
            <Link
              to="/consultancy"
              className="text-white d-block text-decoration-none me-4"
            >
              Consultancy
            </Link>
            <Link
              to="/contact"
              className="text-white d-block text-decoration-none me-4"
            >
              Contact Us
            </Link>

            <button className="btn btn-outline-light rounded-5 px-4">
              Get Started
            </button>
          </div>
        </div>

        <div className="absolute">
          <p className="text-white title col-8">{info}</p>
          <p className="text-white fw-light paragraph">
            We are glad to have you around. Feel
            <br /> free to browse our website
          </p>
          <div className="bg-light rounded-4 col-lg-7 d-flex justify-content-between align-items-center py-2 px-4">
            <input
              type="text"
              placeholder="Find a location"
              className="  border-0 outline-0 d-block"
            />
            <MagnifyingGlass size={22} />
          </div>
        </div>
        <div className="bottom ">
          <span className="bottomtitle ">{info.heading}</span>
          <br />
          <span className="bottomtitle color">your perfect rental</span>
          <br />
          <button className="btn btn-outline-primary text-dark rounded-5 mt-2">
            Learn More
          </button>
        </div>
      </div>
      <Apartment />
      <Footer />
    </div>
  );
};

export default Home;
