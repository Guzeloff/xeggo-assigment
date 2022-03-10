import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/userSlice";

const userList = [
  {
    username: "xeggo",
    password: "123",
  },
];

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = userList.find((user) => user.username === username);

    if (user) {
      if (username === user.username && password === user.password) {
        setError(false);
        dispatch(login(username));
        navigate("/todo");
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="login__container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input__container">
          <label>username</label>
          <input
            type="text"
            placeholder="enter username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input__container">
          <label>password</label>
          <input
            type="password"
            placeholder="enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="button__container">
          <input type="submit" />
        </div>
      </form>
      {error && <p>Wrong credentials</p>}
    </div>
  );
}

export default Login;
