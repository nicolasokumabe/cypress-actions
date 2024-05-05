const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZiMjExYzAyLTU3MGItNDI0ZC1iMTZkLTAyZjdmMGY5MWY4Ny0xNzE0ODcxNjA4NDUxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZmZlNmQ5NDMtMmQxYy00ZWZmLTgwMjEtOWYyZjljMDdjMTk5IiwidHlwZSI6InQifQ.LtqMlcdJZ3gUnbiR1LW8JuEWlX7UX7vj9X88KOIkRnM'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
