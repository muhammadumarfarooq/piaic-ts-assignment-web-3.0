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

// 2. PRINT NAME CASES

const userName = "umaR"
const nameLowerCase = userName.toLowerCase();
const nameUpperCase = userName.toUpperCase();
const nameSentenceCase = nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1);

console.log('Lowercase: ', nameLowerCase);
console.log('Uppercase: ', nameUpperCase);
console.log('Sentence case: ', nameSentenceCase);