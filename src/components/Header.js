import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div
          className="navbar navbar-expand-lg navbar-light bg-light navbar-shadow navbar-sticky"
          data-scroll-header
          data-fixed-element
        >
          <div className="container px-0 px-xl-3">
            <button
              className="navbar-toggler ms-n2 me-4"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#primaryMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink
              to="/"
              className="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4"
            >
              <img
                className="d-none d-lg-block"
                src="img/logo/logo.jpeg"
                alt="logo"
                width="90"
              />
              <img
                className="d-lg-none"
                src="img/logo/logo.jpeg"
                alt="logo"
                width="80"
              />
            </NavLink>
            <div
              className="offcanvas offcanvas-collapse order-lg-2"
              id="primaryMenu"
            >
              <div className="offcanvas-header navbar-shadow">
                <h5 className="mt-1 mb-0">Menu</h5>
                <button
                  className="btn-close lead"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body justify-content-end">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="about-us"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="contact-us"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
