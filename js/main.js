/*
p => parameters passed in to the function
r => what the the result of the function should be e.g          string array etc
e=> examples of input and expected output
p=> psuedocode
*/

// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

const countDevelopers = (list) => list.filter(x => x.continent === 'Europe' && x.language === 'JavaScript').length