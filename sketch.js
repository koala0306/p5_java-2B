let cor;
let posicapx;
let posicaoy;

function setup() {
  createCanvas(400, 400);
  background("pink");
  cor=color(random(0,255),random(0,255),random(0,255));
  posicaox=200;
  posicaoy=200;
}

function draw() {
  
 fill(cor)
  circle(posicaox,posicaoy,50);
  
 if (mouseX<posicaox){
   posicaox--; 
    
  }
  if(mouseX>posicaox){
    posicaox++;
  }
  
    
 if (mouseY<posicaoy){
   posicaoy--; 
    
  }
  if(mouseY>posicaoy){
    posicaoy++;
  }
  
}
