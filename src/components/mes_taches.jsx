import user from "../assets/user.svg"
import planning from "../assets/planning.svg"
import "../styles/mes_taches.css"
import board from "../assets/board.svg"
import calendar from "../assets/calendar.svg"
import plus from "../assets/plus.svg"
import point from "../assets/point.svg"
import terminer from "../assets/terminer.png"
import en_cours from "../assets/en_cours.png"
import not_start from "../assets/not_start.png"

export default function MesTaches() {
    return (
        <>

            <div className="taches">

                <div className="haut">
                    <div className="uno">
                        <img src={user} alt="user" className="perso_taches" />
                        <p>Personnel   </p>
                        <p>/</p>
                    </div>

                    <div className="dos">
                        <img src={planning} alt="Taches" className="icon_taches" />
                        <p>Mes tâches</p>
                    </div>

                    <div className="trese">
                        <p className="modif">Derniére modification: il y a 1h</p>
                        <p className="send">Partager</p>
                    </div>
                </div>

                <div className="daily_task">

                    <div className="tit">
                        <img src={planning} alt="Taches" />
                        <h1 className="h2_mestaches">Mes tâches</h1>
                    </div>

                    <div className="oui">
                        <div className="tab">
                            <img src={board} alt="tableau" className="img_tab" />
                            <p>Tableau de bord</p>
                        </div>
                        <div className="calendar">
                            <img src={calendar} alt="Calendrier" className="img_calendar" />
                            <p>Calendar view</p>
                        </div>
                        <div className="new">
                            <p className="p_new">Nouveau</p>
                            <img src={plus} alt="Ajouter" className="img_new" />
                        </div>
                    </div>

                    <div className="process">
                        <div>
                            <div className="process1">
                                <img src={point} alt="point" className="point1" />
                                <p className="p">Non commencé</p>
                            </div>

                            <div className="pam">

                                <div className="pam1">
                                    <img src={not_start} alt="Not start" className="img_1" />
                                    <p>J'ai un projet</p>
                                </div>
                                <p className="p1">23 mars 2006</p>

                            </div>

                            <div className="pamar1">

                                <div className="pam4">
                                    <img src={plus} alt="Ajouter" className="imomo" />
                                    <p>Créer un(e) item</p>
                                </div>

                            </div>

                        </div>

                        <div>
                            <div className="process2">
                                <img src={point} alt="point" className="point2" />
                                <p className="pp">En cours</p>
                            </div>

                            <div className="pama">

                                <div className="pam2">
                                    <img src={en_cours} alt="Not start" className="img_2" />
                                    <p >J'ai un projet</p>
                                </div>
                                <p className="p2">23 mars 2006</p>

                            </div>

                            <div className="pamar1">

                                <div className="pam4">
                                    <img src={plus} alt="Ajouter" className="imomo" />
                                    <p>Créer un(e) item</p>
                                </div>

                            </div>

                        </div>

                        <div>
                            <div className="process3">
                                <img src={point} alt="point" className="point3" />
                                <p className="ppp">Terminer</p>
                            </div>

                            <div className="pamar">

                                <div className="pam3">
                                    <img src={terminer} alt="Not start" className="img_3" />
                                    <p>J'ai un projet</p>
                                </div>
                                <p className="p3">23 mars 2006</p>

                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </>
    )
}