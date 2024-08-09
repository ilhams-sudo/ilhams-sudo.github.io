function generateNBA() {
    var input = document.getElementById("input").value;
    var lines = input.split(/\r?\n|\r/); // Membagi input berdasarkan baris baru atau baris
    var output = "";
    lines.forEach(function(line) {
        var parts = line.split(".");
        if (parts.length === 4) {
            var category = "";
            if (parts[0] === "10") {
                if (parts[1] === "13") {
                    category = "B1A";
                } else if (parts[1] === "14") {
                    category = "B2A";
                } else if (parts[1] === "15") {
                    category = "B3A";
                } else if (parts[1] === "19") {
                    category = "B1B";
                } else if (parts[1] === "20") {
                    category = "B2B";
                } else if (parts[1] === "21") {
                    category = "B3B";
                } else {
                    output += "Format input tidak valid. Pastikan formatnya adalah X.Y.Z.W\n";
                    return;
                }
            } else {
                output += "Format input tidak valid. Pastikan formatnya adalah X.Y.Z.W\n";
                return;
            }
            var section = "";
            if (parts[2] === "1") {
                section = "A";
            } else if (parts[2] === "2") {
                section = "B";
            } else if (parts[2] === "3") {
                section = "C";
            } else {
                output += "Format input tidak valid. Pastikan formatnya adalah X.Y.Z.W\n";
                return;
            }

            // Memodifikasi bagian W sesuai dengan panjangnya
            var wParts = "";
            if (parts[3].length === 3) {
                wParts = parts[3].substring(0, 2) + "." + parts[3].substring(2); // Jika W adalah 3 digit
            } else if (parts[3].length === 2) {
                wParts = parts[3][0] + "." + parts[3][1]; // Jika W adalah 2 digit
            } else if (parts[3].length === 1) {
                wParts = "0." + parts[3]; // Jika W adalah 1 digit, tambahkan "0." di depannya
            }

            var nbaCode = "NBA." + category + "." + section + "." + wParts + "\n";
            output += nbaCode;
        } else {
            output += "Format input tidak valid. Pastikan formatnya adalah X.Y.Z.W\n";
        }
    });
    document.getElementById("output").textContent = output; // Gunakan textContent untuk menghindari pemformatan HTML
}

function copyOutput() {
    // Mendapatkan elemen output
    var outputElement = document.getElementById('output');
    
    // Mengambil teks dari elemen output
    var text = outputElement.textContent || outputElement.innerText;

    // Membuat elemen sementara untuk menampung teks
    var tempElement = document.createElement('textarea');
    tempElement.value = text;
    document.body.appendChild(tempElement);
    
    // Memilih dan menyalin teks dari elemen sementara
    tempElement.select();
    try {
        var successful = document.execCommand('copy');
        if (successful) {
            alert('Salinan berhasil!');
        } else {
            alert('Salinan gagal!');
        }
    } catch (err) {
        alert('Terjadi kesalahan saat menyalin.');
    }

    // Menghapus elemen sementara dari DOM
    document.body.removeChild(tempElement);
}

