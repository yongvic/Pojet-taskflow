import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import plus_square from "../assets/plus-square.svg";
import { Link } from "react-router-dom";
import "../styles/barre.css";
import maison from "../assets/home.svg";
import user from "../assets/user.svg";
import group from "../assets/group.svg";
import plus from "../assets/plus.svg";
import profil from "../assets/profil.svg";
import trois_point from "../assets/more-horizontal.svg";

export default function Barre() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [tasksVisible, setTasksVisible] = useState(false);
    const menuRef = useRef(null);
    const tasksRef = useRef(null);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setMenuVisible((prev) => !prev);
    };

    const toggleTasks = (event) => {
        event.stopPropagation();
        setTasksVisible((prev) => !prev);
    };

    // Fermer les menus si on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuVisible(false);
            }
            if (tasksRef.current && !tasksRef.current.contains(event.target)) {
                setTasksVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="barre">
                <div className="first">
                    <div className="nav">
                        <img src={logo} alt="logo" />
                        <h4 className="titre">Taskbridge</h4>
                        <img
                            src={plus_square}
                            alt="ajouter"
                            className="plus_carre"
                            onClick={toggleMenu}
                        />
                    </div>

                    <div className="barre_home">
                        <img src={maison} alt="home" className="barre_home_img" />
                        <h4 className="barre_home_h4">Aperçu</h4>
                    </div>
                </div>

                <div className="deux">
                    <h4 className="h4">Projets</h4>
                    <div
                        className="un"
                        onClick={toggleTasks}
                        style={{ cursor: "pointer" }}
                    >
                        <img src={user} alt="User" />
                        <h4 className="bu">Personnel</h4>
                    </div>
                    <div className="un">
                        <img src={group} alt="group" />
                        <h4 className="bu">Collaboration</h4>
                    </div>
                    <div className="ajout">
                        <img src={plus} alt="Plus" />
                        <h4>Ajouter un Projet</h4>
                    </div>
                </div>

                <div className="compte">
                    <img src={profil} alt="profil" className="profil" />
                    <h4 className="name">Young Vic</h4>
                    <img
                        src={trois_point}
                        alt="plus"
                        className="more"
                    />
                </div>
            </div>

            <div ref={menuRef} className={`menu-dropdown ${menuVisible ? "show" : ""}`}>
                <ul>
                    <div className="div1"><li className="li1">Flux de travail</li></div>
                    <div className="div2"><li className="li2">Credential</li></div>
                    <div className="div3"><li className="li3">Projet</li></div>
                </ul>
            </div>


            <div
                ref={tasksRef}
                className={`tasks-dropdown ${tasksVisible ? "show" : ""}`}
                style={{
                    visibility: tasksVisible ? "visible" : "hidden",
                    opacity: tasksVisible ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    height: tasksVisible ? "auto" : "0",
                    overflow: "hidden",
                }}
            >
                <ul>
                    <li>Mes tâches</li>
                    <li>Tâches du jour</li>
                    <li>Mes statistiques</li>
                </ul>
            </div>
        </>
    );
}
