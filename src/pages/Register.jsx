import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatpassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const user = { username, password, role };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");
    navigate("/"); // go to login
  };

  return (
    <form onSubmit={handleRegister} className="reg-page">
      <h2>Register</h2>

      <input
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="firstname"
        type="text"
        onChange={(e) => setFirstname(e.target.value)}
      />
      <input
        placeholder="lastname"
        type="text"
        onChange={(e) => setLastname(e.target.value)}
      />
      <input
        placeholder="email"
        type="email"
        onChange={(e) => setFirstname(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        placeholder="password"
        type="passsword"
        onChange={(e) => setPassword(e.target.value)}
      />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
}
