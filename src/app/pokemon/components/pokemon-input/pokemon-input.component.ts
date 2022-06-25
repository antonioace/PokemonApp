import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-input',
  templateUrl: './pokemon-input.component.html',
  styles: [],
})
export class PokemonInputComponent implements OnInit {
  @Output() OnEnter: EventEmitter<string> = new EventEmitter();
  termino: string = '';

  buscar() {
    this.OnEnter.emit(this.termino);
  }
  constructor(private pokemonService: PokemonServiceService) {}

  ngOnInit(): void {}
}
