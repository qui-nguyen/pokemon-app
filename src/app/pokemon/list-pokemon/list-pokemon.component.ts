import { Component, OnInit } from '@angular/core';
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
    this.pokemonService.getPokemonList().subscribe((pkmList) => this.pokemonList = pkmList);
    this.pokemonService.getPokemonTypeList().subscribe((allTypes) => this.pokemonTypeList = allTypes);
  }

  goToPokemon(id: number) {
    this.router.navigate(['/pokemon', id]);
  }
}

