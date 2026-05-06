import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
export default function Login({ setIsLoggedIn, setRole }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      username === savedUser.username &&
      password === savedUser.password
    ) {
      setIsLoggedIn(true);
      setRole(savedUser.role); // admin or user

      // redirect based on role
      if (savedUser.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } else {
      alert("Wrong username or password");
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-page">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}
