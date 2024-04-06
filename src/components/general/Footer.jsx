import React from 'react';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/github-john-doe')
          .then(response => response.json())
          .then(data => {
            setUserData(data);
        });
    }, []);
    

    const [activePage, setActivePage] = useState('accueil');
    
    const changementDePage = (page) => {
        setActivePage(page);
        const navigation = document.getElementById('nav');
        if (navigation) {
            navigation.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const changementDePageAPropos = (page) => {
        setActivePage(page);
        setTimeout(() => {            
            const aPropos = document.getElementById('a-propos');
            if (aPropos) {
                aPropos.scrollIntoView({ behavior: 'smooth' });
            }
        }, 1);
    };


  
    return (
        <div className='footer'>
            <div className='informations-personnelles'>
                <h2>{ userData ? userData.name : 'John Doe' }</h2>
                <p> 
                    40 Rue Laure Diebold<br/>
                    69009 Lyon, France<br/>
                    Téléphone: 06 20 30 40 50
                </p>
                <div className='icon-footer-container'>
                    <a href="https://github.com/github-john-doe" target='_blank'><FontAwesomeIcon icon={faGithub} className='icon-footer' /></a>
                    <a href="https://twitter.com/twitter-john-doe" target='_blank'><FontAwesomeIcon icon={faTwitterSquare} className='icon-footer' /></a>
                    <a href="https://linkedin.com/linkedin-john-doe" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='icon-footer' /></a>
                </div>
            </div>
            <div className='lien-utiles'>
                <h2>Lien utiles</h2>
                <Link to="/#nav" onClick={() => changementDePage('accueil')}> Accueil </Link>
                <Link to="/#a-propos" onClick={() => changementDePageAPropos('accueil')}> À propos </Link>
                <Link to="/services#nav" onClick={() => changementDePage('services')}> Services </Link>
                <Link to="/me-contacter#nav" onClick={() => changementDePage('me-contacter')}> Me contacter </Link>
                <Link to="/mentions-légales#nav" onClick={() => changementDePage('mentions-légales')}> Mentions légales </Link>
            </div>
            <div className='dernière-réalisations'>
                <h2>Mes dernières réalisations</h2>
                <Link to="/Réalisations#fresh-food">Fresh Food</Link>
                <Link to="/Réalisations#restaurant-akira">Restaurant Akira</Link>
                <Link to="/Réalisations#espace-bien-être">Espace bien-être</Link>
            </div>
            <div className='derniers-articles'>
                <h2>Mes derniers articles</h2>
                <Link to="/Articles#coder-son-site-en-HTML/CSS">Coder son site en HTML/CSS</Link>
                <Link to="/Articles#vendre-ses-produits-sur-le-web">Vendre ses produits sur le web</Link>
                <Link to="/Articles#se-positionner-sur-google">Se positionner sur Google</Link>
            </div>
            <div className="copyright">
                <p>© Designed by John Doe</p>
            </div>
        </div>
    );
}

export default Footer;