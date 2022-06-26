import React from 'react';
import { Link } from 'react-router-dom';
      
const Country = (props) => {
  
  return (
    <div>
                <img src={props.images_flags} alt={props.images_flags} />
                <Link to={`/countries/${props.id}`} > 
                <h3>{props.name}</h3>
                </Link>
                <p>Continent: {props.continent}</p>
                <p>Population: {props.population}</p>
                
    </div>
  );
};

export default Country;