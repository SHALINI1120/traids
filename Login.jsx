import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [errors,setErrors] = useState({});

  const handleSubmit = (e)=>{
    e.preventDefault();
    let newErrors = {};
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if(!email) newErrors.email="Email is required";
    else if(!email.match(emailPattern)) newErrors.email="Invalid email";

    if(!password) newErrors.password="Password is required";
    else if(password.length < 8) newErrors.password="Minimum 8 characters required";

    setErrors(newErrors);

    if(Object.keys(newErrors).length===0){
      alert("Login Successful ✅");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="container">

        <div className="left-panel">
          <div className="login-box">
  <h2>Login</h2>
  <p className="subtitle">
    See your growth and get consulting support!
  </p>

  {/* Google Button */}
  <button type="button" className="google-btn">
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="google"
    />
    <a href="gmail.con" target="_blank"> Sign in with Google</a>
  </button>

  {/* Divider */}
  <div className="divider">
    <span>or sign in with email</span>
  </div>

  <form onSubmit={handleSubmit}>

              <label>Email</label>
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required />
              <div className="error">{errors.email}</div>

              <label>Password</label>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
              <div className="error">{errors.password}</div>

              <div className="options">
                <label className="remember">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#">Forget password?</a>
              </div>

              <button className="login-btn">Login</button>
            </form>

            <p className="register">
              Not registered yet? &nbsp; <Link to="/register">Create an Account</Link>
            </p>

          </div>
        </div>

        <div className="right-panel">
          <div className="content">
            <h2>Turn your ideas<br/>into reality.</h2>
           <img src="/goal.png" alt="goals" />
          </div>
        </div>
      </div>
    </div>
  );
}
