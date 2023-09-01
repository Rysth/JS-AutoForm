const downloadButton = document.querySelector('.content-button.download');
downloadButton.addEventListener('click', downloadImage);

function downloadImage() {
  const container = document.getElementById('auto-picture');
  // Scroll the container to the bottom
  container.scrollTop = container.scrollHeight;

  // Use html2canvas to capture the HTML element
  html2canvas(container, { scale: 2 }).then(function (canvas) {
    const imageDataURL = canvas.toDataURL('image/png');

    // Create a link for downloading the image
    const a = document.createElement('a');
    a.href = imageDataURL;
    a.download = 'image.png'; // Set a default filename
    a.click();
  });
}
