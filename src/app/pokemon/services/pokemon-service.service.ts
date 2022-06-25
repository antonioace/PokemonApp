import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo, Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  equipos: Equipo[] = [];
  constructor(private http: HttpClient) {
    if (localStorage.getItem('equipos')) {
      this.equipos = JSON.parse(localStorage.getItem('equipos')!) || [];
    }
  }

  getJson(pokemon: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  }

  agregarEquipo(equipo: Equipo) {
    this.equipos.push(equipo);

    localStorage.setItem('equipos', JSON.stringify(this.equipos));
  }

  mostrarEquipos(): Equipo[] {
    return [...this.equipos];
  }
}
