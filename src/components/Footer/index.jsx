import { Github, Mail } from 'lucide-react';
import Logo from '../../assets/images/logo.png';
import './style.css';

function Footer() {
  return (
    <div className="container mt-auto">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
        <p className="col-md-4 mb-0 text-body-secondary">
          © 2023 Daily Vitality
        </p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img src={Logo} width="40" />
        </a>
        {/* <a
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          href="/"
        >
          <img src={Logo} width="60" />
          <span className="fs-4">Daily Vitality</span>
        </a> */}
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              <Github />
              <span className="ms-1"> Source Code</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary ">
              <Mail />
              <span className="ms-1"> Email Us</span>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
