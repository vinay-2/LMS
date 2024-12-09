import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning" style={{ width: '100%', paddingRight: '110px' }}>
        <Link className="navbar-brand justify-content-center" to="/home">ONLINE LEARNING PLATFORM</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Teacher
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/SignIn">Login</Link>
                <Link className="dropdown-item" to="/tRegistration">Register</Link>
                {/* <div className="dropdown-divider"></div> */}
                <Link className="dropdown-item" to="/Dasboard">Dashboard</Link>
                <Link className="dropdown-item" to="#">LogOut</Link>

              </div>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">SignIn</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/aboutUs">About Us</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                User
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">Login</Link>
                <Link className="dropdown-item" to="/URegistration">Register</Link>
                {/* <div className="dropdown-divider"></div> */}
                <Link className="dropdown-item" to="/UDasboard">Dashboard</Link>
                <Link className="dropdown-item" to="#">LogOut</Link>

              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
