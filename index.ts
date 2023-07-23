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

// // 14. Guest List
//
// const favoritePerson = ['Umar', 'Hasan', 'Hamza'];
//
// console.log(`Hey ${favoritePerson[0]}, I wanna invite you to dinner.`);
// console.log(`Hey ${favoritePerson[1]}, I just sent you an invitation for dinner.`);
// console.log(`Hey ${favoritePerson[2]}, here is the invitation for dinner.`);
//
// // 15. Modify Guest list
//
// const friendIndexWhoCannotAttend = 1;
//
// console.log(`================`);
//
// console.log(`${favoritePerson[friendIndexWhoCannotAttend]}, cannot attend.`);
//
// favoritePerson[friendIndexWhoCannotAttend] = "Awais";
//
// console.log(`================`);
// console.log(`Hey ${favoritePerson[0]}, I wanna invite you to dinner.`);
// console.log(`Hey ${favoritePerson[1]}, I just sent you an invitation for dinner.`);
// console.log(`Hey ${favoritePerson[2]}, here is the invitation for dinner.`);
//
// // 16. More Guests
//
// console.log(`Hey ${favoritePerson[0]}, I just got a bigger dinner table.`);
// console.log(`Hey ${favoritePerson[1]}, I just got a bigger dinner table.`);
// console.log(`Hey ${favoritePerson[2]}, I just got a bigger dinner table.`);
//
// favoritePerson.unshift('Umair');
// console.log(`Hey ${favoritePerson[0]}, I wanna invite you to dinner.`);
//
// console.log('Guests invited so far:', favoritePerson);
//
// favoritePerson.splice(2, 0, 'Naveed');
//
// console.log(`======= NEW INVITATION =========`);
// console.log(`Hey ${favoritePerson[0]}, I wanna invite you to dinner.`);
// console.log(`Hey ${favoritePerson[1]}, I just sent you an invitation for dinner.`);
// console.log(`Hey ${favoritePerson[2]}, here is the invitation for dinner.`);
// console.log(`Hey ${favoritePerson[3]}, here is the invitation for dinner.`);
// console.log(`Hey ${favoritePerson[4]}, I just sent you an invitation for dinner.`);
//
// // 17. Shrinking Guest List
//
// console.log('Sorry, I can invite only two guests.');
//
// console.log(`Hey ${favoritePerson.pop()}, sorry, I can't invite you to dinner`);
// console.log(`Hey ${favoritePerson.pop()}, sorry, I can't invite you to dinner`);
// console.log(`Hey ${favoritePerson.pop()}, sorry, I can't invite you to dinner`);
//
// console.log(`Hey ${favoritePerson[0]}, you are still invited`);
// console.log(`Hey ${favoritePerson[1]}, you are still invited`);
//
// favoritePerson.pop();
// favoritePerson.pop();
// console.log('Invitation List:', favoritePerson);

// // 18. Seeing the world
//
// const locations = ['Dubai', 'Australia', 'Turkey', 'United States', 'England'];
// const sortedAlphabetical = [...locations].sort();
// const sortedAlphabeticalReverse = [...sortedAlphabetical].reverse();
// const reversedLocations = [...locations].reverse();
// const original = [...reversedLocations].reverse();
// const originalAlphabetical = [...original].sort();
// const originalReverseAlphabetical = [...originalAlphabetical].reverse();
//
// console.log('Original', locations);
// console.log('Sorted Locations (Alphabetical)', sortedAlphabetical);
// console.log('Sorted Locations (Alphabetical)', sortedAlphabeticalReverse);
// console.log('Reversed', reversedLocations);
// console.log('Original', original);
// console.log('Original Alphabetical', originalAlphabetical);
// console.log('Original Reverse Alphabetical', originalReverseAlphabetical);
//
// // 19. Number of items
// console.log('Number of locations:', locations.length);
//
// // 20. LIST
//
// const listOfItems = ['K2', 'Ravi', 'India', 'Pakistan', 'Faisalabad', 'English', 'Urdu'];
// console.log(listOfItems);
//
// // 21. OBJECTS
//
// const student = {
//     name: 'Umar',
//     age: 24,
//     city: 'Faisalabad'
// };
//
// const car = {
//     brand: 'Honda',
//     model: '2020',
//     price: '1000000'
// };
//
// console.log(student, car);
//
// // 22 Intentional error
// console.log('Accessing an invalid');
// console.log(listOfItems[9]);

// // 23 Conditional test
// const car = 'honda';
//
// console.log("Is car === 'umar? I predict True");
// console.log(car === 'honda');
//
// const userName = 'umar';
//
// console.log("Is userName === 'umar'? I predict True");
// console.log(userName === 'umar');
//
// const city = 'Faisalabad';
//
// console.log("Is city === 'Faisalabad'? I predict True");
// console.log(city === 'Faisalabad');
//
// const age = 20;
//
// console.log("Is Adult? I predict True");
// console.log(age > 18);
//
// console.log("Is Child? I predict False");
// console.log(age < 18);
//
// const country = 'Pakistan';
//
// console.log("Is country === 'England'? I predict True");
// console.log(country === "Pakistan");
//
// let fruits = ['apple', 'banana', 'orange'];
// console.log("Is the fruits array empty? I predict False.");
// console.log(fruits.length === 0);
//
// const marks = 40;
//
// console.log("Is marks greater than 50? I predict False.");
// console.log(marks > 50);
//
// console.log("Is marks greater than 35? I predict True.");
// console.log(marks > 35);
//
// console.log("User is passed. I predict True.");
// console.log(marks > 33);
//
// console.log('Banana available, I predict True');
// console.log(fruits.includes('banana'));
//
// console.log('Grapes available, I predict False');
// console.log(fruits.includes('grapes'));
//
// console.log('Peach not available, I predict True');
// console.log(fruits.includes('peach'));

// // 25. Alien colors
//
// const alien_color = 'green';
//
// if(alien_color === 'green'){
//     console.log('The player just earned 5 points.');
// }
//
// // @ts-ignore
// if(alien_color === 'red'){
//     console.log('The player just earned 10 points.');
// }
//
// // 26. Alien colors 2
//
// if(alien_color === 'green'){
//     console.log('The player just earned 5 points.');
// }else {
//     console.log('The player just earned 10 points.');
// }
//
// // @ts-ignore
// if(alien_color === 'red'){
//     console.log('The player just earned 5 points.');
// }else {
//     console.log('The player just earned 10 points.');
// }

// // 27. Alien colors 3
//
// const greenAlien = 'green';
//
// // @ts-ignore
// if(greenAlien === 'green'){
//     console.log('The player just earned 5 points.');
// }else if (greenAlien === 'yellow') {
//     console.log('The player just earned 10 points.');
// } else if (greenAlien === 'red') {
//     console.log('The player just earned 15 points.');
// }
//
// const yellowAlien = 'yellow';
//
// // @ts-ignore
// if(yellowAlien === 'green'){
//     console.log('The player just earned 5 points.');
// }else if (yellowAlien === 'yellow') {
//     console.log('The player just earned 10 points.');
// } else if (yellowAlien === 'red') {
//     console.log('The player just earned 15 points.');
// }
//
// const redAlien = 'red';
//
// // @ts-ignore
// if(redAlien === 'green'){
//     console.log('The player just earned 5 points.');
// // @ts-ignore
// } else if (redAlien === 'yellow') {
//     console.log('The player just earned 10 points.');
// } else if (redAlien === 'red') {
//     console.log('The player just earned 15 points.');
// }

// // 28. Stage of life
//
// const personAge = 70;
//
// if(personAge < 2){
//  console.log("Person is a baby");
// } else if(personAge >= 2 && personAge < 4){
//     console.log("Person is a toddler");
// } else if(personAge >= 4 && personAge < 13) {
//     console.log("Person is a kid");
// }else if(personAge >= 13 && personAge < 20) {
//     console.log("Person is a teenager");
// }else if(personAge >= 20 && personAge < 65) {
//     console.log("Person is an adult");
// }else {
//     console.log("Person is an elder");
// }

// //29. Favorite fruits
//
// const favorite_fruits = ['banana', 'apple', 'orange'];
//
// if(favorite_fruits.includes('banana')){
//     console.log('I really like banana');
// }
//
// if(favorite_fruits.includes('grapes')){
//     console.log('I really like grapes');
// }
//
// if(favorite_fruits.includes('apple')){
//     console.log('I really like apple');
// }
//
// if(favorite_fruits.includes('orange')){
//     console.log("I don't like oranges");
// }
//
// if(!favorite_fruits.includes('mange')){
//     console.log("I really like mangoes but they are not available.");
// }

// // 30 and 31. Hello Admin
// const users: string[] = ['Umar', 'Umair', 'admin', 'Hassan', 'Ali'];
//
// if(users.length === 0){
//     console.log('We need to find some users!');
// }else {
// users.forEach(username => {
//     if(username == 'admin'){
//         console.log('Hello admin, would you like to see a status report?');
//     }else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// })
// }

// // 32. Checking username
//
// const current_users = ['umar', 'umair', 'hassan', 'ali', 'ahmed'];
//
// const new_users = ['awais', 'hamza', 'hasan', 'Umar', 'ALI'];
//
// new_users.forEach(newUser => {
//     const isUserAlreadyAvailable = current_users.find(currentUser => currentUser.toLowerCase() === newUser.toLowerCase());
//
//     if(isUserAlreadyAvailable){
//       console.log(`${newUser} is already available`);
//     }
// })

// 33. Ordinal Numbers

const numbers = [1,2,3,4,5,6,7,8,9];

numbers.forEach((number, index) => {
    if(index == 0){
        console.log(`${number}st`);
    }else if(index == 1){
        console.log(`${number}nd`);
    }else if(index == 2){
        console.log(`${number}rd`);
    }else {
        console.log(`${number}th`);
    }
});