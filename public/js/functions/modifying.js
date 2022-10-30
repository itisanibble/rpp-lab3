import Aereo from '../classes/Aereo.js';
import Terrestre from '../classes/Terrestre.js';
import { abmSelect, id, modelo, añoFabricacion, velocidadMaxima, alturaMaxima, autonomia, cantidadPuertas, cantidadRuedas } from '../global/selectors.js';
import showForm from './showForm.js';
import { validationFields } from './validations.js';
const findId = (json, id) => {
    for (let i = 0; i < json.length; i++) {
        if (json[i].id == id) {
            return i;
        }
    }
    return -1;
};
const modifying = (json) => {
    if (validationFields()) {
        if (window.confirm('confirmar: modificar"')) {
            let indice = findId(json, id.dataset.id);
            if (indice == -1) {
                window.alert('Error al dar un modificar');
            }
            else {
                if (abmSelect.value == 'terrestre') {
                    let terrestre = new Terrestre(null);
                    terrestre.id = Number.parseInt(id.dataset.id);
                    terrestre.modelo = modelo.value;
                    terrestre.añoFabricacion = Number.parseInt(añoFabricacion.value);
                    terrestre.velocidadMaxima = Number.parseInt(velocidadMaxima.value);
                    terrestre.cantidadPuertas = Number.parseInt(cantidadPuertas.value);
                    terrestre.cantidadRuedas = Number.parseInt(cantidadRuedas.value);
                    json[indice] = terrestre;
                    showForm('datos');
                }
                else if (abmSelect.value == 'aereo') {
                    let aereo = new Aereo(null);
                    aereo.id = Number.parseInt(id.dataset.id);
                    aereo.modelo = modelo.value;
                    aereo.añoFabricacion = Number.parseInt(añoFabricacion.value);
                    aereo.velocidadMaxima = Number.parseInt(velocidadMaxima.value);
                    aereo.alturaMaxima = Number.parseInt(alturaMaxima.value);
                    aereo.autonomia = Number.parseInt(autonomia.value);
                    json[indice] = aereo;
                    showForm('datos');
                }
                else {
                    window.alert('Error al hacer un modificacion');
                }
            }
        }
    }
    else {
        window.alert('Datos incorrectos');
    }
    return json;
};
export default modifying;
