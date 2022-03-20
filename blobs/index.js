container = document.getElementById('container')

// -------------------------------------------------------------------------------------------------

// Here we will work with FILES as origin

// see index.html for the execution of this function (there's an onClick html method)
function saveFile() {
    console.log('d')
    const myFirstFile = fileupload.files[0]
    console.log(myFirstFile) // expected result: a File type

    // we can send this file to the backend
    // and we can also show a preview:
    const myFirstImageElement = document.createElement('img')
    myFirstImageElement.style.width = "500px"
    myFirstImageElement.src = URL.createObjectURL(myFirstFile)
    container.appendChild(myFirstImageElement)
}

// -------------------------------------------------------------------------------------------------

// Here we will work with Data URLs as origin

// Data URLs allow content creators to embed small files inline in documents
// They have 4 parts: data:[<mediatype>][;base64],<data>
// 1) a prefix (data:)
// 2) a MIME type such as 'image/jpeg'
// 3) an optional base64 token if non-textual
// 4) the data itself 

function dataURLtoBlob(dataUrl) {
    if (dataUrl) {
        const arr = dataUrl.split(',');
        console.log('a')
        console.log(arr)
        const mime = arr[0].match(/:(.*?);/)[1];
            const bstr = atob(arr[1]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }
}

function blobToFile(blob) {
    return new File([blob], 'image');
}

function handleFile(file) {
    // base64-encoded version of 'Hello, World!'
    const blob = dataURLtoBlob(file);
    console.log('b')
    console.log(blob)
    const croppedImage = blobToFile(blob);
    console.log('c')
    console.log(croppedImage)
}

// operations
const mySecondFile = 'data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAw AAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFz ByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSp a/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJl ZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uis F81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PH hhx4dbgYKAAA7'
handleFile(mySecondFile)

// print
const mySecondImageElement = document.createElement('img')
mySecondImageElement.src = mySecondFile
container.appendChild(mySecondImageElement)

// -------------------------------------------------------------------------------------------------

// here we try with plain text; it doesn't work for now


// const myFile = 'data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==' // dataURL format

// const message = "Hello there, see if this will work or not"
// const messageBase64 = btoa(message)
// console.log(messageBase64)
// const myFile = `data:text/plain;base64,${messageBase64}`
// console.log(myFile)

// -------------------------------------------------------------------------------------------------

// try with Blobs

