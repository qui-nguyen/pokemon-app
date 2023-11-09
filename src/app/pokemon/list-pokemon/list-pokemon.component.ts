import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemmon-list';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemonTypeList: string[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService) {
  }
  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getPokemonList();
    this.pokemonTypeList = this.pokemonService.getPokemonTypeList();
    console.log(this.pokemonTypeList);
  }

  goToPokemon(id: number) {
    this.router.navigate(['/pokemon', id]);
  }
}

