import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemmon-list';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemon: Pokemon | undefined;
  constructor(private route: ActivatedRoute, private router: Router)  { 

  }
  ngOnInit(): void {
    const pkmId: string | null = this.route.snapshot.paramMap.get('id');
    console.log(pkmId);
    this.pokemon
      = pkmId
        ? this.pokemonList.find(pkm => pkm.id === +pkmId)
        : undefined;
  }

  goToBack(){
    this.router.navigate(['/pokemons']);
  }
}
