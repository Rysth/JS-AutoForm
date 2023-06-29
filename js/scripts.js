function addSelectionState(array) {
  array.forEach((element) => {
    element.addEventListener('click', () => {
      array.forEach((component) => {
        const validator = component.classList.contains('selected');
        if (!validator) {
          component.classList.toggle('selected');
        } else {
          component.classList.toggle('unselected');
        }
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
const espejoTrasero = Array.from(document.querySelectorAll('.espejo-trasero'));
const espejoFrontal = Array.from(document.querySelectorAll('.espejo-frontal'));

addSelectionState(frontalElements);
addSelectionState(traseraElements);
addSelectionState(superiorElements);
addSelectionState(espejoTrasero);
addSelectionState(espejoFrontal);

/* Left Side */
const izquierdaElements = Array.from(document.querySelectorAll('.auto-izquierda'));
const panelesIzquierda = Array.from(document.querySelectorAll('.paneles-izquierda'));
const ruedasIzquierda = Array.from(document.querySelectorAll('.ruedas-izquierda'));

addSelectionState(izquierdaElements);
addSelectionState(panelesIzquierda);
addSelectionState(ruedasIzquierda);

/* Right Side */
const derechaElements = Array.from(document.querySelectorAll('.auto-derecha'));
const panelesDerecha = Array.from(document.querySelectorAll('.paneles-derecha'));
const ruedasDerecha = Array.from(document.querySelectorAll('.ruedas-derecha'));

addSelectionState(derechaElements);
addSelectionState(panelesDerecha);
addSelectionState(ruedasDerecha);
