function ShakeFunctie(woordDatGeschudMoetWorden) {
    const characters = woordDatGeschudMoetWorden.split('');
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    const geschudWoord = characters.join('');
    return geschudWoord;
  }
  
  var woord1 = ShakeFunctie("groenerat");
  console.log(woord1);
  
  var woord2 = ShakeFunctie("bram");
  console.log(woord2);

  var woord3 = ShakeFunctie("gorrila");
  console.log(woord3);