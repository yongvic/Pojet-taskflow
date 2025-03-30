import google from "../assets/google.svg";
import "../styles/inscription.css";
import { Link } from "react-router-dom";
export default function Inscription() {
    return (
        <>
            <h1>S'inscrire sur TaskBridge</h1>
            <div className="container">
                <div>
                    <form action="">

                        <label htmlFor="nom">Nom</label><br />
                        <input type="text" className="ipt_name" placeholder="Votre nom" /><br />

                        <label htmlFor="prenom">Prénom</label><br />
                        <input type="text" className="ipt_prenom" placeholder="Votre prénom" /><br />

                        <label htmlFor="email" className="email">Email</label><br />
                        <input type="email" className="ipt_email" id="ipt_email" placeholder="you@exemple.com" /><br />

                        <div className="div_password">
                            <label htmlFor="mot_passe" id="mot_passe" className="label_password">Mot de passe</label><br />
                            <input type="password" className="ipt_mot_passe" id="ipt_mot_passe" placeholder="Entrez votre mot de passe" /> <br />

                        </div>
                        <input type="submit" value="S'inscrire" className="se_connecter" />
                        <p className="or">Ou</p>
                        <div className="google">
                            <button className="btn_google"><img src={google} alt="" className="icon_google" />Continuer avec google</button>
                        </div>

                        <div className="div_insc">
                            <p className="no_compte">Vous avez déjà un compte?</p>
                            <Link to={"/login"} className="link3"><p className="p_inscrire">Se connecter</p></Link>
                        </div>
                    </form>
                </div>


            </div>
        </>
    );
}
