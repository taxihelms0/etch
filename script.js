const body = document.querySelector('body');
const container = document.createElement('div.container');

// style container
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16, 16px)';
container.style.gridTemplateRows = 'repeat(16, 16px)'

// change background
function changeBackground(e) {
  e.currentTarget.style.backgroundColor = 'red';
}
// create individual cells (16 rows x 16 cols)
for(let i=0; i < 16; i++){
  for(let j=0; j < 16; j++){
    gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.id = `row-${i}-col-${j}`;
    // styling
    gridItem.style.display = 'inline-block';
    gridItem.style.height = '16px';
    gridItem.style.borderStyle = 'solid';
    gridItem.style.borderWidth = '1px';
    container.appendChild(gridItem);
    // mouseover
    gridItem.addEventListener('mouseover', changeBackground);
  }
}
body.appendChild(container);
