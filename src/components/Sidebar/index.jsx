import { Flower, Home, PieChart, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Analytics', href: '/dashboard', icon: PieChart },
  { name: 'Profile', href: '/profile', icon: User },
];

export function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100 sticky-top "
      style={{ width: '280px' }}
    >
      <a
        href="/"
        className="d-block d-lg-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <Flower className="me-2" size={30} />
        <span className="fs-4 d-none d-lg-block">Daily Vitality</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {navigation.map(item => {
          return (
            <li key={item.name} className="nav-item">
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link text-white'
                }
              >
                <svg className="bi pe-none me-2" width="16" height="16">
                  {/* Icon */}
                </svg>
                <item.icon className="me-2" size={16} />
                <span className="d-none d-lg-inline">{item.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
