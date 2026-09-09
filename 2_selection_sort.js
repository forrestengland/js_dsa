/* selection sort - O(n^2) time, but 2x fast as bubble sort */

function selectionSort(arr) {
    for (let i=0; i<arr.length; i++) {
	var lowestNumberIndex = i;
	for (let j=i+1; j<arr.length; j++) {
	    if (arr[j] < arr[lowestNumberIndex]) {
		lowestNumberIndex = j;
	    }
	}
	if (lowestNumberIndex != i) {
	    var temp = arr[i];
	    arr[i] = arr[lowestNumberIndex];
	    arr[lowestNumberIndex] = temp;
	}
    }
    return arr;
}

console.log(selectionSort([17,27,1,15,68,92,11,4,0]));
