// Exercise URL: https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md

// 1
/*
* STEPS FOR RUNNING TS
* npm install -g typescript ts-node
* tsc --help => to see if TS compile is ready to compile
*
* */

// 2. PRINT PERSON NAME

// const personName = "Hello Umar, would you like to learn TS?"
// console.log(personName);

// 3. PRINT NAME CASES

// const userName = "umaR"
// const nameLowerCase = userName.toLowerCase();
// const nameUpperCase = userName.toUpperCase();
// const nameSentenceCase = nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1);
//
// console.log('Lowercase: ', nameLowerCase);
// console.log('Uppercase: ', nameUpperCase);
// console.log('Sentence case: ', nameSentenceCase);

// 4. PRINT FAMOUS QUOTE


// console.log('Allama Iqbal once said, "people who have no hold over their process of thinking ara likely to be ruined by liberty of thought."');


// 5. PRINT FAMOUS QUOTE 2

// const famous_person = 'Allama Iqbal';
// const message = `${famous_person} once said, "people who have no hold over their process of thinking ara likely to be ruined by liberty of thought."`;
//
// console.log(message);

// 6. STRIPPING NAMES

// const personName = "\t\n    Umar Farooq   \t\n";
// console.log("Person name with whitespace", personName);
// console.log("Person name with stripping whitespace:", personName.trim());

// 7. Number Eight

// const addition = 5 + 3;
// const subtraction = 10 - 2;
// const multiplication = 4 * 2;
// const division = 16 / 2;

// 8. RESULT
// console.log('Addition:', addition);
// console.log('Subtraction:', subtraction);
// console.log('Multiplication:', multiplication);
// console.log('Division:', division);

// 9. FAVORITE NUMBER
// const favoriteNumber = 4;
// const message = `My favorite number is ${favoriteNumber}.`;
//
// console.log(message);

// 10. ADDING COMMENTS TO PROGRAM

// 11. NAMES

// const names = ['Awais', 'Hamza', 'Hasan'];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
//

// 12. GREETINGS

// const names = ['Awais', 'Hamza', 'Hasan'];
// console.log(`${names[0]}, Happy Birthday!!`);
// console.log(`${names[1]}, Happy Birthday!!`);
// console.log(`${names[2]}, Happy Birthday!!`);

// 13. YOUR OWN ARRAY

// const favoriteTransportations = ['Car', 'Motorcycle', 'Riksha'];
//
// console.log(`I would like to have a ${favoriteTransportations[0]}.`);
// console.log(`I would like to use a ${favoriteTransportations[1]}.`);
// console.log(`I would like to travel ${favoriteTransportations[2]}.`);

// 14. Guest List

const favoritePerson = ['Umar', 'Hasan', 'Hamza'];

console.log(`Hey ${favoritePerson[0]}, I wanna invite you to dinner.`);
console.log(`Hey ${favoritePerson[1]}, I just sent you an invitation for dinner.`);
console.log(`Hey ${favoritePerson[2]}, here is the invitation for dinner.`);

// 15. Modify Guest list

const friendIndexWhoCannotAttend = 1;

console.log(`================`);

console.log(`${favoritePerson[friendIndexWhoCannotAttend]}, cannot attend.`);

favoritePerson[friendIndexWhoCannotAttend] = "Awais";

console.log(`================`);
console.log(`Hey ${favoritePerson[0]}, I wanna invite you to dinner.`);
console.log(`Hey ${favoritePerson[1]}, I just sent you an invitation for dinner.`);
console.log(`Hey ${favoritePerson[2]}, here is the invitation for dinner.`);

// 16. More Guests

console.log(`Hey ${favoritePerson[0]}, I just got a bigger dinner table.`);
console.log(`Hey ${favoritePerson[1]}, I just got a bigger dinner table.`);
console.log(`Hey ${favoritePerson[2]}, I just got a bigger dinner table.`);

favoritePerson.unshift('Umair');
console.log(`Hey ${favoritePerson[0]}, I wanna invite you to dinner.`);

console.log('Guests invited so far:', favoritePerson);

favoritePerson.splice(2, 0, 'Naveed');

console.log(`======= NEW INVITATION =========`);
console.log(`Hey ${favoritePerson[0]}, I wanna invite you to dinner.`);
console.log(`Hey ${favoritePerson[1]}, I just sent you an invitation for dinner.`);
console.log(`Hey ${favoritePerson[2]}, here is the invitation for dinner.`);
console.log(`Hey ${favoritePerson[3]}, here is the invitation for dinner.`);
console.log(`Hey ${favoritePerson[4]}, I just sent you an invitation for dinner.`);

// 17. Shrinking Guest List

console.log('Sorry, I can invite only two guests.');

console.log(`Hey ${favoritePerson.pop()}, sorry, I can't invite you to dinner`);
console.log(`Hey ${favoritePerson.pop()}, sorry, I can't invite you to dinner`);
console.log(`Hey ${favoritePerson.pop()}, sorry, I can't invite you to dinner`);

console.log(`Hey ${favoritePerson[0]}, you are still invited`);
console.log(`Hey ${favoritePerson[1]}, you are still invited`);

favoritePerson.pop();
favoritePerson.pop();
console.log('Invitation List:', favoritePerson);