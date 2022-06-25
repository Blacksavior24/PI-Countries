// Aca deben declarar las variables donde tengan el action types.
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
//export const DELETE_PRODUCT = 'DELETE_PRODUCT';

// Fijarse que la sintaxis de nuestra Action creator es distinta a lo que venimos haciendo. Esto es
// debido al uso del middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.

export const getAllProducts = () => {
  return async function (dispatch) {
    // Aca debes hacer la petición a la ruta del back http://localhost:3001/products
    // Pueden hacer la peticion con fetch o axios (documentación de axios: https://axios-http.com/docs/example)
    // Aclaración: todas las peticiones al back son asíncronas.
    let response = await fetch('http://localhost:3001/products')
    let data = await response.json()
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: data
    })
  };
};

export const getProductDetail = (id) => {
  return async (dispatch) => {
    // Aca debes hacer la petición a la ruta del back http://localhost:3001/products/:id
    try{let response = await fetch(`http://localhost:3001/products/${id}`)
      let data = await response.json();
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: data
      })
    }catch(err){
      console.error(err);
    }    
  };
};
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

export const deleteProduct = (id)=>{
  return{
    type: DELETE_PRODUCT,
    payload: id
  }
};
