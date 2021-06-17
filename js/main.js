/*
p => parameters passed in to the function
r => what the the result of the function should be e.g          string array etc
e=> examples of input and expected output
p=> psuedocode
*/

// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

const countDevelopers = (list) => list.filter(x => x.continent === 'Europe' && x.language === 'JavaScript').length

// Coding Meetup #2 - Higher-Order Functions Series - Greet developers

const greetDevelopers = (list) => {
    list.forEach(x => x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?`)
    return list
  }