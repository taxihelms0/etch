const body = document.querySelector('body');
const container = document.createElement('div.container');

// create & style button
const buttonReset = document.createElement('button');
buttonReset.textContent = 'Reset Grid?';
body.appendChild(buttonReset);

// change background
function changeBackground(e) {
  e.currentTarget.style.backgroundColor = 'black';
}
// create individual cells (16 rows x 16 cols)
function drawGrid() {
  const pixels = window.prompt('how many squares per side?');
  // style container
  container.style.display = 'grid';
  container.style.height = '400px';
  container.style.width = '400px';
  // gridItem.style.height = '16px';
  container.style.borderStyle = 'solid';
  container.style.borderWidth = '1px';
  container.style.gridTemplateColumns = `repeat(${pixels}, ${100/pixels}%)`;
  container.style.gridTemplateRows = `repeat(${pixels}, ${100/pixels}%)`;
  
  for(let i=0; i < pixels; i++){
    for(let j=0; j < pixels; j++){
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.id = `row-${i}-col-${j}`;
      gridItem.style.display = 'inline-block';
      
      container.appendChild(gridItem);
      gridItem.addEventListener('mouseover', changeBackground);
    }
  }
}


function resetGrid() { // TODO, call this on load
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((item) => {
    container.removeChild(item);
  });
  drawGrid();
}

// call reset function
buttonReset.addEventListener('click', resetGrid);


// put it all on the page
drawGrid();
body.appendChild(container);
