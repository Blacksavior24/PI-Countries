import React from 'react';
import {deleteProduct} from '../../redux/actions/index'
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  
  return (
    <div>
      <button onClick={() => deleteProduct(props.id)}>x</button>
                <Link to={`/product/${props.id}`} > 
                <h3>{props.name}</h3>
                </Link>
                <img src={props.image} alt={props.name} />
                <p>Stock: {props.stock}</p>
                <p>Precio: ${props.price}</p>
    </div>
  );
};

export default ProductCard;