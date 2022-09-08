// mencari kata terpanjang

function LongestWord(sen) {
    var arr = sen.match(/[a-z0-9]+/gi);
    var sorted = arr.sort(function(a, b) {
        return b.length - a.length;
    });
    return sorted[0];
    }
// LongestWord('i love indonesia')
// result: 'indonesia'