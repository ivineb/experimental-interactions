function setup(){
  createCanvas(350, 350);
  background("#EAC3CB");
    for (var a = 25; a<=300-5; a+=30)
    for (var b = 25; b<=300-5; b+=30)
  {
    strokeWeight(a/22);
    stroke("#fff");
    fill("#EAC3CB");
    rect(a,b,30*a,30+b);  
  }
}

function keyTyped() {
  if (key === 's') {
    save('myCanvas.jpg');
  }
}