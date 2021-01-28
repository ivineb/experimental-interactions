// reference for randomizing words
//https://editor.p5js.org/awade5/sketches/BJHlo64z4

//reference for using noise instead of random for scribble
//https://stackoverflow.com/questions/65055236/is-there-a-better-solution-to-this-2d-noise-ellipse-in-p5js

var t;

var words = [
  "Women",
  "LGBTQIA+",
  "non-binary folks",
  "BIPOCs",
  "Latinos",
  "Asians",
  "Native Americans",
  "Immigrants",
  "Kids",
  "Families",
  "Refugees",
  "People of Color",
  "all races",
  "all ethnicities",
  "all genders",
  "Lovers"
];

var index = 0;
t = 0;

function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
  noStroke();  
}


function draw() {
  drawText();
  drawSketch();
}

// sketch
  // assigning and drawing the x, y positions and the colors of the ellipse
  
function drawSketch(){
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
  }

  function drawText() { 
  textStyle(BOLD);
  textFont('Open Sans');
  fill('purple');
  textSize(126);
  text(words[index], 450, 440,);
  textSize(96);
  text('Bikes are for', 570, 290);
  }



  
function keyTyped() {
  background(255);
  index = floor(random(words.length));
  if (index == words.length) {
    index = 0;
  }
}



// // taking a screenshot to save
// function keyTyped () {
// 	saveCanvas("01.jpg");
// }