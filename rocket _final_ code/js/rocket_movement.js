window.onload = moveleft();

function moveleft() {
    var elem = document.getElementById("rocketfull");
    var pos = 0;
    var id = setInterval(frame, 1);

    function frame() {
        if (bulletStatus) {
            if (pos == 1390) {
                clearInterval(id);
                moveRight();
            } else {
                pos++;
                elem.style.right = pos + "px";
                elem.style.left = pos + "px";
            }
        }
    }

    function moveRight() {
        var elem = document.getElementById("rocketfull");
        var pos = 1390;
        var id = setInterval(frame, 1);

        function frame() {
            if (bulletStatus) {
                if (pos == 0) {
                    clearInterval(id);
                    moveleft();
                } else {
                    pos--;
                    elem.style.right = pos + "px";
                    elem.style.left = pos + "px";
                }
            }
        }
    }

}