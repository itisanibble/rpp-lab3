import Terrestre from '../classes/Terrestre.js';
import Aereo from '../classes/Aereo.js';
import { validClases } from '../global/validTypes.js';
import hideShowAtributs from './hideShowAtributs.js';
import showForm from './showForm.js';
import fillAbm from './fillAbm.js';
import { btnHight, btnModify, btnRemove, checkboxes } from '../global/selectors.js';

const createContentTable = (obj: Array<validClases>): Array<HTMLTableRowElement> => {
  let array: Array<HTMLTableRowElement> = [];

  obj.forEach((element) => {
    let tr = document.createElement('tr');
    tr.setAttribute('data-id', element.id.toString());

    let atributs = element.toString().split('|');

    tr.innerHTML += `<td class="id">${atributs[0]}</td>`;
    tr.innerHTML += `<td class="modelo">${atributs[1]}</td>`;
    tr.innerHTML += `<td class="añoFabricacion">${atributs[2]}</td>`;
    tr.innerHTML += `<td class="velocidadMaxima">${atributs[3]}</td>`;

    if (Aereo.isAereo(element)) {
      tr.innerHTML += `<td class="alturaMaxima">${atributs[4]}</td>`;
      tr.innerHTML += `<td class="autonomia">${atributs[5]}</td>`;
      tr.innerHTML += `<td class="cantidadPuertas">N/A</td>`;
      tr.innerHTML += `<td class="cantidadRuedas">N/A</td>`;
    } else if (Terrestre.isTerrestre(element)) {
      tr.innerHTML += `<td class="alturaMaxima">N/A</td>`;
      tr.innerHTML += `<td class="autonomia">N/A</td>`;
      tr.innerHTML += `<td class="cantidadPuertas">${atributs[4]}</td>`;
      tr.innerHTML += `<td class="cantidadRuedas">${atributs[5]}</td>`;
    } else {
      window.alert('Error al crear la tabla');
    }

    array.push(tr);
  });

  return array;
};

const updateTableContent = (obj: Array<validClases>): void => {
  const tbody = document.querySelector('#tbody');

  let trs: Array<HTMLTableRowElement> = createContentTable(obj);

  //clean tbody
  tbody.innerHTML = '';

  trs.forEach((tr) => {
    tbody.appendChild(tr);
    tr.addEventListener('dblclick', (e: Event) => {
      const tr_ = e.target as HTMLTableCellElement;
      const td = tr_.parentElement;
      showForm('abm');
      fillAbm(obj.filter((n) => n.id.toString() === td.dataset.id)[0]);
      btnHight.style.display = 'none';
      btnRemove.style.display = '';
      btnModify.style.display = '';
    });
  });

  checkboxes.forEach((checkbox) => {
    hideShowAtributs(checkbox);
  });
};

export default updateTableContent;
