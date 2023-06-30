class Part {
  constructor(id, className, name, slug, components) {
    this.id = id;
    this.className = className;
    this.name = name;
    this.slug = slug;
    this.components = components;
  }
}

const vehicleParts = [
  new Part(0, '', 'Parachoque Frontal', 'delantera', [
    'Barra de Impacto',
    'Espuma de Impacto',
    'Refuerzo Metálico',
    'Cubierta Plástica',
  ]),
  new Part(1, '', 'Parachoque Trasero', 'posterior', [
    'Espuma de Impacto',
    'Refuerzo Metálico',
    'Cámara de Parking',
    'Reflectores',
  ]),
  new Part(2, '', 'Parte Frontal', 'capa-frontal', [
    'Parabrisas',
    'Faro Derecho',
    'Faro Izquierdo',
    'Capó',
  ]),
  new Part(3, '', 'Parte Superior', 'capa-superior', [
    'Revestimiento',
    'Paneles',
    'Iluminación',
  ]),
  new Part(3, '', 'Parte Trasera', 'capa-trasera', [
    'Parabrisas',
    'Maletero',
    'Faro Derecho',
    'Faro Izquierdo',
  ]),
  new Part(4, '', 'Lado Izquierdo', 'auto-izquierda', [
    'Retrovisor',
    'Ventanas',
    'Puertas',
    'Llantas',
  ]),
  new Part(5, '', 'Lado Derecho', 'auto-derecha', [
    'Retrovisor',
    'Ventanas',
    'Puertas',
    'Llantas',
  ]),
];

const formSystem = document.querySelector('#form-system');

function createFieldset(part) {
  const componentsHtml = part.components
    .map(
      (element, index) => `
        <div class="form-check col-12 col-xl-6">
          <input
            class="form-check-input ${part.slug}"
            type="checkbox"
            value="${element}"
            id="${part.slug}-${index}"
          />
          <label class="form-check-label" for="${part.slug}-${index}">
            ${element}
          </label>
        </div>
    `
    )
    .join('');

  formSystem.innerHTML += `
    <fieldset class="form-fieldset ${part.slug}" disabled>
      <legend class="fs-5 form-legend">${part.name}</legend>
      <div class="row px-3 text-center text-xl-start">
        ${componentsHtml}
      </div>
    </fieldset>
  `;
}

window.onload = () => {
  vehicleParts.forEach(createFieldset);

  const formFieldset = Array.from(document.querySelectorAll('.form-fieldset'));

  function preparePartSection(element) {
    element.addEventListener('click', () => {
      const item = element.firstElementChild;
      openPartSection(element.id, item);
    });
  }

  function openPartSection(ID, item) {
    formFieldset.forEach((fieldset) => {
      if (fieldset.classList.contains(ID)) {
        const isItemSelected = item.classList.contains('selected');
        fieldset.disabled = !isItemSelected;
      }
    });
  }

  function addPartSection() {
    const partSections = document.querySelectorAll('.vehicle');
    partSections.forEach(preparePartSection);
  }

  addPartSection();
};

const form = document.getElementById('form');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission

  // Array to store selected checkboxes
  const selectedCheckboxes = [];

  // Iterate over each vehicle part
  vehicleParts.forEach((part) => {
    // Retrieve all checkbox inputs for the current vehicle part
    const checkboxes = form.querySelectorAll(`input.${part.slug}[type="checkbox"]`);

    // Array to store selected checkboxes for the current vehicle part
    const partSelectedCheckboxes = [];

    // Iterate over each checkbox for the current vehicle part
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        // If the checkbox is selected, add its value to the partSelectedCheckboxes array
        partSelectedCheckboxes.push(checkbox.value);
      }
    });

    // Create an object representing the selected checkboxes for the current vehicle part
    const partData = {
      seccion: part.name,
      partes: partSelectedCheckboxes,
    };

    // Add the partData object to the selectedCheckboxes array
    selectedCheckboxes.push(partData);
  });

  const textarea = form.querySelector('textarea');

  // Get the value of the textarea
  const textareaValue = textarea.value;

  // Create a JSON object with the selected checkboxes, and the textarea value
  const data = {
    vehiculo: selectedCheckboxes,
    mensaje: textareaValue,
  };

  // Convert the selectedCheckboxes array to JSON string
  const jsonData = JSON.stringify(data);

  // Now you can save the jsonData or perform any desired action with it
  const formattedData = JSON.stringify(JSON.parse(jsonData), null, 2);

  // Display the formatted data
  console.log(formattedData);

  // Reset the form
  form.reset();
});
