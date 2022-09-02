/* Barra de dados */
var btn = document.getElementById("btn");
var dices = document.getElementById("dices");
var conten = document.getElementsByClassName("container_2");
let cont = 0;

function deslizarpanel() {
  if (cont == 0) {
    dices.classList.remove("mostrar");
    dices.classList.add("ocultar");
    setTimeout(() => dices.classList.add("durar"), 500);
    cont = 1;
  } else {
    dices.classList.remove("ocultar");
    dices.classList.remove("durar");
    dices.classList.add("mostrar");
    cont = 0;
  }
}
btn.addEventListener("click", deslizarpanel, true);

function generate(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (1 + max - min) + min);
}

/* Random Number */
var Random = document.getElementById("gtx");
var cube = document.getElementById("cube_dice");

function mover() {
  num = generate(1, 6);
  num2 = generate(3600, 7000);
  num3 = generate(1000, 7000);

  cube.style.transform = `rotateY(${num2}deg) rotateX(${num3}deg) rotateZ(3600deg)`;

  setTimeout(() => {
    switch (num) {
      case 1:
        cube.style.transform = `rotateY(0deg) rotateX(0deg) rotateZ(0deg)`;
        break;

      case 2:
        cube.style.transform = `rotateY(0deg) rotateX(90deg) rotateZ(0deg)`;
        break;

      case 3:
        cube.style.transform = `rotateY(90deg) rotateX(0deg) rotateZ(0deg)`;
        break;

      case 4:
        cube.style.transform = `rotateY(-90deg) rotateX(0deg) rotateZ(0deg)`;
        break;

      case 5:
        cube.style.transform = `rotateY(0deg) rotateX(-90deg) rotateZ(0deg)`;
        break;

      case 6:
        cube.style.transform = `rotateY(0deg) rotateX(180deg) rotateZ(0deg)`;
        break;
    }
  }, 500);
}
Random.addEventListener("click", mover, true);

function faceClick(xn) {
  switch (xn) {
    case 1:
      cube.style.transform = `rotateY(0deg) rotateX(0deg) rotateZ(0deg)`;
      break;

    case 2:
      cube.style.transform = `rotateY(0deg) rotateX(90deg) rotateZ(0deg)`;
      break;

    case 3:
      cube.style.transform = `rotateY(90deg) rotateX(0deg) rotateZ(0deg)`;
      break;

    case 4:
      cube.style.transform = `rotateY(-90deg) rotateX(0deg) rotateZ(0deg)`;
      break;

    case 5:
      cube.style.transform = `rotateY(0deg) rotateX(-90deg) rotateZ(0deg)`;
      break;

    case 6:
      cube.style.transform = `rotateY(0deg) rotateX(180deg) rotateZ(0deg)`;
      break;
  }
}


var btnmusic = document.getElementById('btnmusic');
var music = new Audio();
let stop = 0;

function listen(){
  if(stop == 0){
    music.src = 'Tan Soldao.mp3';
    music.play();
    stop = 1;
  }else{
    music.pause();
    stop = 0;
  }
}
btnmusic.addEventListener('click', listen, true);