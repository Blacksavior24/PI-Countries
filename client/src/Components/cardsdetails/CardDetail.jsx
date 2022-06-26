import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetail } from '../../redux/actions';
// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CardDetail = () => {
    const dispatch = useDispatch();
    React.useEffect (()=>{
        dispatch(getCountryDetail())
    }, [dispatch])

    const data = useSelector((state)=>state.countries)
    return (
        <div>
            <h4>{data.id}</h4>
            <h4>Nombre: {data.name}</h4>
            <img src={data.images_flags} alt="bandera" />
            <h4>Continente:{data.continent}</h4>
            <h4>Popularidad: {data.population}</h4>
            <h4>Actividades: {data.activities}</h4>
        </div>
    )
}

export default CardDetail;
