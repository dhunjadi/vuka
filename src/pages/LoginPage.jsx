import React, { useState, useContext, useRef, useEffect } from "react";
import logo from "../images/logo.png";
import { UserContext } from "../context/UserContex";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const { users, setLoggedInUser } = useContext(UserContext); // UserContex imports
  const [email, setEmail] = useState(""); // E-mail input state
  const [password, setPassword] = useState(""); // Password input state
  const [showError, setShowError] = useState(false); // Error message state
  const history = useHistory();
  const inputRef = useRef();

  // Focusing on e-mail input on page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const found = users.find(
      (user) => user.email === email && user.password === password
    );
    if (found) {
      setLoggedInUser(found);
      history.push("/home");
    } else {
      setShowError(true);
    }
  };

  if (showError && email.length === 0) {
    setShowError(false);
  }

  return (
    <div id="login-page">
      <div className="login-container">
        <div className="logo-container-login">
          <img src={logo} alt="logo" />
        </div>
        <form>
          <input
            ref={inputRef}
            type="text"
            placeholder="example@vuka.hr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showError && (
            <p className="login-error">Incorrect Email or password</p>
          )}
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
}
