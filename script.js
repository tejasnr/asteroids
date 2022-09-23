window.onload = function(){


    for (let i = 0; i < 800; i += 100) {
        brick(20 + i, 20, 100, 80);

    }


    brick(20, 20, 100, 80);
    brick(20, 20, 100, 80);
};

function brick(x, y, width, height) {
    var c = document.getElementById("canvas");

    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();
}