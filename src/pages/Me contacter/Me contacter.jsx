import React from "react";
import './Me contacter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";


function MeContacter () {
    return (
        <div className="me-contacter-page">
            <div className="me-contacter-page-contenu">
                <h2>Me contacter</h2>
                <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                <div className='trait-bleu'></div>
                <div className="container mt-4">
                    <div className="row row-cols-md-2">
                        <form action="submit">
                            <h3>Formulaire de contact</h3>
                            <div class="mb-3">
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Votre nom" required="required"/>
                            </div>
                            <div class="mb-3">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Votre adresse email" required="required"/>
                            </div>
                            <div class="mb-3">
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Votre numéro de téléphone" required="required"/>
                            </div>
                            <div class="mb-3">
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Sujet" required="required"/>
                            </div>
                            <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Votre message" required="required"></textarea>
                            </div>
                            <div class="mb-3 d-flex flex-column align-items-center">
                            <button type="submit" class="btn btn-primary">Envoyer</button>
                            </div>
                        </form>
                        <div className="coordonnees">
                            <h3>Mes coordonnées</h3>
                            <FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold<br/>
                            Lyon, France<br/>
                            <FontAwesomeIcon icon={faMobileScreenButton} /> <a href="tel:0123456789">01.23.45.67.89</a><br/>
                            <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657541!2d4.796403976619988!3d45.77866571240159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1712505530603!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeContacter;
