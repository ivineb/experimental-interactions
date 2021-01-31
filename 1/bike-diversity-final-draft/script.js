// reference for randomizing words
// https://editor.p5js.org/awade5/sketches/BJHlo64z4

// reference for gradient/noise bg
// https://stackoverflow.com/questions/61565188/noisy-gradient-in-p5-js


var index = 0;

var button;

var words = [
  "Queers",
  "Women",
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

// stuff for the bike path
var dx, dy;
var xSpeed, ySpeed;

var maxSpeed = 5;
var range = maxSpeed * 0.33;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  setGradient(0, 0, width, height, color(255, 110, 140), color(5, 185, 250));
  setNoise();

  // more bike path stuff
  dx = width / 2;
  dy = height / 2;
  xSpeed = random(-2, 2);
  ySpeed = random(-2, 2);
  noStroke();
  pattern();
  
  // bikes are for
  textFont("ohno-blazeface");
  fill("#005086");
  textSize(95);
  textStyle(NORMAL);
  text("bikes are for..", 590, 310);
}

// noise
function setNoise() {
  loadPixels();
  for (let x = 0; x < width; x++ ) {
      for (let y = 0; y < height; y++ ) {
          if (random(1) > 0.9) {
              const index = (x + y * width) * 4;
              pixels[index] = 255;
              pixels[index + 100] = 255;
              pixels[index + 100] = 255;
              pixels[index + 100] = 255;
          }
      }
  }
  updatePixels();
}

// gradient
function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
  }
}

function draw() {
  button = createButton("Click me to find out");
  button.addClass("button");
  button.position(844, 550);
  button.style("background-color", "rgb(22,105,197)");
  button.mousePressed(doSomething);
   scribble();
}


// creating a function for the button
function doSomething() {
  // text bg
  var r = random(0, 255);
  var g = random(250, 255);
  var b = random(255, 255);
  fill(r, g, b);
  rect(420, 330, 1095, 150);

  textFont("ohno-blazeface");
  fill("#005086");
  noStroke();
  textSize(136);
  textStyle(NORMAL);
  text(words[index], 480, 440);

  index = floor(random(words.length));
  if (index === words.length) {
    index = 0;
  }
}

function scribble() {
  // draw bike path line
  xSpeed += random(-range, range);
  ySpeed += random(-range, range);
  xSpeed = constrain(xSpeed, -maxSpeed, maxSpeed);
  ySpeed = constrain(ySpeed, -maxSpeed, maxSpeed);
  dx += xSpeed;
  dy += ySpeed;

//   dx = constrain(dx, 0, width);
//   dy = constrain(dy, 0, height);


// wrapping the path
  if (dx < 0) {
		dx = width ;
	}
  if (dx > width) {
		dx = 0;
	}
  if (dy < 0) {
		dy = height;
	}
  if (dy > height) {
		dy = 0;
	}
  size = 3;
  fill(0, 80);
  ellipse(dx, dy, size, size);
}


// background typo pattern

function pattern() {
  var w = 100; // width of one cell / (go up to have less words)
  var h = w; // height of one cell

  for (let x = 0; x <= width; x += w) {
    // letting the words fill the width and height of the page
    for (let y = 0; y <= height; y += h) {
      push();
      translate(x, y);

      // random colors
      var r = random(0, 150);
      var g = random(0, 10);
      var b = random(0, 250);

      fill(r, g, b, 160);

      var randomChoice = random(10);
      if (randomChoice < 1) {
        text("ride on!", 10, 10);
      } else if (randomChoice < 2) {
        text("bikes", 20, 20);
      } else if (randomChoice < 3) {
        text("diversity", 30, 30);
      } else if (randomChoice < 4) {
        text("explore", 20, 20);
      } else if (randomChoice < 5) {
        text("adventures", 10, 10);
      } else if (randomChoice < 6) {
        text("intersectionality", 20, 20);
      } else if (randomChoice < 7) {
        text("freewheel", 15, 15);
      } else if (randomChoice < 8) {
        text("pedal", 10, 10);
      } else if (randomChoice < 9) {
        text("radical", 20, 20);
      } else {
        text("shred lightly", 0, 0);
      }

      pop();
    }
  }
}
