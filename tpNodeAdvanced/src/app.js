/*
const axios = require('axios').default;


// Want to use async/await? Add the `async` keyword to your outer function/method.
async function starWars() {
    try {
      const response = await axios.get('/https://swapi.co/');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  starWars();

  */


  /**
 * Get all people form the Starwars API
 */
const axios = require("axios");
 let Planet = require('./planet.js').Planet;

let p=axios.get('https://swapi.co/api/planets').then(function(response){
    let tab=[];
    
    response.data.results.forEach(element => {
        let p = new Planet(element);
        tab.push(p);
    });

Planet.countPlanetsPopulation(tab);
    console.log(tab);
})

