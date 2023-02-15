import { Link, NavLink } from "react-router-dom";
import { useApp } from "../withAppProvider";

function Header() {
  const { compareProducts } = useApp();
  return (
    <>
      <header className="header">
        <div
          className="navbar navbar-expand-lg navbar-light navbar-shadow navbar-sticky"
          style={{
            backgroundColor: "#6b96f4",
          }}
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
                        isActive ? "nav-link active" : "nav-link text-white"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <button
                      className="nav-link text-white dropdown-toggle bg-transparent border-0"
                      data-bs-toggle="dropdown"
                    >
                      Category
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="category?name=cell%20phones"
                          className="dropdown-item"
                          replace
                        >
                          Cell Phones
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="category?name=computers"
                          className="dropdown-item"
                          replace
                        >
                          Computers
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="about-us"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link text-white"
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="contact-us"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link text-white"
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="compare"
                      className="nav-link text-white"
                      style={{ position: "relative" }}
                    >
                      <i className="ai-shuffle"></i>
                      {compareProducts.length > 0 && (
                        <span
                          style={{
                            position: "absolute",
                            top: "0.75rem",
                            right: "0.75rem",
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: "var(--bs-primary)",
                          }}
                        ></span>
                      )}
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
