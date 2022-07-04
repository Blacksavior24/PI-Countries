import {compareAZ, compareZA, MayorPoblacion, MenorPoblacion} from './filtrado'

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
        countries: payload,
        countriesApi: payload
      }
    case 'GET_COUNTRY_DETAIL':
      return{
        ...state,
        detail: payload
      }
    case 'GET_COUNTRIES_NAME':
      return{
        ...state,
        countriesApi: payload
      }
    case 'ADD_ACTIVITY':
      return{
        ...state, 
        actividad: payload
      }   
    case 'GET_ACTIVITY':
      return{
        ...state,
        actividad: payload
      }  
    case 'GET_CONTINENTS':
      const allcountries = state.countries
      const filtro = payload === 'All' ? 
      allcountries:
      allcountries.filter(c => c.continent === payload)
        return{
          ...state,
          countriesApi: filtro
      }
    /*case CREATE_PRODUCT:
      return{
        ...state,
        countries: [...state.countries,action.payload]
      }*/
    default: 
      return state;
  }
};

export default rootReducer;
