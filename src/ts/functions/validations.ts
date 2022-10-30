import { id, modelo, añoFabricacion, velocidadMaxima, alturaMaxima, autonomia, cantidadPuertas, cantidadRuedas, abmSelect } from '../global/selectors.js';

export const validationFields = (): boolean => {
  if (
    (id.value || id.dataset.id) &&
    modelo.value &&
    añoFabricacion.value &&
    isNaN(añoFabricacion.valueAsNumber) &&
    Number.parseInt(añoFabricacion.value) > 0 &&
    velocidadMaxima.value &&
    isNaN(velocidadMaxima.valueAsNumber) &&
    Number.parseInt(velocidadMaxima.value) > 0
  ) {
    if (abmSelect.value == 'aereo') {
      if (alturaMaxima.value && isNaN(alturaMaxima.valueAsNumber) && Number.parseInt(alturaMaxima.value) > 0 && autonomia.value && isNaN(autonomia.valueAsNumber) && Number.parseInt(autonomia.value) > 0) {
        return true;
      }
    } else if (abmSelect.value == 'terrestre') {
      if (cantidadPuertas.value && isNaN(cantidadPuertas.valueAsNumber) && Number.parseInt(cantidadPuertas.value) > 0 && cantidadRuedas.value && isNaN(cantidadRuedas.valueAsNumber) && Number.parseInt(cantidadRuedas.value) > 0) {
        return true;
      }
    } else {
      window.alert('Error en validar');
    }
  }
  return false;
};
