import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../interfaces/pokemon.interface';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-listado-pokemon-equipo',
  templateUrl: './listado-pokemon-equipo.component.html',
  styles: [],
})
export class ListadoPokemonEquipoComponent implements OnInit {
  equipos: Equipo[] = [];
  constructor(private pokemonService: PokemonServiceService) {}

  ngOnInit(): void {
    this.equipos = this.pokemonService.mostrarEquipos();
  }
}
