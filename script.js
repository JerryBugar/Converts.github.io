function convertText() {
    const inputText = document.getElementById('inputText').value;
    const conversionType = document.querySelector('input[name="conversionType"]:checked').value;
    let outputText = "";
    
    // Pisahkan teks berdasarkan garis baru (newline)
    const lines = inputText.split('\n');
    
    // Proses setiap baris teks
    const convertedLines = lines.map(line => {
        let parts;
        let relevantParts;
        let convertedLine = "";

        if (conversionType === "colonToPipe") {
            // Pisahkan bagian berdasarkan karakter `:`
            parts = line.split(':');
            // Hanya ambil dua bagian pertama (nama dan password)
            relevantParts = parts.slice(0, 2);
            // Gabungkan dengan karakter `|`
            convertedLine = relevantParts.join('|');
        } else if (conversionType === "pipeToColon") {
            // Pisahkan bagian berdasarkan karakter `|`
            parts = line.split('|');
            // Hanya ambil dua bagian pertama (nama dan password)
            relevantParts = parts.slice(0, 2);
            // Gabungkan dengan karakter `:`
            convertedLine = relevantParts.join(':');
        }

        return convertedLine;
    });

    // Gabungkan kembali baris-baris yang telah dikonversi
    outputText = convertedLines.join('\n');

    document.getElementById('outputText').value = outputText;
}

function convertFarmList() {
    const inputFarm = document.getElementById('inputFarm').value;
    const inputDoor = document.getElementById('inputDoor').value;
    const inputSeed = document.getElementById('inputSeed').value.trim();

    const farms = inputFarm.split('\n');
    const doors = inputDoor.split('\n');

    let outputFarmList = "";

    if (farms.length === doors.length && inputSeed !== "") {
        outputFarmList = farms.map((farm, index) => `${farm}:${doors[index]}:${inputSeed}`).join('\n');
    } else {
        outputFarmList = "Jumlah baris pada kedua input harus sama dan ID seed harus diisi.";
    }

    document.getElementById('outputFarmList').value = outputFarmList;
}
