import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div>
              <Link to="/">Home</Link>
              <Link to='/countries'>Paises</Link>
              <Link to="/activity/create">
                <button>Crear Actividad</button>
                </Link>
            </div>
        )
    }
}
