import React, { useState, useEffect } from 'react';
import './Services.css';
import ServicesType from '../../components/Services/Services-type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faFileCode , faMagnifyingGlassDollar} from "@fortawesome/free-solid-svg-icons";

function Services () {

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
        imageSource = '../../../img/banner-mobile.jpg';
    } else if (screenSize === 'tablet') {
        imageSource = '../../../img/banner-tablette.jpg';
    } else {
        imageSource = '../../../img/banner.jpg';
    }

    return (
        <div className='services-page'>
            <img className='image-en-tete' src={imageSource} alt="" />
            <div className="services-titre">
                <h2>
                    Mon offre de services
                </h2>
                <h3>
                    Voici les prestations sur lesquelles je peux intervenir.
                </h3>
                <div className='trait-bleu'></div>
            </div>
            <div className='services'>
                <ServicesType
                    titreServices="UX Design"
                    texteServices="L'UX Design est une méthode de conception dentrée sur l'utilisateur. Son but est d'offrir une exérience de navigation optimale à l'internaute."
                >
                    <FontAwesomeIcon className='icon' icon={faDisplay}/>
                </ServicesType>
                    
                <ServicesType
                    titreServices="Développement Web"
                    texteServices="Le développement de sites web repose sur l'utilisation des langages HTML, CSS, Javascript et PHP."
                >
                    <FontAwesomeIcon className='icon' icon={faFileCode}/>
                </ServicesType>
                <ServicesType
                    titreServices="UX Design"
                    texteServices="Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche."
                >
                    <FontAwesomeIcon className='icon' icon={faMagnifyingGlassDollar}/>
                </ServicesType>
            </div>
        </div>
    )
}

export default Services;