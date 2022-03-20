// learn canvas
const myCanvas = document.getElementById('canvas')

// draw a circle
var ctx = myCanvas.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();


const canvasBlob = canvas.toBlob((blob)=> {
    console.log('a')
    console.log(blob)
})

const canvasDataURL = canvas.toDataURL()
console.log('b')
console.log(canvasDataURL)