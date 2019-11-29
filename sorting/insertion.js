class InsertionSort {
    sort(originalArray) {
        const array = [...originalArray];
        for (let index = 1; index <= array.length; index += 1) {
            let currentIndex = index;
            while (currentIndex >= 0 && array[currentIndex] < array[currentIndex - 1]) {
                const temp = array[currentIndex];
                array[currentIndex] = array[currentIndex - 1];
                array[currentIndex - 1] = temp;

                currentIndex -= 1
            }
        }
        return array;
    }
}

const arr = [5, 2, 4, 6, 1, 3, 31, 41, 59, 26, 41, 58];
console.log("BEFORE: ", arr);
console.time();
const result = new InsertionSort();
console.timeEnd();
console.log("AFTER: ", result.sort(arr));