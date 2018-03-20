

function setup() {
    frameRate(30);
    createCanvas(200,200);
    background('#acacac');
   
}
function draw() {
  
 
    function mouseDragged() {
         fill(255,12,12);
  
  ellipse(mouseX, mouseY, 60, 60);
        
         fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  pg.background(51);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX-150, mouseY-75, 60, 60);

  //Draw the offscreen buffer to the screen with image()
  image(pg, 150, 75);
}
}
function mouseClicked() {
   console.log(mouseX, mouseY);
}

