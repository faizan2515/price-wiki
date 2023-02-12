function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="bg-darker pt-2">
        <div className="container py-sm-3">
          <h6 className="fs-base text-center text-sm-start text-light mb-3">
            Follow us
          </h6>
          <div className="d-flex justify-content-sm-start  justify-content-center align-items-center gap-4 mb-3">
            <div className="d-flex align-items-center gap-2">
              <a className="btn-social bs-facebook bs-light" href="#">
                <i className="ai-facebook"></i>
              </a>
              <a className="btn-social bs-twitter bs-light" href="#">
                <i className="ai-twitter"></i>
              </a>
              <a className="btn-social bs-instagram bs-light" href="#">
                <i className="ai-instagram"></i>
              </a>
              <a className="btn-social bs-youtube bs-light" href="#">
                <i className="ai-youtube"></i>
              </a>
            </div>

            <img src="img/logo/logo.jpeg" width="64" alt="logo" />
          </div>
          <div className="d-flex justify-content-center align-items-center pb-4 pb-sm-2">
            <div className="mb-3">
              <p className="fs-ms mb-0">
                <span className="text-light opacity-50 me-1">
                  © All Rights Reserved by pricewiki
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
