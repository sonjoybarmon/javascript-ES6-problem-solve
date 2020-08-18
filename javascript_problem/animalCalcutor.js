//10 mile bitor 50 ta pani
//20 mile er bitor 100 ta pani
// 21 up 300 ta kore pani ache .

function animalCulculator(depth){
    let animal = 0;
    if (depth >= 1 && depth <= 10){
        animal = depth * 50;
        return animal;
    }else if(depth >= 11 && depth <= 20){
        let fristPart = 10 *50;
        let remaining = depth - 10 ;
        let secondPart = remaining * 100 ;
        animal = fristPart + secondPart ;
        return animal;
    }else if(depth >= 21){
        let fristPart = 10 * 50;
        let secondPart = 10 * 100;
        let remaining = depth - 20;
        let thirdpart = remaining * 300;
        animal = fristPart + secondPart + thirdpart;
        return animal;
    }else{
        if( depth <= -1){
        return "Sorry enter positive number"
        } 
    }
    return animal;
};

let count = animalCulculator(-5);
console.log(count);