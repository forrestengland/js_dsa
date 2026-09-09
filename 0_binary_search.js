/* binary search - needs a sorted array from low to high
   returns the index with the value or null
   O (log n) time */

function binarySearch(array, value) {

    /* establish lower and upper bound
       of where value can be */
    let lowerBound = 0;
    let upperBound = array.length - 1;

    /* begin a loop in which we keep inspecting
       the middlemost value between bounds */
    while (lowerBound <= upperBound) {
	/* find the midpoint between
	   the upper and lower bounds */
	let midpoint = Math.floor((upperBound + lowerBound) / 2);
	/* get value at midpoint */
	let valueAtMidpoint = array[midpoint];
	/* if value at midpoint is the one we're looking for
	   we're done. If not we change the lower or upper
	   bound based on whether we need to guess
	   higher or lower */
	if (value < valueAtMidpoint) {
	    upperBound = midpoint - 1;
	} else if (value > valueAtMidpoint) {
	    lowerBound = midpoint + 1;
	} else if (value == valueAtMidpoint) {
	    return midpoint;
	}
    }
    return null;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 4));
