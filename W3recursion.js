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

// 2.  2. Write a JavaScript program to find the greatest
// common divisor (gcd) of two positive numbers.
var gcd2Number = (n1, n2) => {
	min = Math.min(n1, n2);

	if (n1 % min == 0 && n2 % min == 0) {
		return min;
	}
	return gcd2Number(n1 - 1, n2 - 1);
};

console.log(gcd2Number(2, 4));
console.log(gcd2Number(4, 12));
console.log(gcd2Number(5, 25));
console.log(gcd2Number(36, 6));
