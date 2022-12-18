// 1. type conversion
/*
String theke number
*/
// const inputNumber = "7500";
// console.log(inputNumber + 10);

// console.log(inputNumber);
// console.log(Number(inputNumber), inputNumber);
// console.log(typeof Number(inputNumber));
// console.log(typeof inputNumber);

/*
Number theke string
*/
// const birthYear = 2001;
// console.log(typeof birthYear);
// console.log(String(birthYear));
// console.log(typeof String(birthYear));

/*
String theke simple text ke number
(NAN= not a number.)
*/
// const firstName = "Sathi";
// console.log(Number(firstName));
// console.log(typeof Number(firstName));

// const inputNumber = "7500";
// const firstName = "Sathi";
// console.log(Boolean(inputNumber));
// console.log(Boolean(firstName));

// 2. javascript type coercion
// let bookNumber = 5;
// // I have 5 story Book !
// console.log(" I have " + bookNumber + " bookNumber ! ");
// console.log("20" - 5);
// console.log("20" + 5); // + kaj kre na
// console.log("20" * 5);
// console.log("20" / 5);
// console.log("20" - "5");

// console.log(5 + 10 + 5 + "5");
// console.log("100" - "50" + 10);
// console.log("15" - "5" - "4" - "3" + 5);
// console.log("15" - "5" - "4" - "3" + "5");

// 3. javascript truthy and falsy value
// 1. 0
// 2. ""
// 3. null
// 4. undefined
// 5. NAN
// /*
// ai 5 value bade sob gulo truthy value
// */
// console.log(0);
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(143));
// console.log(Boolean("124"));
// console.log(Boolean("sathi"));

// const job = 0;
// if (job) {
//   console.log("I have a Good Job!");
// } else {
//   console.log("Looking for Good Job !");
// }

// let salary = 15000;
// if (salary) {
//   console.log("My salary is set !");
// } else {
//   console.log("My salary isn't set !");
// }

// 4. Conditional Statements
// let earning = 500;
// if (earning > 35000) {
//   console.log("His earning is good !");
// } else if (earning > 20000) {
//   console.log("His earning isn't bad !");
// } else if (earning > 10000) {
//   console.log("Write Something !");
// } else {
//   console.log("His earning isn't good enough !");
// }

// let today = "Friday";
// if (today === "Saturday") {
//   console.log("Today 9pm we have a main live class !");
// } else if (today === "Sunday") {
//   console.log("Today 9pm we have a support class");
// } else if (today === "Monday") {
//   console.log("Today 9pm we have a main live class");
// } else if (today === "Tuesday") {
//   console.log("Today 9pm we have a support class");
// } else if (today === "Wednesday") {
//   console.log("Today 9pm we have a main live class");
// } else if (today === "Thursday") {
//   console.log("Today 9pm we have a support class");
// } else {
//   console.log("today is our holiday !");
// }

// 5. nested Conditional Statements
// const x = 10;
// if (x >= 10) {
//   if (x == 10) {
//     console.log(" x is equels to 10 !");
//   } else {
//     console.log(" x is greter than 10 !");
//   }
// } else {
//   console.log(" x lower then 10 !");
// }

// 6. Switch statement
let day = "Friday";
switch (day) {
  case "Saturday": // Saturday === day (case)
    console.log("Today 9pm we have a main live class !");
    break;
  case "Sunday":
    console.log("Today 9pm we have a support class !");
    break;
  case "Monday":
    console.log("Today 9pm we have a main live class !");
    break;
  case "Tuesday":
    console.log("Today 9pm we have a support class !");
    break;
  case "Wednesday":
    console.log("Today 9pm we have a main live class !");
    break;
  case "Thursday":
    console.log("Today 9pm we have a support class !");
    break;
  default:
    console.log("Today is our holiday !");
}
