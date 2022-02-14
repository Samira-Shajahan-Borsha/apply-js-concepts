function isLeapYear(year){
    if(year%4 == 0){
        return true;
    }
    else{
        return false;
    }
}
const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is My yaer Leap Year ',isMyYearLeapYear);

const yourYear = 2224;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('Is your year Leap Year',isYourYearLeapYear);