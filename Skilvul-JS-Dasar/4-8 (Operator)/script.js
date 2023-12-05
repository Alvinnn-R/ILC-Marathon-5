// Operator Aritmatika

// Operator	Deskripsi
// +	Penjumlahan
// -	Pengurangan
// *	Perkalian
// /	Pembagian
// **	Eksponen (pangkat)
// %	Modulus (menghasilkan sisa hasil pembagian)
// ++	Increment (menambah 1)
// --	Decrement (mengurangi 1)

console.log("Operator Aritmatika");

var operatorAritmatika = 5 ** 2;
// operatorAritmatika--;
console.log(operatorAritmatika);


console.log(`-----------------------------`);
// Operator Assigment
// Assignment operator digunakan untuk memberikan nilai pada variabel.

// Assignment	Operator	Contoh Penggunaan	Setara Dengan
// =		x=y	x=y             Assignment =
// =	+	x += y	x = x + y   Addition Assignment +=
// =	-	x -= y	x = x - y   Subtraction Assignment -=
// =	*	x *= y	x = x * y   Multiplication Assignment *=
// =	/	x /= y	x = x / y   Division Assignment /=
// =	%	x %= y	x = x % y   Modulus Assignment %=
// =	**	x **= y	x = x ** y  Exponent Assignment **=

console.log("Operator Assigment");

var operatorAssigment = 10;
operatorAssigment += 2;
// ((aritmatika)= / += / -=)


console.log(operatorAssigment);

console.log(`-----------------------------`);
// Operator String dan Number

// Ada 2 macam string operator, yaitu:
// +
// +=

console.log("Operator String dan Number");

var namaDepan = "Alvin "
var namaBelakang = "Rama"

console.log(namaDepan + namaBelakang)
console.log(`_____________________`);

var text = "Saya ada "
text += 5;


console.log(text)

console.log(`-----------------------------`);
//Operator Perbandingan

// Operator perbandingan digunakan untuk membandingkan dua data atau nilai.

// Operator	Deskripsi
// ==	sama dengan (cek nilai)                     Operator == (Loose Equality)
// ===	sama dengan (cek nilai dan tipe data)       Operator === (Strict Equality)
// !=	tidak sama dengan (cek nilai)
// !==	tidak sama dengan (cek nilai dan tipe data)
// >	lebih dari
// <	kurang dari
// >=	lebih dari atau sama dengan
// <=	kurang dari atau sama dengan
// ? :	ternary operator

// variabel = (kondisi true) ? nilai1 : nilai2;
// Artinya apabila kondisi true, maka variabel akan diberi nilai1
// Apabila kondisi false, maka variabel akan diberi nilai2

console.log("Operator Perbandingan");
// == === != !=== <= >=

console.log(2 == 2)

console.log(`-----------------------------`);
//Operator Logika

// Operator logika digunakan untuk menentukan logika antara dua kondisi atau nilai.

// Operator	Deskripsi
// &&	AND (Dan)
// ||	OR (Atau)
// !	NOT (Bukan)

console.log("Operator Logika");
// && || !

// Operator	Kondisi 1	Kondisi 2	Hasil
// &&	true	true	true
// &&	true	false	false
// &&	false	true	false
// &&	false	false	false
// ||	true	true	true
// ||	true	false	true
// ||	false	true	true
// ||	false	false	false
// !	true	-	false
// !	false	-	true

let bilangan1 = 6;
let bilangan2 = 4;

console.log(bilangan1 === 6 && bilangan2 === 4); // Output: true
console.log(bilangan1 === 6 && bilangan2 < 4); // Output: false
console.log(bilangan1 < 6 && bilangan2 === 4); // Output: false
console.log(bilangan1 < 6 && bilangan2 < 4); // Output: false

console.log(bilangan1 === 6 || bilangan2 === 4); // Output: true
console.log(bilangan1 === 6 || bilangan2 < 4); // Output: true
console.log(bilangan1 < 6 || bilangan2 === 4); // Output: true
console.log(bilangan1 < 6 || bilangan2 < 4); // Output: false

console.log(!true); // Output: false
console.log(!false); // Output: true

console.log(`____________________________`);

var sudahMenikah = true
var sudahPunyaAnak = true

console.log(!sudahMenikah || !sudahPunyaAnak)
