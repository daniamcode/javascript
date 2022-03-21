// we want to add 50 containers, each one with a different background color, from a variable list

const container = document.getElementById('container')
const colors = ['red', 'green', 'blue', 'yellow', 'black']

let counter = -1
for (i = 0; i < 50; i++) {
    const item = document.createElement('div')
    counter++    
    item.style.background = colors[counter]
    item.style.width = '400px'
    item.style.height = '10px'
    container.appendChild(item)
    if(counter === colors.length - 1) {
        counter = -1
    }
}

