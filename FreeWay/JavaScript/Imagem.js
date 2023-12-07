let estrada;
let ator1;

let garrafaPlastico;
let comida;
let lata;
let vidro;
let papel;

let lixVerde;
let lixAzul;
let lixVermelho;
let lixAmarelo;
let lixMarrom;
let lixRoxo;

let colidiu;
let sompontos;
let trilha;

function preload() {
  estrada = loadImage("images/estrada.png");
  ator1 = loadImage("images/ator-1.png");

  garrafaPlastico = loadImage("images/garrafaPlastico.png");
  comida = loadImage("images/comida.png");
  lata = loadImage("images/lata.png");
  pilha = loadImage("images/pilha.png");
  papel = loadImage("images/papel.jpg");
  vidro = loadImage("images/vidro.png");

  lixVerde = loadImage("images/green.svg");
  lixAzul = loadImage("images/blue.svg");
  lixVermelho = loadImage("images/red.svg");
  lixAmarelo = loadImage("images/yellow.svg");
  lixMarrom = loadImage("images/brown.svg");
  lixRoxo = loadImage("images/purple.svg");

  imgLixos = [garrafaPlastico, comida, lata, garrafaPlastico, comida, lata, garrafaPlastico, comida, lata];
  imgLixos2 = [vidro];
  imgLixos3 = [vidro, garrafaPlastico];
  imgLixos4 = [vidro, garrafaPlastico, comida];
  imgLixos5 = [vidro, garrafaPlastico, comida, lata];
  imgLixos6 = [vidro, garrafaPlastico, comida, lata, pilha];
  imgLixos7 = [vidro, garrafaPlastico, comida, lata, pilha, papel];

  colidiu = loadSound("./sounds/colidiu.mp3");
  sompontos = loadSound("./sounds/pontos.wav");
  trilha = loadSound("./sounds/trilha.mp3");
}