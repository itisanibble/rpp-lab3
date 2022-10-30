import Vehiculo from './Vehiculo.js';

export default class Aereo extends Vehiculo {
  alturaMaxima: number = 0;
  autonomia: number = 0;

  constructor(air: Aereo = null) {
    super(air); //destructring
    if (air !== null) {
      this.alturaMaxima = air.alturaMaxima;
      this.autonomia = air.autonomia;
    }
  }

  toString(): string {
    return `${super.toString()}|${this.alturaMaxima}|${this.autonomia}`;
  }

  static isAereo(obj: object): boolean {
    return Vehiculo.isVehiculo(obj) && obj.hasOwnProperty('alturaMaxima') && obj.hasOwnProperty('autonomia');
  }
}
