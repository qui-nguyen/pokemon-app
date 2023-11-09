import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PokemonService } from './pokemon.service';

const pokemonRoutes: Routes = [ // declare les routes spécifiques en hut puis générales en bas
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent }
]


@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService] 
  // utilisation de ce service slm dans pokémon module (pas module global) => voir pokemon.service pour l'utilisation en global
})
export class PokemonModule { }
