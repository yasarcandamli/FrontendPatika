// DEĞİŞKENLER - let const var

// let personName = "Yaşar Can";
// let greetingTemplate = `Hello ${personName}!`;
// let concatnation = "Hello " + personName + "!"
// personName = "Muhammed"; // let'te yeni değer atayabiliyoruz!

// const personName = "Yaşar Can";
// personName = "Muhammed"; // const'ta yeni değer atayamıyoruz!

// var personName = "Yaşar Can";
// personName = "Muhammed"; // var'da yeni değer atayabiliyoruz!

// console.log(personName);

// ------------------------------------------------------------------

// SCOPE
// const ve let block scope'da etkindir.
// var personName2 = "Mehmet"
// function main() {
//     // var personName2 = "Ahmet"
//     {
//         var personName2 = "Hakan";
//         console.log(personName2); //Hakan
//         {
//         }
//     }
//     console.log(personName2); //Hakan
// }
// main();
// console.log(personName2); //Mehmet

// IIFE (modülün ilkel hali)
// const $ = (function jQuery() {
//     var size = 800;
//     function ajax() {
//         console.log("ajax2222");
//     }

//     return {
//         size: size,
//         ajax: ajax
//     }
// })()

// $.ajax();

// ------------------------------------------------------------------

// DATA TYPES
// string, number, boolean, undefined => PRIMITIVE TYPES
// object, function => REFERENCE TYPES - NON PRIMITIVE

// let personName = "Yaşar Can";
// let personAge = 26;
// let isOverAge = true;

// personName = "Muhammed";

// console.log(personName);

// const person = {
//     name: "Yaşar Can",
//     age: 26,
//     isOverAge: true,
//     notes: ["note1", "note2"],
//     notesObj: {
//         0: "note1",
//         1: "note2",
//         length: 2
//     }
// }; // adresi tutar

// const person2 = person; // aynı adrese eşitler

// person2.name = "Emin"; // aynı adresin özelliğini değiştirir


// console.log(Array.isArray(person.notes));
// console.log(Array.isArray(person.notesObj));

// ------------------------------------------------------------------

// FUNCTION DEFINING

// function f1(arg1, arg2) {
//     console.log('f1', arg1, arg2);
// }

// const f2 = function (arg1, arg2) {
//     console.log('f2', arg1, arg2);
// }

// const f3 = (arg1, arg2) => {
//     console.log('f3', arg1, arg2);
// }

// f1(1, 2);
// f2(3, 4);
// f3(5, 6);

// ASYNC
// console.log("ilk sıradaki işlem");
// setTimeout(() => {
//     console.log("ikinci sıradaki işlem");
// }, 3000)
// console.log("üçüncü sıradaki işlem");

// const wait = (ms) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, ms);
//     })
// }

// async function main() {
//     console.log("ilk sıradaki işlem");
//     await wait(2000)
//     console.log("ikinci sıradaki işlem");
//     await wait(2000)
//     console.log("üçüncü sıradaki işlem");
// }

// main();

// ------------------------------------------------------------------

// KOŞULLU İFADELER

// const person = {
//     name: "Johnn Doe",
//     age: 15,
//     location: "USA",
// }

// const isOverAge = (person) => person.age > 18;

// if (isOverAge(person)) {
//     console.log("Hello World");
// }

// DÖNGÜLER

// const wait = (ms) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, ms);
//     })
// }

// async function main() {
//     for (let i = 0; i < 10; i++) {
//         console.log("Yaşar Can", i);
//         await wait(500);
//     }

//     let i = 0;
//     while (i < 10) {
//         console.log("Yaşar Can");
//         i++;
//         await wait(2000);
//     }
// }
// main();

// OPERATÖRLER
// assign operation

// const a = 5;
// const b = 10;
// let j = 0;
// let i = 0;
// let k = (i = a + b);
// console.log(k);
// console.log(i);

// less than
// greater than
// less than or equal to
// greater than or equal to
// increase by 1
// decrease by 1
// sum +
// concat +
// difference -

// ------------------------------------------------------------------
// DERS 7

// weak comparison ==
// strong comparison ===
// and operator &&
// or operator ||
// ... spread ***
// ! not operator

//const clone = structuredClone(original);

// ------------------------------------------------------------------
// DERS 8

// ... rest ***
// class ***