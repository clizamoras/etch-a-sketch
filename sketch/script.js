const container = document.querySelector('.container');
const resizeBtn = document.getElementById('resizeBtn');

function createGrid(size) {
  container.innerHTML = ''; // Clear existing grid
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Set custom data attribute to track darkening
    square.dataset.darkness = 0;

    square.addEventListener('mouseenter', () => {
      let darkness = parseFloat(square.dataset.darkness);

      // Only darken up to 1.0
      if (darkness < 1) {
        darkness += 0.1;
        square.dataset.darkness = darkness.toFixed(1);
      }

      // Generate a base random RGB color
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      // Apply RGB with opacity as a darkening effect
      square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${darkness})`;
    });

    container.appendChild(square);
  }
}

// Button to resize grid
resizeBtn.addEventListener('click', () => {
  let newSize = prompt('Enter new grid size (max 100):');
  newSize = parseInt(newSize);
  if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
});

createGrid(16); // Initial grid


