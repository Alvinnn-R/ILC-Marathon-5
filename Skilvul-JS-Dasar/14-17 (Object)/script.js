// JavaScript Object 

// - Deklarasi Object
// -- object literal
// -- new object()
// - Menambahkan properti baru kedalam object
// - Menghapus property di dalam object 
// - Mengakses property di dalam object
// - Object method / fungsi

//  var Object {
//   Properti/ey: "Value"
//  } 

console.log('Deklarasi Object');

// -- object literal
var orang = {
  nama: "Alvin",
  umur: 19,
  pekerjaan: 'Full-Stack Dev'
}

console.log(orang);

console.log('-------------------');
// -- new object()

var kamu = new Object()
kamu.nama = 'Rudi'
kamu.umur = 22
kamu.pekerjaan = 'Dosen'

console.log(kamu);


console.log('-------------------');
// - Menambahkan properti baru kedalam object
// Dot Notation
kamu.hobi = 'Ngevlog'
// Bracket Notation
kamu['status'] = 'Jomblo' 

// Apakah kalian masih ingat di beberapa topik sebelumnya, kita sempat membahas tentang penggunaan let dan const di mana variabel yang dideklarasikan dengan menggunakan const tidak bisa diubah datanya terkecuali variabel itu adalah tipe objek atau array.

// Jadi untuk objek JavaScript, pengubahan nilai properti seperti berikut tidak akan memunculkan error walaupun variabel objek-nya dideklarasikan dengan const:

const objek = { namaProperti1: nilaiProperti1 };

// mengubah data properti
objek.namaProperti1 = nilaiProperti2; // OK

// menambah properti baru ke objek
objek.namaProperti3 = nilaiProperti3; // OK
📝 Catatan:

// Variabel tipe objek dan array yang dideklarasi dengan menggunakan const bisa diubah atau ditambah nilai properti/element-nya. Tetapi variabel-nya sendiri tetap tidak bisa diubah nilainya.


// - Menghapus property di dalam object 
delete kamu.hobi
delete kamu['hobi']

console.log('-------------------');
// - Mengakses property di dalam object

// Dot Notation
console.log(kamu.nama);
// Bracket Notation
console.log(kamu['umur']);
console.log(kamu['pekerjaan']);

// Mengakses properti objek secara dynamic (dinamis).
// Yang dimaksud dengan mengakses properti objek secara dinamis adalah ketika kita menggunakan nama dari suatu variabel sebagai nama properti saat mengakses properti objek tersebut.
const smartphone = {
  kamera: "10MP",
  memori: "128GB"
};

const fitur = "kamera";

// Apabila kita ingin mengakses nilai "10MP" dari objek smartphone dengan menggunakan variabel fitur. Cara yang benar adalah:

console.log(smartphone[fitur]); // Output: 10MP

// karena variabel fitur mempunya nilai kamera
// maka, baris di atas sama hasilnya dengan
console.log(smartphone["kamera"]); // Output: 10MP
console.log(smartphone.kamera); // Output: 10MP

// Kita tidak bisa mengakses properti objek secara dinamis dengan menggunakan dot notation. Jadi:

console.log(smartphone.fitur); // Output: undefined
// Contoh di atas akan menghasilkan output undefined dikarenakan objek smartphone tidak mempunyai properti dengan nama fitur.


console.log('-----------------------------------------');
// - Object method / fungsi
var saya = {
  nama: "Alvin",
  umur: 19,
  pekerjaan: 'Full-Stack Dev',
  tanggalLahir: function(){
    console.log('21 Maret 2000');
  }
}

console.log(saya.tanggalLahir());
console.log(saya);

// Sebenarnya tipe data dari nilai sebuah properti itu tidak terbatas kepada string dan number saja. Kita juga bisa memberi nilai berupa sebuah fungsi.

let kalkulator = {
  namaOperasi: 'penjumlahan',
  jumlah: function(angka1, angka2) {
    return angka1 + angka2;
  }
};

console.log(kalkulator.jumlah(2, 3)); // Output: 5

// Karena method merupakan properti dari suatu objek, maka untuk menambahkan method baru ke dalam objek caranya sama seperti menambahkan properti baru ke dalam objek.

// Tapi misalkan sekarang kita ingin menambahkan properti baru makananFavorit: "Pizza" ke objek user. Tentu kita juga ingin mengubah kalimat perkenalannya menjadi "Nama saya Stefan. Saya berumur 21 tahun. Saya suka Pizza". Tapi karena kita membuat kalimatnya secara manual pada fungsiA, fungsiB, dan fungsiC, kita harus mengubah secara manual juga di ketiga fungsi tersebut.

// "Repot banget dong kalau begitu"

// Nah, dengan membuat sebuah method di objek user yang mengembalikan kalimat perkenalan tadi, kita cukup memanggil method tersebut di tempat kita ingin menggunakan kalimat tersebut saja.

// buat method perkenalanDiri yang mengembalikan kalimat perkenalan
const user = {
  nama: "Stefan",
  umur: 21,
  makananFavorit: "Pizza",
  perkenalanDiri: () => { 
     return `Nama saya ${this.nama}. Saya berumur ${this.umur}. Saya suka ${this.makananFavorit}`;
  }
};

// panggil method tersebut di dalam fungsi yang kita inginkan
function fungsiA() {
 // isi dari fungsiA
 console.log(user.perkenalanDiri());
}

function fungsiB() {
 // isi dari fungsiB
 console.log(user.perkenalanDiri());
}

function fungsiC() {
 // isi dari fungsiC
 console.log(user.perkenalanDiri());
}