function init() {
    objImage = document.getElementById('person');
    objImage.style.position = 'absolute';
    objImage.style.left = '50%';
    objImage.style.top = '63%';
}
// person moving code
function getKeyAndMove(e) {

    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: //left arrow key
            moveLeft();
            break;
            // case 38: //Up arrow key
            //     moveUp();
            //     break;
        case 39: //right arrow key
            moveRight();
            break;
            // case 40: //down arrow key
            //     moveDown();
            //     break;
    }
}

function moveLeft() {
    objImage.style.left = parseInt(objImage.style.left) - 20 + 'px';
}

// function moveUp() {
//     objImage.style.top = parseInt(objImage.style.top) - 10 + 'px';
// }

function moveRight() {
    objImage.style.left = parseInt(objImage.style.left) + 20 + 'px';
}