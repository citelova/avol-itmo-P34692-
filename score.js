import {objover, objscore} from './init.js'
export function count ()
{
    if (objover.over == 0) {
        objscore.score -= 1;
        document.getElementById("score").innerHTML = "Очки: " + objscore.score;
    }
}
