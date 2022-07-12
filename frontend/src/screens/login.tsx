// import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    console.log("post");
    try {
      await Axios.post("http://localhost:8000/users/login", {
        name: e.target.name.value,
        password: e.target.password.value,
      });
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      login
      <div className="App">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">name</label>
            <input type="name" name="name" placeholder="name" />
          </div>
          <div className="input-group">
            <label htmlFor="password">password</label>
            <input type="password" name="password" />
          </div>
          <input type="submit" />
        </form>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
