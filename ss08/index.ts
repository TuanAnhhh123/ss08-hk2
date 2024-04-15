/*
    1.union : kiểu kết hợp

    2.intersection
 */
let a :number|string|undefined=5;
a="hồng";
// tham chiếu(array):
let number:(number|string)[]=[1,2,3,5]
let b:number=6;
// 
type A={
    name:string,
    address:string,
    phone:string
}
type B={
    email:string
    name:string
}
type C =A&B;
let obj:A={
    name:"hoa",
    address:"hà nội",
    phone:"09875666"
}
let obj1:C={
    name:"hồng",
    address:"hcm",
    phone:"5555",
    email:"hong@gmail.com"
}
