function buatTeh() {
    console.log('Rebus Air');
    console.log('Masukan Teh ke Dalam Air Panas')
    console.log('Aduk dan Sia di Minum')
}

buatTeh()

function varLocal() {
    let x = 10
    console.log(x)
}
varLocal()

// Parameter
function angka(nilai){
    console.log(nilai)
}

// Nilai Default
function number(no = 0) {
    console.log(no)
}
number(90);

// Alternatif Nilai Default
function lastName (fadel) {
    fadel = fadel || 'Ahmad';

    console.log(fadel)
}
lastName()

// Case 2 Menggunakan '??'
function nickName(bejil) {
    bejil = bejil ?? "beje";

    console.log(bejil)
}
nickName()  

// Pengembalian Nilai (return)
function perkalian(a, b) {
    return a * b;
}
let hasilPerkalian = perkalian(2, 3);
console.log(hasilPerkalian);

// Menamakan Fungsi
function cetak(){
    console.log('cetak')
}
cetak();