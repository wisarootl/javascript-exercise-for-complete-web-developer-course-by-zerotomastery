let hex = 'F2AB7D' // Equivalent to rgb(242,171,125)
let rgb = [242, 171, 125] // Equivalente to the upper hex value

const hexTable = (number) => {
  if (parseInt(number) < 10) {
    return parseInt(number)
  } else {
    hex_hash_table = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F', A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 }
    return hex_hash_table[number]
  }
}

// Time Complexity O(1)
// Space Complexity O(1)
const HEXandRGB = (value) => {
  //if is hex / TO RGB
  if (value.length === 6 && typeof value === 'string') {
    let rgb = new Array(3)

    rgb[0] = hexTable(value[0]) * 16 + hexTable(value[1])
    rgb[1] = hexTable(value[2]) * 16 + hexTable(value[3])
    rgb[2] = hexTable(value[4]) * 16 + hexTable(value[5])
    return rgb
  }
  // if is rgb / TO HEX
  else if (value.length === 3 && typeof value === 'object') {
    let hex = ''
    for (let i = 0; i < 3; i++) hex += hexTable(Math.floor(value[i] / 16)) + hexTable(value[i] % 16)

    return hex
  } else return undefined
}

// Testing HEXandRGB function
console.log(hex)
console.log(HEXandRGB(hex))
console.log('='.repeat(10))
console.log(rgb)
console.log(HEXandRGB(rgb))
console.log('='.repeat(10))
console.log('ff00f')
console.log(HEXandRGB('ff00f'))
console.log('='.repeat(10))
