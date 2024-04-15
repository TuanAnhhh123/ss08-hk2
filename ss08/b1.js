"use strict";
function parseInput(input) {
    if (typeof input === "number") {
        return "number";
    }
    else if (typeof input === "boolean") {
        return "boolean";
    }
    else if (typeof input === "string") {
        return "string";
    }
    else if (input === null) {
        return "null";
    }
    else if (typeof input === "undefined") {
        return "undefined";
    }
    else {
        return "unknown";
    }
}
console.log(parseInput(100)); // Output: "number"
console.log(parseInput(true)); // Output: "boolean"
console.log(parseInput("Hi")); // Output: "string"
console.log(parseInput(null)); // Output: "null"
console.log(parseInput(undefined)); // Output: "undefined"
