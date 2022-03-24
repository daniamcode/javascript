const container = document.getElementById('container')

// add title
const mainTitle = document.createElement('h2')
mainTitle.innerHTML = 'Testing array mehods:' 
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
filterTitle.innerHTML = 'Results of FILTER method:' 
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
    item.innerHTML = filteredColor
    if(container) {
        container.appendChild(item)
    } 
})

// ----------------------------------------------------------------------------------------------

// FIND
// add title
const findTitle = document.createElement('h4')
findTitle.innerHTML = 'Results of FIND method:'
if(container) {
    container.appendChild(findTitle)
}

// operations
const foundColor = colors.find(color => color === 'green')
let notFoundColor = colors.find(color => color === 'efefwewefwe')

// print
const foundColorElement = document.createElement('div')
foundColorElement.innerHTML = foundColor
if(container) {
    container.appendChild(foundColorElement)
}

const notFoundColorElement = document.createElement('div')
notFoundColorElement.innerHTML = notFoundColor
if(container) {
    container.appendChild(notFoundColorElement)
}

// ----------------------------------------------------------------------------------------------
