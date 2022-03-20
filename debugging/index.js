console.log('Typical console message')

// ---------------------------------------------------------------------------------

console.time("Time this");

let acc = 0
for (var i = 0; i < 10000; i++) {
    acc += i
}

console.timeEnd("Time this");

// ---------------------------------------------------------------------------------

let couples = [['John', 'Martha'], ['Paul', 'Marian'], ['Martin', 'Laura'], ['Mike', 'Tina']]

console.table(couples)

couples = {males: ['John', 'Paul', 'Martin', 'Mike'], females: ['Martha', 'Marian', 'Laura', 'Tina']}

console.table(couples)

// ---------------------------------------------------------------------------------

// we can always add a try catch in any line of code to know more about an error
try {
    const a = 5
    a = 7
} catch(error) {
    console.log(error) // expected TypeError: Assignment to constant variable.
}