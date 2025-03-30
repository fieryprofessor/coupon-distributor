import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [coupons, setCoupons] = useState([]);
  const [newCoupon, setNewCoupon] = useState("");
  const [history, setHistory] = useState([]);
  const [editCouponId, setEditCouponId] = useState(null);
  const [editCouponCode, setEditCouponCode] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) navigate("/");
    fetchCoupons();
    fetchUserHistory();
  });

  // Fetch all coupons
  const fetchCoupons = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/coupons", {
        headers: { Authorization: token },
      });
      setCoupons(res.data.coupons);
    } catch (err) {
      console.error("Error fetching coupons:", err);
    }
  };

  // Fetch user claim history
  const fetchUserHistory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/user-history",
        {
          headers: { Authorization: token },
        }
      );
      setHistory(res.data.history);
    } catch (err) {
      console.error("Error fetching history:", err);
    }
  };

  // Add a new coupon
  const addCoupon = async () => {
    if (!newCoupon.trim()) return;
    try {
      await axios.post(
        "http://localhost:5000/api/admin/coupons",
        { code: newCoupon },
        { headers: { Authorization: token } }
      );
      setNewCoupon("");
      fetchCoupons();
    } catch (err) {
      console.error("Error adding coupon:", err);
    }
  };

   // Edit a coupon
   const editCoupon = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/coupons/${id}/edit`,
        { code: editCouponCode },
        { headers: { Authorization: token } }
      );
      setEditCouponId(null);
      setEditCouponCode("");
      fetchCoupons();
    } catch (err) {
      console.error("Error editing coupon:", err);
    }
  };

  // Toggle coupon availability
  const toggleCoupon = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/coupons/${id}/toggle`,
        {},
        { headers: { Authorization: token } }
      );
      fetchCoupons();
    } catch (err) {
      console.error("Error toggling coupon:", err);
    }
  };

  // Enable or disable all coupons
  const toggleAllCoupons = async (enable) => {
    try {
      await axios.put(
        "http://localhost:5000/api/admin/coupons/toggle-all",
        { enable },
        { headers: { Authorization: token } }
      );
      fetchCoupons();
    } catch (err) {
      console.error("Error toggling all coupons:", err);
    }
  };

  //Delete a Coupon
  const deleteCoupon = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/coupons/${id}`, {
        headers: { Authorization: token },
      });
      fetchCoupons();
    } catch (err) {
      console.error("Error deleting coupon:", err);
    }
  };

  // to Delete all coupons
  const removeAllCoupons = async () => {
    try {
      await axios.delete("http://localhost:5000/api/admin/coupons", {
        headers: { Authorization: token },
      });
      fetchCoupons(); // Refresh the list
    } catch (err) {
      console.error("Error removing all coupons:", err);
    }
  };

  // Logout admin
  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">Admin Dashboard</h2>

      {/* Add Coupon */}
      <div className="mt-4">
        <h4>Add New Coupon</h4>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter coupon code"
            value={newCoupon}
            onChange={(e) => setNewCoupon(e.target.value)}
          />
          <button className="btn btn-success ms-4 rounded-pill" onClick={addCoupon}>
            Add
          </button>
        </div>
      </div>

      {/* Coupon List - View All Coupons */}
      <div className="mt-4">
        <h4>All Coupons</h4>
        {/* Enable All & Disable All Buttons */}
        <div className="mb-3">
          <button
            className="btn btn-success me-2"
            onClick={() => toggleAllCoupons(true)}
          >
            Enable All
          </button>
          <button
            className="btn btn-danger me-2"
            onClick={() => toggleAllCoupons(false)}
          >
            Disable All
          </button>
          <button className="btn btn-danger me-2" onClick={removeAllCoupons}>
            Remove All Coupons
          </button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Coupon Code</th>
              <th>Status</th>
              <th>Actions</th>
              <th>Remove</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {coupons.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No coupons available.
                </td>
              </tr>
            ) : (
              coupons.map((coupon) => (
                <tr key={coupon._id}>
                  <td>{coupon.code}</td>
                  <td>
                    <span
                      className={`badge ${
                        coupon.claimed ? "bg-danger" : "bg-success"
                      }`}
                    >
                      {coupon.claimed ? "Claimed" : "Available"}
                    </span>
                  </td>
                  <td>
                    <button
                      className={`btn ${
                        coupon.claimed ? "btn-danger" : "btn-success"
                      } btn-sm`}
                      onClick={() => toggleCoupon(coupon._id)}
                    >
                      {coupon.claimed ? "Disable" : "Enable"}
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => deleteCoupon(coupon._id)}
                    >
                      Remove
                    </button>
                  </td>
                  <td>
                  {editCouponId === coupon._id ? (
                    <>
                      <input
                        type="text"
                        value={editCouponCode}
                        onChange={(e) => setEditCouponCode(e.target.value)}
                        className="form-control form-control-sm"
                      />
                      <button className="btn btn-primary btn-sm mt-2 me-2" style={{marginLeft:"70px"}} onClick={() => editCoupon(coupon._id)}>
                        Save
                      </button>
                      <button className="btn btn-secondary btn-sm mt-2" onClick={() => setEditCouponId(null)}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button className="btn btn-info btn-sm" onClick={() => { setEditCouponId(coupon._id); setEditCouponCode(coupon.code); }}>
                      Edit
                    </button>
                  )}
                </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* User Claim History */}
      <div className="mt-4 mb-4">
        <h4>User Claim History</h4>
        {history.filter((entry) => entry.claimedBy !== null).length === 0 ? (
          <p className="text-center text-muted">No coupons claimed yet.</p>
        ) : (
          <ul className="list-group">
            {history
              .filter((entry) => entry.claimedBy !== null)
              .map((entry) => (
                <li key={entry._id} className="list-group-item">
                  {entry.code} - Claimed by {entry.claimedBy} at{" "}
                  {new Date(entry.createdAt).toLocaleString()}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
