// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'definitely roger';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'maybe not roger, not sure anymore'
}
console.log(changeLeastFavoriteCustomer());