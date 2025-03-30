import React from 'react'
import { Link } from 'react-router'
export default function Navbar() {
  const handleNavClick = () => {
    localStorage.removeItem("adminToken");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" onClick={handleNavClick}>Coupon Distribution</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/" onClick={handleNavClick}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/coupons" onClick={handleNavClick}>Coupons</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/adminlogin" onClick={handleNavClick}>Admin</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
