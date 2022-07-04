import React, {Component} from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import Nav from "../nav/Nav";
import Country from "../country/Country";
import {getAllCountries} from "../../redux/actions/index";

export class Countries extends Component{
    componentDidMount(){
        this.props.getAllCountries()
    }
    
    render(){
        return(
            <div>
                <h1>Paises ^-^</h1>
                <Nav />
                <Link />
            <ul>
           {this.props.countries && this.props.countries.map(data =>
             <li key={data.key}>
               <Country
                key={data.key}
                id={data.id}
                name={data.name}
                images_flags={data.images_flags}
                continent={data.continent}
                population={data.population}
               />
             </li>
            )}
            </ul>

            </div>
        )
    }
}

export const mapStateToProps = (state)=>{
    return{
      countries: state.countries
    }
  };
  
  export const mapDispatchToProps = (dispatch)=>{
    return{
      getAllCountries: function(){
        dispatch(getAllCountries())
      }
    }
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(Countries)
  
