/**
The sum of a range:

Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.
As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].
*/

console.log("The sum of a range:");
const sum = (arr) => {

	let total = 0;
	
	for (let element of arr)
		total += element;

	return total;

}

const range = (start, end, step=1) => {

	let arr = [];
	for (let i = start; i <= end; i += step)
		arr.push(i);
	
	return arr;
}


console.log(sum(range(1, 10)));
console.log(sum(range(10, 20, 5)));



/**
Reversing an array:

Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.
Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situations?
Which one runs faster?
**/


console.log("\nReversing an array:");
const reverseArray = arr => {

	let reverse = [];
	for (let i = arr.length - 1; i >= 0; i--)
		reverse.push(arr[i]);

	return reverse;
}

const reverseArrayInPlace = arr => {

	let length = arr.length;
	for (let i = arr.length - 1; i >= 0; i--)
		arr.push(arr[i]);

	return arr.slice(length, arr.length);

}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(reverseArray(arr));
console.log(reverseArrayInPlace(arr));


/**
A list
Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A
list is a nested set of objects, with the first object holding a reference to the
second, the second to the third, and so on.

let list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		} 
	}
};

A nice thing about lists is that they can share parts of their structure. For
example, if I create two new values {value: 0, rest: list} and {value: -1,
rest: list} (with list referring to the binding defined earlier), they are both
independent lists, but they share the structure that makes up their last three
elements. The original list is also still a valid three-element list.
Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument. Also write a listToArray function
that produces an array from a list. Then add a helper function prepend, which
takes an element and a list and creates a new list that adds the element to the
front of the input list, and nth, which takes a list and a number and returns
the element at the given position in the list (with zero referring to the first
element) or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth.
*/

console.log("\nA list:");

let array = [1, 2, 3, 4];

let list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: {
				value: 4,
				rest: null
			}
		}
	}
};

const arrayToList = arr => {

	let list = null;

	for (let i = arr.length - 1; i >= 0; i--) {
		
		list = {
			value: arr[i],
			rest: list
		}

	}

	return list;

}


const listToArray = list => {

	let arr = [];
	let nodus = list;

	while(nodus) {

		arr.push(nodus.value);
		nodus = nodus.rest;
	}

	return arr;
}

const prepend = (list, element) => ({
		value: element,
		rest: list
});

const nth = (list, value) => {

	let i=0, index;
	let nodus = list;

	while(nodus) {

		if(nodus.value === value) {

			index = i;
			break;

		}

		i++;
		nodus = nodus.rest;
	}

	return index;

}

console.log(JSON.stringify(arrayToList(array)));
console.log(listToArray(list));

list = prepend(list, 0);
list = prepend(list, 10);

console.log(JSON.stringify(list));

console.log(nth(list, -1));
console.log(nth(list, 0));









