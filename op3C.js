function berekenLeeftijd(geboorteJaar, geboorteMaand, geboorteDag) {
    const geboorteDatum = new Date(geboorteJaar, geboorteMaand - 1, geboorteDag);
    const huidigeDatum = new Date();
    const verschilInMilliseconden = huidigeDatum - geboorteDatum;
    const verschilInDagen = verschilInMilliseconden / (1000 * 60 * 60 * 24);
    const leeftijdInJaren = verschilInDagen / 365.25; 
    return Math.floor(leeftijdInJaren);
}
const geboorteJaar = 2005;
const geboorteMaand = 12;
const geboorteDag = 5;
const leeftijd = berekenLeeftijd(geboorteJaar, geboorteMaand, geboorteDag);
console.log(`he bent ongeveer ${leeftijd} jaar.`);