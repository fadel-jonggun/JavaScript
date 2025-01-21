// Operator AND
let a = true;
let b = false;

console.log(a && b);
if (a && b) {
    console.log("Kedua Variable Bernilai True");
    } else {
    console.log("Kedua Variable Tidak Bernilai True");
}

// Operator OR
let d = true;
let e = false;
let f = true;
let g = false;

console.log(d || e);
console.log(d || f);
console.log(e || g);

if (d || e) {
    console.log("Salah Satu Variable Bernilai True");
    } else {
        console.log("Tidak Ada Variable Bernilai True");
        }

//  Operator NOT
let h = true;
let i = false;
let j = true;
let isRaining = true;

console.log(h)
console.log(!h)
console.log(i)

if (isRaining) {
    console.log("Hari ini Hujan")
} else {
    console.log("Tidak Hujan")
}