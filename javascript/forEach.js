let arr = [ 10 , 20 ,30 , 35 , 40];

function number(n){
    console.log(n);
}
arr.forEach(number);

arr.forEach(function(element ,index , arr){
    console.log('element:' + ' ' + element +' ' + 'index num: ' + index + ' ' + 'array num: ' +  arr);
})