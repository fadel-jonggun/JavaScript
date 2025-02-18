// // Deklarasi Function
// function sayHello(){
//     console.log("Abudzar sekarang udah SMA")
// }

// sayHello();

// // Exession Function
// let pondok = function(){
//     console.log("Rumpin di Bogor");
//     }
// pondok();

// // penjabaran function agar lebih mudah
// function pondok2(){
//     console.log("Perumahan Suradita");
// }
// let pondok3 = pondok2;
// pondok3();

// // Callback Function
// let isBoss = confirm("Apakah kamu adalah Bos");
// alert(isBoss);

// function pertanyaan(penanya, ya, tidak){
// if (confirm(penanya)){
//     ya();
//     }else{
//         tidak();
//         }
// }
// function showYa(){
//     alert("kamu adalah santri")
// }
// function showTidak(){
//     alert("Kamu bukan santri");
//     }

// pertanyaan("apakah kamu santri?", showYa, showTidak);

// Expression Funtion vs Decralation Function
// 1 Perbedaan Sintak
// Deklarasi Sintak
// function nilai(){
//     return 100;
//     }
// // Expression Sintak
// let nilai2 = function(){
//     return 100;
//     }

//     // 2 JavaScript Engine
// // Deklarasi Sintak
// function Holla(){
//     alert("Hello World");
//     }
// Holla()
//     // Expression Sintak
//     let Holla2 = function(){
//         alert   ("Hello World2");
//         }
//         Holla2()

// Deklarasi Function
function deklarasi(params) {
  console.log("deklarasi");
}

//  Ekspresi Function
let ekspresi = function (params) {
  console.log("ekspresi");
};

// Arrow Function
let arrow = (params) => {
  console.log("arrow");
};

// Eksekusi Pemanggilan
deklarasi();
ekspresi();
arrow();

// Contoh Arrow Function
let sum = (a, b) => {
  return a + b;
};

console.log(sum(1, 2));

// Refactor
let total = (c, d) => c + d;
console.log(total(5, 6));

// Hanya 1 Param
let tampil = (username) => `Hello , ${username}`;
console.log(tampil("Fadel"));

// Fungsi arrow multi baris
let perkalian = (e, f) => {
    return e * f + 1;
}
console.log(perkalian(1, 6))

// Fungsi Arrow Tanpa Param
let sayHello = () => "Hello";
console.log(sayHello());

// Fungsi Arrow dengan 1 Param
let sayHello2 = (nama) => `Hello , ${nama}`;
console.log(sayHello2("Fadel"));