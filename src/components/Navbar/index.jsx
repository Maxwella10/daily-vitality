import './style.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { navigation } from '../../utils/Constants';

function Navbar() {
  return (
    <header className="navbar navbar-expand-lg sticky-top">
      <div className="container navbar-styling shadow rounded-5 py-1">
        <a
          className="d-flex align-items-center me-md-auto link-body-emphasis text-decoration-none"
          href="/"
        >
          <img src={Logo} width="60" />
          <span className="fs-4">Daily Vitality</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <a
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                href="/"
              >
                <img src={Logo} width="60" />
                <span className="fs-4">Daily Vitality</span>
              </a>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {navigation.map(item => (
                <li key={item.label} className="nav-item ">
                  <NavLink
                    id="nav-item"
                    to={item.to}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                  >
                    <item.icon
                      size={24}
                      className="d-inline d-lg-block mx-auto mb-1"
                    />
                    <span className="nav-text ms-2 ms-lg-0">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
