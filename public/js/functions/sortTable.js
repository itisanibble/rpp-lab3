const sortTable = (json, button) => {
    let atribut = button.value;
    switch (atribut) {
        case 'id':
        case 'modelo':
        case 'añoFabricacion':
        case 'velocidadMaxima':
        case 'alturaMaxima':
        case 'autonomia':
        case 'cantidadPuertas':
        case 'cantidadRuedas':
            json = sort(json, atribut);
            break;
        default:
            window.alert('Error con el ordenamiento');
    }
    return json;
};
const sort = (json, atribut) => {
    return json.sort((n, m) => {
        if (n[atribut] == null) {
            return 1;
        }
        else if (m[atribut] == null) {
            return -1;
        }
        else if (n[atribut] < m[atribut]) {
            return -1;
        }
        else if (n[atribut] > m[atribut]) {
            return 1;
        }
        else if (n[atribut] == m[atribut]) {
            return 0;
        }
    });
};
export default sortTable;
