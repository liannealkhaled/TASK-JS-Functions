/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */


function greet (name) { console.log( `HELLO ${name}`)}

greet(`hamza`)

// function greet(name) {
//   console.log(name);
// }
// greet(`hamza`);

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */


function isOdd(x) { 
  if ((x-1)%2 == 0 ){ return true}
  else {return false}
}

console.log (isOdd(7))

console.log (isOdd(10))


// function isOdd(n) {
//   if (n % 2 == 1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isOdd(7));

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
 
function oddsSmallerThan(x) {
  if ( isOdd(x)){ 
  console.log ( (x-1)/2)}
 }
oddsSmallerThan(7)
oddsSmallerThan(8) // false 



// function oddsSmallerThan(n) {
//   if (isOdd(n)) {
//     console.log((n - 1) / 2);
//   }
// }

// oddsSmallerThan(7);

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */

function squareOrDouble(x) { 
  if (x%2 == 1) { return x*x} else {return x*2}
}
 console.log (squareOrDouble(2))
 console.log (squareOrDouble(3))




// function squareOrDouble(n) {
//   if (isOdd(n)) {
//     console.log(n * n);
//   } else {
//     console.log(n * 2);
//   }
// }
// squareOrDouble(7);
