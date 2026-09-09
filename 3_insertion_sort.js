/* insertion sort - O(n^2) time
   faster for mostly sorted data */

function insertionSort(arr) {

    for (let i=1; i<arr.length; i++) {

	let position = i;
	let tempValue = arr[i];

	while (position > 0 && arr[position - 1] > tempValue) {
	    arr[position] = arr[position-1];
	    position--;
	}
	arr[position] = tempValue;
    }
    
    return arr;
}

console.log(insertionSort([13,2,11,4,15,3,26,9,44]));
