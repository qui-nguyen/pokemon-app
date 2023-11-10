import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, of, catchError } from 'rxjs';

@Injectable(
  // { providedIn: 'root'} // provide all appli
)
export class PokemonService {

  constructor(private http: HttpClient) {

  }

  getPokemonList(): Observable<Pokemon[]> {
    // return POKEMONS;
    return this.http.get<Pokemon[]>('api/pokemons')
      .pipe(
        tap((result) => this.log(result)),
        catchError((error) => this.handleError(error, undefined))
      )
  }

  getPokemonById(id: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${id}`)
      .pipe(
        tap((result) => this.log(result)),
        catchError((error) => this.handleError(error, undefined))
      )
  }

  updatePokemon(pokemon: Pokemon): Observable<null | undefined> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((result) => this.log(result)),
      catchError((error => this.handleError(error, undefined)))
    )
  }

  deletePokemonById(id: number): Observable<null | undefined> {
    return this.http.delete(`api/pokemons/${id}`).pipe(
      tap((result) => this.log(result)),
      catchError((error => this.handleError(error, undefined)))
    )
  }

  private log(response: any): void {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeList(): Observable<string[]> {
    return this.http.get<string[]>(`api/allTypes`)
      .pipe(
        tap((result) => {
          this.log(result);
        }),
        catchError((error) => this.handleError(error, undefined))
      )
  }
}
