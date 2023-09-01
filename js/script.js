/* // JavaScript code for drag-and-drop functionality
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData('text', event.target.dataset.status);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData('text');
  var circle = document.querySelector(`.status-circle[data-status="${data}"]`);
  if (circle) {
    document.querySelector('.auto').appendChild(circle);
  }
}
 */

let initialX, initialY;

function dragStart(event) {
  const circle = event.target;
  initialX = event.clientX - circle.getBoundingClientRect().left;
  initialY = event.clientY - circle.getBoundingClientRect().top;
  event.dataTransfer.setData('text', circle.dataset.status);
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text');
  const circle = document.querySelector(
    `.status-circle[data-status="${data}"]`,
  );
  if (circle) {
    const auto = document.querySelector('.auto');
    const rect = auto.getBoundingClientRect();
    const x = event.clientX - rect.left - initialX;
    const y = event.clientY - rect.top - initialY;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    auto.appendChild(circle);
  }
}
