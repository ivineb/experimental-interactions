function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(30);
  
  fill("black");
 rect(40, 140, 700, 650);

  fill("white");
  textSize(18);
  text('Click to find out, some of the most diverse shows from my watch list.', 850, 600);
  button = createButton("Show me");
  button.addClass("button");
  button.position(850, 710);
  button.style("background-color", "rgb(22,105,197)");
  button.mousePressed(doSomething);
  
//Variables
 
  var barWidth = 30; 
  var startingX = barWidth*4;
  var startingY = 600;
  
  
//Arrays
  
  var cat = ["Women","BIPOC","Queer/Trans"];
  
  var yes = [5.5,4,2.5];
  
  var no = [4.5,3.8,3.5]; 
  
  var shows = ["5","10","15","20","25","30","35","40"]; 
  
  var listLength = shows.length; 

  stroke("white")
	line(100, startingY, 700, startingY);	
  line(100, startingY, 100, 150);	
 	line(100, 500, 700, 500);	
  
//Loopy
  
  for(var i=0; i<listLength; i++){
  
  	var xVal = ((startingX+(barWidth)) * i);
    
    var yesValForShow = map(yes[i],1,10,50,500);
    
    var noValForShow = map(no[i],1,10,50,500);
    
    noStroke();
    text(shows[i],80,550+(i*50)*-1); 
    
    //yes bar
    fill('#ed0cef');
    rect(xVal+100,startingY,barWidth,yesValForShow*-1);
    
    //no bar
    fill('#81f5ff'); 
    rect(xVal+barWidth+100,startingY,barWidth,noValForShow*-1);
     
    //shows 
    fill('white');
    text(cat[i],xVal+115,startingY+20);
  
}
stroke("white");
  line(100, 550, 700, 550);	
  line(100, 500, 700, 500);	
  line(100, 450, 700, 450);	
  line(100, 400, 700, 400);	
  line(100, 350, 700, 350);
  line(100, 300, 700, 300);
  line(100, 250, 700, 250);
  
  
//key
  
noStroke();

  fill('#ed0cef');
  rect(120,700,20,20);
  
  fill("white");
  text("= yes",150,710);
  
  fill('#81f5ff');
  rect(120,730,20,20);

  fill("white");
  text("= no",150, 750);
  

  fill("white");
  noStroke();
  textSize(20);
  text("Inclusivity of folks as main characters in my TV shows",200,220);
  
  textSize(12);
  text("# of Shows", 8, 380);

  fill('#81f5ff');
  text("Number of shows containing Women, BIPOCs, Queer/Trans as main characters", 260, 665);


  ////
  createdBy();
}



/////
function createdBy() {

  fill('black');
  rect(850, 140, 600, 350);
 
//title
// textFont("p22-underground-pc");
// textSize(80);
// fill(255);
// text('my TV Shows / Diversity', 550, 100 );


  //created by
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
  textSize(20);
  fill(255);
  text(graph1.name, 900, 220);
  textSize(12);
  for (var peopleCounter = 0; peopleCounter < 4; peopleCounter++) {
    var currentPeople = graph1.people[peopleCounter]
    text(currentPeople[0], 900, (24 * peopleCounter) + 346);
  }
  
  //Legend
  //blue
  fill('#81f5ff');
  rect(1050, 337, 10, 10);
  //red
  fill('#ff7272');
  //purple
  rect(1050, 361, 10, 10);
  fill('#ed0cef');
  //ylw
  rect(1050, 385, 10, 10);
  fill('#edf285');
  rect(1050, 409, 10, 10);

  var barHeight = 50;
  var barX = 900;
  var barY = 250;
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


function doSomething() {
  
}