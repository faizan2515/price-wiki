import React from "react";

function ContactUs() {
  return (
    <>
      <section
        className="jarallax bg-gradient pt-5 pb-7 pt-md-7"
        data-jarallax
        data-speed="0.25"
      >
        <span className="position-absolute top-0 start-0 w-100 h-100 bg-gradient opacity-80"></span>
        <div
          className="jarallax-img"
          style={{
            backgroundImage: "url(img/pages/contacts/page-title-bg.jpg)",
          }}
        ></div>
        <div className="shape shape-bottom shape-slant bg-body">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 260">
            <polygon
              fill="currentColor"
              points="0,257 0,260 3000,260 3000,0"
            ></polygon>
          </svg>
        </div>
        <div className="container position-relative zindex-5 pt-3 pb-7 pt-md-0">
          <div className="row justify-content-center pb-7">
            <div className="col-lg-10">
              <h1 className="text-light">Contacts</h1>
              <p className="text-light">
                Get in touch with by completing the below form or call us now
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container position-relative zindex-5 pb-5">
        <div className="row">
          <div
            className="col-lg-6 col-md-7 offset-lg-1 pb-2 mb-5"
            style={{ marginTop: "-260px" }}
          >
            <div className="card border-0 shadow-lg">
              <form className="card-body needs-validation p-5" noValidate>
                <div className="mb-3 pb-1">
                  <label className="form-label" htmlFor="cont-fn">
                    Full name<sup className="text-danger ms-1">*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="cont-fn"
                    placeholder="John Doe"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your full name!
                  </div>
                </div>
                <div className="mb-3 pb-1">
                  <label className="form-label" htmlFor="cont-email">
                    Email address<sup className="text-danger ms-1">*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="cont-email"
                    placeholder="j.doe@example.com"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address!
                  </div>
                </div>
                <div className="mb-3 pb-1">
                  <label className="form-label" htmlFor="cont-phone">
                    Phone number
                  </label>
                  <input
                    className="form-control bg-image-0"
                    type="text"
                    id="cont-phone"
                    data-format="custom"
                    data-delimiter="-"
                    data-blocks="2 4 2 2"
                    placeholder="00-0000-00-00"
                  />
                </div>
                <div className="mb-3 pb-1">
                  <label className="form-label" htmlFor="cont-company">
                    Company
                  </label>
                  <input
                    className="form-control bg-image-0"
                    type="text"
                    id="cont-company"
                    placeholder="Your company"
                  />
                </div>
                <div className="mb-3 pb-1">
                  <label className="form-label" htmlFor="cont-subject">
                    Subject<sup className="text-danger ms-1">*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="cont-subject"
                    placeholder="Title of your message"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a subject!
                  </div>
                </div>
                <div className="mb-3 pb-1">
                  <label className="form-label" htmlFor="cont-message">
                    Message<sup className="text-danger ms-1">*</sup>
                  </label>
                  <textarea
                    className="form-control"
                    id="cont-message"
                    rows="5"
                    placeholder="Write your message here"
                    required
                  ></textarea>
                  <div className="invalid-feedback">
                    Please write a message!
                  </div>
                </div>
                <div className="text-center pt-2">
                  <button className="btn btn-primary" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 offset-md-1">
            <h2 className="h4 pb-3">Contact details</h2>
            <h3 className="h6 pb-2">Karachi, Pakistan</h3>
            <ul className="list-unstyled fs-sm pb-3">
              <li className="d-flex align-items-top mb-3">
                <i className="ai-map-pin fs-xl text-muted mt-1 me-2 pe-1"></i>
                <div>Office #6, PECHS block 6, urbansquare</div>
              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="ai-mail fs-xl text-muted me-2 pe-1"></i>
                <div>whollie@gmail.com</div>
              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="ai-phone fs-xl text-muted me-2 pe-1"></i>
                <div>+92 334 3505020</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
