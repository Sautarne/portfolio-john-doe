import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import './Navigation.css';


function Navigation () {

    // Permet de mettre la valeur "active" en fonction de la pages actuel
    const [activePage, setActivePage] = useState('accueil');

    const handleLinkClick = (page) => {
      setActivePage(page);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid" id='nav'>
                    <Link
                        className="navbar-brand"
                        to="/"
                        onClick={() => handleLinkClick('accueil')}
                    >
                        John DOE
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activePage === 'accueil' ? 'active' : ''}`}
                                    to="/"
                                    onClick={() => handleLinkClick('accueil')}
                                >
                                    Accueil
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
                                    to="/services"
                                    onClick={() => handleLinkClick('services')}
                                >
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activePage === 'realisations' ? 'active' : ''}`}
                                    to="/realisations"
                                    onClick={() => handleLinkClick('realisations')}
                                >
                                    Réalisations
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activePage === 'blog' ? 'active' : ''}`}
                                    to="/blog"
                                    onClick={() => handleLinkClick('blog')}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activePage === 'me-contacter' ? 'active' : ''}`}
                                    to="/me-contacter"
                                    onClick={() => handleLinkClick('me-contacter')}
                                >
                                    Me contacter
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Navigation;