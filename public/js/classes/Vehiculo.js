export default class Vehiculo {
    id = 0;
    modelo = '';
    añoFabricacion = 0;
    velocidadMaxima = 0;
    constructor(vehicle = null) {
        if (vehicle !== null) {
            this.id = vehicle.id;
            this.modelo = vehicle.modelo;
            this.añoFabricacion = vehicle.añoFabricacion;
            this.velocidadMaxima = vehicle.velocidadMaxima;
        }
    }
    toString() {
        return `${this.id}|${this.modelo}|${this.añoFabricacion}|${this.velocidadMaxima}`;
    }
    static isVehiculo(obj) {
        return obj.hasOwnProperty('id') && obj.hasOwnProperty('modelo') && obj.hasOwnProperty('añoFabricacion') && obj.hasOwnProperty('velocidadMaxima');
    }
}
