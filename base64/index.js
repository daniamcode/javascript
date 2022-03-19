// Base64
// Base64 is a "binary to ASCII" encoding scheme. 
// Base64 characters only use the same 64 characters that are present in most character sets.
// Using ASCII (8 bits: 7 + 1 for parity) can be problematic as some characters are used as controlled characters
// in Internet protocols, sometimes with different meanings.
// Base64 can be used to embed files within scripts and webpages, so as to avoid depending on external files.
// It is often used to transmit JSON data and cookie information for a user.

// For example, the text Hi! has the binary representation of
// 01001000 01101001 00100001
// Which makes up a total of three bytes (24 bits). Base64 encoding will divide the binary data up to six-bit chunks 
// and map them to a base64 character:
// 010010 | 000110 | 100100 | 100001
// S        G        k        h
// Therefore, the base64 encoding of Hi! is SGkh.

// When the number of characters to be encoded does not come with a multiple of six bits, zeros will be used to complete 
// the last six-bit sequence (we will add "=" at the end of the base64)

// Decimal or Hexadecimal are not as compact (1 binary byte becomes 2 hexadecimal bytes or 3 decimal bytes). Fo example:
// letter "u" is 0111 0101(binary) 117(decimal)	75(hexadecimal)

const container = document.getElementById('container')

// operations
const hi = "Hello"
const codeHiBase64 = btoa(hi) // binary to ASCII
const decodeHiBase64 = atob(codeHiBase64) // ASCII to binary

// print
const hiElement = document.createElement('div')
const codeHiBase64Element = document.createElement('div')
const decodeHiBase64Element = document.createElement('div')

hiElement.innerHTML = hi
codeHiBase64Element.innerHTML = codeHiBase64
decodeHiBase64Element.innerHTML = decodeHiBase64

container.appendChild(hiElement)
container.appendChild(codeHiBase64Element)
container.appendChild(decodeHiBase64Element)

// --------------------------------------------------------------------------------------------
