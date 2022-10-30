//SELECTORS
import { calculationMaximunSpeed, sortButtons, btnAdd, id, abmSelect, checkboxes, dataSelect, btnCancel, btnRemove, btnHight, btnModify, inputAverageMaximumSpeed } from './global/selectors.js';

//DATA
import content from './data/data.js';

//FUNCTIONS
import splitContent from './functions/splitContent.js';
import updateTableContent from './functions/updateContentTable.js';
import filterTable from './functions/filterTable.js';
import averageMaximumSpeed from './functions/averageMaximumSpeed.js';
import sortTable from './functions/sortTable.js';
import hideShowAtributs from './functions/hideShowAtributs.js';
import showForm from './functions/showForm.js';
import abmSelectChange from './functions/abmSelectChange.js';
import add from './functions/adding.js';
import heighting from './functions/heighting.js';
import modifying from './functions/modifying.js';

//APP INIT
let json = splitContent(content);
updateTableContent(json);
let filterJson = filterTable(json);
showForm('datos');
abmSelectChange(abmSelect.value);

//LISTENERS
dataSelect.addEventListener('change', () => {
  filterJson = filterTable(json);
  updateTableContent(filterJson);
});

calculationMaximunSpeed.addEventListener('click', () => {
  averageMaximumSpeed(filterJson);
});

sortButtons.forEach((sortButton) => {
  sortButton.addEventListener('click', () => {
    updateTableContent(sortTable(filterJson, sortButton));
  });
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    hideShowAtributs(checkbox);
  });
});

btnAdd.addEventListener('click', () => {
  showForm('abm');
  add(json);
});

btnCancel.addEventListener('click', () => {
  showForm('datos');
});

abmSelect.addEventListener('change', () => {
  abmSelectChange(abmSelect.value);
});

btnRemove.addEventListener('click', () => {
  if (window.confirm('Confirmacion: ¿Eliminar?')) {
    json = json.filter((n) => n.id.toString() != id.dataset.id);
    showForm('datos');
    filterJson = filterTable(json);
    updateTableContent(filterJson);
  }
});

btnHight.addEventListener('click', () => {
  json = heighting(json);
  filterJson = filterTable(json);
  updateTableContent(filterJson);
});

btnModify.addEventListener('click', () => {
  json = modifying(json);
  filterJson = filterTable(json);
  updateTableContent(filterJson);
});

[btnHight, btnRemove, btnModify].forEach((btn) => {
  btn.addEventListener('click', () => {
    inputAverageMaximumSpeed.value = '';
  });
});
