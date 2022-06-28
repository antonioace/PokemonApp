import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-por-nombre',
  templateUrl: './por-nombre.component.html',
  styleUrls: ['./por-nombre.component.css'],
})
export class PorNombreComponent implements OnInit {
  constructor(private pokemonService: PokemonServiceService) { }
  pokemones: Pokemon[] = [];
  termino: string = ''
  hayError: boolean = false
  pokemon: Pokemon = {
    name: '',
    types: '',
    image: '',
    weight: 0,
  };
  buscarPokemon(termino: string) {
    this.termino = termino.toLocaleLowerCase()
    this.pokemonService.getJson(termino.toLocaleLowerCase()).subscribe((pokemon) => {
      this.hayError = false
      this.pokemon = {
        name: pokemon.name,
        types: pokemon.types[0].type.name,
        image: pokemon.sprites.front_default,
        weight: pokemon.weight,
      };

      this.pokemones.push(this.pokemon);
      console.log(this.pokemones);
    },

      (error => {

        this.hayError = true

      }));
  }
  ngOnInit(): void { }
}
