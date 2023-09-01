function allowDrop(event) {
  event.preventDefault();
}

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
  const originalCircle = document.querySelector(
    `.status-circle[data-status="${data}"]`,
  );
  if (originalCircle) {
    const auto = document.querySelector('.auto');
    const rect = auto.getBoundingClientRect();
    const x = event.clientX - rect.left - initialX;
    const y = event.clientY - rect.top - initialY;

    // Check if a circle already exists in the desired position
    const existingCircle = auto.querySelector(
      `.status-circle.placed[data-status="${data}"]`,
    );

    if (existingCircle) {
      auto.removeChild(existingCircle); // Remove the existing circle
    }

    // Clone the original circle
    const newCircle = originalCircle.cloneNode(true);

    // Calculate the new position within the boundaries of .auto
    const maxX = rect.width - newCircle.offsetWidth;
    const maxY = rect.height - newCircle.offsetHeight;

    // Ensure the new position stays within the boundaries
    const newX = Math.min(Math.max(0, x), maxX);
    const newY = Math.min(Math.max(0, y), maxY);

    // Set the position for the new circle
    newCircle.classList.add('placed');
    newCircle.style.left = `${newX}px`;
    newCircle.style.top = `${newY}px`;

    // Make the new circle draggable
    newCircle.addEventListener('mousedown', startDrag);

    // Append the new circle to the container
    auto.appendChild(newCircle);
  }
}

let initialX, initialY;
let activeCircle = null;
let offsetX, offsetY;

function startDrag(event) {
  activeCircle = event.target;
  offsetX = event.clientX - activeCircle.getBoundingClientRect().left;
  offsetY = event.clientY - activeCircle.getBoundingClientRect().top;

  document.addEventListener('mousemove', dragCircle);
  document.addEventListener('mouseup', stopDrag);
}

function dragCircle(event) {
  if (!activeCircle) return;

  const auto = document.querySelector('.auto');
  const rect = auto.getBoundingClientRect();
  const x = event.clientX - rect.left - offsetX;
  const y = event.clientY - rect.top - offsetY;

  const maxX = rect.width - activeCircle.offsetWidth;
  const maxY = rect.height - activeCircle.offsetHeight;

  const newX = Math.min(Math.max(0, x), maxX);
  const newY = Math.min(Math.max(0, y), maxY);

  activeCircle.style.left = `${newX}px`;
  activeCircle.style.top = `${newY}px`;
}

function stopDrag() {
  activeCircle = null;
  document.removeEventListener('mousemove', dragCircle);
  document.removeEventListener('mouseup', stopDrag);
}

// Add event listeners to make the circles draggable only once
document.querySelectorAll('.status-circle[data-status]').forEach((circle) => {
  circle.addEventListener('mousedown', startDrag);
});
