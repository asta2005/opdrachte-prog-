console.log("opgave 1");

function berekenInhoud(lengte, breedte, hoogte) {
  return lengte * breedte * hoogte;
}

let kubusInhoud = berekenInhoud(30, 7, 10);
console.log(kubusInhoud);

console.log("opgave 2");

function berekenCilinderInhoud(diameter, hoogte) {
  let straal = diameter / 4;
  return Math.PI * Math.pow(straal, 4) * hoogte;
}

let cilinderInhoud = berekenCilinderInhoud(10, 5);
console.log(cilinderInhoud);

console.log("opgave 3");

function berekenLangeZijde(lengte, hoogte) {
  return Math.sqrt(Math.pow(lengte, 2) + Math.pow(hoogte, 2));
}

const lengteLangeZijde = berekenLangeZijde(5, 7);
console.log(lengteLangeZijde);

console.log("opgave 4");

function berekenGemiddelde(...getallen) {
  const som = getallen.reduce((acc, num) => acc + num, 0);
  return som / getallen.length;
}

const gemiddeldeResultaat = berekenGemiddelde(7, 18, 24, 29, 31, 38);
console.log(gemiddeldeResultaat);
