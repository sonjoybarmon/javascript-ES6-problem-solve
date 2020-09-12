let arr = [ 10 , 20 ,30 , 35 , 40];

function number(n){
    console.log(n);
}
arr.forEach(number);

let parson =[
    {name: 'sonjoy', age: 20 },
    {name: 'ajoy', age : 17 },
    {name: 'anik', age : 12 },
    {name: 'antor', age : 14 },
    {name: 'dip', age : 9 }
];

parson.sort(function(a , b){ // function ta hocce a to z choto theke boro
    if(a.name > b.name){
        return 1;
    }else if(a.name < b.name){
        return -1;
    }else{
        return 0;
    }
});
console.log(parson);

parson.sort(function(a , b){ // function ta hocce 1up choto theke boro
    if(a.age > b.age){
        return 1;
    }else if(a.age < b.age){
        return -1;
    }else{
        return 0;
    }
});
console.log(parson);