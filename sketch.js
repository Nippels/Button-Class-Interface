let Tastenfeld = []

function setup() {
  createCanvas(400, 400); 
  inPut();
   
}



function draw() {
  background(230);
  for(let i = 0; i<Tastenfeld.length;i++){
  Tastenfeld[i].update();
  Tastenfeld[i].show();
  Tastenfeld[i].clicked();
  }  
}



