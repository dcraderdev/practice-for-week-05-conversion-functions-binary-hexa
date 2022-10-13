/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
*/



// program to convert decimal to binary
/* Base 10 to base 2 */

// binary = 8 
// decimal = 10


let testDec = 8


function decimalToBinary(blob) {
  // Your code here
  let number = parseInt(blob)
  const result = number.toString(2);
  return `0b` + `${result}`
}

console.log(decimalToBinary(testDec));



/* Base 10 to base 16 */
function decimalToHexadecimal(blob) {
  let number = parseInt(blob)
  const result = number.toString(16);
  return `0x` + `${result}`
}



/* Base 2 to base 10 */
function binaryToDecimal(blob) {
  // let number = blob.slice(2)
  // return parseInt(number,2);
  
  return parseInt(Number(blob), 10)

}

/* Base 16 to base 10 */
function hexadecimalToDecimal(blob) {

  // let number = blob.slice(2)
  // return parseInt(number,16);

  // return parseInt((blob), 16)
  return parseInt(Number(blob), 10)


}





// console.log('Decimal to binary:')
// console.log(decimalToBinary(13))  // '0b1101'
// console.log(decimalToBinary(72))  // '0b1001000'
// console.log('')

// console.log('Decimal to hexadecimal:')
// console.log(decimalToHexadecimal(9))   // '0x9'
// console.log(decimalToHexadecimal(32))  // '0x20'
// console.log('')

// console.log('Binary to decimal:')
// console.log(binaryToDecimal('0b0101'))      // 5
// console.log(binaryToDecimal('0b10001000'))  // 136
// console.log('')

// console.log('Hexadecimal to decimal:')
// console.log(hexadecimalToDecimal('0x51'))    // 81
// console.log(hexadecimalToDecimal('0x10ff'))  // 4351


module.exports = {
  decimalToBinary,
  decimalToHexadecimal,
  binaryToDecimal,
  hexadecimalToDecimal
}