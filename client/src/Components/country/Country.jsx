import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getCountryDetail} from '../../redux/actions/index';

const Country = (props) => {
  const dispatch = useDispatch();
  return (
        <Link to={`/countries/${props.id}`} >
    <div key={props.id} onClick={()=>dispatch(getCountryDetail(props.id))}>
        <img src={props.images_flags} alt={props.images_flags} />
        <h4>{props.name}</h4>
        <p>Continent: {props.continent}</p>
        <p>Population: {props.population}</p> 
           
    </div>
    </Link>
  );
};

export default Country;