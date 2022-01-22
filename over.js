import {objover, objscore, objuse} from './init.js'

export function over_ () {
    let c = 1;
    for (let i = 1; i <=5; i++) {
        if (objuse.imguse[i] == 0) {
            c = 0;
        }
    }
    if (c == 1) {
        objover.over = 1;
        let el = document.getElementById("over");
        el.style.visibility="visible";
        el.style.height="500px";
        el.innerText ="Вы победили! Ваши очки: " + objscore.score;
    }
}