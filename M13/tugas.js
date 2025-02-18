//! Soal 1
let penduduk = {
    namaDepan: 'Slamet',
    namaBelakang: 'Santoso',
    umur: '45',
    pekerjaan: 'Petani',
};
penduduk.kota = 'yogyakarta';
const {namaBelakang} = penduduk
console.log(namaBelakang)
console.log(penduduk.kota)
console.log(penduduk['pekerjaan'])

//! Soal 2
let buahFavorit = [
    'Mangga',
    'Jeruk',
    'Apel',
];
buahFavorit.push("Pisang")
console.log(buahFavorit)
buahFavorit[1] = 'Anggur'
buahFavorit.pop()
console.log(buahFavorit)

//! Soal 3
let makanEnak = new Map([
    ['Nasi Goreng', 15000],
    ['Mie Ayam', 13000],
    ['Es Teh Manis', 5000]
])
makanEnak.set('Ayam Bakar', 20000)
console.log(makanEnak.get('Mie Ayam'))
makanEnak.delete('Es Teh Manis')
console.log(makanEnak)

//! Soal 4
let koleksiBuku = new Set([
    ['Laskar Pelangi',
      'Bumi',
      'Hujan'
    ]
])
koleksiBuku.add('Filosofi Teras')
koleksiBuku.add('Hujan')
console.log(koleksiBuku)
koleksiBuku.delete('Hujan')
console.log(koleksiBuku)

//! Soal 5
let pakaianPria = ['Kemeja', 'Celana Jeans', 'Jacket']
let pakainaWanita = ['Blouse', 'Rok', 'Cardigan']
pakaianToko = [...pakaianPria, ...pakainaWanita]
console.log(pakaianToko)
pakaianToko = [...pakaianToko, 'Kaos']
console.log(pakaianToko);

//! Soal 6
function pesanMakanan(...makanan) {
    return makanan;
}
const daftarPesanan = pesanMakanan("Nasi Goreng", "Sate Ayam", "Es Teh Manis");
console.log(daftarPesanan);