// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  let depositArray = [];

  for (let profileIndex = 0; profileIndex < array.length; profileIndex++) {
    let total = 0;
    if (array[profileIndex].deposits === undefined) {
      depositArray.push(array[profileIndex]);
    } else {
      for (
        let depositIndex = 0;
        depositIndex < array[profileIndex].deposits.length;
        depositIndex++
      ) {
        total += array[profileIndex].deposits[depositIndex];
      }
      if (total < 2000) {
        depositArray.push(array[profileIndex]);
      }
    }
  }

  return depositArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
