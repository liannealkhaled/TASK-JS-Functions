/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(name) {
  console.log(name);
}

printName(`Lianne`);

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(birth) {
  console.log(2023 - birth);
}

printAge(1997);

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

function printHello(name, language) {
  if (language == `english`) {
    console.log(`hello ${name}`);
  }
  if (language == `espanol`) {
    console.log(`hola ${name}`);
  }

  if (language == `french`) {
    console.log(`bonjour ${name}`);
  }
  if (language == `turkey`) {
    console.log(`merhaba ${name}`);
  }
}

printHello(`lianne`, `english`);
printHello(`khaled`, `espanol`);
printHello(`deema`, `french`);
printHello(`latifa`, `turkey`);

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(x, y) {
  if (x > y) {
    console.log(x);
  } else {
    y;
  }
}
printMax(10, 5);
