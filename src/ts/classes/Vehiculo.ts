export default class Vehiculo {
  id: number = 0;
  modelo: string = '';
  añoFabricacion: number = 0;
  velocidadMaxima: number = 0;

  constructor(vehicle: Vehiculo = null) {
    if (vehicle !== null) {
      this.id = vehicle.id;
      this.modelo = vehicle.modelo;
      this.añoFabricacion = vehicle.añoFabricacion;
      this.velocidadMaxima = vehicle.velocidadMaxima;
    }
  }

  toString(): string {
    return `${this.id}|${this.modelo}|${this.añoFabricacion}|${this.velocidadMaxima}`;
  }

  static isVehiculo(obj: object): boolean {
    return obj.hasOwnProperty('id') && obj.hasOwnProperty('modelo') && obj.hasOwnProperty('añoFabricacion') && obj.hasOwnProperty('velocidadMaxima');
  }
}
