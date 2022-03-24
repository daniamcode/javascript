// toastr, needs the jquery cdn

toastr.success('This is a success message')

// lodash
const foo = { a: "a property" };
const bar = { b: 4, c: "an other property" }

const result = _.assign({ a: "an old property" }, foo, bar);
// result => { a: 'a property', b: 4, c: 'an other property' }
console.log(result)
