import { isMainThread } from 'worker_threads';

// JavaScript Object
// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name
//and reading status) of the following books.

function readingStat(arr) {
	for (book of arr) {
		if (book.readingStatus) {
			console.log(book.title + ' by ' + book.author + ' is finished');
		} else {
			console.log(book.title + ' need to be read!');
		}
	}
}

var library = [
	{
		author: 'Bill Gates',
		title: 'The Road Ahead',
		readingStatus: true
	},
	{
		author: 'Steve Jobs',
		title: 'Walter Isaacson',
		readingStatus: true
	},
	{
		author: 'Suzanne Collins',
		title: 'Mockingjay: The Final Book of The Hunger Games',
		readingStatus: false
	}
];

console.log(readingStat(library));

//5. Write a JavaScript program to get the volume of a Cylinder
//with four decimal places using object classes.

class Cylinder {
	constructor(radius, height) {
		this.radius = radius;
		this.hight = hight;
	}
	// Getter method - call without ()
	get volume() {
		return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
	}
}

var C = new Cylinder(2, 2);
console.log(C.volume);

//7. Write a JavaScript program which returns a subset of a string.

function strSubset(str) {
	var l = str.length;
	var res = [];
	for (i = 0; i < l; i++) {
		for (j = 0; j < l; j++) {
			if (str.slice(i, j + 1) !== '') {
				res.push(str.slice(i, j + 1));
			}
		}
	}
	return res;
}
strSubset('dog');

//8. Write a JavaScript program to create a Clock.
// The setInterval() method calls a function or evaluates an expression at specified intervals
// (in milliseconds

function clock() {
	var current_date = new Date();
	console.log(current_date);
	var date_time = current_date.getHours() + ':' + current_date.getMinutes() + ':' + current_date.getSeconds();
	console.log(date_time);
}
var c = setInterval(clock, 1000);

//9. Write a JavaScript program to calculate the area and perimeter of a circle.
// Create two methods to calculate the area and perimeter.
// The radius of the circle will be supplied by the user.
function calculateAera(r) {
	return Math.PI * Math.pow(r, 2);
}
function calculatePerimeter(r) {
	return 2 * Math.PI * r;
}

console.log(calculateAera(3));
console.log(calculatePerimeter(3));

// 10. Write a JavaScript program to sort an array of JavaScript objects.

function objArrSorted(arr) {
	return arr.sort(function(a, b) {
		return b.libraryID - a.libraryID;
	});
}
var library = [
	{
		title: 'The Road Ahead',
		author: 'Bill Gates',
		libraryID: 1254
	},
	{
		title: 'Walter Isaacson',
		author: 'Steve Jobs',
		libraryID: 4264
	},
	{
		title: 'Mockingjay: The Final Book of The Hunger Games',
		author: 'Suzanne Collins',
		libraryID: 3245
	}
];
console.log(objArrSorted(library));
