function inPut(){
  x = 25
  y = 312
  s = 75
  Tastenfeld.push(new Button("0", x, y, s, "Zero()"));  
  Tastenfeld.push(new Button("1", x, y-100, s, "one()"))
  Tastenfeld.push(new Button("2", x+100, y-100, s, "two()"))
  Tastenfeld.push(new Button("3", x+200, y-100, s))
  Tastenfeld.push(new Button("4", x, y-200, s))
  Tastenfeld.push(new Button("5", x+100, y-200, s))
  Tastenfeld.push(new Button("6", x+200, y-200, s)) 
  Tastenfeld.push(new Button("7", x, y-300, s))
  Tastenfeld.push(new Button("8", x+100, y-300, s))
  Tastenfeld.push(new Button("9", x+200, y-300, s)) 
  
}

function Zero(){
  console.log("you pressed Sero")
}
function one(){
  console.log("you pressed one")
}
function two(){
  console.log("you pressed two")
}