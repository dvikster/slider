
var sdvigLeft = 0;
var line;
line = document.getElementById('move');
function moveLeft(){

    if (sdvigLeft == -940) {
    }
    else {
        sdvigLeft = sdvigLeft - 235;
    }
    line.style.marginLeft = sdvigLeft + 'px';
}

function moveRight(){

    if (sdvigLeft == 0) {
    }
    else {
        sdvigLeft = sdvigLeft + 235;
    }
    line.style.marginLeft = sdvigLeft + 'px';
}