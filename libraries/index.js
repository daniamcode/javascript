// toastr, needs the jquery cdn
export const toastrSuccess = (message) => toastr.success(message)

// lodash
const foo = { a: "a property" };
const bar = { b: 4, c: "an other property" }

const result = _.assign({ a: "an old property" }, foo, bar);
// result => { a: 'a property', b: 4, c: 'an other property' }
console.log(result)

// simulating a react component
export const libraries = (fn, message, anotherMessage) => {
    fn(message)
    fn(anotherMessage)
}
libraries(toastrSuccess, 'This is a success message', 'This is another success message') 
