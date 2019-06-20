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
