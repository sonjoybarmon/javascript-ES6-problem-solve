function getFullName(firstName,lestName){
    let name = '';
    for (let i = 0; i < arguments.length; i++) {
        let newName = arguments[i];
        name = name + ' ' + newName ;   
    }
    return name;
}
const name = getFullName('sonjoy','chandra', 'barmon');
    console.log(name);


function getNumber(firstNum,lestNum){
    let number = '';
    for (let i = 0; i < arguments.length; i++) {
        const newNumber = arguments[i];
        number = number + ' ' + newNumber ; 
    }
    return number;
}
const num = getNumber( 1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9);
console.log(num);