import { React, useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [navClr, setnavClr] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setnavClr(true);
    } else {
      setnavClr(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav
              className={`navbar fixed-top navbar-expand-lg navbar-dark ${
                navClr ? "clrChange" : "bg-transparent"
              }`}
            >
              <div className="container-fluid">
                <Link className="navbar-brand font__black" to="/">
                  Real Estate
                </Link>
                <button
                  className={`navbar-toggler ${
                    navClr ? "navbar-toggler-scroll" : " "
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                    <li className="nav-item">
                      <a
                        className="nav-link font__black"
                        style={{ padding: "20px" }}
                        aria-current="page"
                        href="#about"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link font__black"
                        style={{ padding: "20px" }}
                        aria-current="page"
                        href="#contact"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link font__black"
                        style={{ padding: "20px" }}
                        aria-current="page"
                        href="#about"
                      >
                        Project
                      </a>
                    </li>
                  </ul>
                  <Link
                    type="button"
                    className={`btn btn-lg ${
                      navClr ? "my__button" : "btn-outline-light"
                    }`}
                    to="/signin"
                  >
                    Booking
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
