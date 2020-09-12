let num = [11 ,4 ,6 ,8 , 9 ,7 ,33 ,56 ,54 ,56];
// now filler function
let filter = num.filter(function(evenNum){
    return evenNum % 2 == 0;
})
console.log(filter);

//make a filter function
function myFilter(num, callback){
    let newNum = []
    for (let i = 0; i < num.length; i++) {
        if (callback(num[i])) {
            newNum.push(num[i]);
        }
    }
    return newNum 
};
let newFilter = myFilter(num, function(n){
    return n % 2 == 0;
});
console.log(newFilter);


//1st methor
let colletNum = [];
for (let i = 0; i < num.length; i++) {
     colletNum = num[i];
    // console.log(colletNum);
    if(num[i] % 2 == 1){
        colletNum;
    }
    if (num[i]%2 == 0) {
        colletNum;
    }
}


//2nd methor
let oddNum = [];
let evenNum = [];
for (let i = 0; i < num.length; i++) {
    if (num[i]% 2 == 0) {
        oddNum.push(num[i]);
    }
    if (num[i]% 2 == 1) {
        evenNum.push(num[i]);
    }   
}
console.log(oddNum);
console.log(evenNum);

