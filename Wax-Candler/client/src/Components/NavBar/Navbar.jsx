import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img src="/Logo-Row-NoB.png" alt="Logo" style={{ height: "100px" }} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/CandleCreator">
                Candle Creator
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Materials
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/Wax">
                    Waxes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Fragance">
                    Fragrances
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Color">
                    Colorants
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Equipment">
                    Equipment
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/PremadeFragances">
                Premade Fragrances
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
