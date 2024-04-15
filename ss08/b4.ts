function squareInput(input: number | number[]): number | number[] {
    if (typeof input === "number") {
        return input * input;
    } else if (Array.isArray(input)) {
        return input.map(num => num * num);
    } else {
        throw new Error("Invalid input type");
    }
}

console.log(squareInput(5)); 
console.log(squareInput([1, 2, 3, 4])); 
