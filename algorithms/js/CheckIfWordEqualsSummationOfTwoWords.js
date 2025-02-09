let firstWord = "acb", secondWord = "cba", targetWord = "cdb";
console.log(findSum(firstWord), findSum(secondWord), findSum(targetWord));
console.log((findSum(firstWord)+findSum(secondWord)) === findSum(targetWord) ? 'true' : 'false');


function findSum(input) {
    let sum = 0;
    input.split('').map(x => sum+=(x.charCodeAt(0)-97));
    return sum;
}