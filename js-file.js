const container = document.getElementById("cellBox");//sticking container in cellBox over here in the js page

function makeRows(rows, cols) {
  container.textContent = '';
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "cell";
  };

    const cells = document.querySelectorAll('.cell');//selector called cells referencing .cells in html

    cells.forEach(cell => cell.addEventListener('mouseenter', mouseDown));//listens when mouse enters div
    function mouseDown(){
        this.classList.replace('cell', 'cellblack');
        console.log('mouse enter working')
    }//changes div to a black cell

};//function that has the ablility to create rows and columns

makeRows(16,16);










function resetGrid(){
    container.textContent = '';
    makeRows(16,16);
    console.log('reset button working');


        const cells = document.querySelectorAll('.cell');//selector called cells referencing .cells in html

    cells.forEach(cell => cell.addEventListener('mouseenter', mouseDown));//listens when mouse enters div
    function mouseDown(){
        this.classList.replace('cell', 'cellblack');
        console.log('mouse enter working')
    }//changes div to a black cell
}//function for the button to reset the grid




