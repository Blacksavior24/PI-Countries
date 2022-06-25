import React from "react";
import {Link} from 'react-router-dom';

export default function LandingPage(){
    return(
        <div>
            <h1>Welcome ^-^</h1>
            <img src='https://dbdzm869oupei.cloudfront.net/img/quadres/preview/40450.png'
            alt='Mapa-mundi'
            />
            <p>Ingresé para ver los paises</p>
            <Link to='/countries'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}