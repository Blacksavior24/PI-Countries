//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios');

// Syncing all the models at once.
conn.sync({ force: false }).then(async() => {  
  const verification = await Country.findAll()
  //precarga de los paises
  if(verification.length <1){
    const countries = await axios.get("https://restcountries.com/v3.1/all")
    
    const formato = countries.data?.map(c=>{
      return{
        id: c.cca3? c.cca3 : "Unknown",
        name: c.name.common ? c.name.common : "Unknown",
        capital:  c.capital ? c.capital[0] : ["Unknown"],
        subregion: c.subregion ? c.subregion : "Unknown",
        population: c.population ? c.population : 0,
        area:  c.area ? c.area : 0,
        images_flags: c.flags.png ? c.flags.png: "Unknown",
        continent: c.continents[0] ? c.continents[0] : "Unknown",
      }
    })

    //console.log(formato)
      //bulkCreate --- > recibe un arreglo de objetos y crea una fila con cada uno 
        
      await Country.bulkCreate(formato)
      console.log("se cargaron los paises exitosamente!")

  }
  

  //chequeamos que lo que traemos es lo que necesitamos guardar

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    console.log('Levantamos la db');
    console.log('todo perfecto');
  });
});
