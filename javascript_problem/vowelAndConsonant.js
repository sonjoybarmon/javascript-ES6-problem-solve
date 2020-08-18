function vowelAndConsonant(letter){
    let vowelLowercase =(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u');
    let vowelUppercase =(letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U');
    if(vowelLowercase || vowelUppercase){
        return "Your letter is a vowel";
    }else{
        return "Your letter is a consonant";
    }

}
    let result = vowelAndConsonant("a");
    console.log(result);
