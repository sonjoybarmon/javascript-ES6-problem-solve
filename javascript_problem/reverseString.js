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