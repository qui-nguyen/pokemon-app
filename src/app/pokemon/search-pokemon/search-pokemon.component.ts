import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html'
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>(); // rôle: stocker des recherches successibles de l'utilsateur 
  // => but: utilisé pour créer un flux dans le temps des recherches sous form string[]
  // (new Subject : permettre piloter Observable)

  pokemons$: Observable<Pokemon[]>; // rôle: stocker le résultat de recherche

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // {..."a"."ab"..."abz".."ab"..."abc".....} //=> search term dasn le temps
      debounceTime(300), // => prendre que les terms avec le temps de typage est supérieur à 300ms après
      // {...ab...ab...abc.....}
      distinctUntilChanged(), // => prendre les valeurs uniques
      // {...ab...abc.....}
      switchMap(term => this.pokemonService.searchPokemonByName(term)) // garder que la dernière et supprimer les autres observables (même en cours) => économiser les ressources 
      // {... pokemonList[] avec "ab"... pokemonList[] avec "abc"}
    )
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(id: number) {
    this.router.navigate(['/pokemon', id]);
  }
}
