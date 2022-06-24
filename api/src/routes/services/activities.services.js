const { Activity, Country } = require('../../db.js')

//nueva actividad

const obteneractividades = async ()=>{
    try {
        const actividades = await Activity.findAll({
            include: [Country]
        });
        return actividades;
    } catch (err) {
        console.log('Error en traer '+ err);
    }
}

const borraractividades = async (id)=>{
    try {
        const actividades = await Activity.findOne(id);
        await actividades.destroy();
        return {rta:true};
    } catch (err) {
        console.log('Error en el servicio');
    }
}

    

module.exports = {
    obteneractividades
};