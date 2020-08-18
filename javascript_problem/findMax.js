 let aam = 80;
 let jam = 60;
 let kola = 20;

 if(aam > jam){
    if (aam > kola) {
         console.log("aam er dam besi");        
    } else {
         console.log("jam er dam besi");
    }
    }
    else{
    if (jam > kola) {
        console.log("jam er dam besi");
    } else {
        console.log("kola er dam besi");
    }
    }
      let max = Math.max(aam,jam,kola)
      console.log(max);