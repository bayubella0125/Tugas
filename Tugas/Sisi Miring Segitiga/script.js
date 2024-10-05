function hitungSisiMiring() {
    let alas = document.getElementById("alas").value;
    let tinggi = document.getElementById("tinggi").value;

    // Menggunakan rumus Pythagoras: c = √(a² + b²)
    let sisiMiring = Math.sqrt(Math.pow(alas, 2) + Math.pow(tinggi, 2));

    // Menampilkan hasil
    document.getElementById("hasil").innerHTML = "Sisi Miring: " + sisiMiring.toFixed(2) + " cm";
}
