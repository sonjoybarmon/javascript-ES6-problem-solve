var inch = 200;
var feet = inch/12;
console.log(feet.toFixed(1));
console.log(feet);

function inchToFeet(Ince){
     var Feet = Ince/12;
     return Feet;
 }
var results = inchToFeet(220);
    console.log(results.toFixed(2));
var results1 = inchToFeet(550);
    console.log(results1.toFixed(3));

var colletion = [120 , 130 , 145 , 150 ]        // use to arrey
    console.log(inchToFeet(colletion[2]).toFixed(1));
    console.log(inchToFeet(colletion[2]));





    function woodCalculator(numOfChair, numOfTable, numOfBed){
        var woodForChair = numOfChair * 1;
        var woodForTable = numOfTable * 3;
        var woodForBed = numOfBed * 5;
        var total = woodForChair + woodForTable + woodForBed;
        return total;
        }
        var result = woodCalculator(14, 5, 12);
        console.log(result);



    function feetToMile(feet){
        if (feet <=0){
            return "Distance can not be negative!"
        } else {
            var mile = feet / 5280;
            return mile;
        }
        
        }
        var result = feetToMile(10560);
        console.log(result);