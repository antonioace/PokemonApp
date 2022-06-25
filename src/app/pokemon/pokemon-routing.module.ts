import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEquipoComponent } from './pages/crear-equipo/crear-equipo.component';
import { ListadoPokemonEquipoComponent } from './pages/listado-pokemon-equipo/listado-pokemon-equipo.component';
import { PorHabilidadComponent } from './pages/por-habilidad/por-habilidad.component';
import { PorNombreComponent } from './pages/por-nombre/por-nombre.component';
import { VerHabilidadComponent } from './pages/ver-habilidad/ver-habilidad.component';
import { VerPokemonComponent } from './pages/ver-pokemon/ver-pokemon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'lista-equipos',

        component: ListadoPokemonEquipoComponent,
      },

      {
        path: 'crear-equipo',
        component: CrearEquipoComponent,
      },
      {
        path: 'habilidades',
        component: PorHabilidadComponent,
      },

      {
        path: 'lista',
        component: PorNombreComponent,
      },

      {
        path: 'habilidad/:id',
        component: VerHabilidadComponent,
      },
      {
        path: 'informacion/:id',
        component: VerPokemonComponent,
      },
      {
        path: '**',
        redirectTo: 'lista',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
