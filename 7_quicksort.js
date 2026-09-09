/* quicksort */

class SortableArray {

    constructor(arr) {
        this.arr = arr;
    }

    partition(leftPointer, rightPointer) {

	let pivotPosition = rightPointer;
	let pivot = this.arr[pivotPosition];

	// start with right pointer immediately to the left of the pivot
	rightPointer -= 1;

	while (true) {
	    while (this.arr[leftPointer] < pivot) {
		leftPointer += 1;
	    }
	    while (this.arr[rightPointer] > pivot) {
		rightPointer -= 1;
	    }
	    if (leftPointer >= rightPointer) break;
	    else {
		let tmp = this.arr[leftPointer];
		this.arr[leftPointer] = this.arr[rightPointer];
		this.arr[rightPointer] = tmp;

		leftPointer++;
	    }
	}
	let t = this.arr[leftPointer];
	this.arr[leftPointer] = this.arr[pivotPosition];
	this.arr[pivotPosition] = t;

	return leftPointer; // return leftPointer for quicksort
    }

    quicksort(leftIndex, rightIndex) {

	// base case: the subarray has 0 or 1 elements
	if (rightIndex - leftIndex <= 0) {
	    return;
	}

	// partition the array and grab the position of the pivot
	let pivotPosition = this.partition(leftIndex, rightIndex);

	/* recursively call this quicksort method
	   on whatever is to the left of the pivot */
	this.quicksort(leftIndex, pivotPosition-1);
	this.quicksort(pivotPosition+1, rightIndex);
    }
}

let a = [0,5,2,1,6,3];
let sortable = new SortableArray(a);
sortable.quicksort(0, a.length-1);
console.log(sortable.arr);
