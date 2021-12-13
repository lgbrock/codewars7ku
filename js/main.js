/*
p => parameters passed in to the function
r => what the the result of the function should be e.g          string array etc
e=> examples of input and expected output
p=> psuedocode
*/

// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

const countDevelopers = (list) =>
	list.filter((x) => x.continent === 'Europe' && x.language === 'JavaScript')
		.length;

// Coding Meetup #2 - Higher-Order Functions Series - Greet developers

const greetDevelopers = (list) => {
	list.forEach(
		(x) =>
			(x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?`)
	);
	return list;
};

// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

const isRubyComing = (list) => list.some((x) => x.language === 'Ruby');

// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

const getFirstPython = (list) => {
	let a = list.find((x) => x.language === 'Python');
	return a
		? `${a.firstName}, ${a.country}`
		: 'There will be no Python developers';
};

// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

const countLanguages = (list) => {
	const obj = {};
	list.map((v) => (obj[v.language] = (obj[v.language] || 0) + 1));
	return obj;
};

// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

const isSameLanguage = (list) => {
	const lang = list[0].language;
	return list.every((a) => a.language === lang);
};

// Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer

const findSenior = (list) => {
	let max = Math.max(...list.map((a) => a.age));
	return list.filter((a) => a.age === max);
};

// Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
const allContinents = (list) =>
	['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every((x) =>
		list.some((y) => x == y.continent)
	);

// Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
const isAgeDiverse = (list) => {
	const check = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	list.map((v) => {
		const age = v.age;
		age > 9 && age < 20 ? (check[0] = 1) : 0;
		age > 19 && age < 30 ? (check[1] = 1) : 0;
		age > 29 && age < 40 ? (check[2] = 1) : 0;
		age > 39 && age < 50 ? (check[3] = 1) : 0;
		age > 49 && age < 60 ? (check[4] = 1) : 0;
		age > 59 && age < 70 ? (check[5] = 1) : 0;
		age > 69 && age < 80 ? (check[6] = 1) : 0;
		age > 79 && age < 90 ? (check[7] = 1) : 0;
		age > 89 && age < 100 ? (check[8] = 1) : 0;
		age > 100 ? (check[9] = 1) : 0;
	});
	return check.every((v) => v === 1);
};

// Coding Meetup #10 - Higher-Order Functions Series - Create usernames
const addUsername = (list) => {
	return list.map((v) => {
		return {
			...v,
			username:
				v.firstName.toLowerCase() +
				v.lastName.slice(0, 1).toLowerCase() +
				(Date.prototype.getFullYear() - v.age).toString(),
		};
	});
};

// Coding Meetup #11 - Higher-Order Functions Series - Find the average age
const getAverageAge = (list) => {
	let age = 0;
	list.map((v) => (age += v.age));
	return Math.round(age / list.length);
};

// Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
const findAdmin = (list, lang) =>
	list.filter((v) => v.language === lang && v.githubAdmin === 'yes');

// Disemvowel Trolls
const disemvowel = (str) => str.replace(/[aeiou]/gi, '');

// Youre a square!
const isSquare = (n) => Math.sqrt(n) % 1 === 0;

// Mumbling
const accum = (s) =>
	s
		.split('')
		.map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
		.join('-');

// Descending Order
const descendingOrder = (n) => +(n + '').split('').sort().reverse().join('');

// Sum of array singles
const repeats = (arr) =>
	arr
		.filter((value, _, arr) => arr.indexOf(value) === arr.lastIndexOf(value))
		.reduce((a, b) => a + b, 0);

// Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
const isLanguageDiverse = (list) => {
	let arr = list.map((v) => v.language);
	let obj = {};

	arr.map((v) => (obj[v] = obj[v] ? obj[v] + 1 : 1));
	const count = Object.values(obj).sort((a, b) => b - a);
	const max = count.splice(0, 1);
	return count.every((v) => v * 2 >= max);
};

// Coding Meetup #14 - Higher-Order Functions Series - Order the food
const orderFood = (list) => {
	const obj = {};
	list.map((v) => (obj[v.meal] = obj[v.meal] ? obj[v.meal] + 1 : 1));
	return obj;
};

// Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
const findOddNames = (list) => {
	return list.filter(
		(v) => v.firstName.split``.reduce((a, b) => a + b.charCodeAt(), 0) % 2 !== 0
	);
};

// Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
const askForMissingDetails = (list) => {
	let arr = [];
	list.map((list) => {
		for (let i in list) {
			if (list[i] === null) {
				list = { ...list, question: `Hi, could you please provide your ${i}.` };
				arr.push(list);
			}
		}
	});
	return arr;
};

// Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language
const sortByLanguage = (list) => {
	list.sort((a, b) =>
		a.language === b.language
			? a.firstName.localeCompare(b.firstName)
			: a.language.localeCompare(b.language)
	);
	return list;
};

// Multiples of 3 or 5
const solution = (number) => {
	let arr = [];
	for (let i = number - 1; i >= 0; i--) {
		if (i % 3 === 0) arr.push(i);
		if (i % 5 === 0) arr.push(i);
	}
	return [...new Set(arr)].reduce((a, b) => a + b, 0);
};

// Find the odd int
const findOdd = (A) => {
	let count = {};
	A.map((v) => (count[v] = count[v] ? count[v] + 1 : 1));
	return +Object.keys(count).find((key) => count[key] % 2 === 1);
};

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// Create Phone Number
const createPhoneNumber = (n) => {
	let format = '(xxx) xxx-xxxx';

	for (var i = 0; i < n.length; i++) {
		format = format.replace('x', n[i]);
	}

	return format;
};

// Who likes it?
const likes = (names) => {
	if (names.length === 0) return 'no one likes this';
	if (names.length === 1) return `${names[0]} likes this`;
	if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
	if (names.length === 3)
		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
	return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
};

// Square Every Digit
const squareDigits = (num) => +num.toString().split``.map((v) => v * v).join``;

// Get the Middle Character
const getMiddle = (s) => {
	let mid = Math.floor(s.length / 2);
	if (s.length % 2 === 0) {
		return s.substr(mid - 1, 2);
	}
	return s.substr(mid, 1);
};

// Array.diff
const arrayDiff = (a, b) => a.filter((v) => b.indexOf(v) === -1);

// Shortest Word
const findShort = (s) => Math.min(...s.split` `.map((s) => s.length));

// Find The Parity Outlier
const findOutlier = (int) => {
	let even = int.filter((v) => v % 2 === 0);
	let odd = int.filter((v) => v % 2 !== 0);
	return even.length === 1 ? even[0] : odd[0];
};

// Counting Duplicates
const duplicateCount = (text) => {
	let arr = text.toLowerCase().split``;
	let obj = {};
	let count = 0;

	arr.map((v) => (obj[v] = obj[v] ? obj[v] + 1 : 1));
	for (let key in obj) {
		if (obj[key] > 1) count++;
	}
	return count;
};

// Duplicate Encoder
const duplicateEncode = (word) =>
	word
		.toLowerCase()
		.split('')
		.map((v, i, arr) => {
			return arr.indexOf(v) == arr.lastIndexOf(v) ? '(' : ')';
		})
		.join('');

// Persistent Bugger
const persistence = (num) => {
	let times = 0;
	num = num.toString();

	while (num.length > 1) {
		times++;
		num = num
			.split(' ')
			.map(Number)
			.reduce((a, b) => a * b)
			.toString();
	}
	return times;
};

// Replace With Alphabet Position
const alphabetPosition = (text) =>
	text
		.split('')
		.filter((v) => /[a-zA-Z]/.test(v))
		.map((v) => v.toLowerCase().charCodeAt(0) - 96)
		.join(' ');

// Your order, please
const order = (words) => {
	return words
		.split(' ')
		.sort((a, b) => {
			return a.match(/\d/) - b.match(/\d/);
		})
		.join(' ');
};

// Is this a triangle?
const triangle = (a, b, c) => {
	if (a + b <= c || a + c <= b || b + c <= a) return false;
	return true;
};

// Simple Pig Latin
const pigIt = (str) => {
	return str.replace(/\w+/g, (w) => {
		return w.slice(1) + w[0] + 'ay';
	});
};

// Credit Card Mask
const maskify = (cc) => cc.replace(/.(?=.{4})/g, '#');

// Exes and Ohs
const XO = (str) => {
	let x = str.match(/x/gi);
	let o = str.match(/o/gi);
	return (x && x.length) === (o && o.length);
};

// Isograms
const isIsogram = (str) => !str.match(/(\w).*\1/i);

// Bit Counting
const countBits = (n) => {
	let count = 0;
	while (n > 0) {
		count += n % 2;
		n = Math.floor(n / 2);
	}
	return count;
};

// Convert string to camel case
const toCamelCase = (str) =>
	str.replace(/([-_][a-z])/gi, ($1) =>
		$1.toUpperCase().replace('-', '').replace('_', '')
	);

// Complementary DNA
const DNAStrand = (dna) => {
	let arr = dna.split``;
	let obj = {
		A: 'T',
		T: 'A',
		C: 'G',
		G: 'C',
	};
	return arr.map((v) => obj[v]).join``;
};

// Detect Pangram
const isPangram = (str) => {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	return alphabet.split``.every((v) => str.toLowerCase().indexOf(v) !== -1);
};

// Format a string of names like 'Bart, Lisa & Maggie'
const list = (names) => {
	if (names.map((v) => v.name).length > 1)
		return (
			names
				.map((v) => v.name)
				.slice(0, -1)
				.join(', ') +
			' & ' +
			names.map((v) => v.name).slice(-1)
		);
	return names.map((v) => v.name).slice(-1) + '';
};

// Split Strings
const solution = (str) => {
	let arr = [];
	for (let i = 0; i < str.split('').length; i += 2) {
		arr.push(str.slice(i, i + 2));
	}

	return arr.map((v) => (v.length === 1 ? v + '_' : v));
};

// Where my anagrams at?
const anagrams = (word, words) => {
	let arr = [];
	let sorted = word.split``.sort().join``;
	words.forEach((v) => {
		if (v.split``.sort().join`` === sorted) arr.push(v);
	});
	return arr;
};

// Human readable duration format
const formatDuration = (seconds) => {
	let time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
		res = [];

	if (seconds === 0) return 'now';

	for (var key in time) {
		if (seconds >= time[key]) {
			var val = Math.floor(seconds / time[key]);
			res.push((val += val > 1 ? ' ' + key + 's' : ' ' + key));
			seconds = seconds % time[key];
		}
	}

	return res.length > 1
		? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1')
		: res[0];
};

// Number of People in the Bus
const number = (busStops) => {
	let arr = busStops.map((v) => v[0] - v[1]);
	return arr.reduce((a, b) => a + b, 0);
};

// Beginner Series #3 Sum of Numbers
const getSum = (a, b) => {
	let min = Math.min(a, b),
		max = Math.max(a, b);
	return ((max + min) * (max - min + 1)) / 2;
};

// Growth of a Population
const nbYear = (p0, percent, aug, p) => {
	let year = 0;
	while (p0 < p) {
		year++;
		p0 = p0 + p0 * (percent / 100) + aug;
	}
	return year;
};

// Sum of Digits / Digital Root
const digital_root = (n) => {
	let sum = 0;
	while (n > 0) {
		sum += n % 10;
		n = Math.floor(n / 10);
	}
	return sum > 9 ? digital_root(sum) : sum;
};

// Stop gninnipS My sdroW!
const spinWords = (s) => {
	return s
		.split(' ')
		.map((v) => {
			if (v.length > 4) return v.split('').reverse().join('');
			return v;
		})
		.join(' ');
};

// Jaden Casing Strings
String.prototype.toJadenCase = function () {
	return this.split(' ')
		.map((v) => v[0].toUpperCase() + v.slice(1))
		.join(' ');
};

// List Filtering
const filter_list = (l) => l.filter((v) => typeof v === 'number');

// Sum of two lowest positive integers
const sumTwoSmallestNumbers = (nums) => {
	let arr = nums.sort((a, b) => a - b);
	return arr[0] + arr[1];
};

// Take a Ten Minute Walk
const isValidWalk = (walk) => {
	let x = 0,
		y = 0;
	walk.forEach((v) => {
		if (v === 'n') y++;
		if (v === 's') y--;
		if (v === 'e') x++;
		if (v === 'w') x--;
	});
	return walk.length === 10 && x === 0 && y === 0;
};

// Unique In Order
const uniqueInOrder = (iterable) => {
	let arr = [];
	for (let i = 0; i < iterable.length; i++) {
		if (arr[arr.length - 1] !== iterable[i]) arr.push(iterable[i]);
	}
	return arr;
};

// IQ Test
const iqTest = (nums) => {
	nums = nums.split` `.map((v) => parseInt(v));

	let odd = nums.filter((v) => v % 2 === 1);
	let even = nums.filter((v) => v % 2 === 0);

	return odd.length < even.length
		? nums.indexOf(odd[0]) + 1
		: nums.indexOf(even[0]) + 1;
};

// Friend or Foe?
// create list of friends and if they have exactly for letters, they are your friend, if not, they are your foe
// inputs = ['Ryan', 'Kieran', 'Jason', 'Yous'];
// output = ['Ryan', 'Yous'];
const friend = (friends) => {
	// set data to an array of friends
	let arr = [];
	// loop over each name in the array
	for (let i = 0; i < friends.length; i++) {
		// if the name has exactly 4 letters, push it to the new array
		if (friends[i].length === 4) {
			arr.push(friends[i]);
		}
	}
	// return the new array
	return arr;
};

const friend = (friends) => friends.filter((v) => v.length === 4);

// Categorize New Member
// categorize member by age and handicap
// boolean - is he over 55 and have a handicap between -2 and 26
// inputs = age and handicap
// output = true or false - Open or Senior
const openOrSenior = (data) => {
	// set to array of members
	let arr = [];
	// loop over each member
	for (let i = 0; i < data.length; i++) {
		// age > 55 and handicap between -2 and 26 return senior else open
		if (member[0] > 54 && member[1] > 6) {
			arr.push('Senior');
		} else {
			arr.push('Open');
		}
	}
	// return the new array
	return arr;
};

const openOrSenior = (data) =>
	data.map(([age, handicap]) =>
		age >= 55 && handicap > 7 ? 'Senior' : 'Open'
	);

// Two to One
// look through two stings and combine letters into one string without Duplicates
// inputs = two strings = (s1, s2)
// output = one string = (s1 + s2)
// sort from left to right abc...xyz
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join``;

// Get the mean of an array
// return average of array
// round down to nearest integer
const getAverage = (marks) => {
	let sum = 0;

	for (let i = 0; i < marks.length; i++) {
		sum += marks[i];
	}
	return Math.floor(sum / marks.length);
};

const getAverage = (marks) =>
	Math.floor(marks.reduce((a, b) => a + b) / marks.length);

// Moving Zeros To The End
// move all zeros to the end of the array
// inputs can be boolean, string, number, array
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // [false, 1, 1, 2, 1, 3, "a", 0, 0]
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, "a"])); // [1, 2, 1, 3, "a", 0, 0, 0, 0]

const moveZeros = (arr) => {
	let zeros = [];
	let nonZeros = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			zeros.push(arr[i]);
		} else {
			nonZeros.push(arr[i]);
		}
	}
	return [...nonZeros, ...zeros];
};

const moveZeros = (arr) =>
	arr.filter((v) => v !== 0).concat(arr.filter((v) => v === 0));

// Is n divisible by x and y?
// inputs = n, x, y
// output = true or false
// n is divisible by x and y
// (isDivisible(3,3,4),false);
// (isDivisible(12,3,4),true);

const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;

// String ends with?
// inputs = string, end
// output = true or false
// check if first argument ends with second argument
// (endsWith('abc', 'bc'), true);
// (endsWith('abc', 'd'), false);
const solution = (str, ending) => str.endsWith(ending);

// Reverse words
// reverse words in a string
// inputs = string
// output = string
// reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god')
// reverseWords('apple'), 'elppa'
const reverseWords = (str) =>
	str.split``.reverse().join``.split` `.reverse().join` `;

// Ones and zeros
// Convert and array to its binary representation
// inputs = array of numbers
// output = binary representation of array
// binaryArrayToNumber([0,0,0,1]), 1
// binaryArrayToNumber([0,0,1,0]), 2
const binaryArrayToNumber = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i] * Math.pow(2, arr.length - i - 1);
	}
	return sum;
};

// Remove the minimum
// remove the smallest value in the array
// inputs = array of numbers
// output = array of numbers without the smallest value
// removeSmallest([1,2,3,4,5]) // [2,3,4,5]
// removeSmallest([5,3,2,1,4]) // [5,3,2,4]
const removeSmallest = (nums) => {
	// find the smallest number
	let smallest = nums.indexOf(Math.min(...nums));
	// remove the smallest number
	nums.splice(smallest, 1);
	// return the new array
	return nums;
};

// Sot Numbers
// sort numbers in an array
// inputs = array of numbers
// output = array of numbers sorted
// if null or empty return an empty array
// sortNumbers([1,2,10,50,5]) // [1,2,5,10,50]
const solution = (nums) => (!nums ? [] : nums.sort((a, b) => a - b));

// Anagram Detection
// inputs = two strings
// output = true or false
// check if the two strings are anagrams of each other
// (anagram('rail safety', 'fairy tales'), true);
// (anagram('RAIL! SAFETY!', 'fairy tales'), true);
// (anagram('Hi there', 'Bye there'), false);
const isAnagram = (test, original) => {
	// sort both strings
	let sortedTest = test.toLowerCase().split``.sort().join``;
	let sortedOriginal = original.toLowerCase().split``.sort().join``;
	// return true or false
	return sortedTest === sortedOriginal;
};

const isAnagram = (test, original) =>
	test.toLowerCase().split``.sort().join`` ===
	original.toLowerCase().split``.sort().join``;

// No oddities here
// inputs = array of numbers
// output = array of numbers without odd numbers
// noOdds([1,2,3,4,5,6]) // [2,4,6]
// noOdds([4,5,6,7,8,9,10,11,12,13,14]) // [4,8,12,16]
const noOdds = (values) => values.filter((v) => v % 2 === 0);

// Sum of all the multiples of 3 or 5
// inputs = number
// output = sum of all multiples of 3 or 5
// sumOfMultiples(10) // 23
// sumOfMultiples(5) // 8
const findSum = (n) => {
	// set sum to 0
	let sum = 0;
	// loop from 1 to n
	for (let i = 1; i < n; i++) {
		// if i is a multiple of 3 or 5 add to sum
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	// return sum
	return sum;
};

// Sort array by string length
// inputs = array of strings
// output = array of strings sorted by length
// All strings are of different lengths
// sortByLength(['Beg', 'Life', 'I', 'To']) // ['I', 'To', 'Beg', 'Life']

// Two Oldest Ages
// inputs = array of numbers
// output = array of two oldest ages
// if there are two or more of the oldest age, return both
// twoOldestAges([1, 5, 87, 45, 8, 8]) // [45, 87]
const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2);

// Qdd or Even?
// sum all numbers in array to determine if odd or even
// inputs = array of numbers
// output = odd or even
// if all numbers are even return 'even'
// if all numbers are odd return 'odd'
// oddOrEven([0,1,4]) // 'odd
// oddOrEven([0, -1, -5]) // 'even'
const oddOrEven = (arr) =>
	arr.length === 0
		? 'even'
		: arr.reduce((a, b) => a + b) % 2 === 0
		? 'even'
		: 'odd';

// Find the middle element
// return the index of the numerical element that lies between the other two elements
// inputs = array of numbers
// output = index of the middle element
// gimme([2, 3, 1]) => 0
// gimme([5, 10, 14]) => 1
const gimme = (inputArray) =>
	[...inputArray].indexOf(inputArray.sort((a, b) => a - b)[1]);

// Return String of First Characters
// inputs = string
// output = first character of each word in string
// firstChar('hello') // 'h'
// firstChar("This Is A Test") // "TIAT"
const makeString = (str) => {
	// split string into array of words
	let words = str.split` `;
	// set result to empty string
	let result = '';
	// loop through words
	for (let i = 0; i < words.length; i++) {
		// add first character of each word to result
		result += words[i][0];
	}
	// return result
	return result;
};

// Find the Remainder
// inputs = two numbers
// output = remainder of the larger number divided by the smaller number
// remainder(17, 5) // 2
// remainder(5, 17) // 2
const remainder = (a, b) => (a > b ? a % b : b % a);

// Fizz Buzz
// inputs = number
// output = array with numbers and string
// if number is divisible by 3 return 'Fizz'
// if number is divisible by 5 return 'Buzz'
// if number is divisible by both 3 and 5 return 'FizzBuzz'
// if number is not divisible by 3 or 5 return number
// fizzBuzz(3) // [1,2,'Fizz']
// fizzBuzz(5) // [1,2,'Fizz','4','Buzz']
const fizzBuzz = (n) => {
	// set result to empty array
	let result = [];
	// loop from 1 to n
	for (let i = 1; i <= n; i++) {
		// if i is divisible by 3 and 5 add 'FizzBuzz' to result
		if (i % 3 === 0 && i % 5 === 0) {
			result.push('FizzBuzz');
		}
		// if i is divisible by 3 add 'Fizz' to result
		else if (i % 3 === 0) {
			result.push('Fizz');
		}
		// if i is divisible by 5 add 'Buzz' to result
		else if (i % 5 === 0) {
			result.push('Buzz');
		}
		// if i is not divisible by 3 or 5 add i to result
		else {
			result.push(i);
		}
	}
	// return result
	return result;
};

// Simple Fun #176: Reverse Letter
// inputs = string of letters and numbers
// output = string with letters reversed and numbers omitted
// reverseLetter('krishan') // 'nahsirk'
// reverseLetter('ultr53o?n') // 'nortlu'
const reverseLetter = (str) => {
	// set result to empty string
	let result = '';
	// loop through str
	for (let i = 0; i < str.length; i++) {
		// if str[i] is a letter add it to result
		if (str[i].match(/[a-z]/i)) {
			result += str[i];
		}
	}
	// return result
	return result.split``.reverse().join``;
};

// Summing a number's digits
// inputs = number
// output = sum of the digits of the number
// sum of the absolute value of each of the number's decimal digits
// sumDigits(10) // 1
// sumDigits(99) // 18
const sumDigits = (num) => {
	// set result to 0
	let result = 0;
	// loop through num
	for (let i = 0; i < num.toString().length; i++) {
		// add num[i] to result
		result += Math.abs(num[i]);
	}
	// return result
	return result;
};
const sumDigits = (num) =>
	Math.abs(num)
		.toString()
		.split('')
		.reduce((total, next) => total + Number(next), 0);

// Small enough? - Beginner
// inputs = number and array of numbers
// output = boolean
// if number is less than or equal to the sum of all numbers in the array return true
// if number is greater than the sum of all numbers in the array return false
// smallEnough(5, [1, 2, 5, 3]) // false
// smallEnough(4, [1, 2, 5, 3]) // true
const smallEnough = (a, limit) => a.every((v) => v <= limit);

// JavaScript Array Filter
// inputs = array of numbers
// output = array of numbers that are divisible by 2
// filter out all numbers that are not divisible by 2
// filterArray([1, 2, 3]) // [2]
const filterArray = (arr) => arr.filter((v) => v % 2 === 0);

// Find the capitals
// input = sting of single word
// output = Ordered list containing indexes of capital letters in words
// capitals('USA') // [0, 1, 2]
// capitals('CodEWaRs'), [0,3,4,6] )
const capitals = (word) => {
	// set result to empty array
	let result = [];
	// loop through word
	for (let i = 0; i < word.length; i++) {
		// if word[i] is a capital letter add i to result
		if (word[i].match(/[A-Z]/)) {
			result.push(i);
		}
	}
	// return result
	return result;
};

// Alternate capitalization
// input = string
// output = string with alternating capitalization
// capitalize("abc") // "AbC"
// capitalize("abc def") // "aBc DeF"
const capitalize = (str) => {
	// loop through string
	// capitalize every other letter
	[
		str
			.split('')
			.map((v, i) => (i % 2 == 0 ? v.toUpperCase() : v.toLowerCase()))
			.join(''),
		str
			.split('')
			.map((v, i) => (i % 2 !== 0 ? v.toUpperCase() : v.toLowerCase()))
			.join(''),
	];
	return str;
};

// The Coupon Code
// input = string
// output = boolean
// if string is a valid coupon code return true
// if string is not a valid coupon code return false
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  false
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) =>
	enteredCode === correctCode &&
	Date.parse(currentDate) <= Date.parse(expirationDate);

// Thinkful - String Drills: Repeater
// inputs = string and number
// output = string with number of times string repeated
// repeater("*", 3) // "***"
// repeater("a", 5) // "aaaaa"
const repeater = (str, num) => str.repeat(num);

// Predict your age!
// inputs = numbers
// output = number
// multiply each number by itself
// add all numbers together
// Take the square root of the result
// divide the result by 2
// round the result to nearest integer
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
const predictAge = (age1, age2, age3, age4, age5, age6, age7, age8) => {
	let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
		.map((num) => {
			return num * num;
		})
		.reduce((a, b) => {
			return (a += b);
		});

	return Math.floor(Math.sqrt(arr) / 2);
};

// Remove anchor from URL
// input = string
// output = string with anchor(#) removed
// removeAnchor("www.codewars.com#about") // "www.codewars.com"
// removeAnchor("www.codewars.com?page=1") // "www.codewars.com?page=1"
const removeUrlAnchor = (url) => {
	// split url into array
	let arr = url.split('#');
	// return first element of array
	return arr[0];
};
const removeUrlAnchor = (url) => url.split('#')[0];

// Greet Me
// input = string
// output = string
const greet = (name) =>
	`Hello ${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}!`;

// Sort arrays - 1
// input = name - unsorted array
// output = name - sorted array
// sort the array
const sortme = (names) => names.sort();

// The Supermarket Queue
// total time required for all customers to check out
// inputs = array of positive integers and its value represents the time required for that customer to check out
// output = integer
// add all the integers in the array together
// return the sum of the integers in the array
// queueTime([1,2,3,4], 1), 10)
// queueTime([2,2,3,3,4,4], 2), 9)
const queueTime = (customers, n) => {
	// set new array to zero
	let arr = new Array(n).fill(0);
	// loop through customers
	for (let i = 0; i < customers.length; i++) {
		let index = arr.indexOf(Math.min(...arr));
		arr[index] += customers[i];
	}
	// return sum of array
	return arr.reduce((a, b) => a + b);
};

// Find the next perfect square!
// input = number
// output = number
// Return the next square if sq is a perfect square, -1 otherwise
// isSquare(121) // returns 144
// isSquare(625) // returns 676
// isSquare(114) // returns -1
const findNextSquare = (sq) => {
	// get square root of sq
	let root = Math.sqrt(sq);
	// if square root is an integer return next square
	return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
};

// Printer Errors
// input = string
// output = integer
// count the number of characters in string that are not a to m
// print the number of errors then total number of characters
// printerError("aaabbbbhaijjjm") // "0/14"
// printerError("aaaxbbbbyyhwawiwjjjwwm") // "8/22"
const printerError = (str) => {
	// set count to zero
	let count = 0;
	// loop through string
	for (let i = 0; i < str.length; i++) {
		// if string[i] is not a to m add one to count
		if (str[i].match(/[n-z]/)) {
			count++;
		}
	}
	// return count and string length
	return `${count}/${str.length}`;
};
