function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="bg-darker pt-2">
        <div className="container py-sm-3">
          <div className="row pb-4 mb-2 pt-5 py-md-5">
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="d-flex align-items-center">
                <i
                  className="ai-truck text-primary"
                  style={{ fontSize: "2.125rem" }}
                ></i>
                <div className="ps-3">
                  <h6 className="fs-base text-light mb-1">
                    Fast and free delivery
                  </h6>
                  <p className="mb-0 fs-xs text-light opacity-50">
                    Free delivery for all orders over $200
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="d-flex align-items-center">
                <i
                  className="ai-refresh-cw text-primary"
                  style={{ fontSize: "2.125rem" }}
                ></i>
                <div className="ps-3">
                  <h6 className="fs-base text-light mb-1">
                    Money back guarantee
                  </h6>
                  <p className="mb-0 fs-xs text-light opacity-50">
                    We return money within 30 days
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="d-flex align-items-center">
                <i
                  className="ai-life-buoy text-primary"
                  style={{ fontSize: "2.125rem" }}
                ></i>
                <div className="ps-3">
                  <h6 className="fs-base text-light mb-1">
                    24/7 customer support
                  </h6>
                  <p className="mb-0 fs-xs text-light opacity-50">
                    Friendly 24/7 customer support
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="d-flex align-items-center">
                <i
                  className="ai-credit-card text-primary"
                  style={{ fontSize: "2.125rem" }}
                ></i>
                <div className="ps-3">
                  <h6 className="fs-base text-light mb-1">
                    Secure online payment
                  </h6>
                  <p className="mb-0 fs-xs text-light opacity-50">
                    We possess SSL / Secure сertificate
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-light my-0 mb-5" />
          <div className="d-sm-flex justify-content-between align-items-center pb-4 pb-sm-2">
            <div className="order-sm-2 mb-4 mb-sm-3">
              <img
                src="img/footer/cards.png"
                alt="Payment methods"
                width="181"
              />
            </div>
            <div className="order-sm-1 mb-3">
              <p className="fs-ms mb-0">
                <span className="text-light opacity-50 me-1">
                  © All rights reserved.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
