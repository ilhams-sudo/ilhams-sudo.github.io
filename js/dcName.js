// Objek yang memetakan kode DC ke nama DC yang sesuai
const dcMap = {
    "1": "A1A", "2": "A2A", "3": "A3A", "4": "A4A", "5": "A5A", "6": "A6A",
    "7": "A1B", "8": "A2B", "9": "A3B", "10": "A4B", "11": "A5B", "12": "A6B",
    "13": "B1A", "14": "B2A", "15": "B3A", "16": "B4A", "17": "B5A", "18": "B6A",
    "19": "B1B", "20": "B2B", "21": "B3B", "22": "B4B", "23": "B5B", "24": "B6B",
    "25": "C1A", "26": "C2A", "27": "C3A", "28": "C4A", "29": "C5A", "30": "C6A",
    "31": "C1B", "32": "C2B", "33": "C3B", "34": "C4B", "35": "C5B", "36": "C6B",
    "37": "D1A", "38": "D2A", "39": "D3A", "40": "D4A", "41": "D5A",
    "42": "D1B", "43": "D2B", "44": "D3B", "45": "D4B", "46": "D5B",
    "47": "C7A", "48": "C8A", "49": "C9A", "50": "C10A",
    "51": "C7B", "52": "C8B", "53": "C9B", "54": "C10B",
    "55": "D6A", "56": "D7A", "57": "D8A", "58": "D9A",
    "59": "D6B", "60": "D7B", "61": "D8B", "62": "D9B",
    "63": "E2A", "64": "E3A", "65": "E4A",
    "66": "E2B", "67": "E3B", "68": "E4B",
    "80": "G5B"
};

// Fungsi untuk mendapatkan nama DC berdasarkan bagian DC
function getDcName(dcPart) {
    // Mengecek apakah dcPart ada dalam dcMap
    if (dcMap[dcPart]) {
        return dcMap[dcPart];
    } 
    // Menangani rentang DC untuk "E"
    else if (dcPart >= 83 && dcPart <= 91) {
        return "E";
    } 
    // Menangani rentang DC untuk "F"
    else if (dcPart >= 92 && dcPart <= 100) {
        return "F";
    }
    // Mengembalikan null jika dcPart tidak dikenal
    return null;
}
