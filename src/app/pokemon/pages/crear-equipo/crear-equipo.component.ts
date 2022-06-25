import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../interfaces/pokemon.interface';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css'],
})
export class CrearEquipoComponent implements OnInit {
  nombreEquipo: string = '';

  equipo: Equipo = {
    nombre: '',
    pokemones: [],
  };

  guardar() {
    this.equipo = {
      nombre: this.nombreEquipo,
      pokemones: [],
    };

    console.log(this.nombreEquipo);
    this.pokemonService.agregarEquipo(this.equipo);
    console.log(this.pokemonService.mostrarEquipos());
  }
  constructor(private pokemonService: PokemonServiceService) {}

  ngOnInit(): void {}
}
