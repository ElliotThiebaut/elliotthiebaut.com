let pos = 0;
let turn = 0;
let data = ['développement web', 'webdesign', 'vidéo / motion design', 'design graphique', 'animation 3D'];
let speed = 150;

setTimeout(typeWriter, speed);

function typeWriter() {
  if (pos < data[turn].length) {
    document.getElementById("studies").innerHTML += data[turn].charAt(pos);
    pos++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(erase, speed + 100);
  }
}

function erase() {
  if (pos >= 0) {
    let str = data[turn].toString().substring(0, pos);
    document.getElementById("studies").innerHTML = str;
    pos--;
    setTimeout(erase, speed - 100);
  } else {
    turn++;
    if (turn >= data.length)
      turn = 0;
    setTimeout(typeWriter, speed);
  }
}