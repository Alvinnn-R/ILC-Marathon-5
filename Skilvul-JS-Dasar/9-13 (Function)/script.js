// Fungsi

// -- Deklarasi
// -- Parameter dan Argumen
// -- Hoisting
// -- Lokal dan Global

console.log("Mendeklarasikan Fungsi");
console.log("-----------------------");

// Fungsi yang berdiri sendiri
function namaFungsi(){
    // Kode yang akan dijalankan
  }
  
  // Fungsi yang disimpan di dalam variabel
  let namaVariabelFungsi = function(){
    // Kode yang akan dijalankan
  }

// function deklarasi(parameter1, parameter2){
//     console.log(parameter1+parameter2);
// }

// deklarasi(10,3/*(argument)*/);

//------------------------------------------------

// function kalkulator(){
//     console.log(1+4);
// }

// kalkulator();

var kalkulator = function(parameter1, parameter2){
    return parameter1 + parameter2
}

console.log(kalkulator(10,90));


console.log("Javascrip Hoisting");
console.log("-----------------------");

console.log(operasiPerkalian(5, 5)); // Output: 25

function operasiPerkalian(angka1, angka2) {
  return angka1 * angka2;
}

// Secara logika, harusnya kita mendeklarasikan fungsi terlebih dahulu, setelah itu barulah kita menggunakan fungsi tersebut (pada contoh di atas, fungsi operasiPerkalian dipanggil di dalam console.log padahal deklarasinya ditulis setelah console.log). Nah, keistimewaan inilah yang disebut dengan Function Hoisting.

// Tapi, ini tidak berlaku jika fungsi tersebut dideklarasi di dalam sebuah variabel.

// Contoh:

// console.log(operasiPerkalian(5, 5)); // Output: Uncaught ReferenceError: Cannot access 'operasiPerkalian' before initialization

// const operasiPerkalian = function(angka1, angka2) {
//   return angka1 * angka2;
// };


console.log("Local dan Global Scope");
console.log("-----------------------");
//lokal atau global scope
//global scope

 // global scope
//  let manusia = {
//     nama: "Alvin",
//     pekerjaan: "Mahasiswa",
//     umur: 19
// }

const sapaSiManusia = function () {
    // lokal scope
    let manusia = {
        nama: "Alvin",
        pekerjaan: "Mahasiswa",
        umur: 19
    }
    
    console.log(`Hai ${manusia.nama}, apakah kamu seorang ${manusia.pekerjaan} dan sedang berumur ${manusia.umur} tahun.`);
}

sapaSiManusia();
// console.log(sapaSiManusia());
// console.log(manusia);

let carName = 'Kijang';

function displayCarName() {
  let carName = 'Honda';

  return 'Mobil ini bermerk ' + carName;
}

console.log(displayCarName()); //output: ...