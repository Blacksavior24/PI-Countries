const {Router} = require('express');
const {countriesDB, obtenerCountry} = require('./services/countries.services');
const {Op} = require('sequelize')

const router = Router();

router.get('/', async (req, res)=>{
    /*try {
        const allCountries = await countriesDB();
        if(allCountries){
            res.status(200).send(allCountries);
        } else {
            res.status(404).send('Error 404, Paises no encontrados');
        }
    } catch (err) {
        console.log('Error ruta en el llamado ' + err);
    }*/
    //USANDO QUERY USANDO LO DEMÁS
    try{
        const name = req.query.name;
        let countryTotal = await countriesDB();
        if(name){
            let countryName = await countryTotal.filter( el => el.name.toLowerCase().includes(name.toLowerCase()))
            countryName.length?
            res.status(200).send(countryName) :
            res.status(204).send([])
        }else{
            res.status(200).send(countryTotal)
        }
    }catch(err){
        console.log('Error en la ruta de llamado'+err);
    }
})

router.get('/:id', async (req, res, next)=>{
    try {
        const { id } = req.params;
        const pais = await obtenerCountry(id);
        res.status(200).json(pais);
    } catch (error) {
        console.log('Error en la ruta'+error);
    }
})


module.exports = router;