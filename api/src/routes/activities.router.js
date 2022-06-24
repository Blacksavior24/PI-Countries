const { Router } = require('express');
const { obteneractividades,borraractividades } = require('./services/activities.services.js')
const {Activity, Country} = require('../db');
const router = Router();

router.post('/', async (req ,res , next)=>{
    //aqui hay que hacer mas comprobaciones de como vienen los datos 
    //console.log("Acitividad Recibido !")
    //console.log(activity)
        try {
            const {name,difficulty,duration,season,countries}  = req.body; 
            console.log(req.body)
            console.log(countries)
            const crear = await Activity.create({
                name,
                difficulty,
                duration,
                season
            });
            /*countries.forEach( async ep =>{
                let busqueda = await Country.findAll({where : {name:ep} })
                if(busqueda){
                    await crear.addCountry(ep)
                }
            })*/
            let idcountry = await Country.findAll({
                where: {id:countries}
            })
            crear.addCountry(idcountry);
            res.status(200).send("ok ! Se creó perfectamente !")
        } catch (error) {
            next(error)
        }
    
})

  module.exports = router;


router.get('/', async (req, res)=>{
    try {
        const allactivities = await obteneractividades();
        if(allactivities){
            res.status(200).send(allactivities);
        } else {
            res.status(404).send('Error 404, Actividades no encontrados');
        }
    } catch (err) {
        console.log('Error ruta actividades ' + err);
    }
});

/*
router.delete('/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        await borraractividades(id);
        res.status(201).json({id});
    } catch (error) {
        console.log('Borrado completo');
    }
})
*/
module.exports = router;