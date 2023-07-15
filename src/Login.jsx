import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./Context/AuthProvider";
import axios from "./API/axios";
const LOGIN_URL = "/login";
import Dashboard from "./Dashboard";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        { email: user, password: pwd }, // Remove JSON.stringify() since axios will handle it
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));

      setAuth(response?.data?.data?.token); // Remove JSON.stringify() since it's already a string
      setUser("");
      setPwd("");
      navigate("/dashboard");
    } catch (err) {
      if (!err.response) {
        setErrMsg("No server response.");
      } else if (err.response.status === 400) {
        setErrMsg("Missing Username or Password");
      } else {
        setErrMsg("Login Fail.");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button>Sign In</button>
          <p>
            Need an account? <br />
            <a href="#">Sign Up</a>
          </p>
        </form>
      </section>
    </>
  );
};

export default Login;
