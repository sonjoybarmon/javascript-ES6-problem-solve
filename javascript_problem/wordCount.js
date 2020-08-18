let words ="okkk.... tumi kal amak ekta meg dio ami link dibo oigula dekho tarpor aro kichu dile boostsrap complete";

// console.log(words.length);
// console.log(words[2]);
let count = 0;
for (let i = 0; i < words.length; i++){
    let char = words[i];
    if(char == " " && words[i-1] !=" "){
        count++;
    }
        
}
count++;
console.log(count);


//revers sistems.

function reversString(str){
    let reverse = "";
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
let statement = "hello aline bhai brothers";
let results = reversString(statement);
console.log(results);