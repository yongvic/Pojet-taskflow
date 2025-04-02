
import { useState, useEffect } from "react";
import google from "../assets/google.svg";
import "../styles/inscription.css";
import { Link } from "react-router-dom";

export default function Inscription() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        setIsDisabled(!(nom.trim() && email.trim() && password.trim()));
    }, [nom, email, password]);

    return (
        <>
            <h1>S'inscrire sur TaskBridge</h1>
            <div className="container">
                <div>
                    <form action="">
                        <label htmlFor="nom">Nom</label><br />
                        <input
                            type="text"
                            className="ipt_name"
                            placeholder="Votre nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        /><br />

                        <label htmlFor="prenom">Prénom (optionnel)</label><br />
                        <input
                            type="text"
                            className="ipt_prenom"
                            placeholder="Votre prénom"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                        /><br />

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
                            <label htmlFor="mot_passe" className="label_password">Mot de passe</label><br />
                            <input
                                type="password"
                                className="ipt_mot_passe"
                                id="ipt_mot_passe"
                                placeholder="Entrez votre mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            /><br />
                        </div>

                        <Link to={"/accueil"} ><input
                            type="submit"
                            value="S'inscrire"
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
                            <p className="no_compte">Vous avez déjà un compte?</p>
                            <Link to={"/login"} className="link3">
                                <p className="p_inscrire">Se connecter</p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

