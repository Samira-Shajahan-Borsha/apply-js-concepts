function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('my inches in feet: ', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadi inches in feet', feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log('Nani inches in feet',feet);

var nanInches = 168;
var feet = nanInches/ 12;

//miles to km
function milesToKilometers(miles){
    var km = miles * 1.60934;
    return km;
}

var marathon = milesToKilometers(26.2);
console.log('marathon in km:', marathon);