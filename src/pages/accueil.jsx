import Barre from "../components/barre.jsx"
import { Link } from 'react-router-dom'
import { useEffect } from "react";

export default function Accueil() {
    useEffect(() => {
        // Sélectionner la Navbar et la cacher
        const navbar = document.querySelector(".navbar"); // Remplace par l'ID ou la classe exacte
        if (navbar) navbar.style.display = "none";
        return () => {
            // Réafficher la Navbar quand on quitte Accueil
            if (navbar) navbar.style.display = "block";
        };
    }, []);
    return (
        <>
            <Barre />
        </>
    )

}