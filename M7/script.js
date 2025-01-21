//  IF ELSE NEW

let saklar = 0;
if (saklar) {
    console.log('hidup');
} else {
    console.log('mati');
}

// OPERATOR KONDISIONAL

saklar ? console.log('hidup') : console.log('mati');
let number2 = 10;
number2 >= 10
? console.log('angkanya 10 atau lebih')
: console.log('angkanya kurang dari 10')

// Multiple Ternary
let number3 = 9;
number3 >= 90 ? console.log('A') :
    number3 >= 80 ? console.log('B') :
        number3 >= 70 ? console.log('C') :
            number3 >= 60 ? console.log('D') :
                console.log('E');

//  PENGGUNAAN ? NON TRADISIONAL
let isLogin = true;

// contoh 1
isLoginn ? console.log('Selamat Datang') : console.log('anda belum login')

// contoh 2
let pesan = isLogin ? 'Selamat Datang' : 'anda belum login';
console.log(pesan);

// SWITCH STATEMENT
let number4 = 9;
switch (number4) {
    case number4 >= 90 :
        console.log('A');
        break;
     case number4 >= 80 :
        console.log('B');
         break;
         default :
        console.log('E');
}


