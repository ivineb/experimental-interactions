function setup() {
  createCanvas(300, 300);
}

function draw() {
  background("#F05D22");
  
  stroke("#fff");
  strokeWeight(5);
  noFill();
  rectMode(CENTER);
  rect(width / 2, height / 2, 250, 250);
  rect(width / 2, height / 2, width / 3, height / 3);
  rect(width / 2, height / 2, width/6, height/6);
  rect(width / 2, height / 2, width -95, height-95);
  rect(width / 2, height / 2, width -145, height-145);

}
function keyTyped() {
  if (key === 's') {
    save('myCanvas.jpg');
  }
}
