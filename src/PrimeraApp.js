import React from 'react';

// Comunicación entre componentes con props

// export const PrimeraApp = (props) => {   
    
//     return (
//         <>
//             <h1>{ props.saludo }</h1>
            
//             <p>Mi Primera Aplicación</p>
//         </>
//     )
// }

// Comunicación entre componentes con props usando desestructuración

export const PrimeraApp = ({saludo}) => {   
    
    return (
        <>
            <h1>{ saludo }</h1>
            
            <p>Mi Primera Aplicación</p>
        </>
    )
}
