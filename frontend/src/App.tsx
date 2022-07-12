import React from "react";
import "./App.css";
import {
  useNavigate,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
  Link,
} from "react-router-dom";
import Login from "./screens/login";
import Register from "./screens/register";
import Home from "./screens/home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
