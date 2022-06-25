import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-input',
  templateUrl: './pokemon-input.component.html',
  styles: [],
})
export class PokemonInputComponent implements OnInit {
  @Output() OnEnter: EventEmitter<string> = new EventEmitter();
  termino: string = '';

  buscar() {
    console.log(this.termino);
  }
  constructor() {}

  ngOnInit(): void {}
}
