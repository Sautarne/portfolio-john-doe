import React, { useEffect, useState } from "react";
import {Routes, Route, Link} from 'react-router-dom';
import './Navigation.css';
import Accueil from '../../pages/Accueil.jsx';
import Services from '../../pages/Services.jsx';
import Realisations from '../../pages/Realisations.jsx';
import Blog from '../../pages/Blog.jsx';
import MeContacter from '../../pages/Me contacter.jsx';

function Navigation () {

    const [activePage, setActivePage] = useState('accueil');

    const handleLinkClick = (page) => {
      setActivePage(page);
    };

    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div class="container-fluid" id='nav'>
                    <Link
                        class="navbar-brand"
                        to="/"
                        onClick={() => handleLinkClick('accueil')}
                    >
                        John DOE
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link
                                    class={`nav-link ${activePage === 'accueil' ? 'active' : ''}`}
                                    to="/"
                                    onClick={() => handleLinkClick('accueil')}
                                >
                                    Accueil
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    class={`nav-link ${activePage === 'services' ? 'active' : ''}`}
                                    to="/services"
                                    onClick={() => handleLinkClick('services')}
                                >
                                    Services
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    class={`nav-link ${activePage === 'realisations' ? 'active' : ''}`}
                                    to="/realisations"
                                    onClick={() => handleLinkClick('realisations')}
                                >
                                    Réalisations
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    class={`nav-link ${activePage === 'blog' ? 'active' : ''}`}
                                    to="/blog"
                                    onClick={() => handleLinkClick('blog')}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    class={`nav-link ${activePage === 'me-contacter' ? 'active' : ''}`}
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
            <Routes>
                <Route path='/' element={<Accueil/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
                <Route path='/realisations' element={<Realisations/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/me-Contacter' element={<MeContacter/>}></Route>
            </Routes>
        </header>
    )
}

export default Navigation;