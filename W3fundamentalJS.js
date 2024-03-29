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

//10. Write a JavaScript program to extract out the values at the specified indexes
//from an specified array.

const result2 = (arr, ...index) => {
	var res = [];
	index.forEach((i) => res.push(arr[i]));
	return res;
};
console.log(result2([ 1, 2, 3, 4, 5 ], 1, 2));

//11. Write a JavaScript program to generate
//a random hexadecimal color code.

var generate_hexacode = () => {
	var result = [ '#' ];
	var values = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ];
	for (let i = 0; i < 6; i++) {
		var index = Math.round(Math.random() * 17);
		result.push(values[index]);
	}
	return result.join('');
};
console.log(generate_hexacode());

//14. Write a JavaScript program to replace the names
//of multiple object keys with the values provided

var modify_object = (obj, ...value) => {
	for (var key in obj) {
		value.forEach((v) => (obj.key = v));
	}
	return obj;
};

var objet = {
	k1: 'v1',
	k2: 'v2'
};
console.log(modify_object(objet, 'W1', 'W2'));

// 15. Write a JavaScript program to return the minimum-maximum value
// of an array, after applying the provided function to set comparing rule.

var min_max = (arr) => {
	let arr_sorted = arr.sort();
	let l = arr.length;
	let result = [];
	result.push(arr_sorted[0], arr_sorted[l - 1]);
	return result;
};
console.log(min_max([ 2, 1, 0, -10 ]));

//16. Write a JavaScript function that returns true if the provided predicate
//function returns true for all elements in a collection, false otherwise.

var filter_only_number = (arr) => {
	for (var elt of arr) {
		if (typeof elt !== 'number') {
			return false;
		}
	}
	return true;
};

console.log(filter_only_number([ 1, 2, 10, 20 ]));
console.log(filter_only_number([ 1, 'pluie', 10, 20 ]));
console.log(filter_only_number([ 1, { 1: 'oui' }, 10, 20 ]));

var filter_only_nb = (arr) => {
	for (var elt of arr) {
		if (isNaN(elt)) {
			return false;
		}
	}
	return true;
};
console.log(filter_only_nb([ 1, 2, 10, 20 ]));
console.log(filter_only_nb([ 1, 'pluie', 10, 20 ]));
console.log(filter_only_nb([ 1, { 1: 'oui' }, 10, 20 ]));

// 18. Write a JavaScript program to remove specified
// elements from the left of a given array of elements.

var remove_elt_arr = (arr, ...elt) => {
	for (var unit of arr) {
		elt.forEach(function(elt) {
			if (unit === elt) {
				arr.splice(unit, 1);
			}
		});
	}
	return arr;
};
console.log(remove_elt_arr([ 1, 2, 3, 4 ], 1));

//21. Write a JavaScript program to get every
// nth element in an given array
var nth_elt_arr = (arr, n) => {
	var l = arr.length;
	var res = [];
	for (var i = n - 1; i < l; i += n) {
		res.push(arr[i]);
	}
	return res;
};

console.log(nth_elt_arr([ 0, 1, 2, 3, 4, 5 ], 2));
