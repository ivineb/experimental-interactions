  
  //var of button
  var d = 95;
  var state = false;
  var state2 = false;
  

function setup() {
  createCanvas(windowWidth, windowHeight);
   background('#fb743e');
   // applying bg gradient + nose effect
   setGradient(0, 0, width, height, color(200, 200, 240), color(12, 240, 230));
   setNoise();

}

function draw() {
  //displaying the tv
  tv();
}

function tv() {
   // drawing the TV 

  // Body
  fill('#f4f9f9')
  noStroke();
	rect(500, 120, 855, 620, 50);
  
  // bottom of tv
  fill(300)
  rect(620, 750, 580, 20, 15, 15, 20, 20);

    // tv rect container for btns
  fill('#a4ebf3');
  rect(1200, 150, 130, 558, 5)

  //right lines
   fill('black');
  rect(1225, 200, 85, 4, 5);
  rect(1225, 220, 85, 4, 5);
  rect(1225, 240, 85, 4, 5);
  rect(1225, 260, 85, 4, 5);
  rect(1225, 280, 85, 4, 5);
  rect(1225, 300, 85, 4, 5);
  rect(1225, 320, 85, 4, 5);
  rect(1225, 340, 85, 4, 5);
  rect(1225, 360, 85, 4, 5);

  // tv button1
  fill('#8b5e83');
  ellipse(1265, 480, d, d);

  // outline
  fill('#fdf1d6');
  ellipse(1265, 480, 60, 60);

  // tv button2
  fill('#8b5e83');
  ellipse(1265, 620, d, d);

  // outline
  fill('#fdf1d6');
  ellipse(1265, 620, 60, 60);

  // stroke
  strokeCap(ROUND);
  if (state) {
    
    // fill('#222831');
    fill('#222831');
    rect(525, 150, 655, 560, 5);
    fill('#660066');
    ellipse(1265, 480, 60, 60);
    createdBy();
   
    } else {
      noStroke();
   
  // display screen
  fill('#002233')
  rect(525, 150, 655, 560, 5);

  // instructions
  fill('pink');
  textFont("ballinger-mono");
  textStyle(BOLD);
  textSize(25);
  text('How diverse are my favorite TV shows?', 565, 230);

  textStyle(ITALIC);
  textSize(17);
  fill('cyan');
  text('The channels will show us the diversity of the', 565, 280);
  text('creators, and of the main characters in', 565, 310);
  text('my favorite TV shows. See instructions below!', 565, 340);
  fill('white');

  textStyle(NORMAL);
  textSize(20);
  text('Hello there, ', 600, 465);
  text('Press TV button to change the channels,', 600, 505);
  text('then press it again to turn it off.', 600, 535);

  // text border
  noFill();
  strokeWeight(1);
  stroke('white');
  rect(580, 410, 538, 200);
    }

    // screen second button
    if (state2) {
      noStroke();
      fill('#222831');
      rect(525, 150, 655, 560, 5);
      fill('#660066');
      ellipse(1265, 620, 60, 60);
      characters();
    } 
    
}

// button function
function mousePressed() {
  if (dist(mouseX, mouseY, 1265, 480) < d/2) {
    state = !state;
  }
  if (dist(mouseX, mouseY, 1265, 620) < d/2) {
    state2 = !state2;
  }
}

/// second graph below

function characters() {

//Variables
 
  var barWidth = 40; 
  var startingX = barWidth*2;
  var startingY = 600;
  
//Arrays
  
  var cat = ["Women","BIPOC","Queer/Trans"];
  var yes = [5.5,3.9,2.3];
  var no = [4.5,3.8,3.5]; 
  var shows = ["5","10","15","20","25","30","35","40"]; 
  var listLength = shows.length; 

  stroke("white");
	line(600, 600, 1000, 600);	
  line(600, 250, 600, 600);	
  
//Loopy
  
  for(var i=0; i<listLength; i++){
  	var xVal = ((startingX+(barWidth)) * i);
    var yesValForShow = map(yes[i],1,10,50,500);
    var noValForShow = map(no[i],1,10,50,500);
    
    noStroke();
    textSize(14);
    fill('white');
    text(shows[i],570,550+(i*50)*-1); 
    
    //yes bar
    fill('#e36bae');
    rect(xVal+600,startingY,barWidth,yesValForShow*-1);
    
    //no bar
    fill('#94ebcd'); 
    rect(xVal+barWidth+600,startingY,barWidth,noValForShow*-1);
     
    //shows 
    fill('white');
    text(cat[i],xVal+615,startingY+20);
}

//key
  
  noStroke();

  fill('#e36bae');
  rect(1080,583,20,20);
  
  fill("white");
  text("= yes",1120,600);
  
  fill('#94ebcd');
  rect(1080,620,20,20);

  fill("white");
  text("= no",1120, 630);
  
  fill("cyan");
  noStroke();
  textFont("p22-underground");
  textSize(26);
  textStyle(BOLD);
  text("Inclusivity of folks as main characters:", 630,230);
  
  textSize(12);
  textStyle(NORMAL);
  fill('white');
  text("# of Shows", 550, 580);


  fill('#81f5ff');
  text("Number of shows containing Women, BIPOCs, Queer/Trans as main characters", 620, 665);
}

///// first graph

function createdBy() {
 
  var totalAmount = 38;
  var whiteMen = 18;
  var women = 9.5;
  var queerTrans = 6;
  var bipocs = 4.5;


  var graph1 = {
    "name": "My shows are created by:",
    "people": [
      ["White Men", 18],
      ["Women", 9.5],
      ["Queer & Trans", 6],
      ["BIPOCs", 4.5]
    ]
  }

  textFont("p22-underground");
  textSize(26);
  fill('cyan');
  textStyle(BOLD);
  text(graph1.name, 610, 230);
  fill('white');
  textStyle(NORMAL);
  textSize(18);
  for (var peopleCounter = 0; peopleCounter < 4; peopleCounter++) {
    var currentPeople = graph1.people[peopleCounter]
    text(currentPeople[0], 600, (36 * peopleCounter) + 446);
  }
  
  //Legend
  //men
  fill('#a4ebf3');
  rect(850, 430, 20, 20);
  //women
  fill('#00af91');
  //queer/trans
  rect(850, 470, 20, 20);
  fill('#f8a1d1');
  //bipocs
  rect(850, 510, 20, 20);
  fill('#edf285');
  rect(850, 550, 20, 20);

  var barHeight = 50;
  var barX = 600;
  var barY = 310;
  var totalBarWidth = 500;


  //rectangle 
  noStroke();
  fill("white");
  rect(barX, barY, totalBarWidth, barHeight);

 
  //whiteMen rectangle 
  fill('#a4ebf3');
  // fill('#54CEBC');
  var whiteMenValue = map(whiteMen, 0, totalAmount, 0, totalBarWidth);
  rect(barX, barY, whiteMenValue, barHeight);

  //women
  var womenValue = map(women, 0, totalAmount, 0, 500);
  fill('#00af91');
  rect(barX + whiteMenValue, barY, womenValue, barHeight);

  //queerTrans
  var queerTransValue = map(queerTrans, 0, totalAmount, 0, totalBarWidth);
  fill('#f8a1d1');
  rect(barX + whiteMenValue + womenValue, barY, queerTransValue, barHeight);

  //bipocs
  var bipocValue = map(bipocs, 0, totalAmount, 0, 500);
  fill('#edf285');
  rect(barX + whiteMenValue + womenValue + queerTransValue, barY, bipocValue, barHeight);
}


// project gradient/noise background
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


