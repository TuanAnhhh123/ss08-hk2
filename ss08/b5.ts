/*
    Union Types:
            type NumberOrString = number | string;

            function printData(data: NumberOrString): void {
                console.log(data);
            }

            printData(10); // Output: 10
            printData("Hello"); // Output: Hello

*/
/*
    Intersection Types:
        interface Person {
            name: string;
        }

        interface Employee {
            employeeId: number;
        }

        type EmployeeDetails = Person & Employee;

        function printEmployeeDetails(employee: EmployeeDetails): void {
            console.log(employee.name);
            console.log(employee.employeeId);
        }

        const employee: EmployeeDetails = {
            name: "Hồng",
            employeeId: 12345
        };

        printEmployeeDetails(employee); 

*/