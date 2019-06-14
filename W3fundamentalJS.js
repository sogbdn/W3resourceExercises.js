//1. Write a JavaScript program to compare two objects to determine
// if the first one contains equivalent property values to the second one.

function compare(o1, o2) {
	for (let key in o1) {
		if (!o2[key] || o1[key] !== o2[key]) {
			return false;
		}
	}
	return true;
}

var obj1 = { k1: 'thym', k2: 'basilic' };
var obj2 = { k1: 'thym', k2: 'basilic' };
var obj3 = { k1: 'thym', k2: 'origan' };
console.log(compare(obj1, obj2));
console.log(compare(obj1, obj3));

//2. Write a JavaScript program to copy a string to the clipboard.
var clipboard = new Clipboard('.copy-button', {
	text: function() {
		return 'clipboard.js is awesome!';
	}
});

//7. Write a JavaScript program to converts a specified number
//to an array of digits.
// 12345 => [1,2,3,4,5]

const digitize = (n) => n.toString().split('').map(Number);

console.log(digitize(12345));

//8. Write a JavaScript program to filter out the specified values from an specified array.
// Return the original array without the filtered values.

const result = (arr, ...val) => {
	val.forEach((v) => (arr = arr.filter((elt) => elt != v)));
	return arr;
};
console.log(result([ 1, 2, 3, 4, 5 ], 1));
