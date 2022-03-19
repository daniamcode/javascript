container = document.getElementById('container')

//-------------------------------------------------------------------------------------------------

const promise1 = Promise.resolve(111);

promise1.then((response) => {
    console.log(response);
    // expected output: 111
    const child1 = document.createElement('div')
    child1.innerHTML = response,
    container.appendChild(child1)
});

//-------------------------------------------------------------------------------------------------

const promise2 = Promise.reject('ups');

// catch
promise2.catch((response) => {
    console.log(response);
    // expected output: 'ups'
    const child2 = document.createElement('div')
    child2.innerHTML = response,
    container.appendChild(child2)
});

//-------------------------------------------------------------------------------------------------

const promise3 = Promise.reject(new Error('ups2'));

const notEnteringThisFunction = () => {}

//then
promise3.then(notEnteringThisFunction, (response) => {
    console.log(response);
    console.error(response);
    // expected output: 'ups2'
    const child3 = document.createElement('div')
    child3.innerHTML = response,
    container.appendChild(child3)
});

//-------------------------------------------------------------------------------------------------

const promise4 = new Promise ((resolve, reject) => {
    setTimeout(()=> {
        resolve(222)
    }, 3000)
})

promise4.then((response)=> {
    console.log(response);
    // expected output: 222
    const child4 = document.createElement('div')
    child4.innerHTML = response,
    container.appendChild(child4)
})

//-------------------------------------------------------------------------------------------------
