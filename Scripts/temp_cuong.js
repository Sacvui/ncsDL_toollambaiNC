const fs = require('fs');
const pdf = require('pdf-parse');

async function main() {
    const dataBuffer = fs.readFileSync('Luan an TS Nguyen Hung Cuong.pdf');
    const data = await pdf(dataBuffer);
    fs.writeFileSync('cuong_extract.txt', data.text, 'utf8');
    console.log('Done');
}
main();
