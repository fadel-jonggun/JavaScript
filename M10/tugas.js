// Nomor 1
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

// Nomor 2
let a = 10;

do {
    console.log(a);
    a--;
    } while (a >= 1);

// Nomor 3
for (let u = 2 ; u <= 20 ; u+=2) {
    console.log(u);
}

// Nomor 4
for (let o = 1; o <= 10; o++) {
    if (o === 5) continue
    console.log(o);
}

// Nomor 5
for (let e = 1; e <= 10; e++) {
    console.log(e);
    
    if (e === 6) {
        console.log("Berhenti karna angka 6 muncul");
        break;
    }
}