let root = document.getElementById('root');
let cellColor = 'white';
let apply = false;
const ROWS = 10;
const COLS = 10;
const PALETTE = ['red', 'green', 'blue', 'yellow', 'pink'];

handleclick = (e) => {
    let cellId = e.target.id;
    let cell = document.getElementById(cellId);
    cell.style.backgroundColor = cellColor;
}

for (let i = 1; i < ROWS+1; i++) {
    let row = document.createElement('div');
    row.id = `row-${i}`;
    row.className = 'rows'
    root.appendChild(row);
    for(let j = 1; j< COLS+1; j++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `${i}x${j}`;
        //cell.addEventListener('click', (event) => handleclick(event))
        cell.onmousedown = () => {
            apply = true;
            cell.style.backgroundColor = cellColor;
        }
        cell.onmouseenter = () => {apply ? cell.style.backgroundColor = cellColor: null;};
        cell.onmouseup = () => {apply = false};
        row.appendChild(cell);
    }
}

let palette = document.getElementById('palette');
let paletterow = document.createElement('div');
paletterow.className='paletterows';
palette.appendChild(paletterow);

let currentColor = document.createElement('div');
currentColor.className = 'rows';
currentColor.innerHTML = 'Current Color --->  ';
let colorbox = document.createElement('div');
colorbox.className = 'colorbox';
colorbox.style.backgroundColor = cellColor;
currentColor.appendChild(colorbox);
palette.appendChild(currentColor);

PALETTE.forEach((color) => {
    let paletteCell = document.createElement('div');
    paletteCell.className = 'paletteCell';
    paletteCell.style.backgroundColor = color;
    paletteCell.onclick = () => {cellColor = color; colorbox.style.backgroundColor = color};
    paletterow.appendChild(paletteCell);
});

let inputColor = document.createElement('input');
//inputColor.onchange = (e) => {cellColor = e.target.value};
inputColor.onkeyup = (e) => {cellColor = e.target.value; colorbox.style.backgroundColor = e.target.value};
paletterow.appendChild(inputColor)





