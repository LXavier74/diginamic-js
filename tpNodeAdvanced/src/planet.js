class Planet{

    constructor({name, population})
    {
        this._name=name;
        this.population = population;
    }
    get name()
    {
        return this._name;
    }

    set name(name)
    {
        this._name = name;
    }
/*
    get population()
    {
        return this.population;
    }

    set population(population){
        this._population = population; 
    }
*/
    static countPlanetsPopulation(tab)
    {
     
for(let i=0;i<tab.length;i++)
        {
            if(tab[i].population=="unknown")
            {
                tab[i].population=0;
            }
        }
        let reducer = tab.reduce((a,b) => a+parseInt(b.population),0);
      
       console.log(reducer);
       return reducer;
        
    }

}
module.exports.Planet = Planet;
