import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 *ngIf="pokemon" class="center">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture">
    </p>
    <app-pokemon-form  *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>

  <div class="center">
    <app-loader *ngIf="!pokemon"></app-loader>
  </div>
  `
})

export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pkmId: string | null = this.route.snapshot.paramMap.get('id');

    pkmId
      ? this.pokemonService.getPokemonById(+pkmId).subscribe((pkm) => this.pokemon = pkm)
      : (this.pokemon = undefined);
  }
}
