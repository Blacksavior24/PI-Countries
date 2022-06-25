import React, {Component} from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/Nav";

export class Countries extends Component{
    /*componentDidMount(){
        this.props.getAllCountries()
    }*/
    
    render(){
        return(
            <div>
                <h1>Paises ^-^</h1>
                <Nav />
                <Link />
            </div>
        )
    }
}
    
export default Countries