const container = document.getElementById('container')

// add title
const mainTitle = document.createElement('h2')
mainTitle.textContent = 'Testing array mehods:' 
// these if statements are here to pass the test, that hasn't a mocked html by now
if(container) {
    container.appendChild(mainTitle)
}

// define variables to be used
const colors = ['red', 'blue', 'grey', 'green', 'yellow']

// ----------------------------------------------------------------------------------------------

// FILTER
// add title
const filterTitle = document.createElement('h4')
filterTitle.textContent = 'Results of FILTER method:' 
if(container) {
    container.appendChild(filterTitle)
}

// operations
// we do it in a function so we can test it easily
export const filterColors = (colors) => {
    const result = colors.filter(color => color[0] === 'g')
    return result
}
const filteredColors = filterColors(colors)

// print
filteredColors.forEach(filteredColor => {
    const item = document.createElement('div')
    item.textContent = filteredColor
    if(container) {
        container.appendChild(item)
    } 
})

// ----------------------------------------------------------------------------------------------

// FIND
// add title
const findTitle = document.createElement('h4')
findTitle.textContent = 'Results of FIND method:'
if(container) {
    container.appendChild(findTitle)
}

// operations
const foundColor = colors.find(color => color === 'green')
let notFoundColor = colors.find(color => color === 'efefwewefwe')

// print
const foundColorElement = document.createElement('div')
foundColorElement.textContent = foundColor
if(container) {
    container.appendChild(foundColorElement)
}

const notFoundColorElement = document.createElement('div')
notFoundColorElement.innerHTML = notFoundColor
if(container) {
    container.appendChild(notFoundColorElement)
}

// ----------------------------------------------------------------------------------------------

// FINDINDEX

const index = colors.findIndex(color => color==='green')
console.log(index) // expected result is 3

// ----------------------------------------------------------------------------------------------

// SOME

let someColors = colors.some(color=>color.includes('ee'))
console.log('Method "some", if some element satisfies a condition:')
console.log(someColors); // expect true

someColors = colors.some(color=>color.includes('eee'))
console.log('Method "some", if any element satisfies a condition:')
console.log(someColors); // expect false

// ----------------------------------------------------------------------------------------------

// EVERY

let everyColor = colors.every(color=>color.includes('ee'))
console.log("Method 'every', if some element doesn't satisfy a condition:")
console.log(everyColor); // expect false

everyColor = colors.every(color=>color.length > 1)
console.log("Method 'every', if every element satisfies a condition:")
console.log(everyColor); // expect true

// ----------------------------------------------------------------------------------------------

// to do splice, push, map, forEach and reduce