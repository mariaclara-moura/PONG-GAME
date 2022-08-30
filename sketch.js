// variáveis relacionadas à bolinha

var posX=683;

var posY=310;

var raio=10;

var velX=7;

var velY=7;

// pontuação

var ponto1=0;

var ponto2=0;

// variáveis relacionadas às barrinhas

var y1=290;

var y2=290;

var velBarra=1;

var x1=35;

var x2=1303;

// extra

var button;

var menu = 0;


function setup() {

 createCanvas(1366,621);

 background(0, 100);

 fundo ();

 intro();

}


function draw() {

 background(0, 35);

 fundo();
  

 if (menu == 1) {

    jogo();

    removeElements();
  } else {
    intro();
  } 
  
  if (ponto1 == 10) {

    velX = 0;

    velY = 0;

  fill(255, 175, 204);
  textSize(55);
  text("VOCÊ VENCEU!",120,320);
  text("VOCÊ PERDEU!",850,320);


  let col = color(255, 175, 204);

  button = createButton('Reiniciar jogo');

  button.position(585, 420);

  button.size(200, 50);

  button.style('background-color', col);

  button.mousePressed(reiniciajogo);
  } 

  else if (ponto2 == 10) {

    velX = 0;

    velY = 0;

  fill(255, 175, 204);
  textSize(55);
  text("VOCÊ PERDEU!",120,320);
  text("VOCÊ VENCEU!",830,320);

  let col = color(255, 175, 204);

    button = createButton('Reiniciar jogo');

    button.position(585, 420);

    button.size(200, 50);

    button.style('background-color', col);

    button.mousePressed(reiniciajogo);
  }

  
 }
  
 function intro () {

      fill(205, 180, 219);

      rect(464,150,455,355);

      fill (33, 158, 188);

      strokeWeight(4);

      stroke(80);

      textSize(55);

      text ("PONG GAME",525,200);
      
      strokeWeight(0);

      fill(0)

      textSize(20);

      text ("Bem-vindos ao Pong!",595,240);

      text("Para jogar, utilize os seguintes comandos:",505,275);

      fill(33, 158, 188);

      rect(510,300,20,110,20);

      textSize(45);

      text("↑",540,340);

      rect(575,310,38,38);

      rect(575,365,38,38);

      text("↓",540,390);

      fill(33, 158, 188);

      rect(855,300,20,110,20);

      textSize(45);

      text("↑",820,340);

      rect(775,310,38,38);

      rect(775,365,38,38);

      text("↓",820,390);

      fill(0);

      textSize(35);

      text("↑",785,336);

      text("↓",785,390);

      textSize(30);

      text("W",580,340);

      text("S",585,394);

      textSize(18);

      text ("Vence o jogador que fizer 10 pontos primeiro.",515,442);

  
   let col = color(33, 158, 188);
   
   button = createButton('Iniciar jogo');

   button.position(592, 460);

   button.size(200, 30);
   
   button.mousePressed(mudamenu);
  
   button.style('background-color', col);
   
}
  

function jogo() {

 
 strokeWeight(0);

 fill(255, 175, 204);
 
 circle(posX,posY,raio*2);

 posX+=velX;
 
 posY+=velY;

 

if ((posX-raio <= x1-velX) && (posX-raio >= x1+velX)){

    if((posY >= y1) && (posY <= y1+110)){

      velX = -velX;

    }

  }

 if ((posX-raio <= x2+velX) && (posX-raio >= x2-velX)){

    if((posY >= y2) && (posY <= y2+110)){

      velX = -velX;

    }

  }

  
 if (posX+raio>1366) {

    velX = -velX;

    ponto1+=1;

    posX = 683;

    posY = 310;
  }
 
 if (posX+raio<20) {

    velX = -velX;

    ponto2+=1;

    posX = 683;

    posY = 310;

  }
  
  
 if (posY+raio>621) {

    velY = -velY;

  }
  
 if (posY+raio<20) {

    velY = -velY;

  }


 if (keyIsDown(87)) {

    y1-=15*velBarra;

  }

 if (keyIsDown(83)) {

     y1+=15*velBarra;
  }


 if (y1>511) {

    y1=511;
  
  }

 else if (y1<0) {

   y1=0;

  }

 if (keyIsDown(38)) {

    y2-=15*velBarra;

  }
 
 
 if (keyIsDown(40)) {

     y2+=15*velBarra;

  }

 
 if (y2>511) {

    y2=511;

  }
 
 else if (y2<0) {

    y2=0;
  
  }

  }
 
 function fundo () { 


  for(i=0;i<=621;i+=40) {
  
    strokeWeight(0);

    fill(255, 175, 204);

    rect(673,i,20,20);

  }

 strokeWeight(0);

 fill(33, 158, 188);

 rect(x1,y1,20,110,20);

 fill(33, 158, 188);

 rect(x2,y2,20,110,20);

 

  fill (33, 158, 188);

  textSize(75);

  text(ponto1,573,100);

  text(ponto2,755,100);

}


function mudamenu() {
 
  menu = 1;

}

function reiniciajogo() {

 velX = 7;

 velY = 7;

 ponto1 = 0;

 ponto2 = 0;

 menu = 0;
 
  button.hide()

}