import React, { useState, useEffect } from 'react';
import './Accueil.css'

function Accueil() {

    const [screenSize, setScreenSize] = useState(getScreenSize());

    useEffect(() => {
        function handleResize() {
        setScreenSize(getScreenSize());
        }

        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    // récupère la taille de l'écran
    function getScreenSize() {
        if (window.matchMedia('(max-width: 767px)').matches) {
        return 'mobile';
        } else if (window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
        return 'tablet';
        } else {
        return 'desktop';
        }
    }

    // Permet de changer l'image en fonction de la taille d'écran
    let imageSource;
    if (screenSize === 'mobile') {
        imageSource = '../../../img/hero-bg-mobile.jpg';
    } else if (screenSize === 'tablet') {
        imageSource = '../../../img/hero-bg-tablette.jpg';
    } else {
        imageSource = '../../../img/hero-bg.jpg';
    }

    // Permet au bouton de faire un scroll automatique vers la section à propos lors du clic
    const scrollAutomatique = () => {
        const titre = document.getElementById('a-propos');
        if (titre) {
            titre.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='accueil-page'>
            <div className='bienvenue' style={{backgroundImage: `url(${imageSource})`}}>
                <div className="bienvenue-text">
                    <h1>Bonjour, Je suis John Doe</h1>
                    <h2>Développeur web full stack</h2>
                    <button type="button" class="btn btn-primary" onClick={scrollAutomatique}>En savoir plus</button>
                </div>
            </div>
            <div className="a-propos" id='a-propos'>
                <div className="présentation"><h2>À propos</h2>
                    <p>
                        Passioné par l'informatique et les nouvelles technologies, j'ai suivi une formation
                        d'<strong>intégrateur-développeur web</strong> au CEF.
                        Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans
                        le domaine du <strong>développement web</strong>.
                    </p>
                    <p>
                        Basé à Lyon, je suis en recherche d'une alternance ausein d'une agence digitale pour consolider
                        ma formation de <strong>développeur web full stack</strong>.
                    </p>
                    <p>
                        J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratique du web.
                    </p>
                </div>
                <div className='mes-compétences'>
                    <img src="../../../img/john-doe-about.jpg" alt="Un homme blanc aux cheveux châtain qui travail" />
                    <h3>Mes compétences</h3>
                    <p>HTML5 90%</p>
                    <div className="progress" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-danger" style={{width: `90%`}}></div>
                    </div>
                    <p>CSS 80%</p>
                    <div className="progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-info" style={{width: `80%`}}></div>
                    </div>
                    <p>JAVASCRIPT 70%</p>
                    <div className="progress" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-warning" style={{width: `70%`}}></div>
                    </div>
                    <p>PHP 60%</p>
                    <div className="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success" style={{width: `60%`}}></div>
                    </div>
                    <p>REACT 50%</p>
                    <div className="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{width: `50%`}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Accueil;
