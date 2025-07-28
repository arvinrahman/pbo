// // function sapa(nama) {
// //     console.log("Halo, " + nama + "!");
// // }

// // sapa("Joy"); 
// // sapa("Seulgi");

// function tambah(a, b) {
//     return a * b;
// }

// let hasil = tambah(6, 3);
// console.log("Hasil: " + hasil); // Output: Hasil

// let car = {
//     name: "Fiat",
//     model: 500,
//     weight: "850kg",
//     color: "White",

//     start: function() {
//         console.log("Mobil dinyalakan.");
//     },
//     drive: function() {
//         console.log("Mobil berjalan.");
//     },
//     brake: function() {
//         console.log("Mobil mengerem.");
//     },
//     stop: function() {
//         console.log("Mobil berhenti.");
//     }
// };

// console.log(car.name);
// console.log(car.color);

// car.start();
// car.drive();

let sepeda = {
    name: "polygon",
    warna: "merah",
    gear: 21,

    start: function() {
        console.log("sepedah mulai dikayuh");
    },
    drive: function() {
        console.log("sepedah berjalan");
    },
    brake: function() {
        console.log("sepedda mengerem.");
    },
    stop: function() {
        console.log("sepeda berhenti.");
    }
};
console.log(sepeda.name);
console.log(sepeda.warna);
console.log("Jumlah gear: " + sepeda.gear);
sepeda.start();
sepeda.drive();
sepeda.brake();
sepeda.stop();
