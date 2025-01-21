// Nomor1
let nilaiAndi = 91;

if (nilaiAndi >= 91) {
  console.log("A");
} else if (nilaiAndi >= 81) {
  console.log("B");
} else if (nilaiAndi >= 71) {
  console.log("C");
} else {
  console.log("D");
}

let grade =
  nilaiAndi >= 91 ? "A" : nilaiAndi >= 81 ? "B" : nilaiAndi >= 71 ? "C" : "D";
console.log(grade);

// Nomor2
let buah = 'Salak & Nangka';


switch (buah) {
  case "Cherry":
    console.log("Cherry");
    break;
  case "Nangka":
    console.log("Nangka");
    break;
  case "Salak":
    console.log("Salak");
    break;
  case "Salak & Nangka":
    console.log("Salak & Nangka");
    break;
  default:
    console.log("Nuruddin tidak membeli apapun");
}

// Nomor3
let saklar = undefined;
if (saklar) {
    console.log('hidup');
} else {
    console.log('mati');
}