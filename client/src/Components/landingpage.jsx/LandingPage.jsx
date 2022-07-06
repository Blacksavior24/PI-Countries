import React from "react";
import {Link} from 'react-router-dom';
import './landing.css'

export default function LandingPage(){
    return(
        <div className="landing">
            <h1>Welcome ^-^</h1>
            <p>Ingresé para ver los paises</p>
            <Link to='/countries'>
                <button className="boton">Ingresar</button>
            </Link>
        </div>
    )
}