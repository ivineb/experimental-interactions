function setup() {
  createCanvas(300, 300);
}

function draw() {
  background("#2B4343");
  stroke("#fff");
  noFill();
  strokeWeight(4)
  circle(150, 145, 100);
  circle(150, 145, 140);
  circle(150, 145, 180);
  circle(150, 145, 220);
  circle(150, 145, 260);

  fill("#fff")
  circle(150, 145, 60);
}

function keyTyped() {
  if (key === 's') {
    save('myCanvas.jpg');
  }
}
