import { id, modelo, añoFabricacion, velocidadMaxima, alturaMaxima, autonomia, cantidadPuertas, cantidadRuedas, abmSelect, btnHight, btnRemove, btnModify } from '../global/selectors.js';
import { validClases } from '../global/validTypes.js';
import abmSelectChange from './abmSelectChange.js';
import showForm from './showForm.js';

const maximun = (n, m) => (n.id > m.id ? n : m);

const adding = (json: Array<validClases>) => {
  showForm('abm');
  id.dataset.id = (Number.parseInt(json.reduce(maximun, 0).id) + 1).toString();
  id.value = '';
  abmSelect.removeAttribute('disabled');

  //borrando todos los datos
  modelo.value = '';
  añoFabricacion.value = '';
  velocidadMaxima.value = '';
  abmSelect.value = 'terrestre';
  abmSelectChange('terrestre');
  alturaMaxima.value = '';
  autonomia.value = '';
  cantidadPuertas.value = '';
  cantidadRuedas.value = '';
  btnHight.style.display = '';
  btnRemove.style.display = 'none';
  btnModify.style.display = 'none';
};
export default adding;
