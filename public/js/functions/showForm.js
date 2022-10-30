const showForm = (form) => {
    const data = document.getElementById('datos');
    const abm = document.getElementById('abm');
    if (form == 'datos') {
        data.classList.remove('display-none');
        abm.classList.add('display-none');
    }
    else {
        data.classList.add('display-none');
        abm.classList.remove('display-none');
    }
};
export default showForm;
