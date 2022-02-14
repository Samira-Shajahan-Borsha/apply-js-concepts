// variable
var time = '10:15pm';
var bookPrice = 150;
var isWhite = false;

// array
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidPosition = partners.indexOf('nojid');
partners.push('kajit');
partners.pop();

//conditionals
if(bookPrice < 120){
    console.log('I will buy this book');
}
else{
    console.log('Please, give me some discount');
}

//loop
var i = 0;
while(i <=17){
    //do some work
    i++;
}

for(var i = 0; i<=17; i++){

}

//function
function isMoonUp(time){
    if(time >= 19 && time <= 5){
        return true;
    }
    return true;
}
var moonStatus = isMoonUp(21);

//let const
// value of varaibale could change
let price = 27;
price = 30;
price = 35;

//Value of the variable that could not change 
// const myName = 'borsha';
// console.log(myName);
// myName = 22;


let myName = 'borsha';
console.log(myName);
myName = 22;
console.log(myName)