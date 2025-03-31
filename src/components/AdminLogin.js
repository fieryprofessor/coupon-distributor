import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook for redirection

  const login = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("https://round-robin-coupons-5914.onrender.com/api/admin/login", credentials);
      localStorage.setItem("adminToken", res.data.token);
      setMessage(res.data.message || "✅ Login successful!"); // Catch success message
      setTimeout(() => navigate("/admin-dashboard"), 1000);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setMessage(`❌ ${err.response.data.message}`);
      } else {
        setMessage("❌ Invalid credentials. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center text-primary mb-4">Admin Login</h2>

        <form onSubmit={login}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              required
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>

          <button className="btn btn-primary w-100" type="submit" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {message && (
          <p className={`mt-3 text-center ${message.includes("✅") ? "text-success" : "text-danger"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;