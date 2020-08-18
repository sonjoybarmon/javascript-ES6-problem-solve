let name =[2, 5, 7 ,9, 2 ,3,7 ,9];
let uniqueName =[]; //etar modhe nam ase jog hobe
for (let i =0 ; i< name.length; i++){
    let element = name[i];
    let index = uniqueName.indexOf(element); //eikhane check korbo je uniqueName e bitor code gula ache ki na.
    if (index == -1){ // kono index er man jodi -1 hoi tahole bujbo oi element ta oi array er bitor nai.
        uniqueName.push(element);// push diye element ta add korai dibo.
    }
};
console.log(uniqueName);