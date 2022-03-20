// imports require Babel, because they belong to ES6
// if we want to test things like arrow functions we will need to add Babel
const { filterColors } = require('./index.js');
// import { filteredColors } from './index.js'

// we also need to add in package.json the following line, because is "node" by default and we are interacting
// with the DOM in the files that we are testing:

// "jest": {
//     "testEnvironment": "jsdom"
//   }

test('should return colors with "g" as first letter', () => {  
    const newColors = ['csc', 'gg', 'hg', 'hyyy']
    expect(filterColors(newColors)[0]).toBe('gg');
})
