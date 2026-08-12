let todos = document.getElementById("todo_div");
let parentRect = document.getElementById("game").getBoundingClientRect();

// Initial text positions
let pos = [ [parentRect.left + 20, parentRect.top + 280], 
            [parentRect.left + 20, parentRect.top + 200], 
            [parentRect.left + 20, parentRect.top + 240], 
            [parentRect.left + 20, parentRect.top + 120], 
            [parentRect.left + 20, parentRect.top + 160]];

// Initial movement directions
let dir = [ [2, 1],
            [2, 2], 
            [4, 1], 
            [2, 0], 
            [0, 1]];

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

        elem.style.left = pos[i][0] + "px";
        elem.style.top = pos[i][1] + "px";

        let outsideBounds =
           elem.getBoundingClientRect().left < parentRect.left ||
           elem.getBoundingClientRect().right > parentRect.right ||
           elem.getBoundingClientRect().top < parentRect.top ||
           elem.getBoundingClientRect().bottom > parentRect.bottom;

        // Randomize directions
        if(Math.random() < 0.01 && !outsideBounds)
        {
            dir[i][0] = Math.random() * 4;
            dir[i][1] = Math.random() * 4;
        }

        if(outsideBounds)
        {
            dir[i][0] = -dir[i][0];
            dir[i][1] = -dir[i][1];
        }
        
        i++;
    }

}

setInterval(moveElements, 10);
moveElements();