function tipedata() {
    var data = "2.9";
    console.log(typeof(data));

    if (data === 2.9) {
        return 'sukses '
    } else {
        return 'gagal'
    }
}

console.log(tipedata());

//== tidak memperhatikan tipe data, hanya nilai
//=== memperhatikan tipe data dan nilai