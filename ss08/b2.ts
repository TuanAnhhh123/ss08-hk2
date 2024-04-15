interface Person {
    name: string;
    age: number;
    address: object;
}

function validatePerson(obj: any): obj is Person {
    return (
        typeof obj === "object" &&
        typeof obj.name === "string" &&
        typeof obj.age === "number" &&
        typeof obj.address === "object"
    );
}

const person1 = { name: "Minh", age: 18, address: { city: "Bắc Ninh", country: "Bắc Ninh" } };
const person2 = { name: "Hoa", age: 19, address: { city: "Hải Dương", country: "Hải Dương" } };
const person3 = { name: "Huệ", age: "20", address: { city: "HCM", country: "HCM" } };

console.log(validatePerson(person1)); // Output: true
console.log(validatePerson(person2)); // Output: true
console.log(validatePerson(person3)); // Output: false
