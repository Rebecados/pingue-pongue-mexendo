// declarando a variavel x 
let x = 400;
// declarando a variavel y
let y = 250;
// declarando o tamanho da bolinha 
let tamanhodabolinha = 35;
// declarando a velocidade 
let v = 6
//declarando o raio/diamentro da bolinha 
let raio = tamanhodabolinha / 2

function setup() {
    createCanvas(800, 500);
  }
  
  function draw() {
    background(0);
    
    circle(x, y, tamanhodabolinha);
    // para a bolinha se movimentar 
    x += v;

    // para bolinha debater nas bordas 
    if(x + raio > width || x - raio < 0 ){

        v*= - 1;
        


    }
  

  }


