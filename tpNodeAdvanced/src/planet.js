class Planet{

    constructor({name, population})
    {
        this._name=name;
        this._population = population;
    }
    get name()
    {
        return this._name;
    }

    set name(name)
    {
        this._name = name;
    }

    get population()
    {
        return this._population;
    }

    set population(population){
        this._population = population; 
    }

    static countPlanetsPopulation(tab)
    {
        /*
        let reducer = (accumulator, _population) => accumulator + _population;
        console.log(tab.reduce(reducer));
        return reducer;
*/
        let reducer = tab.reduce((a,b) => a+b._population,0);
      
       console.log(reducer);
       return reducer;
        
    }

}
module.exports.Planet = Planet;
