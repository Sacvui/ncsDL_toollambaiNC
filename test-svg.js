const HTMLToDOCX = require('html-to-docx');
const fs = require('fs');

(async () => {
    try {
        const html = `<!DOCTYPE html><html><body><h1>Test SVG</h1><svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /><text x="20" y="50">Hello</text></svg></body></html>`;
        const docxBuffer = await HTMLToDOCX(html, null, {});
        fs.writeFileSync('test-svg.docx', docxBuffer);
        console.log("Success");
    } catch (e) {
        console.error("Error:", e);
    }
})();
