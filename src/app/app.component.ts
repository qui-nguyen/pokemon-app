import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemmon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    // console.table(this.pokemonList);
  }

  selectPokemeon(pokemonId: string) {
    const pokemon: Pokemon | undefined
      = this.pokemonList.find(pok => pok.id === +pokemonId);
    this.pokemonSelected = pokemon;
    if(pokemon) {
      console.log(`Vous avez cliqué  sur le pokémon ${pokemon.name}`);
    } else {
      console.log(`Votre pokémon n'existe pas !`);
    }
  }
}
