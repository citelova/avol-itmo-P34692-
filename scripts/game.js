import {fill} from './fill.js';
import {count} from './score.js';
import {clickprocimg, clickprocaud} from './click.js';

function game() {
    fill();
    setInterval(count, 1000);
}

let img1 = document.getElementById("img1");
img1.onclick = function (e) {
    clickprocimg(1);
}
let img2 = document.getElementById("img2");
img2.onclick = function (e) {
    clickprocimg(2);
}
let img3 = document.getElementById("img3");
img3.onclick = function (e) {
    clickprocimg(3);
}
let img4 = document.getElementById("img4");
img4.onclick = function (e) {
    clickprocimg(4);
}
let img5 = document.getElementById("img5");
img5.onclick = function (e) {
    clickprocimg(5);
}

let aud1 = document.getElementById("aud1");
aud1.onclick = function (e) {
    clickprocaud(1);
}
let aud2 = document.getElementById("aud2");
aud2.onclick = function (e) {
    clickprocaud(2);
}
let aud3 = document.getElementById("aud3");
aud3.onclick = function (e) {
    clickprocaud(3);
}
let aud4 = document.getElementById("aud4");
aud4.onclick = function (e) {
    clickprocaud(4);
}
let aud5 = document.getElementById("aud5");
aud5.onclick = function (e) {
    clickprocaud(5);
}
let newgame = document.getElementById("newgame");
newgame.onclick = function (e) {
    game();
}