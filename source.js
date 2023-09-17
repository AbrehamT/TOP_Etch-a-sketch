const container = document.querySelector(".container");

function gridCreator(size){

    let newDivsRow = null;
    let newDivsCol = null;

    let gridArray = [];

    for(let i = 0; i < size; i++){
        newDivsRow = document.createElement('div');
        newDivsRow.setAttribute('style', 'background: black; display: flex; border-width: 0px; flex: 1');
        container.appendChild(newDivsRow);
        gridArray.push([]);
        for(let j = 0; j < size; j++){
            newDivsCol = document.createElement('div');
            newDivsCol.setAttribute('style', 'color: white; padding: 10px; flex: 1');
            newDivsCol.textContent = "" 
            newDivsRow.appendChild(newDivsCol);
            gridArray[i][j] = newDivsCol;
        }
    }
        
    for(let i = 0; i < size; i++){
        gridArray[i].forEach(element => {
            element.addEventListener('mouseover', () => 
            element.setAttribute('style', 'color: white; padding: 10px; background-color: green;'));});
    }
}


gridCreator(8);
