import Aereo from '../classes/Aereo.js';
import Terrestre from '../classes/Terrestre.js';
import { id, modelo, añoFabricacion, velocidadMaxima, alturaMaxima, autonomia, cantidadPuertas, cantidadRuedas, abmSelect } from '../global/selectors.js';
import { validClases } from '../global/validTypes.js';
import showForm from './showForm.js';
import { validationFields } from './validations.js';

const heighting = (json: Array<validClases>): Array<validClases> => {
  if (validationFields()) {
    if (window.confirm('Confirmación: alta')) {
      if (abmSelect.value == 'aereo') {
        let aereo = new Aereo(null);
        aereo.id = Number.parseInt(id.dataset.id);
        aereo.modelo = modelo.value;
        aereo.añoFabricacion = Number.parseInt(añoFabricacion.value);
        aereo.velocidadMaxima = Number.parseInt(velocidadMaxima.value);
        aereo.alturaMaxima = Number.parseInt(alturaMaxima.value);
        aereo.autonomia = Number.parseInt(autonomia.value);
        json = [...json, aereo];
        showForm('datos');
      } else if (abmSelect.value == 'terrestre') {
        let terrestre = new Terrestre(null);
        terrestre.id = Number.parseInt(id.dataset.id);
        terrestre.modelo = modelo.value;
        terrestre.añoFabricacion = Number.parseInt(añoFabricacion.value);
        terrestre.velocidadMaxima = Number.parseInt(velocidadMaxima.value);
        terrestre.cantidadPuertas = Number.parseInt(cantidadPuertas.value);
        terrestre.cantidadRuedas = Number.parseInt(cantidadRuedas.value);
        json = [...json, terrestre];
        showForm('datos');
      } else {
        window.alert('Error con el alta');
      }
    }
  } else {
    window.alert('Datos incorrectos');
  }
  return json;
};
export default heighting;
