window.onload = moveDown();

function moveDown() {
    var elem = document.getElementById("bullets");
    var pos = 0;
    var id = setInterval(frame, 0.01);

    function frame() {
        if (pos == -450) {
            clearInterval(id);
            elem.style.visibility = 'visible';
            moveDown();
        } else {
            pos--;
            elem.style.top = pos + "px";
            elem.style.bottom = pos + "px";
        }

    }
}