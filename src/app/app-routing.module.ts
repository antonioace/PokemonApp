import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./pokemon/pokemon.module').then((m) => m.PokemonModule),
  },

  {
    path: '**',
    redirectTo: 'pokemon',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(rutas)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
