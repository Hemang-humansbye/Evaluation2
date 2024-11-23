import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // For redirecting to login page
import { jwtDecode } from "jwt-decode";  // Correctly importing jwtDecode

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);  // State to hold error message

  useEffect(() => {
    // Check if JWT token is available in localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      // If no token, redirect to login page
      setError("No token found. Please log in.");
      navigate("/login");
    } else {
      try {
        // Decode the JWT token to get user info
        const decoded = jwtDecode(token);  // Correct usage of jwtDecode
        setUser(decoded);  // Set user data to display
        setError(null);  // Clear error if successful
      } catch (error) {
        // If token is invalid or expired, handle the error
        console.error("Token decode error:", error);
        setError("Token is invalid or expired. Please log in again.");
        localStorage.removeItem("token"); // Remove invalid token
        navigate("/login");  // Redirect to login page
      }
    }
  }, [navigate]);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");  // Remove JWT token
    navigate("/login");  // Redirect to login page
  };

  return (
    <div className="dashboard">
      {error && <p className="error-message">{error}</p>}  {/* Display error message */}
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <p>This is your Dashboard.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        !error && <p>Loading...</p>  // Show loading only if there is no error
      )}
    </div>
  );
};

export default Dashboard;
