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

// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

const isRubyComing = (list) => list.some(x => x.language === 'Ruby')

// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

const getFirstPython = (list) => {
  let a = list.find(x => x.language === 'Python')
  return a ? `${a.firstName}, ${a.country}` : 'There will be no Python developers'
}

// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

const countLanguages = (list) => {
  const obj = {}
  list.map(v => obj [v.language] = (obj [v.language] || 0) + 1)
  return obj
}