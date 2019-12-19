var i;
var j;
var k;

  function setup() {  
createCanvas(windowWidth,100); 
  i=0;

  
}  
function draw() {  
  background(170,222,247);
  noStroke();
 fill(255, 255, 255);
 j=15*sin(i*PI/15);
 k=15*sin(i*PI/20);

 i+=0.1; 
beginShape();
curveVertex(-windowWidth/4, 0);
curveVertex(-windowWidth/4, 0);
curveVertex(windowWidth/4*5, 0);
curveVertex(windowWidth/4*5, 50+k);
curveVertex(windowWidth, 50-j);
curveVertex(windowWidth/4*3, 50+k);
curveVertex(windowWidth/2, 50-j);
curveVertex(windowWidth/4, 50+k);
curveVertex(0, 50-j);
curveVertex(-windowWidth/4, 50+k);
curveVertex(-windowWidth/4, 50+k);
endShape();

}