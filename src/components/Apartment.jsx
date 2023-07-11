import React from "react";

import "./Apartment.css";

const Apartment = () => {

  
  return (
    <div>
      <h1 className="fw-bold text-center my-4">Apartments Plan</h1>
      <ul class="nav nav-tabs d-flex justify-content-center " id="myTab" role="tablist">
        <div className=" d-flex ">
          <li class="nav-item me-5" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <h5>The Studio</h5>
            </button>
          </li>
          <li class="nav-item me-5" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              <h5>Deluxe Portion</h5>
            </button>
          </li>
          <li class="nav-item me-5" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <h5>Penthouse</h5>
            </button>
          </li>
          <li class="nav-item me-5" role="presentation">
            <button
              class="nav-link"
              id="garden-tab"
              data-bs-toggle="tab"
              data-bs-target="#garden"
              type="button"
              role="tab"
              aria-controls="garden"
              aria-selected="false"
            >
              <h5>Top Garden</h5>
            </button>
          </li>
        </div>
      </ul>
      <div class="tab-content col-lg-8 mx-auto" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="row">
            <div className="col-lg-6 mb-5 pb-5">
              <div
                className="mt-5"
                style={{ height: "70vh", backgroundColor: "#157efa" }}
              >
                <h3 className="fw-bold text-center pt-5 text-white">
                  The Studio
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={"../images/apartment.jpg"} style={{height:'75vh',objectFit:'cover'}}/>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="row">
            <div className="col-lg-6 mb-5 pb-5">
              <div
                className="mt-5"
                style={{ height: "70vh", backgroundColor: "#157efa" }}
              >
                <h3 className="fw-bold text-center pt-5 text-white">
                  Deluxe Portion
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={"../images/apartment.jpg"} />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
           <div className="row">
            <div className="col-lg-6 mb-5 pb-5">
              <div
                className="mt-5"
                style={{ height: "70vh", backgroundColor: "#157efa" }}
              >
                <h3 className="fw-bold text-center pt-5 text-white">
                  Penthouse
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={"../images/apartment.jpg"} />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="garden"
          role="tabpanel"
          aria-labelledby="garden-tab"
        >
         <div className="row">
            <div className="col-lg-6 mb-5 pb-5">
              <div
                className="mt-5"
                style={{ height: "70vh", backgroundColor: "#157efa" }}
              >
                <h3 className="fw-bold text-center pt-5 text-white">
                  Top Garden
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={"../images/apartment.jpg"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
