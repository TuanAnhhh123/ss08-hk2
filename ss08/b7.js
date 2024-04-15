"use strict";
function checkDataType(input) {
    if (typeof input === "number") {
        console.log("Number");
    }
    else if (Array.isArray(input)) {
        console.log("Array");
    }
    else if (typeof input === "object" && input !== null) {
        console.log("Object");
    }
    else {
        console.log("Unknown");
    }
}
checkDataType(19); // Output: Number
checkDataType([1, 2, 3]); // Output: Array
checkDataType({ name: "TA", age: 19 }); // Output: Object
checkDataType("Hi"); // Output: Unknown
