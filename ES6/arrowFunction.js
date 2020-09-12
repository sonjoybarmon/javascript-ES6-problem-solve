const sums = (x , y ) => x + y ;
console.log(sums(5 , 6));
const into = num => num * 5;
console.log(into(12));

const mostNum = (x , y) => {
    const sum = x + y ;
    const dif = x - y ;
    const info = x * y ;
    const total = sum + dif + info ;
    return total;
}
console.log(mostNum(50,60));