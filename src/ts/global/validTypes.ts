import Terrestre from '../classes/Terrestre';
import Aereo from '../classes/Aereo.js';

export type validClases = Terrestre | Aereo;
export type validAtributs = 'id' | 'modelo' | 'añoFabricacion' | 'velocidadMaxima' | 'alturaMaxima' | 'autonomia' | 'cantidadPuertas' | 'cantidadRuedas';
