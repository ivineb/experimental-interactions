function setup() {
  createCanvas(300, 300);
  noFill();
}

function draw() {
  background("#fff");
  
  const r = color("#fff");
  const b = color("#35B782");
  
  for(let i = 0; i<20; i++){
    for(let j = 0; j<20; j++){
      
      const y = i * 20 + j ;
      stroke(i < j ? r : b)
      line(0, y, width, y);
    }
  }
  noLoop();
}
function keyTyped() {
  if (key === 's') {
    save('myCanvas.jpg');
  }
}