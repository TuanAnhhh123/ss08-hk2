"use strict";
function calculateArea(shape) {
    if (shape.shape === "square") {
        // Tính diện tích hình vuông: cạnh * cạnh
        return shape.sideLength * shape.sideLength;
    }
    else if (shape.shape === "circle") {
        // Tính diện tích hình tròn: π * bán kính * bán kính
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        throw new Error("Unsupported shape");
    }
}
const square = { shape: "square", sideLength: 5 };
const circle = { shape: "circle", radius: 3 };
console.log(calculateArea(square));
console.log(calculateArea(circle));
