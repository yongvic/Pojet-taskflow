
import { useState, useEffect } from "react";
import google from "../assets/google.svg";
import "../styles/login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!(email.trim() && password.trim()));
  }, [email, password]);

  return (
    <>
      <h1 className="h1">Se connecter à TaskBridge</h1>
      <div className="container">
        <div>
          <form action="">
            <label htmlFor="email" className="email">Email</label><br />
            <input
              type="email"
              className="ipt_email"
              id="ipt_email"
              placeholder="you@exemple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br />

            <div className="div_password">
              <label htmlFor="mot_passe" id="mot_passe" className="label_password">Mot de passe</label><br />
              <input
                type="password"
                className="ipt_mot_passe"
                id="ipt_mot_passe"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /> <br />
              <a href="" className="oublie">Mot de passe oublié</a> <br />
            </div>
            <Link to={"/accueil"} ><input
              type="submit"
              value="Se connecter"
              className={`se_connecter ${isDisabled ? "disabled-btn" : ""}`}
              disabled={isDisabled}
            /></Link>


            <p className="or">Ou</p>
            <div className="google">
              <button className="btn_google">
                <img src={google} alt="" className="icon_google" />
                Continuer avec Google
              </button>
            </div>

            <div className="div_insc">
              <p className="no_compte">Vous n'avez pas de compte?</p>
              <Link to={"/inscription"} className="link3">
                <p className="p_inscrire">S'inscrire</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
