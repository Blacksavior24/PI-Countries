import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetail } from '../../redux/actions';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CardDetail = (props) => {
    const dispatch = useDispatch();
    const {id} = props.match.params;
    const data = useSelector((state)=>state.detail)
    
    if(!data.length){
        dispatch(getCountryDetail(id));
    }
    let aux;
    if(data){
        aux = data[0]?.activities.map(a=>{
            return(
                <div key={a.id}>
                    <h2> Activity </h2>
                    <h4> Name: {a.name} </h4>
                    <h4> Difficulty: {a.difficulty} </h4>
                    <h4> Duration: {a.duration} </h4>
                    <h4> Season: {a.season} </h4> 
                </div>
            )
        })
    }
    return (
        <div >
            {data.map(e =>(
                <div>
                <h4>{e.name}</h4>
                <img src={e.images_flags} alt="" />
                <h4>Continente:{e.continent}</h4>
                <h4>Popularidad: {e.population}</h4>
                <div>{aux.length?
                    aux: <h5>No existen actividades</h5>
                }
                </div>
                </div>
            ))}

    </div>


    )
}

export default CardDetail;