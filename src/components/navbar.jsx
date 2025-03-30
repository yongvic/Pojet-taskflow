import logo from "../assets/logo.png"
import '../styles/navbar.css'
import Btn_login from './btn_login'
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const hideAuthButtons = ["/login", "/inscription"];
  return (
    <nav className="navbar">
      <div className="logo_navbar">
        <img src={logo} alt="logo" />
        <span className="work">TaskBridge</span>
      </div>
      {/* On affiche BtnLogin seulement si l'URL actuelle n'est pas dans hideAuthButtons */}
      {!hideAuthButtons.includes(location.pathname) && <Btn_login />}
    </nav>
  );
}
