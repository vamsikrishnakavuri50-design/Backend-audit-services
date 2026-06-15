import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/Api";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await API.post("/auth/login", {
        username,
        password,
      });

      console.log(response.data);

      localStorage.setItem(
        "username",
        response.data.username
      );

      localStorage.setItem(
        "role",
        response.data.role
      );

      if (response.data.role === "ADMIN") {
        navigate("/dashboard");
      } else {
        navigate("/user");
      }

    } catch (error) {
      alert("Invalid Username or Password");
      console.error(error);
    }
  };

  return (
  <div className="login-container">
    <div className="login-card">

      <h1 className="login-title">
        BankSecure Login
      </h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />

      <button
        onClick={login}
        className="login-btn"
      >
        Login
      </button>

    </div>
  </div>
);

}

export default Login;