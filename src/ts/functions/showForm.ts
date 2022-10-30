const showForm = (form: 'datos' | 'abm'): void => {
  const data = document.getElementById('datos');
  const abm = document.getElementById('abm');

  if (form == 'datos') {
    data.classList.remove('display-none');
    abm.classList.add('display-none');
  } else {
    //validado con typescript
    // if (form == 'abm') {
    data.classList.add('display-none');
    abm.classList.remove('display-none');
  }
};

export default showForm;
