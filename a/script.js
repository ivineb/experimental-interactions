// stuff for the words
var index = 0;

var words = [
  "Women",
  "Queers",
  "LGBTQIA+",
  "Non-binary ppl",
  "BIPOCs",
  "Latinos",
  "Asians",
  "Indigenous ppl",
  "Immigrants",
  "Kids",
  "Families",
  "Refugees",
  "People of Color",
  "all races",
  "all ethnicities",
  "all genders",
  "Multiracial",
  "Lovers"
];

// stuff for scribble
let x = 300;
let y = 300;
let vx = 0;
let vy = 0;
let red = 150;

// stuff for the bike path
var dx, dy;
var xSpeed, ySpeed;

var maxSpeed = 5;
var range = maxSpeed * 0.33;

///

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  dx = width / 2;
	dy = height / 2;
	xSpeed = random(-2,2);
	ySpeed = random(-2,2);
  noStroke();
  pattern();
}

function draw() {
  drawText();
  scribble();
}

function scribble() {
  // draw colorful scribble

	// move
  vx += random(-2.25, 2.25);
  vy += random(-2.25, 2.25);
  vx = constrain(vx, -8, 8);
  vy = constrain(vy, -8, 8);
	x += vx;
	y += vy;
	
	// wrap
	if (x < 0) {
		x = width;
	}
  if (x > width) {
		x = 0;
	}
  if (y < 0) {
		y = height;
	}
  if (y > height) {
		y = 0;
	}
	
	// draw 
  red += random(-8, 8);
	red = constrain(red, 60, 255);
	fill(red, 90, 315 - red);
  ellipse(x, y, 120);

// draw bike path line
  xSpeed += random(-range, range);
	ySpeed += random(-range, range);
	xSpeed = constrain(xSpeed, -maxSpeed, maxSpeed);
	ySpeed = constrain(ySpeed, -maxSpeed, maxSpeed);
	dx += xSpeed;
	dy += ySpeed;
	
	dx = constrain(dx, 0, width);
	dy = constrain(dy, 0, height);
	
	var size = random(1,20);
	size = 4;
	fill(0);
  ellipse(dx,dy,size, size);
}

// text

function drawText() { 
  textFont('ohno-blazeface');
  fill('purple');
  textSize(136);
  textStyle(NORMAL);
  text(words[index], 450, 440,);
  
  textSize(106);
  textStyle(ITALIC);
  text('bikes are for', 570, 320);
  }

  // background typo pattern

  function pattern() {
    var w = 55; // width of one cell
    var h = w; // height of one cell

	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
			push();
			translate(x, y);

			var r = random(0, 255); // red
			var g = random(0, 255);
			var b = random(0, 250);

			fill(r, g, b);

			var randomChoice = random(10);
			if (randomChoice < 1) {
				text('ride on!', 10, 10);
			} else if (randomChoice < 2) {
				text('bikes', 20, 20);
			} else if (randomChoice < 3) {
				text('diversity', 10, 10);
              } else if (randomChoice < 4) {
				text('explore', 10, 10);
                } else if (randomChoice < 5) {
        text('adventures', 10, 10);
                } else if (randomChoice < 6) {
				text('intersectional', 10, 10);
                  } else if (randomChoice < 7) {
        text('freewheel', 10, 10);
                  } else if (randomChoice < 8) {
        text('pedal', 10, 10);
                  } else if (randomChoice < 9) {
				text('radical', 10, 10);
			} else {
				text('shred lightly', 0, 0);
			}
			
			pop();
		}
	}
}

function keyPressed() {
    var r = random(200, 255); // red
    var g = random(200, 255);
    var b = random(0, 250);

  if (keyCode === UP_ARROW) {
  
  fill(r, g, b);
 rect(420, 330, 1060, 150);
 
 index = floor(random(words.length));
 if (index == words.length) {
   index = 0;
 }
}
 
}