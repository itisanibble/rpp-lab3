import Terrestre from '../classes/Terrestre.js';
import Aereo from '../classes/Aereo.js';
import { dataSelect } from '../global/selectors.js';
const filterTable = (json) => {
    if (dataSelect.value == 'terrestre') {
        return json.filter((n) => {
            return n instanceof Terrestre;
        });
    }
    else if (dataSelect.value == 'aereo') {
        return json.filter((n) => {
            return n instanceof Aereo;
        });
    }
    else if (dataSelect.value == 'todos') {
        return json;
    }
};
export default filterTable;
