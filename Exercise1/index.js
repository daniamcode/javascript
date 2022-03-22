// we want to add 50 containers, each one with a different background color, from a variable list

const container = document.getElementById('container')
const colors = ['red', 'green', 'blue', 'yellow', 'black']

for (i = 0; i < 50; i++) {
    const item = document.createElement('div')
    item.style.background = colors[i % colors.length]
    item.style.width = '400px'
    item.style.height = '10px'
    container.appendChild(item)
}

