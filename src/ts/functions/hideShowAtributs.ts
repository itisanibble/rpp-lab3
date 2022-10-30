const hideShowAtributs = (e: HTMLInputElement): void => {
  const id = e.id;
  const tds: NodeListOf<HTMLTableRowElement> = document.querySelectorAll(`td.${id}`);

  tds.forEach((td) => {
    td.style.visibility = e.checked == true ? 'visible' : 'hidden';
  });
};

export default hideShowAtributs;
