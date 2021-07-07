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
