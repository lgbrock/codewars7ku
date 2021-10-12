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
