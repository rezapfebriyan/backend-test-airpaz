let s = '';
let pola = 8; // define jumlah baris

// loop untuk bikin baris baru
for (let i = 1; i <= pola; i++) {
    // loop untuk nampilin bintangnya (mulai dari 8 bintang sesuai yg di define)
    for (let j = pola; j >= i; j--) {
        s += '* '
    }
    s += '\n' // untuk bikin baris baru
}
console.log(s)