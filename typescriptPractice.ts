const firstname: string = "Eshwar";
const age: number = 20;

console.log("\n");
console.log(`My name is typeof ${firstname} and my age is ${age}`);
console.log('type of name :- ', typeof firstname);
console.log("age data type :- ", isNaN(age));
console.log("\n");

const numberArray:Array<number|string> = [1,"2",3,4];
console.log(`Number array :- ${numberArray}`);
console.log('type of numberArray :- ', typeof numberArray);
console.log("type of array element :- ", Array.isArray( numberArray));

console.log("\n");

const numberArray1: Array<Number> = [10,20,30,40];
console.log(`Number array 1 :- ${numberArray1}`);
console.log('type of numberArray 1 :- ', typeof numberArray1);
console.log("\n");

let tuple1: [number, string] = [20, "Eshwar"];
console.clear()
console.log("tuple as it is :- ", tuple1);

console.log("tuple :- ", tuple1.toString().split(","));

