interface Square {
    shape: "square";
    sideLength: number;
}

interface Circle {
    shape: "circle";
    radius: number;
}

type Geometry = Square | Circle;

function calculateArea(shape: Geometry): number {
    if (shape.shape === "square") {
        // Tính diện tích hình vuông: cạnh * cạnh
        return shape.sideLength * shape.sideLength;
    } else if (shape.shape === "circle") {
        // Tính diện tích hình tròn: π * bán kính * bán kính
        return Math.PI * shape.radius * shape.radius;
    } else {
        throw new Error("Unsupported shape");
    }
}

const square: Square = { shape: "square", sideLength: 5 };
const circle: Circle = { shape: "circle", radius: 3 };

console.log(calculateArea(square));
console.log(calculateArea(circle)); 
