import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './pokemon/mock-pokemmon-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const pokemons = POKEMONS;

    const allTypes = [...new Set(POKEMONS.flatMap(pokemon => pokemon.types))];
    
    return { pokemons, allTypes }; // endpoint of api
  }
}