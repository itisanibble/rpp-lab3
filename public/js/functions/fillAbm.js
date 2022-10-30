import { id, modelo, añoFabricacion, velocidadMaxima, alturaMaxima, autonomia, cantidadPuertas, cantidadRuedas, abmSelect } from '../global/selectors.js';
import Terrestre from '../classes/Terrestre.js';
import Aereo from '../classes/Aereo.js';
import abmSelectChange from './abmSelectChange.js';
const fillAbm = (obj) => {
    id.dataset.id = obj.id.toString();
    id.value = obj.id.toString();
    modelo.value = obj.modelo;
    añoFabricacion.value = obj.añoFabricacion.toString();
    velocidadMaxima.value = obj.velocidadMaxima.toString();
    if (obj instanceof Aereo) {
        abmSelect.value = 'aereo';
        abmSelectChange('aereo');
        alturaMaxima.value = obj.alturaMaxima.toString();
        autonomia.value = obj.autonomia.toString();
    }
    else if (obj instanceof Terrestre) {
        abmSelect.value = 'terrestre';
        abmSelectChange('terrestre');
        cantidadPuertas.value = obj.cantidadPuertas.toString();
        cantidadRuedas.value = obj.cantidadRuedas.toString();
    }
    abmSelect.setAttribute('disabled', 'true');
};
export default fillAbm;
