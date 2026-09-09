/* bubble sort */

function bubbleSort(arr) {
    /* keep track of where in the array the
       values are unsorted up to.
       Each pass a new value goes in the right place
       towards the top of the array */
    let unsortedUntilIndex = arr.length - 1;
    let sorted = false;

    while (!sorted) {
	/* assume sorted until out of order value is found
	 and swapped */
	sorted = true;
	for (let i=0; i<unsortedUntilIndex; i++) {
	    /* find out of order value and swap, setting sorted
	       to false */
	    if (arr[i] > arr[i+1]) {
		sorted = false;
		let tmp = arr[i];
		arr[i] = arr[i+1];
		arr[i+1] = tmp;
	    }
	}
	unsortedUntilIndex--;
    }
}

let a = [42,76,18,9,47,15,32];
bubbleSort(a);
console.log(a);
