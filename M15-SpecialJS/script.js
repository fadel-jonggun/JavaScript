"use strict";

//! Hoisting
//* 1.1. Hoisting Variable
console.log(nama);

var nama = "Faqih";
console.log(nama);

//* Hoisting Function
sayHelloDek();
function sayHelloDek() {
  console.log("Halo Deklarasi");
}

let sayHelloExpr = function () {
  console.log("Halo Ekspresi");
};

sayHelloExpr();

//! 2. Strict Mode
let faqih = 10;
console.log(faqih);

//! 3. Dynamic Typing
let data = "hello Faqih";
console.log(typeof data)

data = 20;
console.log(typeof data);