function removeDuplicates(arr) {
    var index = 0;
    var i, j;
    for (i = 0; i < arr.length; i++) {
        var isDuplicate = false;
        // Check if the current element is a duplicate
        for (j = 0; j < index; j++) {
            if (arr[i] === arr[j]) {
                isDuplicate = true;
                break;
            }
        }
        // If not a duplicate, add it to the new array
        if (!isDuplicate) {
            arr[index++] = arr[i];
        }
    }
    // Remove the remaining elements from the original array
    arr.length = index;
    var array = [1, 2, 3, 4, 2, 3, 5];
    removeDuplicates(array);
    console.log(array);
}