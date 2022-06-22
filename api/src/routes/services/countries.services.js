const {Country , Activity } = require('../../db')



const countriesDB = async () =>{

    try {
        const Paises = await Country.findAll({
            include: [Activity]
        })
        return Paises;
    } catch (error) {
        console.log('Error en el controlador'+error);
    }
    
}


//traemos el pais unico con el id buscando por la llave primaria 
const obtenerCountry = async (id) =>{
    try {
        const pais = await Country.findByPk(id,{
            include: [Activity]
        });
        return pais;
    } catch (error) {
        console.log('Error en obtener un unico pais'+error);
    }
 
}


module.exports = {
    obtenerCountry,
    countriesDB,
}