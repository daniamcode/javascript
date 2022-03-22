container = document.getElementById("container")

// -------------------------------------------------------------------------------------------------
// order array alphabetically (case insensitive)

const fruits = ['banana', 'mango', 'Apple', 'Melon', 'strawberry', 'pear', 'Pineapple']
// the sort method mutates the original array, so we don't need to use the returned value 
// (but we could, as it returns the sorted array)

// operations
const sortedFruits = fruits.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
})

// print
const fruitsElement = document.createElement('div')
fruitsElement.innerHTML = fruits
container.appendChild(fruitsElement)

const sortedFruitsElement = document.createElement('div')
sortedFruitsElement.innerHTML = sortedFruits
container.appendChild(sortedFruitsElement)

// -------------------------------------------------------------------------------------------------
// order array of objects by one of the properties alphabetically (case insensitive)

const accounts = [
    { id: 1, accountName: 'apple', contract: 2002 },
    { id: 2, accountName: 'ABC', contract: 2012 },
    { id: 3, accountName: 'samsung', contract: 2022 },
    { id: 4, accountName: 'VISA', contract: 1989 },
    { id: 5, accountName: 'rakuten', contract: 2015 },
    { id: 6, accountName: 'Repsol', contract: 2006 }
]

// operations
const sortedAccounts = accounts.sort(function(a, b) {
    var textA = a.accountName.toUpperCase();
    var textB = b.accountName.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});

// print
console.log(accounts)

const accountsElement = document.createElement('div')
accountsElement.innerHTML = [accounts[0].accountName, accounts[1].accountName, accounts[2].accountName, 
    accounts[3].accountName, accounts[4].accountName, accounts[5].accountName]
container.appendChild(accountsElement)

const sortedAccountsElement = document.createElement('div')
sortedAccountsElement.innerHTML = [sortedAccounts[0].accountName, sortedAccounts[1].accountName, 
sortedAccounts[2].accountName, sortedAccounts[3].accountName, sortedAccounts[4].accountName, 
sortedAccounts[5].accountName]
container.appendChild(sortedAccountsElement)

// -------------------------------------------------------------------------------------------------
