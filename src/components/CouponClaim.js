import { useState } from "react";
import axios from "axios";


const CouponClaim = () => {
  const [message, setMessage] = useState("");
  const [coupon, setCoupon] = useState(null);
  const [loading, setLoading] = useState(false);

  const claimCoupon = async () => {
    setLoading(true); // Start loading
    setMessage("");
    setCoupon(null);

    try {
      const response = await axios.get("http://localhost:5000/api/coupon",{ withCredentials: true });
      
      if (response.data.success) {
        setCoupon(response.data.coupon);
        setMessage(response.data.message);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="container text-center mt-5 w-50">
      <div className="card p-4 shadow-lg">
        <h2 className="text-primary mb-3">Claim Your Coupon</h2>

        <button 
          className="btn btn-success btn-lg mb-3" 
          onClick={claimCoupon} 
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span>
              Claiming...
            </>
          ) : (
            "Claim Coupon"
          )}
        </button>

        {message && <p className={`alert ${coupon ? "alert-success" : "alert-danger"}`}>{message}</p>}
        
        {coupon && (
          <div className="alert alert-info">
            <strong>Your Coupon Code:</strong> <span className="fw-bold">{coupon}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CouponClaim;
