  
  //var of button
  var d = 70;
  var state = false;

  var banana = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#221f3b');
  // createdBy();
  // characters();
  tv();
}

function tv() {
   //TV 
  //  fill('white');
  //  rect(950, 50, 6, 110);
  //  rect(850, 50, 6, 110);
  // //top
  // fill('#b52b65');
  // ellipse(900, 200, 200, 200);
 

  // Body
  fill(300)
	rect(500, 120, 800, 620, 50);


  //screen second button
  if (state) {
    fill(10)
    rect(525, 150, 650, 560, 5);
    createdBy();
    
    } else {
      noStroke();
    fill(70)
    rect(525, 150, 650, 560, 5);
    //static thingy
    fill('#fcf876');
    rect(525, 150, 80, 560, 3);
    fill('#008891');
    rect(605, 150, 80, 560, 3);
    fill('#16c79a');
    rect(685, 150, 80, 560, 3);
    fill('#db6400');
    rect(765, 150, 80, 560, 3);
    fill('#583d72');
    rect(845, 150, 80, 560, 3);
    fill('#ea86b6');
    rect(925, 150, 80, 560, 3);
    fill('#99f3bd');
    rect(1005, 150, 80, 560, 3);
    fill('#07689f');
    rect(1085, 150, 89, 560, 3);
    }

    if (banana) {
      fill(10)
      rect(525, 150, 650, 560, 5);
      characters();
      
    } else {
      fill(70)
      } 


  // bottom
  fill(300)
  rect(700, 750, 350, 40, 20, 15, 10, 5);

  //right lines
   fill('black');
  rect(1200, 240, 65, 12, 5);
  rect(1200, 300, 65, 12, 5);
  rect(1200, 360, 65, 12, 5);
  rect(1200, 420, 65, 12, 5);
  rect(1200, 480, 65, 12, 5);

  // tv button
  fill('#ef4f4f');
  ellipse(1235, 560, d, d);

    // tv button2
    fill('#ef4f4f');
    ellipse(1235, 650, d, d);

    // stroke
  strokeCap(ROUND);
}
// button function
function mousePressed() {
  if (dist(mouseX, mouseY, 1235, 560) < d/2) {
    state = !state;
  }
  if (dist(mouseX, mouseY, 1235, 650) < d/2) {
    banana = !banana;
  }
}

///

function characters() {
  // fill("black");
  // rect(40, 140, 700, 650);

  
//Variables
 
  var barWidth = 40; 
  var startingX = barWidth*3;
  var startingY = 600;
  
  
//Arrays
  
  var cat = ["Women","BIPOC","Queer/Trans"];
  
  var yes = [5.5,4,2.5];
  
  var no = [4.5,3.8,3.5]; 
  
  var shows = ["5","10","15","20","25","30","35","40"]; 
  
  var listLength = shows.length; 

  stroke("white")
	line(600, 600, 1000, 600);	
  line(600, 250, 600, 600);	

  
//Loopy
  
  for(var i=0; i<listLength; i++){
  
  	var xVal = ((startingX+(barWidth)) * i);
    
    var yesValForShow = map(yes[i],1,10,50,500);
    
    var noValForShow = map(no[i],1,10,50,500);
    
    noStroke();
    text(shows[i],570,550+(i*50)*-1); 
    
    //yes bar
    fill('#ed0cef');
    rect(xVal+600,startingY,barWidth,yesValForShow*-1);
    
    //no bar
    fill('#81f5ff'); 
    rect(xVal+barWidth+600,startingY,barWidth,noValForShow*-1);
     
    //shows 
    fill('white');
    text(cat[i],xVal+615,startingY+20);
  
}

//key
  
noStroke();

  fill('#ed0cef');
  rect(1080,583,20,20);
  
  fill("white");
  text("= yes",1120,600);
  
  fill('#81f5ff');
  rect(1080,620,20,20);

  fill("white");
  text("= no",1120, 630);
  

  fill("white");
  noStroke();
  textSize(18);
  text("Inclusivity of folks as main characters in my TV shows", 650,220);
  
  textSize(12);
  text("# of Shows", 550, 580);


  fill('#81f5ff');
  text("Number of shows containing Women, BIPOCs, Queer/Trans as main characters", 620, 665);
}


/////


//////


/////

function createdBy() {
 
  var totalAmount = 38;
  var whiteMen = 18;
  var women = 9.5;
  var queerTrans = 6;
  var bipocs = 4.5;


  var graph1 = {
    "name": "My shows are Created By:",
    "people": [
      ["White Men", 18],
      ["Women", 9.5],
      ["Queer & Trans", 6],
      ["BIPOCs", 4.5]
    ]
  }

  textFont("p22-underground");
  textSize(28);
  fill(255);
  text(graph1.name, 610, 230);
  textSize(18);
  for (var peopleCounter = 0; peopleCounter < 4; peopleCounter++) {
    var currentPeople = graph1.people[peopleCounter]
    text(currentPeople[0], 600, (36 * peopleCounter) + 446);
  }
  
  //Legend
  //blue
  fill('#81f5ff');
  rect(850, 430, 20, 20);
  //red
  fill('#ff7272');
  //purple
  rect(850, 470, 20, 20);
  fill('#ed0cef');
  //ylw
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
  fill('#81f5ff');
  var whiteMenValue = map(whiteMen, 0, totalAmount, 0, totalBarWidth);
  rect(barX, barY, whiteMenValue, barHeight);

  //women
  var womenValue = map(women, 0, totalAmount, 0, 500);
  fill('#ff7272');
  rect(barX + whiteMenValue, barY, womenValue, barHeight);

  //queerTrans
  var queerTransValue = map(queerTrans, 0, totalAmount, 0, totalBarWidth);
  fill('#ed0cef');
  rect(barX + whiteMenValue + womenValue, barY, queerTransValue, barHeight);

  //bipocs
  var bipocValue = map(bipocs, 0, totalAmount, 0, 500);
  fill('#edf285');
  rect(barX + whiteMenValue + womenValue + queerTransValue, barY, bipocValue, barHeight);
}
