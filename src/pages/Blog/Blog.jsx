import React, { useState, useEffect } from 'react';
import './Blog.css';

function Blog () {

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
        <div className="blog-page">
            <img className='image-en-tete' src={imageSource} alt="Une image avec des rayons bleus" />
            <div className="blog-titre">
                <h2>
                    Blog
                </h2>
                <h3>
                    Retrouver ici quelques articles sur le développement web.
                </h3>
            </div>
            <div className='trait-bleu'></div>
            <div className="espace-carte">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0">
                        <div class="card col col-md-6 my-2" id='coder-son-site-en-HTML/CSS'>
                            <img src="../../img/blog/coder.jpg" class="card-img-top" alt="Panier avec des légumes"/>
                            <div class="card-body">
                                <h5 class="card-title fw-semibold fs-2">Coder son site en HTML/CSS</h5>
                                <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card-s content.</p>
                                <button type="button" class="btn btn-primary">Lire la suite</button>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary fw-semibold fs-6">Publié le 22 août 2022</small>
                            </div>
                        </div>
                        <div class="card col col-md-6 my-2" id='vendre-ses-produits-sur-le-web'>
                            <img src="../../img/blog/croissance.jpg" class="card-img-top" alt="Assortiments de sushis"/>
                            <div class="card-body">
                                <h5 class="card-title fw-semibold fs-2">Vendre ses produits sur le web</h5>
                                <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card-s content.</p>
                                <button type="button" class="btn btn btn-primary">Lire la suite</button>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary fw-semibold fs-6">Publié le 20 août 2022</small>
                            </div>
                        </div>
                        <div class="card col col-md-6 my-2" id='se-positionner-sur-google'>
                            <img src="../../img/blog/google.jpg" class="card-img-top" alt="Image avec un couché de soleil et une status de bouddha"/>
                            <div class="card-body">
                                <h5 class="card-title fw-semibold fs-2">Se positionner sur Google</h5>
                                <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card-s content.</p>
                                <button type="button" class="btn btn btn-primary">Lire la suite</button>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary fw-semibold fs-6">Publié le 1 août 2022</small>
                            </div>
                        </div>
                        <div class="card col col-md-6 my-2">
                            <img src="../../img/blog/screens.jpg" class="card-img-top" alt="Image avec un couché de soleil et une status de bouddha"/>
                            <div class="card-body">
                                <h5 class="card-title fw-semibold fs-2">Coder en responsive design</h5>
                                <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card-s content.</p>
                                <button type="button" class="btn btn btn-primary">Lire la suite</button>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary fw-semibold fs-6">Publié le 31 juillet 2022</small>
                            </div>
                        </div>
                        <div class="card col col-md-6 my-2">
                            <img src="../../img/blog/seo.jpg" class="card-img-top" alt="Image avec un couché de soleil et une status de bouddha"/>
                            <div class="card-body">
                                <h5 class="card-title fw-semibold fs-2">Techniques de référencement</h5>
                                <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card-s content.</p>
                                <button type="button" class="btn btn btn-primary">Lire la suite</button>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary fw-semibold fs-6">Publié le 30 juillet 2022</small>
                            </div>
                        </div>
                        <div class="card col col-md-6 my-2">
                            <img src="../../img/blog/technos.png" class="card-img-top" alt="Image avec un couché de soleil et une status de bouddha"/>
                            <div class="card-body">
                                <h5 class="card-title fw-semibold fs-2">Apprendre à coder</h5>
                                <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card-s content.</p>
                                <button type="button" class="btn btn btn-primary">Lire la suite</button>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary fw-semibold fs-6">Publié le 12 juillet 2022</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;
