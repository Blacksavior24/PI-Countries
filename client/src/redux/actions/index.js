import axios from "axios";
// Aca deben declarar las variables donde tengan el action types.
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
//export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';

// Fijarse que la sintaxis de nuestra Action creator es distinta a lo que venimos haciendo. Esto es
// debido al uso del middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.

export const getAllCountries = () => {
  return async function (dispatch) {
    let response = await fetch('http://localhost:3001/countries')
    let data = await response.json()
    console.log(data.length);
    return dispatch({
      type: 'GET_ALL_COUNTRIES',
      payload: data
    })
  };
};

export const getCountryDetail = (id) => {
  return async function(dispatch){
    try{
      let response = await axios(`http://localhost:3001/countries/${id}`)
      return dispatch({
        type: 'GET_COUNTRY_DETAIL',
        payload: response.data
      })
    }catch(err){
      console.error("mal id xD"+err);
    }    
  };
};/*
let id= 6;
// Desde el componente correspondiente ejecutamos esta action creator, pasandole por params las values que vamos a usar para
export const createProduct = (data)=>{
  return {
    type: CREATE_PRODUCT,
    payload:{
      id: id++,
      ...data
    }
  };
};
*/
