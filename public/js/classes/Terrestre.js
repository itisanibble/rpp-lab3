import Vehiculo from './Vehiculo.js';
export default class Terrestre extends Vehiculo {
    cantidadPuertas = 0;
    cantidadRuedas = 0;
    constructor(land = null) {
        super(land);
        if (land !== null) {
            this.cantidadPuertas = land.cantidadPuertas;
            this.cantidadRuedas = land.cantidadRuedas;
        }
    }
    toString() {
        return `${super.toString()}|${this.cantidadPuertas}|${this.cantidadRuedas}`;
    }
    static isTerrestre(obj) {
        return Vehiculo.isVehiculo(obj) && obj.hasOwnProperty('cantidadPuertas') && obj.hasOwnProperty('cantidadRuedas');
    }
}
