import Vehiculo from './Vehiculo.js';

export default class Terrestre extends Vehiculo {
  cantidadPuertas: number = 0;
  cantidadRuedas: number = 0;

  constructor(land: Terrestre = null) {
    super(land); //destructring
    if (land !== null) {
      this.cantidadPuertas = land.cantidadPuertas;
      this.cantidadRuedas = land.cantidadRuedas;
    }
  }

  toString(): string {
    return `${super.toString()}|${this.cantidadPuertas}|${this.cantidadRuedas}`;
  }

  static isTerrestre(obj: object): boolean {
    return Vehiculo.isVehiculo(obj) && obj.hasOwnProperty('cantidadPuertas') && obj.hasOwnProperty('cantidadRuedas');
  }
}
