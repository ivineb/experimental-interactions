function setup(){
  createCanvas(350, 350);
  background("#ACDEE0");
    for (var a = 35; a<=325; a+=30)
    for (var b = 35; b<=325; b+=30)
  {
    strokeWeight(b/15 + a/30);
    stroke("#fff");
    fill("#EAC3CB");
    point(a,b);  
  }
}

function keyTyped() {
  if (key === 's') {
    save('myCanvas.jpg');
  }
}