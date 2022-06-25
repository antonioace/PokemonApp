import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { ListadoPokemonEquipoComponent } from './pages/listado-pokemon-equipo/listado-pokemon-equipo.component';
import { PorHabilidadComponent } from './pages/por-habilidad/por-habilidad.component';
import { PorNombreComponent } from './pages/por-nombre/por-nombre.component';
import { CrearEquipoComponent } from './pages/crear-equipo/crear-equipo.component';
import { VerPokemonComponent } from './pages/ver-pokemon/ver-pokemon.component';
import { VerHabilidadComponent } from './pages/ver-habilidad/ver-habilidad.component';
import { PokemonInputComponent } from './components/pokemon-input/pokemon-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListadoPokemonEquipoComponent,
    PorHabilidadComponent,
    PorNombreComponent,
    CrearEquipoComponent,
    VerPokemonComponent,
    VerHabilidadComponent,
    PokemonInputComponent,
  ],
  imports: [CommonModule, PokemonRoutingModule, FormsModule],
})
export class PokemonModule {}
