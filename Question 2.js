// A number array as an example
let numArray = [3, 4, 7, 2, 4, 94, 12, 35, 65]

// Solution 1 : 2 nested loop
// Time Complexity = O(n^2)
// Space Compexity = O(1)
// const answer = (array, result) => {
//   // Creating space for an array of 2 elements
//   const twoNumSum = new Array(2)

//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === result) {
//         twoNumSum[0] = array[i]
//         twoNumSum[1] = array[j]

//         return twoNumSum
//       }
//     }
//   }

//   return twoNumSum
// }

// Solution 2 : Hash table
// Time Complexity = O(n)
// Space Compexity = O(n)
const answer = (array, result) => {
  // Creating space for an array of 2 elements
  let hash_table = {}

  for (let i = 0; i < array.length - 1; i++) {
    target_element = result - array[i]
    hash_table[array[i]] = true
    if (target_element in hash_table) {
      return [target_element, array[i]]
    }
  }

  return null
}

console.log(answer(numArray, 101))
console.log(answer(numArray, 100))
