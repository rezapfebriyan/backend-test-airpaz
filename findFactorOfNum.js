// create function FindFactor (mencari faktorisasi sebuah angka)

function FindFactor(num) {
    // loop i untuk dibandingkan hasilnya setelah dimod dgn num
    for(let i = 1; i <= num; i++) {
        // 12 % 1 == 0  (tampilkan)
        // 12 % 2 == 0  (tampilkan)
        // 12 % 3 == 0  (tampilkan)
        // 12 % 4 == 0  (tampilkan)
        // 12 % 5 == 0  (=false -> tidak ditampilkan)
        // 12 % 6 == 0  (tampilkan)
        // 12 % 7 == 0  (=false -> tidak ditampilkan)
        // dst ...
        if(num % i == 0) {
            console.log(i)
        }
    }
}
// FindFactor(12)