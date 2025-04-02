import google from "../assets/google.svg";
import "../styles/login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <h1>Se connecter à TaskBridge</h1>
      <div className="container">
        <div>
          <form action="">
            <label htmlFor="email" className="email">Email</label><br />
            <input type="email" className="ipt_email" id="ipt_email" placeholder="you@exemple.com" /><br />

            <div className="div_password">
              <label htmlFor="mot_passe" id="mot_passe" className="label_password">Mot de passe</label><br />
              <input type="password" className="ipt_mot_passe" id="ipt_mot_passe" placeholder="Entrez votre mot de passe" /> <br />
              <a href="" className="oublie">Mot de passe oublier</a> <br />
            </div>
            <Link to={"/accueil"} ><input type="submit" value="Se connecter" className="se_connecter" /></Link>
            <p className="or">Ou</p>
            <div className="google">
              <button className="btn_google"><img src={google} alt="" className="icon_google" />Continuer avec google</button>
            </div>

            <div className="div_insc">
              <p className="no_compte">Vous n'avez pas de compte?</p>
              <Link to={"/inscription"} className="link3"><p className="p_inscrire">S'inscrire</p></Link>
            </div>
          </form>
        </div>


      </div>
    </>
  );
}
