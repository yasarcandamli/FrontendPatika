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
// null, object, function => REFERENCE TYPES - NON PRIMITIVE

// let personName = "Yaşar Can";
// let personAge = 26;
// let isOverAge = true;

// personName = "Muhammed";

// console.log(personName);

const person = {
    name: "Yaşar Can",
    age: 26,
    isOverAge: true,
}; // adresi tutar

const person2 = person; // aynı adrese eşitler

person2.name = "Emin"; // aynı adresin özelliğini değiştirir


console.log(person.name); // aynı adresin özelliği değişmişti


