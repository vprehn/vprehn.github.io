let todos = document.getElementById("todo_div");
let gameBox = document.getElementById("game_box");

// Relative Startpositionen innerhalb der gameBox
let pos = [ 
  [20, 10], 
  [20, 30], 
  [20, 50], 
  [20, 70], 
  [20, 90]
];

// Start-Geschwindigkeiten
let dir = [ 
  [2, 1],
  [2, 2], 
  [3, 1], 
  [2, 1], 
  [1, 2]
];

function updateGame() {
  let parentRect = gameBox.getBoundingClientRect();

  for (let i = 0; i < todos.children.length; i++) {
    let elem = todos.children[i];

    // 1. Position aktualisieren
    pos[i][0] += dir[i][0];
    pos[i][1] += dir[i][1];

    // 2. Transform
    elem.style.transform = `translate3d(${pos[i][0]}px, ${pos[i][1]}px, 0)`;

    // 3. Kollisionsprüfung am Rand der gameBox
    let elemRect = elem.getBoundingClientRect();

    if (elemRect.left <= parentRect.left || elemRect.right >= parentRect.right) {
      dir[i][0] = -dir[i][0];
    }

    if (elemRect.top <= parentRect.top || elemRect.bottom >= parentRect.bottom) {
      dir[i][1] = -dir[i][1];
    }
  }

  requestAnimationFrame(updateGame);
}

// Animation starten
requestAnimationFrame(updateGame);