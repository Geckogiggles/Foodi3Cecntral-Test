import React from "react";
import HeroImage from "./components/hero";
import LoginForm from "./components/Login";
import BottomNavbar from "./components/Navbars/botNav";
import "./App.css"
const LoginPage = () => {
  return (
    <div>
      <HeroImage />
      <LoginForm />
      <BottomNavbar />
    </div>
  );
};

export default LoginPage;