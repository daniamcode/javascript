import { filterColors } from './index.js'

// jest puts its functions in the "global" environment, that is "node" by default, but we are interacting
// with the DOM in the files that we are testing, so we need to add in package.json the following line: 

// "jest": {
//     "testEnvironment": "jsdom"
//   }

// so we don't need to import the test method from jest

test('should return colors with "g" as first letter', () => {  
    const newColors = ['csc', 'gg', 'hg', 'hyyy']
    expect(filterColors(newColors)[0]).toBe('gg');
})
