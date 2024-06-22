function setup() {
    createCanvas(1090, 1990);
    background("black")
  }
  
  function draw() {
    stroke("black");
    fill("blue");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  
  