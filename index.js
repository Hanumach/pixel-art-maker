let root = document.getElementById('root');

handleclick = (e) => {
    let cellId = e.target.id;
    let cell = document.getElementById(cellId);
    cell.style.backgroundColor = 'red';
}

for (let i = 1; i < 3; i++) {
    let row = document.createElement('div');
    row.id = `row-${i}`;
    row.className = 'rows'
    root.appendChild(row);
    for(let j = 1; j< 3; j++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `${i}x${j}`;
        cell.addEventListener('click', (event) => handleclick(event))
        row.appendChild(cell);
    }
}