// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
}

// sayHello function
// ORIGINAL
// function sayHello(input) {
//     if (input === 'Alex') {
//         return 'Hello, ' + input;
//     } else if (input === 'Pat') {
//         return 'Hello, ' + input;
//     } else {
//         return 'Hello, Jane';
//     }
// }

// REFACTORED
let sayHello = input => `Hello, ${input}`;

