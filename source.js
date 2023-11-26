// const container = document.querySelector(".container");

// function gridCreator(size){

//     let newDivsRow = null;
//     let newDivsCol = null;

//     let gridArray = [];

//     for(let i = 0; i < size; i++){
//         newDivsRow = document.createElement('div');
//         newDivsRow.setAttribute('style', ' display: flex; border-width: 0px; flex: 1');
//         container.appendChild(newDivsRow);
//         gridArray.push([]);
//         for(let j = 0; j < size; j++){
//             newDivsCol = document.createElement('div');
//             newDivsCol.setAttribute('style', 'color: white; padding: 10px; flex: 1');
//             newDivsCol.textContent = ""
//             newDivsRow.appendChild(newDivsCol);
//             gridArray[i][j] = newDivsCol;
//         }
//     }

//     for(let i = 0; i < size; i++){
//         gridArray[i].forEach(element => {
//             element.addEventListener('mouseover', () =>
//             element.setAttribute('style', 'color: white; padding: 10px; background-color: green;'));});
//     }
// }


// gridCreator(8);


// Creating an event listener that listens for a mouse hover over grid cells and- 
//  colors the cell with the selected color
const grid = Array.from(document.querySelectorAll("div.cell"));
grid.forEach(e => {
    e.addEventListener('mouseover', () =>
    e.setAttribute('style', 'background-color: green;'));
})

var slider = document.getElementById("range");
var sliderDisplay = document.getElementById("display");

sliderDisplay.innerHTML = slider.value + ' x ' + slider.value;

slider.oninput = function(){
    sliderDisplay.innerHTML = this.value + ' x ' + this.value;
    var gridContainer = document.querySelector(".container");
    gridContainer.style.gridTemplateColumns = `repeat(${this.value}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${this.value}, 1fr)`;
    Array.from(gridContainer.getElementsByClassName('cell')).forEach(function(child){
        gridContainer.removeChild(child)});
        let size = this.value * this.value;
    for(let i = 0; i < size; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', (e)=>{
            e.target.setAttribute('style', 'background-color: green')
        });
        gridContainer.appendChild(cell);
    }
}
