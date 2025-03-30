import React from "react";

function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Side - About Content */}
        <div className="col-md-6">
          <h1 className="text-primary fw-bold">About Our Project</h1>
          <p className="text-secondary fs-5">
            Welcome to the <strong>Round-Robin Coupon Distribution</strong> system! This web app ensures 
            fair coupon distribution, prevents abuse, and provides an admin panel for management.
          </p>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Sequential coupon assignment</strong>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Guest user access (no login required)
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Abuse prevention (IP & cookie tracking)
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Admin panel for managing coupons
            </li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="col-md-6 text-center">
          <img 
            src="/coupon.jpg" 
            alt="About Us"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
