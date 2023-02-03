
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here... 
  let arrayWith = [];
  let arrayWithout = [];
  let newArray = [];
  let result;
  for (let word of array) {
    for (let letter of word) {
      if (letter === "a") {
        result = true;
        break;
      }
      if (letter !== "a") result = false;
    }
    if (result === true) {
      arrayWith.push(word);
    }

    if (result === false) {
      arrayWithout.push(word);
    }
  }
  newArray.push(arrayWith);
  newArray.push(arrayWithout);

  return newArray;
  

}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
