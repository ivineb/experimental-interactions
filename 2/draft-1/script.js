
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);

//title
textFont("p22-underground-pc");
textSize(60);
fill(255);
text('my TV Shows / Diversity', 560, 100 );


  //created by
  var totalAmount = 38;
  var whiteMen = 18;
  var women = 9.5;
  var queerTrans = 6;
  var bipocs = 4.5;


  var graph1 = {
    "name": "Created By:",
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
  text(graph1.name, 250, 220);
  textSize(12);
  for (var peopleCounter = 0; peopleCounter < 4; peopleCounter++) {
    var currentPeople = graph1.people[peopleCounter]
    text(currentPeople[0], 100, (24 * peopleCounter) + 346);
  }
  
  //Legend
  //blue
  fill('#81f5ff');
  rect(250, 337, 10, 10);
  //red
  fill('#ff7272');
  //purple
  rect(250, 361, 10, 10);
  fill('#be79df');
  //ylw
  rect(250, 385, 10, 10);
  fill('#edf285');
  rect(250, 409, 10, 10);


 
  var barHeight = 50;
  var barX = 100;
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
  fill('#be79df');
  rect(barX + whiteMenValue + womenValue, barY, queerTransValue, barHeight);

  //bipocs
  var bipocValue = map(bipocs, 0, totalAmount, 0, 500);
  fill('#edf285');
  rect(barX + whiteMenValue + womenValue + queerTransValue, barY, bipocValue, barHeight);
  // otherChart();
}












// function otherChart() {
//   var barWidth = 30; 
//   var startingX = barWidth*4;
//   var startingY = 600;

// //Arrays
  
// var cat = ["Women","BIPOC","Queer/Trans"];
  
// var yes = [5,4,3.5];

// var no = [4,3,2.5]; 

// var shows = ["5","10","15","20","25","30","35","40"]; 

// var listLength = shows.length; 

// line(100, startingY, 700, startingY);	
// line(100, startingY, 100, 150);	

//  line(100, 500, 700, 500);	

//  //Loopy
  
//  for(var i=0; i<listLength; i++){
    
  
//   var xVal = ((startingX+(barWidth)) * i);
  
//   var yesValForShow = map(yes[i],1,10,50,500);
  
//   var noValForShow = map(no[i],1,10,50,500);
  
//   text(shows[i],80,550+(i*50)*-1);
  
  
  
//   //yes bar
//   fill('#ee4bb5');
//   rect(xVal+100,startingY,barWidth,yesValForShow*-1);
  
//   //no bar
//   fill('#92baf4'); 
//   rect(xVal+barWidth+100,startingY,barWidth,noValForShow*-1);
   
  
//   //shows of the week
//   fill('white');
//   text(cat[i],xVal+115,startingY+20);

// }
// line(100, 550, 700, 550);	

// line(100, 500, 700, 500);	

// line(100, 450, 700, 450);	

// line(100, 400, 700, 400);	

// line(100, 350, 700, 350);

// line(100, 300, 700, 300);

// line(100, 250, 700, 250);



// //key

// fill("#ffffff");
// rect(100,90,250,60);

// fill('#ee4bb5');
// rect(120,95,20,20);

// fill("#000000");
// text("= yes",150,110);

// fill('#92baf4');
// rect(120,125,20,20);

// fill("#000000");
// text("= no",150, 140);


// fill("white");
// text("Diversity of folks as main characters in my TV shows",400,120);

// text("# of Shows", 8, 380);


// }








// click to see the most diverse shows from my top 40 shows. // interactivity