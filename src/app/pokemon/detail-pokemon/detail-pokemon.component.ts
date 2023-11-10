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

    pkmId
      ? this.pokemonService.getPokemonById(+pkmId).subscribe((pkm) => this.pokemon = pkm)
      : (this.pokemon = undefined);
  }

  goToBack() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(id: number) {
    this.router.navigate(['edit/pokemon', id]);
  }

  deletePokemon(id: number) {
    this.pokemonService.deletePokemonById(id)
      .subscribe((res) => res === null
        ? this.goToBack()
        : alert("Erreur survenue lorsque de la suppression du pokémon !")
      );
  }
}
