let todos = document.getElementById("todo_div");
let parentRect = todos.getBoundingClientRect();

//let left = 100;
//let right = 1500;
//let top = 550;
//let bottom = 900;

// Initial text positions
let pos = [[640, 200], [720, 200], [760, 200], [800, 200], [840, 200]];

// Initial movement directions
let dir = [[2, 1], [2, 2], [4, 1], [2, 0], [0, 1]];

const staticDir = [[2, 1], [2, 2], [4, 1], [2, 0], [0, 1]];

setInterval(moveElements, 10);

function moveElements()
{
    // Move text visually
    let i = 0;
    for (let elem of todos.children)
    {
        elem.style.left = pos[i][0] + "px";
        elem.style.top = pos[i][1] + "px";
        i++;
    }

    // Update positions
    
    i = 0;
    for (let elem of todos.children)
    {
        pos[i][0] += dir[i][0];
        pos[i][1] += dir[i][1];

        //let outsideBounds =
        //    pos[i][0] < parentRect.left &&
        //    pos[i][0] > parentRect.right &&
        //    pos[i][1] < parentRect.top &&
        //    pos[i][1] > parentRect.bottom;

        let overlapping =
            pos[i][0] > 0 &&
            pos[i][0] < 1300 &&
            pos[i][1] > 550 &&
            pos[i][1] < 880;
        
        //overlapping = pos[i][0] < 1000;

        // Randomize directions
        if(Math.random() < 0.01 && overlapping)
        {
            dir[i][0] = Math.random() * 4;
            dir[i][1] = Math.random() * 4;
        }
        
        // Move text back inside bounding box as soon as it leaves
        if(!overlapping)
        {
            dir[i][0] = ((0 + 1300) / 2.0 - pos[i][0]) / 80.0;
            dir[i][1] = ((550 + 880) / 2.0 - pos[i][1]) / 80.0;
        }
        
        i++;
    }
}
