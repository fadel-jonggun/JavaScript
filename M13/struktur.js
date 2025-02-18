//* Struktur data adalah cara menyimpan dan mengatur data agar dapat di gunakan secara efesien. JavaScript memiliki beberapa struktur data bawaan yang umum di gunakan.

//! Object
let person = {
  firstName: "El", //? 'firstName' adalah key. 'El' adalah value.
  lastName: "Kadri",
  age: 30,
  nickName: "ElKadri",
};
console.log(person);
console.log(person.nickName);

person.country = "Indonesia";
console.log(person.country);
console.log(person["age"]);

//! 2. Array
//* Array Method 1 (Literals)
let fruits = ["banana", "apple", "mango"];
console.log(fruits[2]);
console.log(typeof fruits);

//* Array Method 2
let colors = new Array("red", "green", "blue");
console.log(colors[0]);

//* Array Method 3
const pondok = Array.from("abudzar");
console.log(pondok);

//* mengakses Array
let animals = ["cat", "dog", "fish"];
console.log(animals[1]);

//* mengUpdate Array
animals[1] = "dragon";
console.log(animals);

//*mengHapus Array
delete animals[0];
console.log(animals);

animals[0] = "cat";
console.log(animals);

//* menghapus array syntax splice
animals.splice(0, 2);
console.log(animals);

//* menghapus array syntax pop
animals.pop();
console.log(animals);

//* menghapus array syntax shift
animals.shift();
console.log(animals);

//! Map
//* membuat map
let myMap = new Map([
  ["Name", "Bejo"],
  ["Age", 25],
  ["Country", "Indonesia"],
]);
console.log(myMap);

//* menambahkan map
myMap.set("nickName", "BeZiR");
console.log(myMap);

myMap.set(43, "Nomor Sepatu");
console.log(myMap);

//* mengakses map
console.log(myMap.get("Name"));

//* menghapus map
myMap.delete("Age");
console.log(myMap);

//! Set
//* membuat set
let mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet);

//* menambah set
mySet.add(6);
console.log(mySet);

//* menghapus set
mySet.delete(6);
console.log(mySet);

//! Spreed Operator
const arrayOne = [1, 2, 3];
console.log(arrayOne);

//* menyisipkan data/value
const arrayTwo = [...arrayOne, 4, 5];
console.log(arrayTwo);

//* menyisipkan object
const personOne = { firstName: "EL", lastname: "Kadri", age: 25 };
const personTwo = { ...personOne, nickName: "El Kadri" };
console.log(personTwo);

//* menyisipkan array
const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];
const arrThree = [...arrOne, ...arrTwo];
console.log(arrThree);

//! Rest Operator

function myFunc(...params) {
  console.log("Initial", params);
}
myFunc("one", "two", "three");

//* contoh 2
function myFunc2(number, ...params) {
  console.log("tampilkan", number);
  console.log("tampilkan2", params);
}
myFunc2 ('satu', 'dua', 'tiga', 'empat', 'lima')

//* contoh 3 (menghitung)
function lenghtParams(...params){
  console.log('view', params)
  console.log(params.lenght);
}
lenghtParams('satu', 'dua', 'tiga', 'empat', 'lima')

//* contoh 4
const names = [
  'abdul',
  'kamal',
  'fadel',
  'fauzi',
]