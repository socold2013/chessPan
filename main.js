var canv = document.getElementById("canvas");
var ctx = canv.getContext("2d");
ctx.fillStyle = "lime";
ctx.strokeStyle = "violet";
for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 4; i++) {
        ctx.fillRect(i * 80, j * 80, 40, 40);
        ctx.fillRect(i * 80 + 40, j * 80 + 40, 40, 40);
        ctx.strokeRect(i * 80 + 40, j * 80, 40, 40);
        ctx.strokeRect(i * 80, j * 80 + 40, 40, 40);
    }
}
