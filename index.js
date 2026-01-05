import readline from 'readline';
import { temperatur } from './temperatur.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function konversi(satuan) {
    switch(satuan.toLowerCase()) {
        case 'celcius': return temperatur.toCelcius();
        case 'fahrenheit': return temperatur.toFahrenheit();
        case 'kelvin': return temperatur.toKelvin();
        case 'reamur': return temperatur.toReamur();
        default: return null;
    }
}

function tanyaSuhu() {
    rl.question('Masukkan suhu: ', input => {
        const temp = Number(input);
        if (Number.isNaN(temp)) {
            console.log('Input harus berupa angka!');
            return tanyaSuhu();
        }

        temperatur.temperaturBase = temp;
        tanyaSatuan();
    });
}

function tanyaSatuan() {
    rl.question('Masukkan satuan tujuan (celcius/fahrenheit/kelvin/reamur): ', input => {
        const hasil = konversi(input);
        if (hasil === null) {
            console.log('Satuan tidak valid!');
            return tanyaSatuan();
        }

        console.log(`Hasil konversi: ${hasil} ${input.toUpperCase()}`);
        tanyaLagi();
    });
}

function tanyaLagi() {
    rl.question('Mau konversi lagi? (y/n): ', jawaban => {
        if (jawaban.toLowerCase() === 'y') {
            tanyaSuhu();
        } else {
            console.log('Terima kasih!');
            rl.close();
        }
    });
}

tanyaSuhu();
