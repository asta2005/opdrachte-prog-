function raadGetal() {
  rl.question('Wat is het getal? ', (getal) => {
    if (getal == randomGetal ){ 
      console.log("je hebt het goed");
    } else if (getal > randomGetal) { 
      console.log("je moet lager");
      raadGetal();
    }
    else if(getal < randomGetal){
      console.log("je moet hoger");
      raadGetal();
    }
  });
}
raadGetal();