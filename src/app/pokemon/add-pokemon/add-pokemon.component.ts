import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  template: `
  <h2 class="center">Add Pokemon</h2>
  <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
`})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }
}
