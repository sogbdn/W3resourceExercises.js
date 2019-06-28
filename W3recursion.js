// 1. Write a JavaScript program to calculate the factorial of a number.
var calculateFactorial = (n) => {
	if (n === 0) {
		return 1;
	}
	return n * calculateFactorial(n - 1);
};
console.log(calculateFactorial(0));
console.log(calculateFactorial(1));
console.log(calculateFactorial(2));
console.log(calculateFactorial(3));
console.log(calculateFactorial(4));
console.log(calculateFactorial(5));
