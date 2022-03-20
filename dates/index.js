const container = document.getElementById('container')

// ---------------------------------------------------------------------------------

// get actual date
const myFirstDate = new Date()

// print
const myFirstDateElement = document.createElement('div')
myFirstDateElement.innerHTML = myFirstDate
container.appendChild(myFirstDateElement)

// ---------------------------------------------------------------------------------