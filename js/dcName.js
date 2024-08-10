function getDcName(dcPart) {
    switch(dcPart) {
        case "1":
            return "A1A";
        case "2":
            return "A2A";
        case "3":
            return "A3A";
        case "4":
            return "A4A";
        case "5":
            return "A5A";
        case "6":
            return "A6A";
        case "7":
            return "A1B";
        case "8":
            return "A2B";
        case "9":
            return "A3B";
        case "10":
            return "A4B";
        case "11":
            return "A5B";
        case "12":
            return "A6B";
        case "13":
            return "B1A";
        case "14":
            return "B2A";
        case "15":
            return "B3A";
        case "16":
            return "B4A";
        case "17":
            return "B5A";
        case "18":
            return "B6A";
        case "19":
            return "B1B";
        case "20":
            return "B2B";
        case "21":
            return "B3B";
        case "22":
            return "B4B";
        case "23":
            return "B5B";
        case "24":
            return "B6B";
        case "25":
            return "C1A";
        case "26":
            return "C2A";
        case "27":
            return "C3A";
        case "28":
            return "C4A";
        case "29":
            return "C5A";
        case "30":
            return "C6A";
        case "31":
            return "C1B";
        case "32":
            return "C2B";
        case "33":
            return "C3B";
        case "34":
            return "C4B";
        case "35":
            return "C5B";
        case "36":
            return "C6B";
            
        // Tambahkan case lain sesuai kebutuhan...
        default:
            if (dcPart >= 83 && dcPart <= 91) {
                return "E";
            } else if (dcPart >= 92 && dcPart <= 100) {
                return "F";
            }
            return null;
    }
}
