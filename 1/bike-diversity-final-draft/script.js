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
  background("lightyellow");

  // more bike path stuff
  dx = width / 2;
  dy = height / 2;
  xSpeed = random(-2, 2);
  ySpeed = random(-2, 2);
  noStroke();
  
  // applying that typo bg pattern
  pattern();
  
  // bikes are for
  textFont("ohno-blazeface");
  fill("#005086");
  textSize(106);
  textStyle(NORMAL);
  text("bikes are for..", 570, 320);
}

function draw() {
  button = createButton("Click me to find out");
  button.addClass("button");
  button.position(750, 550);
  button.style("background-color", "#00b7c2");
  button.mousePressed(doSomething);
   scribble();
}

// creating a function for the button
function doSomething() {
  var r = random(200, 255);
  var g = random(200, 255);
  var b = random(0, 250);
  fill(r, g, b);
  rect(420, 330, 1060, 150);

  textFont("ohno-blazeface");
  fill("#005086");
  noStroke();
  textSize(136);
  textStyle(NORMAL);
  text(words[index], 450, 440);

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
  var w = 77; // width of one cell / (go up to have less words)
  var h = w; // height of one cell

  for (let x = 0; x <= width; x += w) {
    // letting the words fill the width and height of the page
    for (let y = 0; y <= height; y += h) {
      push();
      translate(x, y);

      // random colors
      var r = random(0, 5);
      var g = random(0, 255);
      var b = random(0, 150);

      fill(r, g, b);

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
