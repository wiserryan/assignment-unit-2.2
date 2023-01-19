// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE.  

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it equal to Dane.
// Then we check IF (expression of truthy) name equals Mary, we (perform some logic)
// by console.log "Hi Mary".
// else (perform some logic) name not equal to Mary 
// we console.log "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// we define variable secret.
// we define variable code equal to 123.
// we say if (truthy expression) code equals 123
// we say (perform some logic) secret equals word super
// we say (perform some logic) code equals code x 2, and we established code equals 123 earlier.
// now we check if (truthy expression) 
// code is greater than 250 than (perform some logic) secret is equal to super.
// we console.log secret, which will return super, not duper because 246 ois not greater than 250.
// 
// 
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we define variable isStudent as true.
// we make variable age equal to 34.
// we make variable zip equal to 55407.
// than we establish a conditional (truthy) statement isStudent equal to 
// and type and zip is greater than 80000.
// than we console.log "You're a student on the west coast".
//(perform some logic) isStudent equal to false or age is less than 30.
// than we console.log 'What are your hobbies?'.
//(perform some logic) isStudent equal to True, than we console.log 'Welcome to Prime!'.
// else we console.log 'How about the weather?'.
// our team decided the 3rd - Welcome to Prime would be returned due to parameters of let statements.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

//let colorOne does not equal Blue and no colorTwo = Purple
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// Our team decided this code would work by replacing the OR(||) 
// with and would make this work correctly.

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// I'm unsure what the fix would be for this one.
// It seems right to me looking at it.
// Maybe us e adifferent variable other than const? as this number will not change.
/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

