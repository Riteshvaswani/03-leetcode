let memory1 = 8, memory2 = 11, i;
let arr = [memory1, memory2];
let maxIndex = arr[0] >= arr[1] ? 0 : 1;
let maxCount = Math.max(memory1, memory2);

for(i = 1; i <= maxCount; i++) {
    if (i > arr[maxIndex])
        break;
    arr[maxIndex] = arr[maxIndex] - i;
    maxIndex = arr[0] >= arr[1] ? 0 : 1;
}

console.log(i, ...arr);