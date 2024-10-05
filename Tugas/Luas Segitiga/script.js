function hitungLuas() {
    let alas = document.getElementById("alas").value;
    let tinggi = document.getElementById("tinggi").value;
    let luas = 0.5 * alas * tinggi;

    document.getElementById("hasil").innerHTML = "Luas Segitiga: " + luas + " cm²";
}
