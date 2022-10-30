const abmSelectChange = (string: 'terrestre' | 'aereo' | string) => {
  const abmTerrestre = document.getElementById('abm-terrestre');
  const abmAereo = document.getElementById('abm-aereo');

  if (string == 'terrestre') {
    abmAereo.classList.remove('display-none');
    abmTerrestre.classList.add('display-none');
  } else if (string == 'aereo') {
    abmAereo.classList.add('display-none');
    abmTerrestre.classList.remove('display-none');
  }
};

export default abmSelectChange;
