class BubbleSort {
    sort(originalArray) {
        let swapped = false;
        let array = [...originalArray];
        for (let i = 1; i < array.length; i++) {
            swapped = false;
            for (let j = 0; j < array.length - i; j++) {
                if (array[j + 1] < array[j]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    swapped = true;
                }
            }
            if (!swapped) {
                return array;
            }
        }
        return array;
    }
}

const arr = [5, 2, 4, 7, 1, 3, 2, 6];
console.log("AFTER", arr);
const b = new BubbleSort();
const sortedArray = b.sort(arr);
console.log("BEFORE", sortedArray);