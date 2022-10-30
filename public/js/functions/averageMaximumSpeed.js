import { inputAverageMaximumSpeed } from '../global/selectors.js';
const averageMaximumSpeed = (json) => {
    const velocidadesMaximas = json.map((n) => n.velocidadMaxima);
    const cantidad = velocidadesMaximas.length;
    if (cantidad > 0) {
        const sumatoria = velocidadesMaximas.reduce((n, m) => n + m);
        inputAverageMaximumSpeed.value = (Math.round((sumatoria / cantidad) * 100) / 100).toString();
    }
    else {
        inputAverageMaximumSpeed.value = '0';
    }
};
export default averageMaximumSpeed;
