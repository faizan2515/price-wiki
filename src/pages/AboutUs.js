import React from "react";
import brands from "../data/brands";

function AboutUs() {
  return (
    <>
      <section className="container my-lg-2 pt-5 pb-lg-7">
        <div className="row align-items-center">
          <div className="col-lg-5 py-3 py-lg-0">
            <h1>Our goals. Our mission.</h1>
            <h2 className="h3">How we help other companies to grow.</h2>
            <div className="py-4">
              <p className="callout">
                Our objective is to create platform that allows buyers and
                sellers to easily connect and fulfill their needs without
                hassle.
              </p>
            </div>
            <span className="fs-sm text-muted">Get to know us better</span>
          </div>
          <div className="col-xl-6 col-lg-7 offset-xl-1 position-relative">
            <div className="py-5" style={{ minHeight: "543px" }}>
              <div
                className="d-none d-lg-block position-absolute bg-no-repeat bg-position-center h-100"
                style={{
                  top: 0,
                  left: "-45px",
                  width: "646px",
                  backgroundImage: "url(img/pages/about/bg-shape.svg)",
                }}
              ></div>
              <div className="row g-0 mx-n2 pt-lg-4">
                <div className="col-sm-4 px-2 mb-3">
                  <h3 className="card h-100 card-body py-5 justify-content-center border-0 shadow-lg text-center">
                    <i className="ai-zap text-primary h1 mb-3"></i>
                    <p className="h5 mb-0">Boost</p>
                  </h3>
                </div>
                <div className="col-sm-4 px-2 mb-3">
                  <h3 className="card card-body py-5 border-0 shadow-lg text-center mb-3">
                    <i className="ai-pie-chart text-danger h1 mb-3"></i>
                    <p className="h5 mb-0">Analize</p>
                  </h3>
                  <h3 className="card card-body py-5 border-0 shadow-lg text-center">
                    <i className="ai-refresh-ccw text-info h1 mb-3"></i>
                    <p className="h5 mb-0">Automate</p>
                  </h3>
                </div>
                <div className="col-sm-4 px-2 mb-3">
                  <h3 className="card card-body py-5 border-0 shadow-lg text-center mb-3">
                    <i className="ai-folder-plus text-success h1 mb-3"></i>
                    <p className="h5 mb-0">Create</p>
                  </h3>
                  <h3 className="card card-body py-5 border-0 shadow-lg text-center">
                    <i className="ai-share text-warning h1 mb-3"></i>
                    <p className="h5 mb-0">Share</p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-5 mt-n4 mb-6 mt-lg-0 mb-lg-7">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-3 col-sm-6 text-center py-3">
              <h3 className="display-4">15</h3>
              <p className="text-muted mb-0">Years of experience</p>
            </div>
            <div className="col-md-3 col-sm-6 text-center py-3">
              <h3 className="display-4">2k+</h3>
              <p className="text-muted mb-0">Employees worldwide</p>
            </div>
            <div className="col-md-3 col-sm-6 text-center py-3">
              <h3 className="display-4">90%</h3>
              <p className="text-muted mb-0">Positive feedback</p>
            </div>
            <div className="col-md-3 col-sm-6 text-center py-3">
              <h3 className="display-4">100</h3>
              <p className="text-muted mb-0">Successfully completed projects</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container pb-5 pb-lg-6">
        <h2 className="mb-5 text-center">We work with world’s top companies</h2>
        <div className="row">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="col-md-3 col-sm-4 col-6 mb-grid-gutter"
            >
              <button className="w-100 card align-items-center border-0 shadow card-hover py-3 py-sm-4">
                <div className="card-body px-1 py-0 text-center">
                  <div className="swap-image">
                    <img
                      className="swap-to"
                      src={brand.image}
                      alt="Brand logo"
                      width="150"
                    />
                    <img
                      className="swap-from"
                      src={brand.imageGray}
                      alt="Brand logo"
                      width="150"
                    />
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutUs;
