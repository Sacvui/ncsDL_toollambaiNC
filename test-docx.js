const HTMLToDOCX = require('html-to-docx');
const fs = require('fs');

(async () => {
    try {
        const base64Img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
        const html = `<!DOCTYPE html><html><body><h1>Test</h1><img src="${base64Img}" width="100" height="100" /></body></html>`;
        const docxBuffer = await HTMLToDOCX(html, null, {});
        fs.writeFileSync('test.docx', docxBuffer);
        console.log("Success");
    } catch (e) {
        console.error("Error:", e);
    }
})();
