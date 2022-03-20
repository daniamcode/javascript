// Data URLs
// Data URLs allow content creators to embed small files inline in documents
// They have 4 parts: data:[<mediatype>][;base64],<data>
// 1) a prefix (data:)
// 2) a MIME type such as 'image/jpeg'
// 3) an optional base64 token if non-textual
// 4) the data itself 

// -------------------------------------------------------------------------------------------------

// see index.html for the execution of this function
function saveFile() {
    console.log('d')
    console.log(fileupload.files[0])
    // we can send this file to the backend
}

// -------------------------------------------------------------------------------------------------

container = document.getElementById('container')

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

// const myFile = 'data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==' // dataURL format
const myFile = 'data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAw AAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFz ByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSp a/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJl ZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uis F81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PH hhx4dbgYKAAA7'

// const message = "Hello there, see if this will work or not"
// const messageBase64 = btoa(message)
// console.log(messageBase64)
// const myFile = `data:text/plain;base64,${messageBase64}`
// console.log(myFile)

handleFile(myFile)

const myImage = document.createElement('img')
myImage.src = myFile
container.appendChild(myImage)

// -------------------------------------------------------------------------------------------------

