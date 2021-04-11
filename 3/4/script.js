function setup() {
  createCanvas(600, 600);
  

  background("#C7E0A4");
	
	for (let x = 0; x <= width; x += 95) {
          let s = 300;
		// ellipse(x, 200, s);
		
		// triangle(x1, y1, x2, y2, x3, y3);
      
        // strokeWeight(x/40);
        strokeWeight(8);
        stroke("#fff");
        noFill();
      triangle(x, 300 - 200, x + s, 200- 200, x + s, 400 - 200);
		triangle(x, 300, x + s, 200, x + s, 400);
      triangle(x, 300 + 200, x + s, 200 + 200, x + s, 400 + 200);
	}
}
function keyTyped() {
  if (key === 's') {
    save('myCanvas.jpg');
  }
}