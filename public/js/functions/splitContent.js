import Terrestre from '../classes/Terrestre.js';
import Aereo from '../classes/Aereo.js';
const splitContent = (string) => {
    let obj = JSON.parse(string);
    return obj.map((element) => {
        if (Terrestre.isTerrestre(element)) {
            return new Terrestre(element);
        }
        else if (Aereo.isAereo(element)) {
            return new Aereo(element);
        }
    });
};
export default splitContent;
