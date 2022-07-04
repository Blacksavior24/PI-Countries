import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Search from '../search/Search'

export default class Nav extends Component {
    render() {
        return (
            <div>
            <Search />
            <div>
            <Link to="/">Home</Link>
              <Link to='/countries'>Paises</Link>
              <Link to="/activity/create">
                <button>Crear Actividad</button>
                </Link>
            </div>
            </div>
        )
    }
}
