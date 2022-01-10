import React from 'react';
import PropTypes from 'prop-types';

export const PrimeraApp = ({saludo, subtitulo}) => {   
    
    return (
        <>
            <h1>{ saludo }</h1>
            
            <p> {subtitulo} </p>
        </>
    )
}

//PROPTYPES

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

// DEFAULTPROPS 
// Es más común ver el valor por defecto => export const PrimeraApp = ({saludo, subtítulo = 'Soy un subtitulo'})

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtítulo'
}
