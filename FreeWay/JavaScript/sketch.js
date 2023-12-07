function setup() {
  createCanvas(400, 640);
  trilha.loop();
}

function draw() {
  background(estrada);

  showAtor();
  verifyColision();
  moveAtor();

  showLixeria();

  showLixo();
  moveLixo();
  loopLixo();

  placar();
  matchPoint();
}