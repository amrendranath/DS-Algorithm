class MergeSort {
    sort(originalArray) {

        // If array is empty or consists of one element then return this array since it is sorted.
        if (originalArray.length <= 1) {
            return originalArray;
        }

        const middleIndex = Math.floor(originalArray.length / 2);
        const leftArray = originalArray.slice(0, middleIndex);
        const rightArray = originalArray.slice(middleIndex, originalArray.length);

        const leftSortedArray = this.sort(leftArray);
        const rightSortedArray = this.sort(rightArray);

        // Merge two sorted array into one
        return this.mergeSortedArray(leftSortedArray, rightSortedArray);
    }

    mergeSortedArray(leftArray, rightArray) {
        let sortedArray = [];

        while (leftArray.length && rightArray.length) {
            let minimumNumber = null;
        
            if (leftArray[0] <= rightArray[0]) {
                minimumNumber = leftArray.shift();
            } else {
                minimumNumber = rightArray.shift();
            }

            sortedArray.push(minimumNumber);
        }

        if (leftArray.length) {
            sortedArray = sortedArray.concat(leftArray);
        }

        if (rightArray.length) {
            sortedArray = sortedArray.concat(rightArray);
        }

        return sortedArray;
    }
}

const arr = [5, 2, 4, 7, 1, 3, 2, 6];
console.log("AFTER", arr);
const m = new MergeSort();
const sortedArray = m.sort(arr);
console.log("BEFORE", sortedArray);