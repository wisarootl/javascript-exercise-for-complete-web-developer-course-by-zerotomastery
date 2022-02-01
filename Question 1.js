// const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]
// const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20, 591, '1', '1']
// const array = [1, '2', '3', 2]
// const array = []

// Time Complexity = O(n log n) : for sorting algoritm
// Space Complexity = O(n)
const clean_the_room = (array) => {
  const comparing_fuction = (a, b) => a - b
  array.sort(comparing_fuction)
  console.log('\nsorted array : ')
  console.log(array)
  let new_array = []
  let new_array_number = []
  let new_array_string = []
  let element = null

  idx = 0
  while (idx <= array.length - 1) {
    if (array[idx] === array[idx + 1]) {
      element = []
      while (array[idx] === array[idx + 1]) {
        element.push(array[idx])
        idx++
      }
      element.push(array[idx])
      type_element = typeof element[0]
    } else {
      element = array[idx]
      type_element = typeof element
    }

    if (type_element === 'string') {
      new_array_string.push(element)
    } else if (type_element === 'number') {
      new_array_number.push(element)
    }
    idx++
  }
  if (new_array_number.length > 0 && new_array_string.length > 0) {
    new_array.push(new_array_number)
    new_array.push(new_array_string)
  } else if (new_array_number.length > 0) {
    new_array = new_array_number
  } else if (new_array_string.length > 0) {
    new_array = new_array_string
  }
  return new_array
}

const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20, 591, '1', '1']
console.log('original array : ')
console.log(array)
new_array = clean_the_room(array)
console.log('\ncleaned array : ')
console.log(new_array)
console.log('cleaned array[0] : ')
console.log(new_array[0])
console.log(new_array[0][0])
console.log(new_array[0][1])
console.log('cleaned array[1] : ')
console.log(new_array[1])
console.log(new_array[1][0])

console.log('=========================')
const array2 = [1, '2', '3', 2]
console.log('original array : ')
console.log(array2)
new_array = clean_the_room(array2)
console.log('\ncleaned array : ')
console.log(new_array)
console.log(new_array[0])
console.log(new_array[1])

console.log('=========================')
const array3 = []
console.log('original array : ')
console.log(array3)
new_array = clean_the_room(array3)
console.log('\ncleaned array : ')
console.log(new_array)
