const arr = [1, 2, 3, 4, 5, 1, 3, 4, 5, 6, 7, 8, 9];
const uniqueArray = [];

for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArray.length; j++) {
        if (arr[i] === uniqueArray[j]) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        uniqueArray.push(arr[i]);
    }
}

console.log(uniqueArray);