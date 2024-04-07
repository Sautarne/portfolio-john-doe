import React, { useState, useEffect } from 'react';
import './Réalisations.css';

function Realisations () {

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
        <div className="réalisation-page">
            <img className='image-en-tete' src={imageSource} alt="Une image avec des rayons bleus" />
            <div className="réalisation-titre">
                <h2>
                    Portfolio
                </h2>
                <h3>
                    Voici quelques-unes de mes réalisations.
                </h3>
            </div>
            <div className='trait-bleu'></div>
            <div className="espace-carte">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0">
                        <div class="card col col-md-6 my-2">
                            <img src="../../img/portfolio/fresh-food.jpg" class="card-img-top" alt="Panier avec des légumes"/>
                            <div class="card-body d-flex flex-column align-items-center">
                                <h5 class="card-title fw-semibold fs-2">Fresh Food</h5>
                                <p class="card-text ms-3 me-3">Réalisation d'un site avec commande en ligne.</p>
                                <button type="button" class="btn btn-outline-primary">Voir</button>
                            </div>
                            <div class="card-footer d-flex flex-column align-items-center">
                                <small class="text-body-secondary fw-semibold fs-6">Site réalisé avec PHP et MySQL</small>
                            </div>
                        </div>
                        <div class="card col col-md-6 my-2">
                            <img src="../../img/portfolio/restaurant-japonais.jpg" class="card-img-top" alt="Assortiments de sushis"/>
                            <div class="card-body d-flex flex-column align-items-center">
                                <h5 class="card-title fw-semibold fs-2">Restaurant Akira</h5>
                                <p class="card-text ms-3 me-3">Réalisation d'un site vitrine.</p>
                                <button type="button" class="btn btn-outline-primary">Voir</button>
                            </div>
                            <div class="card-footer d-flex flex-column align-items-center">
                                <small class="text-body-secondary fw-semibold fs-6">Site réaliisé avec WordPress</small>
                            </div>
                        </div>
                        <div class="card col col-md-6 my-2">
                            <img src="../../img/portfolio/espace-bien-etre.jpg" class="card-img-top" alt="Image avec un couché de soleil et une status de bouddha"/>
                            <div class="card-body d-flex flex-column align-items-center">
                                <h5 class="card-title fw-semibold fs-2">Espace bien-être</h5>
                                <p class="card-text ms-3 me-3">Réalisation d'un site vitrine pour un patricien de bien-être.</p>
                                <button type="button" class="btn btn-outline-primary">Voir</button>
                            </div>
                            <div class="card-footer d-flex flex-column align-items-center">
                                <small class="text-body-secondary fw-semibold fs-6">Site réalisé HTML/CSS</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Realisations;
