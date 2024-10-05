function hitungVolume() {
    let diameter = document.getElementById("diameter").value;
    let jariJari = diameter / 2;

    // Rumus volume bola: V = 4/3 * π * r³
    let volume = (4 / 3) * Math.PI * Math.pow(jariJari, 3);

    // Menampilkan hasil
    document.getElementById("hasil").innerHTML = "Volume Bola: " + volume.toFixed(2) + " cm³";
}
