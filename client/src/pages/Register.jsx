import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUserProfile } from "../services/API";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "", // New username field
    email: "",
    password: "",
    orgName: "",
    phoneNo: "",
    userType: "donor" // default value
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 1. Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // 2. Save additional info to MongoDB
      await createUserProfile({
        uid: userCredential.user.uid,
        username: formData.username, // Use the form input
        name: formData.name,
        email: formData.email,
        orgName: formData.orgName,
        phoneNo: formData.phoneNo,
        userType: formData.userType
      });

      // 3. Redirect after successful registration
      navigate("/LoginDashboard");
    } catch (err) {
      setError(err.message);
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-form">
      <h2>Create Account</h2>
      {error && <div className="error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* New Username Field */}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            minLength="3"
            pattern="[a-zA-Z0-9]+" // Only alphanumeric
            title="Username must be alphanumeric (letters and numbers only)"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength="6"
            required
          />
        </div>

        <div className="form-group">
          <label>Organization Name</label>
          <input
            type="text"
            name="orgName"
            value={formData.orgName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="10 digit phone number"
            required
          />
        </div>

        <div className="form-group">
          <label>Account Type</label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            required
          >
            <option value="donor">Food Donor</option>
            <option value="receiver">Food Receiver</option>
          </select>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}