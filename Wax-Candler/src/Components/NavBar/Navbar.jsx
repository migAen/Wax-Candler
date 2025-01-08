import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary sticky-top">
      <div className="container-fluid">
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
        <a className="navbar-brand" href="/">
          <img
            src="/Logo-Row-NoB.png" 
            alt="Logo"
            style={{ height: '100px'}}
          />
        </a>       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/CandleCreator">Candle Creator</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Ideas">Ideas</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Calculator
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/Wax">Wax</a></li>
                <li><a className="dropdown-item" href="/Fragance">Fragance</a></li>                
                <li><a className="dropdown-item" href="/Color">Color</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
