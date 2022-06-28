import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-ver-pokemon',
  templateUrl: './ver-pokemon.component.html',

})
export class VerPokemonComponent implements OnInit {
  pokemon!: Pokemon
  constructor(private activatedRouted: ActivatedRoute, private pokemonService: PokemonServiceService, private router: Router) { }

  ngOnInit(): void {


    this.activatedRouted.params.pipe(switchMap(({ id }) => { return this.pokemonService.getJson(id) })).subscribe(

      (resp) => {

        this.pokemon = {

          name: resp.name,
          types: resp.types[0].type.name,
          image: resp.sprites.front_default,
          weight: resp.weight,
        }
      }
    )
  }



  regresar() {
    this.router.navigate(['/pokemon/listado'])

  }



}
