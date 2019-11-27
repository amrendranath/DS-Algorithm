/**
 * @param {number[]} arr Unsorted array 
 * @return {number[]} sorted array (ascending)
 */
function insertionSort(arr) {
    for (let index = 1; index < arr.length; index += 1) {
        let key = arr[index];
        let j = index - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

const arr = [5, 2, 4, 6, 1, 3,31, 41, 59, 26, 41, 58];
console.log("BEFORE: ", arr);
console.time();
const result = insertionSort(arr);
console.timeEnd();
console.log("AFTER: ", result);