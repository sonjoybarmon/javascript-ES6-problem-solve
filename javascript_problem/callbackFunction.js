function explainCallback(name , age , task){
    console.log('hello ' , name);
    console.log('your age ' , age);
    task();
}

function wishHand(){
    console.log('wish hand with soap');
};

function takeShower(){
    console.log('Take Shower');
};
function scrollFacebook(){
    console.log('with work just godor godor facebook');
}

explainCallback('boro vai ',25 , wishHand);
explainCallback('choto vai ',15 , takeShower);
explainCallback(' vai ',20 , scrollFacebook);