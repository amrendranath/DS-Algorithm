class QuickSort {

    constructor (originalArray) {
        this.originalArray = originalArray;
    }

    partition (array, minIndex, maxIndex) {
        const pivot = array[maxIndex];
        let partitionIndex = minIndex;
        for (let currentIndex = minIndex; currentIndex <= maxIndex; currentIndex++) {
            if (array[currentIndex] < pivot) {
                [array[partitionIndex], array[currentIndex]] = [array[currentIndex], array[partitionIndex]];
                partitionIndex += 1;
            }
        }
        [array[partitionIndex], array[maxIndex]] = [array[maxIndex], array[partitionIndex]];
        return partitionIndex;
    }

    sort (array, minIndex, maxIndex) {
        if (minIndex < maxIndex) {
            const partitionIndex = this.partition(array, minIndex, maxIndex);
            this.sort(array, minIndex, partitionIndex - 1);
            this.sort(array, partitionIndex + 1, maxIndex);
        }
        return array;
    }

    initiateSort () {
        const array = [...this.originalArray];
        const minIndex = 0;
        const maxIndex = array.length - 1;
        return this.sort(array, minIndex, maxIndex);
    } 
}

const sort = new QuickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.log(sort.initiateSort());