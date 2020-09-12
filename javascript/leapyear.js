 /*const year = 2035;
 const remainder = year / 4 ;

 if (remainder==0){
     console.log("it is leap year")
 }else{
     console.log("sorry bro")
 };*/

function leapYear(year){
     const remainder = year % 4;
     if(remainder == 0){
         return true;
     }else{
         return false;
     }
};
const year2000 = leapYear(2020);
  console.log(year2000);

function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
};
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));

// function ourLeap(sal){
//     const remainder1 = (sal % 100) ? (sal % 400) : (sal % 4);
//     if(remainder1 === 0){
//         return true;             //eta completa hoi nai complete korte hobe
//     }else{
//         return false;
//     }
// }
// console.log(ourLeap(1700));