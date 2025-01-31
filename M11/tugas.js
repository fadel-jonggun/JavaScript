// Tugas 1
function hello() {
  console.log("Hello, World!");
}
hello();

// Tugas 2
function pesan() {
  let message = "ini adalah pesan lokal";
  console.log(message);
}
pesan();

// Tugas 3
let userName = "guest";

function updateUserName() {
  userName = "admin";
  console.log(userName);
}
updateUserName();

// Tugas 4
("GAADA");

// Tugas 5
function greet(name = "user") {
  console.log(`Hello,${name}`);
}
greet();

// Tugas 6
function setUser(Guest) {
  Guest = Guest || "Fadel";
  console.log(`Welcome, ${Guest}`);
}
setUser();

// Tugas 7
function add(a, b) {
  return a + b;
}
console.log(add(10, 7));
