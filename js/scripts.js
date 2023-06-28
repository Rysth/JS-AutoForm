/* Front & Back Side */
const posteriorElements = Array.from(document.querySelectorAll('.posterior'));
const delanteraElements = Array.from(document.querySelectorAll('.delantera'));

/* Middle Side */
const frontalElements = Array.from(document.querySelectorAll('.capa-frontal'));
const traseraElements = Array.from(document.querySelectorAll('.capa-trasera'));
const superiorElements = Array.from(document.querySelectorAll('.capa-superior'));

/* Left Side */
const izquierdaElements = Array.from(document.querySelectorAll('.auto-izquierda'));
const ruedasIzquierda = Array.from(document.querySelectorAll('.ruedas-izquierda'));

/* Right Side */
const derechaElements = Array.from(document.querySelectorAll('.auto-derecha'));
const ruedasDerecha = Array.from(document.querySelectorAll('.ruedas-derecha'));

function addSelectionState(array) {
  array.forEach((element) => {
    element.addEventListener('click', () => {
      array.forEach((component) => {
        component.classList.toggle('selected');
      });
    });
  });
}

window.onload = () => {
  addSelectionState(posteriorElements);
  addSelectionState(delanteraElements);
  addSelectionState(frontalElements);
  addSelectionState(traseraElements);
  addSelectionState(superiorElements);
  addSelectionState(izquierdaElements);
  addSelectionState(ruedasIzquierda);
  addSelectionState(derechaElements);
  addSelectionState(ruedasDerecha);
};
