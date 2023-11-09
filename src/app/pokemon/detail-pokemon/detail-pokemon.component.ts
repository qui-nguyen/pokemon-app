import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    const pkmId: string | null = this.route.snapshot.paramMap.get('id');
    this.pokemon
      = pkmId
        ? this.pokemonService.getPokemonById(+pkmId)
        : undefined;
  }

  goToBack() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(id: number) {
    this.router.navigate(['edit/pokemon', id]);
  }
}
