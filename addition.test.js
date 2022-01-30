//requiring in the sum function from additon.js
const sum = require('./addition')

test ('properly adds two numbers', () => {
    //'expect' defines the function to the tested
    //'.toBe' defines the final result
    //If they match, the test will be a success.
    expect(sum(1,2)).toBe(3)
})
