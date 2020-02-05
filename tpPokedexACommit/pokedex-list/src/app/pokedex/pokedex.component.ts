import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '../pokemon/pokemon.model';
import data from '../../assets/pokemon.data.js';
@Component({
  selector: 'pkd-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
pokemons: PokemonModel[] = new Array();
pokemon: PokemonModel;
survol: string = "Aucun";
  constructor() { }

  ngOnInit() {
   data.forEach(element => {
     let specie = element.specie;
     let description = element.description;
     let type = element.types;
     let pokemon = new PokemonModel(specie, description, type);
     this.pokemons.push(pokemon);
   });
  }


pokeIn(pokem: PokemonModel){
  this.survol = pokem.specie;
}

pokeOut(){
  this.survol= "Aucun";
}
}
