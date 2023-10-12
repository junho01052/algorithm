function countOne(num) {
    let count = 0
    let binaryArr = num.toString(2).split('');
    for(let i = 0; i < binaryArr.length; i++) {
        if (binaryArr[i] == 1) { count++; }
    }
    return count; 
}

function solution(n) {
    let result = n;
    while(true) {
        result++; 
        if(countOne(result) == countOne(n)) {
            return result;
        }
    }
}