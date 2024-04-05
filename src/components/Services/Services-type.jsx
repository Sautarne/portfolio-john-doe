import React, { useState, useEffect } from 'react';
import './Services-type.css';

function ServicesType (props) {

    console.log(props)

    return (
        <div className='services-type'>
            { props.children }
            <h2>{props.titreServices}</h2>
            <p>{props.texteServices}</p>
        </div>
    )
}

export default ServicesType;