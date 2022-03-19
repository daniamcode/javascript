const container = document.getElementById('container')

// add title
const mainTitle = document.createElement('h2')
mainTitle.innerHTML = 'Testing array mehods:' 
container.appendChild(mainTitle)

// define variables to be used
const colors = ['red', 'blue', 'grey', 'green', 'yellow']

// ----------------------------------------------------------------------------------------------

// FILTER
// add title
const filterTitle = document.createElement('h4')
filterTitle.innerHTML = 'Results of FILTER method:' 
container.appendChild(filterTitle)

// operations
const filteredColors = colors.filter(color => color[0] === 'g')

// print
filteredColors.forEach(filteredColor => {
    const item = document.createElement('div')
    item.innerHTML = filteredColor 
    container.appendChild(item)
})

// ----------------------------------------------------------------------------------------------

// FIND
// add title
const findTitle = document.createElement('h4')
findTitle.innerHTML = 'Results of FIND method:'
container.appendChild(findTitle)

// operations
const foundColor = colors.find(color => color === 'green')
let notFoundColor = colors.find(color => color === 'efefwewefwe')

// print
const foundColorElement = document.createElement('div')
foundColorElement.innerHTML = foundColor
container.appendChild(foundColorElement)

const notFoundColorElement = document.createElement('div')
notFoundColorElement.innerHTML = notFoundColor
container.appendChild(notFoundColorElement)

// ----------------------------------------------------------------------------------------------
