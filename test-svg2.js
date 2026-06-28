const HTMLToDOCX = require('html-to-docx');
const fs = require('fs');

(async () => {
    try {
        const svgStr = '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /><text x="20" y="50">Hello</text></svg>';
        const b64 = Buffer.from(svgStr).toString('base64');
        const imgsrc = `data:image/svg+xml;base64,${b64}`;
        const html = `<!DOCTYPE html><html><body><h1>Test SVG</h1><img src="${imgsrc}" width="100" height="100" /></body></html>`;
        const docxBuffer = await HTMLToDOCX(html, null, {});
        fs.writeFileSync('test-svg-img.docx', docxBuffer);
        console.log("Success with IMG SVG Base64");
    } catch (e) {
        console.error("Error:", e);
    }
})();
