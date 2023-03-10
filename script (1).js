
let body = document.getElementsByTagName('body')[0];
let tbl = document.createElement('table');
let newButton = document.createElement('button');
body.appendChild(newButton);
newButton.innerText = 'RUN';
let isStart = false;

let counter = 0;

function tableCreate() {
  for (let i = 0; i < 40; i++) {
    let tr = tbl.insertRow(-1);
    for (let j = 0; j < 40; j++) {
      let td = tr.insertCell(-1);
      td.style.backgroundColor = 'white';
    }
  }
  body.appendChild(tbl);
}

tableCreate();

let td = document.querySelectorAll('td');

/* function isBlack (td) {
    if (td.style.backgroundColor ==='black' || td.innerText === undefined) return
} */

for (let i = 0; i < td.length; i++) {
    td[i].onclick = function (event) {
        click2(this);
    };
}

function click2(td) {
    if (td.style.backgroundColor === 'white') {
        td.style.backgroundColor = 'black';
    } else {
        td.style.backgroundColor = 'white'
    };
}

newButton.onclick = function () {
  // if (isStart = false) {
  //   isStart = true;
  //   setInterval(run, 500);
  // }
  // if (isStart = true){
  //   isStart = false
  //   clearInterval
  // }
  isStart = true;
  setInterval(run, 500);
}

let arr = [[-1,-1], [0,-1], [1,-1], 
           [-1,0], [0, 0], [1, 0],
           [-1,1], [0, 1], [1, 1]];



function run () {
  let newArr = [];
  for (let y = 0; y < tbl.rows; y++) {
    for (let x = 0; x < tbl.rows[y].cells; x++) {
      getNeighbors(x,y);
    }
  }
  newMap();
}

function getNeighbors(x,y) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (tbl.rows[y+arr[i][0]].cells[x+arr[i][1]] === 'black') {
      count++;
    }
  }
  if ((count === 2 || count === 3) && tbl.rows[y].cells[x] === 'black') {
    newArr.push([x,y]);
  }
  if (count === 3 && tbl.rows[y].cells[x] === 'white') {
    newArr.push([x,y]);
  }
}

function newMap (newArr) {
  for (let y = 0; y < tbl.rows; y++) {
    for (let x = 0; x < tbl.rows[y].cells; x++) {
      tbl.rows[y].cells[x] === 'white';
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    tbl.rows[newArr[i][1]].cells[newArr[i][0]] === 'black';
  }
}


/*           arr = [[0,0]];

newButton.onclick = function () {
  isStart = true;
  window.setTimeout(function () {
    for (let i = 0; i < 40; i++) {
      for (let j = 0; j < 40; j++) {
        td.x = j;
        td.y = i;
        gameIsOn();
      }
    }
  }, 500);
}

function gameIsOn() {
  if (isStart) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        console.log('y='+td.y);
        if (tbl.rows[td.y + arr[i][0]].cells[td.x + arr[j][1]].backgroundColor === 'black') {
          count++;
          if ((count === 2 || count === 3) && tbl.rows[td.y].cells[td.x].backgroundColor !== 'black') {
            tbl.rows[td.y].cells[td.x].backgroundColor = 'black';
          } else {
            tbl.rows[td.y].cells[td.x].backgroundColor = 'white';
          }
        }
      }
    }
  }
}


 */