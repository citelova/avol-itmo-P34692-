import {generate} from './generate.js';
import {init, objarr} from './init.js';
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

export function fill() {
    init();
    objarr.arrimg = generate();
    objarr.arraud = objarr.arrimg.slice(); 
    shuffle(objarr.arrimg);
    for (let i = 0; i < 5; i++) {
        let nameid = 'img'+(i+1);
        let ctx = document.getElementById(nameid);
        let imag = new Image();   
        let name = 'files/' + objarr.arrimg[i]+'.png';
        imag.src = name;
        ctx.appendChild(imag);
        let nameid0 = 'aud'+(i+1);
        let ctx0 = document.getElementById(nameid0);
       
        let aud = new Audio();  
        let name0 = 'files/' + objarr.arraud[i]+'.mp3';
        aud.src = name0;
        aud.type = "audio/mpeg";
        aud.controls = "controls";
        ctx0.appendChild(aud);
    }
}