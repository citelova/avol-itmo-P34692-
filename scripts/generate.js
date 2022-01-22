export function generate() {    
    let arr = Array();
    let c = 1;
    for (let i = 0; i < 5; i++) {
        while (c == 1) {
        c = 0;
        arr[i] = Math.round(Math.random() * 7) + 1;

            for (let j = 0; j < i; j++) {
                if (arr[j] == arr[i]) {
                    c = 1;
                }
            }
        }
        c = 1;
    }
    
    return arr;
}