import axios from "axios";

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
      //console.error("mal id xD"+err);
    }    
  };
};

export function getCountriesName (name){
  return async function (dispatch){
      try{
          const r = await axios (`http://localhost:3001/countries?name=${name}`)
          return dispatch({type: 'GET_COUNTRIES_NAME', payload: r.data})
      }
      catch(err){
          //console.log('no existe el nombre')
      }
  }
};

export function addActivity (activity){
  return async function (dispatch){
      
      try{
          const data = await axios.post('http://localhost:3001/activity', activity)
          return dispatch({type:'ADD_ACTIVITY', payload: data.data})
      }
      catch(err){
          //console.log(err)
         
      }
  }
};

export  function getActivity (){ 
  return async function (dispatch){
      let respuesta
      try{ 
          respuesta = await axios.get('http://localhost:3001/activity')
          
      }
      catch(err){
          console.log(err)
      }
      if(respuesta){
          respuesta = await respuesta.data
          return dispatch({type:'GET_ACTIVITY', payload: respuesta })
      }
  }
};
