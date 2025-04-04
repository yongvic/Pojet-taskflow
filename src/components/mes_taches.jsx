import user from "../assets/user.svg"
import planning from "../assets/planning.svg"
import "../styles/mes_taches.css"
import board from "../assets/board.svg"
import calendar from "../assets/calendar.svg"
import plus from "../assets/plus.svg"

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
                </div>


            </div>

        </>
    )
}