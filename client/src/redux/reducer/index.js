// Importa las action types acá
//import {GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL} from '../actions/index'

const initialState = {
  countries: [],
  countriesApi:[],
  loading: false,
  detail: [],
  activdad: [],
  continent: []

};

//actios = {type, payload}
const rootReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case 'GET_ALL_COUNTRIES':
      return{
        ...state,
        countries: payload
      }
    case 'GET_COUNTRY_DETAIL':
      return{
        ...state,
        detail: payload
      }/*
    case CREATE_PRODUCT:
      return{
        ...state,
        countries: [...state.countries,action.payload]
      }*/
    default: 
      return state;
  }
};

export default rootReducer;
