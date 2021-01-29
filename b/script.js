// for the scribble
var t;
t = 0;

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
  // feel free to add/suggets more words/terms representing diversity and inclusion!
];

// stuff for the bike path
var dx, dy;
var xSpeed, ySpeed;

var maxSpeed = 5;
var range = maxSpeed * 0.33;

///

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  // more bike path stuff
  dx = width / 2;
	dy = height / 2;
	xSpeed = random(-2,2);
	ySpeed = random(-2,2);
  noStroke();
  // applying that typo bg pattern 
  pattern();
}

function draw() {
  drawText();
  scribble();
}

function scribble() {
  // draw colorful scribble and bike path

  // draw scribble

  var x = width * noise(t);
  var y = height * noise(t+5);
  var r = 255 * noise(t+10);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);
  
  // move
  t += 0.01;

  noStroke();
  fill(r, g, b);
  ellipse(x, y, 150, 150);

// draw bike path line
  xSpeed += random(-range, range);
	ySpeed += random(-range, range);
	xSpeed = constrain(xSpeed, -maxSpeed, maxSpeed);
	ySpeed = constrain(ySpeed, -maxSpeed, maxSpeed);
	dx += xSpeed;
	dy += ySpeed;
	
	dx = constrain(dx, 0, width);
	dy = constrain(dy, 0, height);
	
	size = 4;
	fill(0);
  ellipse(dx,dy,size, size);
}

// text

function drawText() { 
  // the random words
  textFont('ohno-blazeface');
  fill('purple');
  textSize(136);
  textStyle(NORMAL);
  text(words[index], 450, 440);

  // bikes are for
  textSize(106);
  textStyle(ITALIC);
  text('bikes are for', 570, 320);

  // instruction box + text
  fill('lime');
  rect(1380, 25, 315, 40);
  fill('#000080');
  textSize(18);
  textFont('helvetica');
  textStyle(BOLD);
  text('press UP ARROW for inclusivity!', 1400, 50 )
  }

  // background typo pattern

function pattern() {
    var w = 55; // width of one cell / (go up to have less words) 
    var h = w; // height of one cell

	for (let x = 0; x <= width; x += w) {  // letting the words fill the width and height of the page
  for (let y = 0; y <= height; y += h) {
    
    push();
    translate(x, y);

    // random colors 
    var r = random(0, 255); 
    var g = random(0, 255);
    var b = random(0, 250);

    fill(r, g, b);

    var randomChoice = random(10);
    if (randomChoice < 1) {
      text('ride on!', 10, 10);
    } else if (randomChoice < 2) {
      text('bikes', 20, 20);
    } else if (randomChoice < 3) {
      text('diversity', 30, 30);
            } else if (randomChoice < 4) {
      text('explore', 20, 20);
              } else if (randomChoice < 5) {
      text('adventures', 10, 10);
              } else if (randomChoice < 6) {
      text('intersectionality', 10, 10);
                } else if (randomChoice < 7) {
      text('freewheel', 20, 20);
                } else if (randomChoice < 8) {
      text('pedal', 10, 10);
                } else if (randomChoice < 9) {
      ellipse(200, 200, 20, 20); // wanted to also add circles to represent bike wheels, and/or a replica to that scribble
      text('radical', 10, 10);
    } else {
      text('shred lightly', 0, 0);
    }
    
    pop();
		}
	}
}

// when we press the up arrow, the word changes and we get a random light colored rect each time behind text

function keyPressed() {
    var r = random(200, 255); 
    var g = random(200, 255);
    var b = random(0, 250);

  if (keyCode === UP_ARROW) {
  
  fill(r, g, b);
 rect(420, 330, 1060, 150);
 
 // random word here
  index = floor(random(words.length));
  if (index === words.length) {
    index = 0;
  }
  }
}

