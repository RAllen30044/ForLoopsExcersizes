
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let errorProfilesArray = [];

  for (let profileIndex = 0; profileIndex < array.length; profileIndex++) {
    let withdrawalsTotal = 0;
    let depositsTotal = 0;
    let total = 0;
    if (array[profileIndex].withdrawals === undefined) {
      array[profileIndex].withdrawals = [0];
    }
    for (let witMoney of array[profileIndex].withdrawals) {
      withdrawalsTotal += witMoney;
    }
    if (array[profileIndex].deposits === undefined) {
      array[profileIndex].deposits = [0];
    }
    for (let depMoney of array[profileIndex].deposits) {
      depositsTotal += depMoney;
    }
    total = +depositsTotal - withdrawalsTotal;

    if (array[profileIndex].balance !== total) {
      errorProfilesArray.push(array[profileIndex]);
    }
  }

  return errorProfilesArray;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
