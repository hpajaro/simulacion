var angulo=0;
function setup(){
    createCanvas(500,500);    slider=createSlider(0,PI,PI/4,0.01);
}
function draw(){
    background("#fff");
    stroke(0,255,0);
  translate(250,height); 
    rama(150)
}

function rama(len){
    
  line(0,0,0,-len);
  translate(0,-len);    
  angulo=slider.value();
  if(len>4) {
       push();
      rotate(angulo);      
    rama(0.7*len);
    pop();
    //push();  
    rotate(-angulo);
    rama(0.7*len);
    //pop();
  }
}