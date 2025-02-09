const text = "code leet code leet code";
const brokenChars = "lt";

let textCopy = text;
let outputArray = [];

brokenChars.split('').forEach(x => {
    outputArray = textCopy.split(' ').map(y => {
        return y.indexOf(x) <= 0 ? y : '~';
    })
});

console.log(outputArray.filter(x => x !== '~').join(' '));