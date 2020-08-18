/* Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference .
প্রদত্ত সংখ্যা এবং ১৩ এর মধ্যে পার্থক্য পেতে একটি জাভাস্ক্রিপ্ট প্রোগ্রাম লিখুন, যদি সংখ্যাটি 13 এর চেয়ে বেশি হয় তবে সম্পূর্ণ দ্বিগুণ দ্বিগুণ হয় */

function difference(n){
    if( n >= 0 && n <= 13 ){
        return 13 - n ; // je num ta deya hobe oitar sathe 13 biog kore return korar hobe.
    }else{
        return ( n - 13) * 2 ; 
    }
};
console.log(difference(25));
console.log(difference(11));
console.log(difference(-4));
console.log(difference(-23));