import Terrestre from '../classes/Terrestre.js';
import Aereo from '../classes/Aereo.js';
import { validClases } from '../global/validTypes.js';

const splitContent = (string: string): Array<validClases> => {
  let obj: Array<validClases> = JSON.parse(string);
  return obj.map((element) => {
    if (Terrestre.isTerrestre(element)) {
      return new Terrestre(element as Terrestre);
    } else if (Aereo.isAereo(element)) {
      return new Aereo(element as Aereo);
    }
  });
};

export default splitContent;
