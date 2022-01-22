import {objarr, objuse, objselect, objscore} from './init.js';
import {over_} from './over.js';

function checker () {
    if (objarr.arrimg[objselect.imgselect-1] == objarr.arraud[objselect.audselect-1]) {
        let nameimg = 'img' + (objselect.imgselect);
        let img_ = document.getElementById(nameimg);
        img_.style.border = ' 4px solid green';
        let nameaud = 'aud' + (objselect.audselect);
        let aud_ = document.getElementById(nameaud);
        aud_.style.border = ' 4px solid green';
        objuse.imguse[objselect.imgselect] = 1;
        objuse.auduse[objselect.audselect] = 1;
        objselect.imgselect = -1;
        objselect.audselect = -1;
        
        over_();
    } else {
        if (objselect.imgselect !=-1 && objselect.audselect!=-1) {
           
            objscore.score-=500;
        }
    }
}
export function clickprocimg (ind) {
    if (objuse.imguse[ind] == 0) {
        let nameprev = 'img' + (objselect.imgselect);
        let c =objselect.imgselect;
        let imgprev = document.getElementById(nameprev);
        objselect.imgselect = ind;
        let name = 'img' + (objselect.imgselect);
        let img_ = document.getElementById(name);
        if (c!=-1) { imgprev.style.border='2px solid black';}
        img_.style.border = ' 4px solid blue';
        checker();
    }
} 
export function clickprocaud (ind) {
    if (objuse.auduse[ind] == 0) {
        let nameprev = 'aud' + (objselect.audselect);
        let c = objselect.audselect;
        let audprev = document.getElementById(nameprev);
        objselect.audselect = ind;
        let name = 'aud' + (objselect.audselect);
        let aud_ = document.getElementById(name);
        if (c!=-1) { audprev.style.border='2px solid black';}
        aud_.style.border = ' 4px solid red'
        checker();
    }
}


