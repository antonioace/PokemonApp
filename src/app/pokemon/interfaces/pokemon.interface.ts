export interface Equipo {
  nombre: string;
  pokemones: Pokemon[];
}

export interface Pokemon {
  name: string;
  types: string;
  image: string;
  weight: number;
}
