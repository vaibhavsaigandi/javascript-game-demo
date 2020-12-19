var bulletStatus = true;
setInterval(collide, 1);
// collision code
function collide() {
    if (bulletStatus) {
        var bulletId = $("#bullets");
        var personId = $("#person");
        isCollision = false;
        var isCollision = collision(bulletId, personId);
        console.log(isCollision);
        if (isCollision) {
            //alert("Gave Over!");
            console.log(isCollision);
            bulletStatus = false;
            alert("game over");
            //e.preventDefault();
        }
    }
}

function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    console.log(b1 + " " + y2 + ", " + y1 + " " + b2 + ", " + r1 + " " + x2 + ", " + x1 + " " + r2)
    if ((b1 < y2 - 100 || y1 - 100 > b2)) {
        if (r1 < x2 + 100 || x1 - 100 > r2) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}