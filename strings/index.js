const container = document.getElementById('container')

// add title
const mainTitle = document.createElement('h1')
mainTitle.innerHTML = 'Testing array mehods:' 
container.appendChild(mainTitle)

// ----------------------------------------------------------------------------------------------

// FILTER
// add title
const filterTitle = document.createElement('h2')
filterTitle.innerHTML = 'List of filtered elements:' 
container.appendChild(filterTitle)

const colors = ['red', 'blue', 'grey', 'green', 'yellow']

const filteredColors = colors.filter(color=>color[0]==='g')

// forEach method
filteredColors.forEach(filteredColor=>{
    const item = document.createElement('div')
    item.innerHTML = filteredColor 
    container.appendChild(item)
})

// ----------------------------------------------------------------------------------------------

