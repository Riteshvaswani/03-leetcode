const n = "71324", x = 1;
let tempValue = (n-0);
let tempDigit = 0;

let finalNumber = 0;
let flagInserted = 0;

let moduloNumber = Math.pow(10, n.length-1);
while (moduloNumber > 0.1) {
    tempDigit = Math.floor(tempValue / moduloNumber);
    tempValue = tempValue % moduloNumber;
    moduloNumber = moduloNumber / 10;
    if (x > tempDigit && flagInserted === 0) {
        flagInserted = 1;
        finalNumber = (finalNumber*100)+(x*10)+tempDigit;
    }
    else {
        finalNumber = (finalNumber*10)+tempDigit;
    }
}
if(flagInserted === 0)
    finalNumber = (finalNumber * 10) + x;
console.log(finalNumber);