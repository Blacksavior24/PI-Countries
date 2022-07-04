// Importa las action types acá
import {GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL} from '../actions/index'

//import {GET_ALL_COUNTRIES,GET_PRODUCT_DETAIL,CREATE_PRODUCT, DELETE_PRODUCT} from '../actions/index'

const initialState = {
  countries: [],
  countryDetail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (  
    action.type
    // Acá va tu código:
  ) {
    case GET_ALL_COUNTRIES:
      return{
        ...state,
        countries: action.payload
      }
    case GET_COUNTRY_DETAIL:
      return{
        ...state,
        countryDetail: action.payload
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
