const body = document.querySelector('body');
const container = document.createElement('div.container');
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16, 1fr)';

for(let i=0; i < 16; i++){
  for(let j=0; j < 16; j++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.id = `row-${i}-col-${j}`;
    gridItem.style.display = 'inline-block';
    // gridItem.style.width = '16px';
    gridItem.style.height = '16px';
    gridItem.style.borderStyle = 'solid';
    gridItem.style.borderWidth = '2px';
    container.appendChild(gridItem);
  }
}



body.appendChild(container);

/*
border-style: solid;
  border-width: 5px;
*/