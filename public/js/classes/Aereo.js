import Vehiculo from './Vehiculo.js';
export default class Aereo extends Vehiculo {
    alturaMaxima = 0;
    autonomia = 0;
    constructor(air = null) {
        super(air);
        if (air !== null) {
            this.alturaMaxima = air.alturaMaxima;
            this.autonomia = air.autonomia;
        }
    }
    toString() {
        return `${super.toString()}|${this.alturaMaxima}|${this.autonomia}`;
    }
    static isAereo(obj) {
        return Vehiculo.isVehiculo(obj) && obj.hasOwnProperty('alturaMaxima') && obj.hasOwnProperty('autonomia');
    }
}
