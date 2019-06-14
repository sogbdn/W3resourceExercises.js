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
