import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Register(){

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:"",
    confirm:""
  });

  const [errors,setErrors] = useState({});

  const handleSubmit = (e)=>{
    e.preventDefault();
    let newErrors = {};
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if(!form.name.trim()) newErrors.name="Name required";
    if(!form.email.trim()) newErrors.email="Email required";
    else if(!form.email.match(emailPattern)) newErrors.email="Invalid email";

    if(!form.password) newErrors.password="Password required";
    else if(form.password.length < 8) newErrors.password="Minimum 8 characters";

    if(form.confirm !== form.password)
      newErrors.confirm="Passwords do not match";

    setErrors(newErrors);

    if(Object.keys(newErrors).length===0){
      alert("Registration Successful 🎉");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="container">

        <div className="left-panel">
          <div className="login-box">
            <h2>Register</h2>
            <p className="subtitle">Create your account to get started!</p>

            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input 
                type="text"
                value={form.name}
                onChange={(e)=>setForm({...form,name:e.target.value})} 
                required
              />
              <div className="error">{errors.name}</div>

              <label>Email</label>
              <input 
                type="text"
                value={form.email}
                onChange={(e)=>setForm({...form,email:e.target.value})} 
                required
              />
              <div className="error">{errors.email}</div>

              <label>Password</label>
              <input 
                type="password"
                value={form.password}
                onChange={(e)=>setForm({...form,password:e.target.value})} 
                required 
              />
              <div className="error">{errors.password}</div>

              <label>Confirm Password</label>
              <input 
                type="password"
                value={form.confirm}
                onChange={(e)=>setForm({...form,confirm:e.target.value})} 
                required
              />
              <div className="error">{errors.confirm}</div>

              <button type="submit" className="login-btn">
                Register
              </button>
            </form>

            <p className="register">
              Already have an account?&nbsp; 
              <Link to="/">Login</Link>
            </p>

          </div>
        </div>

        <div className="right-panel">
          <div className="content">
            <h2>Turn your ideas<br/>into reality.</h2>

            {/* FIXED IMAGE */}
            <img src="/goal.png" alt="goals" />

          </div>
        </div>

      </div>
    </div>
  );
}
