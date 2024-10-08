// Array untuk menyimpan pengecualian Cakung2
const nba2Exceptions = ["C7A", "C8A", "C9A", "C10A", "C7B", "C8B", "C9B", "C10B", 
                        "D6A", "D7A", "D8A", "D9A", "D6B", "D7B", "D8B", "D9B", 
                        "E2A", "E3A", "E4A", "E2B", "E3B", "E4B", 
                        "G1A", "G2A", "G1B", "G2B", "G3B", "G4B", "G5B"];

function generateNBA() {
    var input = document.getElementById("input").value;
    var lines = input.split(/\r?\n|\r/);
    var output = "";
    lines.forEach(function(line) {
        var parts = line.split(".");
        if (parts.length === 4) {
            var dcName = getDcName(parts[1]);
            if (dcName === null) {
                output += "Format input tidak valid. Pastikan formatnya adalah X.Y.Z.W\n";
                return;
            }

            var rack = getRack(parts[2]);
            if (rack === null) {
                output += "Format input tidak valid. Pastikan formatnya adalah X.Y.Z.W\n";
                return;
            }

            // Cek jika dcName bukan E atau F dan rack lebih besar dari 3
            if (["E", "F"].indexOf(dcName) === -1 && parseInt(parts[2]) > 3) {
                output += `Rack ${rack} tidak valid untuk DC ${dcName}. Harus antara 1 hingga 3.\n`;
                return;
            }

            // Memodifikasi bagian W sesuai dengan panjangnya
            var wParts = "";
            if (parts[3].length === 3) {
                wParts = parts[3].substring(0, 2) + "." + parts[3].substring(2);
            } else if (parts[3].length === 2) {
                wParts = parts[3][0] + "." + parts[3][1];
            } else if (parts[3].length === 1) {
                wParts = "0." + parts[3];
            }

            // Cek jika dcName bukan E atau F dan wParts lebih besar dari 106
            if (["E", "F"].indexOf(dcName) === -1 && parseInt(parts[3]) > 106) {
                output += `W bagian ${parts[3]} tidak valid untuk DC ${dcName}. Harus kurang dari atau sama dengan 106.\n`;
                return;
            }

            // Menentukan prefix NBA
            var nbaPrefix = nba2Exceptions.includes(dcName) ? "NBA2" : "NBA";

            var nbaCode = nbaPrefix + "." + dcName + "." + rack + "." + wParts + "\n";
            output += nbaCode;
        } else {
            output += "Format input tidak valid. Pastikan formatnya adalah X.Y.Z.W\n";
        }
    });
    document.getElementById("output").textContent = output;
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

function resetForm() {
    // Mengatur ulang textarea
    document.getElementById("input").value = "";
    
    // Mengatur ulang elemen output
    document.getElementById("output").textContent = "";
}

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById('input');
    input.placeholder = "Contoh:\n10.13.1.11\n10.13.2.22";
});
