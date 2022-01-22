export let objarr ={arrimg: Array(), arraud: Array()}; 
export let objselect ={imgselect: -1, audselect: -1};
export let objover ={over: 1};
export let objscore ={score: 10000};
export let objuse ={imguse: Array(), auduse: Array()};


export function init() {
    let el = document.getElementById("over");
    el.style.visibility="hidden";
    el.style.height="50px";
    objover.over = 0;
    objscore.score = 10000;
    for (let i = 1; i <= 5; i++) {
        let nameimg = 'img' + i;
        document.getElementById(nameimg).innerHTML = "";
        let nameaud = 'aud' + i;
        document.getElementById(nameaud).innerHTML = "";
        objuse.imguse[i] = 0;
        objuse.auduse[i] = 0;
        document.getElementById(nameimg).style.border='2px solid black';
        document.getElementById(nameaud).style.border='2px solid black';
    }


}