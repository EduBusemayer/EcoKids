let xAtor = 150;
let yAtor = 590;
let hit = false;
let xlixVerde = 0;
let ylixVerde = 73;
let xlixAzul = 0;
let ylixAzul = 520;
let xlixVermelha = 0;
let ylixVermelha = 164;
let xlixAmarelo = 0;
let ylixAmarelo = 345;
let xlixMarrom = 0;
let ylixMarrom = 250;
let xlixRoxo = 0;
let ylixRoxo = 430;

let pontos = 0;

function showAtor() {
  image(ator1, xAtor, yAtor, 45, 40);
}

function showLixeria() {
  image(lixVerde, xlixVerde, ylixVerde, 60, 60);
  image(lixAzul, xlixAzul, ylixAzul, 60, 60);
  image(lixVermelho, xlixVermelha, ylixVermelha, 60, 60);
  image(lixAmarelo, xlixAmarelo, ylixAmarelo, 60, 60);
  image(lixMarrom, xlixMarrom, ylixMarrom, 60, 60);
  image(lixRoxo, xlixRoxo, ylixRoxo, 60, 60);
}

function moveAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 4
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (movecolision()) {
      yAtor += 4
    }
  }
}

function verifyColision() {
  for (let i = 0; i < imgLixos.length; i++) {
    hit = collideRectCircle(xLixos[i], yLixos[i], wLixos, hLixos, xAtor, yAtor, 20);
    if (hit) {
      voltainicio();
      colidiu.play();
      if (pointpositive()) {
        pontos -= 1
      }
    }
  }
}

function voltainicio() {
  yAtor = 590;
}

function placar() {
  textAlign(CENTER);
  textSize(30);
  fill(color(255, 240, 60));
  text(pontos, 180, 40);
}

function matchPoint() {
  if (yAtor < 40) {
    pontos += 1;
    sompontos.play();
    voltainicio();
  }
}

function pointpositive() {
  return pontos > 0
}

function movecolision() {
  return yAtor < 590;
}