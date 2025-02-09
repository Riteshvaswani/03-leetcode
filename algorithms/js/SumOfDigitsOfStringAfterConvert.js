let start = performance.now();
let input = "zbax";
let k = 2;

var combinedSum = "";
input.split('').forEach(x => (combinedSum += x.charCodeAt(0) - 96));
console.log('combinedSum: ', combinedSum);
console.log(convertStringToSum(combinedSum, k));

function convertStringToSum(number, count) {
    if (count <= 0)
        return number;
    else {
        var sum = 0;
        number.toString().split('').map(x => sum+=(x-0));
        return convertStringToSum(sum, count - 1);
    }
}
let end = performance.now();
console.log(`Execution time: ${end - start} ms`);