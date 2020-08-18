const num = [ 10 , 15, 62 ,54 ,82 ,14 ,97];
const newNumber = [];
//1st methor
for (let i = 0; i < num.length; i++) {
     newNumber.push(num[i]*2)
}
console.log(newNumber);

//2nd methor
const number = num.map(function(value){
    return value + 100;
}) 
console.log(number);

//make a our map function   
function mapArray(num , callback) {
    const newArray = [];
    for (let i = 0; i < num.length; i++) {
        newArray.push(callback(num[i]));
        
    }
    return newArray;
}
const results = mapArray(num,function(value) {
    return value * 2;
})
console.log(results);