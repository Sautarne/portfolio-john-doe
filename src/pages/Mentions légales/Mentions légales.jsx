import React from "react";
import { Helmet } from 'react-helmet';
import './Mentions légales.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobileScreenButton, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

function MentionsLégales () {
    return (
        <div className="mentions-légales-page">
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <h2 className="mentions-léagels-titre">Mentions légales</h2>
            <div className='trait-bleu'></div>

            <div class="accordion accordion-flush p-3" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Éditeur du site
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <p>
                                <strong>John Doe</strong><br/>
                                <FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold<br/>
                                69009 Lyon, France<br/>
                                <FontAwesomeIcon icon={faMobileScreenButton} /> <a href="tel:0123456789">01.23.45.67.89</a><br/>
                                <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a><br/>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Hébergeur
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>
                            <strong>Always Data</strong><br/>
                            91 rue du Faubour Saint Honoré<br/>
                            75008 Paris<br/>
                            <br/>
                            <FontAwesomeIcon icon={faGlobe} /> <a href="https://alwaysdata.com" target="_blank">www.alwaysdata.com</a>
                        </p>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Crédits
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>
                            <strong>Crédits</strong><br />
                            Site développé par John Doe, étudiant du CEF. <br />
                            <br />
                            Les images libres de droit sont issues du site <a href="https://pixabay.com" target="_blank">Pixabay</a>.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MentionsLégales;