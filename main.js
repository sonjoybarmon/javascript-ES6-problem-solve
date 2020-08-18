
for (var i = 0 ; i < 10 ; i++ ){
    console.log(i);
};
var i =0;
while (i<=10){
    console.log(i);
    i++;
};
var i = 0;
do {
    console.log(i);
    i++;
}while(i<10);

console.log('sonjoy barmon');

var student = {id:01, name:"sonjoy", age:20 };
var student1 = {id:02, name:"ajoy", age:20 };
    student1.name = "anik"; //update name
    student1.number = "01708717675" ; // add element object 
    console.log(student1.name);
console.log(student);
console.log(student1);
 
var name1 =student.name;
console.log(name1);

//conditins if else else if...
var i = 10;

if(i <10 ){
    console.log("i am there bro")
}
else if(i<=10){
    console.log("okk")
}
else{
    console.log("sorry bro")
}
//switch coditions
 var day = new Date().getDay();
switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    break;
      default: "wait kor asbe net problem"
  }
console.log(day);