export enum Type {
    Feu,
    Eau,
    Electrique,
    Vol,
    Poison,
    Plante
}

export class PokemonModel {
 specie: string;
 description: string;
 types: Type;

 constructor(specie: string,
             description: string,
             types: Type) {
this.description = description;
this.specie = specie;
this.types = types;
    }
}
