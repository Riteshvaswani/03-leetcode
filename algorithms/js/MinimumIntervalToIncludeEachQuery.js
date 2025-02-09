let intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5];
let result = [];

for(let i = 0; i < queries.length; i++) {
    //queries[i] is the query where we need to find the minimum interval it could fit in.
    let min = 9999999;
    for (let j = 0; j < intervals.length; j++) {
        if(intervals[j][0] <= queries[i] && queries[i] <= intervals[j][1]) {
            let interval = intervals[j][1] - intervals[j][0] + 1;
            min = min ? Math.min(min, interval) : interval;
            console.log('For: ', queries[i], ' Found ', intervals[j] , ' with min: ', min);
        }
    }
    result[i] = min != 9999999 ? min : -1;
}
console.log(result);