function addSelectionState(array) {
  array.forEach((element) => {
    element.addEventListener('click', () => {
      array.forEach((component) => {
        const isComponentSelected = component.classList.contains('selected');
        component.classList.toggle('selected', !isComponentSelected);
        component.classList.toggle('unselected', isComponentSelected);
      });
    });
  });
}

/* Front & Back Side */
const posteriorElements = Array.from(document.querySelectorAll('.posterior'));
const delanteraElements = Array.from(document.querySelectorAll('.delantera'));

addSelectionState(posteriorElements);
addSelectionState(delanteraElements);

/* Middle Side */
const frontalElements = Array.from(document.querySelectorAll('.capa-frontal'));
const traseraElements = Array.from(document.querySelectorAll('.capa-trasera'));
const superiorElements = Array.from(document.querySelectorAll('.capa-superior'));

addSelectionState(frontalElements);
addSelectionState(traseraElements);
addSelectionState(superiorElements);

/* Left Side */
const izquierdaElements = Array.from(document.querySelectorAll('.auto-izquierda'));

addSelectionState(izquierdaElements);

/* Right Side */
const derechaElements = Array.from(document.querySelectorAll('.auto-derecha'));

addSelectionState(derechaElements);
