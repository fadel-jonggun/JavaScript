let layar = document.getElementById('layar');
let angka = '';
let operator = '';
let hasil = '';

function tambahAngka(angkaTambahan) {
  angka += angkaTambahan;
  layar.value = angka;
}

function tambahOperator(operatorTambahan) {
  if (angka !== '') {
    operator = operatorTambahan;
    layar.value = '';
  }
}

function hitungHasil() {
  if (angka !== '' && operator !== '') {
    hasil = eval(angka + operator + layar.value);
    layar.value = hasil;
    angka = '';
    operator = '';
  }
}

function hapus() {
  layar.value = '';
  angka = '';
  operator = '';
  hasil = '';
}