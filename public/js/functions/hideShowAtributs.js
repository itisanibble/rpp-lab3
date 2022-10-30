const hideShowAtributs = (e) => {
    const id = e.id;
    const tds = document.querySelectorAll(`td.${id}`);
    tds.forEach((td) => {
        td.style.visibility = e.checked == true ? 'visible' : 'hidden';
    });
};
export default hideShowAtributs;
