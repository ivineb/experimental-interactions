// reference for randomizing words
//https://editor.p5js.org/awade5/sketches/BJHlo64z4

var t;

var words = [
  "Women",
  "Girls",
  "LGBTQIA+",
  "non-binary",
  "BIPOCs",
  "Latinos",
  "Asians",
  "Native Americans",
  "Immigrants",
  "Kids",
  "Families",
  "Refugees",
  "Queers",
  "People of Color",
  "all races",
  "all ethnicities",
  "all genders",
  "Lovers"
];

var index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  t = 0;
}

function draw() {
  textFont('Open Sans');
  fill('orange')
  textSize(46);
  text(words[index], 200, 200);

  // adding the fixed sentence
  textSize(36);
  text('Bikes are for', 200, 150);
  textSize(16);
  text('Press any key to save your artwork', 1600, 800);

  // sketch
  // drawing the x, y positions and the colors of the ellipse
  
  var x = width * noise(t);
  var y = height * noise(t+5);
  var r = 255 * noise(t+10);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);
  
  noStroke();
  fill(r, g, b);
  ellipse(x, y, 150, 150);

  // speed
  t = t + 0.01;
}

function mousePressed() {
  // i had to add a white rec under the text so that we can clearly see the word changing!
  // its been tricky because i needed the bg to stay in setup() so that it doesnt fill the
  // screen everytime the draw() is executed so that we can see the cool paint on the screen
  fill("fff")
  rect(100, 100, 500, 140)

  // randomizing words when we click the mouse
  index = floor(random(words.length));
  console.log(index);

  if (index == words.length) {
    index = 0;
  }
}


// taking a screenshot to save
function keyTyped () {
	saveCanvas("01.jpg");
}