// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
}

// sayHello function
// ORIGINAL - written after tests were made
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
function sayHello(input) {
    if (typeof input === "undefined" || input === true || input === false) {
        return "Hello, World!";
    }
    return `Hello, ${input}`;
}

// isFive function
function isFive(num) {
    return !(typeof num !== 'number' || num !== 5);
}
