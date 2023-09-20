/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName (name) { console.log(name)}
printName(`lianne`)
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(x) { console.log(2023-x) }

printAge(1997)
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello (name,language) { 
  if (language == `english`){ console.log(`hi ${name}`)}
   else if 
  (language == `espanol`){ console.log(`hola ${name}`)}
   else if 
  (language == `french`){ console.log(`bonjour ${name}`)}
   else if 
  (language == `turkey`){ console.log(`merhaba ${name}`)}
  else (console.log (`sorry ${name}, your language is not found`))

}

printHello(`lianne`,`english` )
printHello(`mona`, `espanol` )
printHello(`khaled`,`french`)
printHello(`deema`,`turkey`)
printHello(`mohd`, `arabic`)

// function printHello(name, language) {
//   if (language == `english`) {
//     console.log(`hello ${name}`);
//   }
//   if (language == `espanol`) {
//     console.log(`hola ${name}`);
//   }

//   if (language == `french`) {
//     console.log(`bonjour ${name}`);
//   }
//   if (language == `turkey`) {
//     console.log(`merhaba ${name}`);
//   }
// }

// printHello(`lianne`, `english`);
// printHello(`khaled`, `espanol`);
// printHello(`deema`, `french`);
// printHello(`latifa`, `turkey`);

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(x,y) { 
  if (x > y){console.log (x)} else {y}
}
printMax(1, 3);


// function printMax(x, y) {
//   if (x > y) {
//     console.log(x);
//   } else {
//     y;
//   }
// }

// printMax(10, 5);
