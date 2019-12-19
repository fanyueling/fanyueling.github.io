var i;
var j;
var k;

  function setup() {  
 var canvas = createCanvas(windowWidth,300); 
 canvas.parent('wave-waterb')
  i=0;

  
}  
function draw() {  
  background(170,222,247);
  noStroke();
 fill(42,55,68);
 j=15*sin(i*PI/15);
 k=15*sin(i*PI/20);

 i+=0.1; 
beginShape();
curveVertex(-windowWidth/4, 0);
curveVertex(-windowWidth/4, 0);
curveVertex(windowWidth/4*5, 0);
curveVertex(windowWidth/4*5, 40+k);
curveVertex(windowWidth, 40-j);
curveVertex(windowWidth/4*3, 40+k);
curveVertex(windowWidth/2, 40-j);
curveVertex(windowWidth/4, 40+k);
curveVertex(0, 40-j);
curveVertex(-windowWidth/4, 40+k);
curveVertex(-windowWidth/4, 40+k);
endShape();

}