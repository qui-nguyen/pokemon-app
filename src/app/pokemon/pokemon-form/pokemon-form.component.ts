import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  allTypes: string[];
  isAddForm: boolean;

  constructor(
    private router: Router,
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonTypeList().subscribe((allTypes) => this.allTypes = allTypes);
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string): void {
    const isChecked = ($event.target as HTMLInputElement).checked;
    const pokemonTypesPrev = this.pokemon.types;

    this.pokemon.types =
      isChecked
        ? [...pokemonTypesPrev, type]
        : pokemonTypesPrev.filter(t => t !== type);
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit() {
    if (this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon)
        .subscribe((res) => res !== undefined
          ? this.router.navigate(['/pokemon', res.id])
          : alert("Une erreur survenue lors de la création du pokémon !")
        )
      
      return;
    }

    this.pokemonService.updatePokemon(this.pokemon)
      .subscribe((res) => res === null
        ? this.router.navigate(['/pokemon', this.pokemon.id])
        : alert("Une erreur survenue !")
      )
  }
}
