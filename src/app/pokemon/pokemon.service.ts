import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemmon-list';

@Injectable(
  // { providedIn: 'root'} // provide all appli
)
export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(id: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id === id);
  }

  getPokemonTypeList(): string[] {
    return [...new Set(POKEMONS.flatMap(pokemon => pokemon.types))]; // unique type value
  }
}
