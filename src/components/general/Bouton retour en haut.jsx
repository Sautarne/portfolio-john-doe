import React from "react";
import { useEffect, useState } from 'react';
import './Bouton retour en haut.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const BoutonRetourEnHaut = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        console.log("Scrolling to top...");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div>
            <button onClick={scrollToTop} className={`bouton-retour-en-haut ${isVisible ? 'visible' : 'hidden'}`}>
                <FontAwesomeIcon icon={faArrowUp} style={{color: "#ffffff",}} />
            </button>
        </div>
    )
}

export default BoutonRetourEnHaut;