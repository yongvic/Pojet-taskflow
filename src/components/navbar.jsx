import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import '../styles/navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo_navbar">
        <img src={logo} alt="logo" />
        <span className="work">TaskBridge</span>
      </div>

      <div className="login_navbar">
        <button className="connec">Connexion</button>
        <span className="insc">Inscription</span>
      </div>
    </nav>
  );
}
