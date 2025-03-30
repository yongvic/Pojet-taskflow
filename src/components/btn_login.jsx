import { Link } from "react-router-dom";
import '../styles/btn_login.css';
export default function Btn_login() {

    return (
        <div className="login_navbar">
            <Link to={"/login"} className="link"><button className="connec"  > Connexion </button></Link>
            <span className="insc"><Link to={"/inscription"} className="link2">Inscription</Link></span>
        </div>
    );
}