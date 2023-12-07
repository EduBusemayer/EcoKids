let xLixos = [1200, 1200, 1200, 1200, 1200, 1200, 1450, 1450, 1450];
let yLixos = [60, 155, 245, 335, 425, 515, 245, 425, 155];
let vLixos = [1, 1, 1, 1, 1, 1, 1, 1, 1];
let wLixos = 70;
let hLixos = 60;

function showLixo() {
  for (let i = 0; i < imgLixos2.length; i++) {
    image(imgLixos2[i], xLixos[i], yLixos[i], 70, 60)
  }
  for (let i = 0; i < imgLixos3.length; i++) {
    image(imgLixos3[i], xLixos[i], yLixos[i], 70, 60)
  }
  for (let i = 0; i < imgLixos4.length; i++) {
    image(imgLixos4[i], xLixos[i], yLixos[i], 70, 60)
  }
  for (let i = 0; i < imgLixos5.length; i++) {
    image(imgLixos5[i], xLixos[i], yLixos[i], 70, 60)
  }
  for (let i = 0; i < imgLixos6.length; i++) {
    image(imgLixos6[i], xLixos[i], yLixos[i], 70, 60)
  }
  for (let i = 0; i < imgLixos7.length; i++) {
    image(imgLixos7[i], xLixos[i], yLixos[i], 70, 60)
  }
}

function moveLixo() {
  for (let i = 0; i < imgLixos2.length; i++) {
    xLixos[i] -= -1;
  }
  for (let i = 0; i < imgLixos3.length; i++) {
    xLixos[i] -= 1;
  }
  for (let i = 0; i < imgLixos4.length; i++) {
    xLixos[i] -= -1;
  }
  for (let i = 0; i < imgLixos5.length; i++) {
    xLixos[i] -= 1;
  }
  for (let i = 0; i < imgLixos6.length; i++) {
    xLixos[i] -= -2;
  }
  for (let i = 0; i < imgLixos7.length; i++) {
    xLixos[i] -= 7;
  }
}

function loopLixo() {
  for (let i = 0; i < imgLixos2.length; i++) {
    if (verifyLixos(xLixos[i])) {
      xLixos[i] = 1000;
    }
  }
  for (let i = 0; i < imgLixos3.length; i++) {
    if (verifyLixos(xLixos[i])) {
      xLixos[i] = 1100;
    }
  }
  for (let i = 0; i < imgLixos4.length; i++) {
    if (verifyLixos(xLixos[i])) {
      xLixos[i] = 900;
    }
  }
  for (let i = 0; i < imgLixos5.length; i++) {
    if (verifyLixos(xLixos[i])) {
      xLixos[i] = 1000;
    }
  }
  for (let i = 0; i < imgLixos6.length; i++) {
    if (verifyLixos(xLixos[i])) {
      xLixos[i] = 750;
    }
  }
  for (let i = 0; i < imgLixos7.length; i++) {
    if (verifyLixos(xLixos[i])) {
      xLixos[i] = 1300;
    }
  }
}

function verifyLixos(xLixos) { 
  return xLixos < -10
}