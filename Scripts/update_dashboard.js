const fs = require('fs');
const path = require('path');

const dashboardPath = 'c:\\ncsDL\\PhD_Dashboard.html';
const cuongThinhPath = 'c:\\ncsDL\\Proposal_LePhucHai\\PhD_NhaTrang_CuongThinh.md';
const hailpPath = 'c:\\ncsDL\\Proposal_LePhucHai\\PhD_NhaTrang_HAILP.md';

let html = fs.readFileSync(dashboardPath, 'utf8');
const cuongThinhMd = fs.readFileSync(cuongThinhPath, 'utf8');
const hailpMd = fs.readFileSync(hailpPath, 'utf8');

function updateContent(htmlStr, filename, newMd) {
    const escapedMd = JSON.stringify(newMd); 
    const fileIndex = htmlStr.indexOf(`"file": "${filename}"`);
    if (fileIndex === -1) {
        console.error(`Could not find ${filename} in the HTML`);
        return htmlStr;
    }
    
    const contentKeyIndex = htmlStr.indexOf(`"content":`, fileIndex);
    if (contentKeyIndex === -1) {
        console.error(`Could not find "content": after ${filename}`);
        return htmlStr;
    }
    
    const valueStartIndex = htmlStr.indexOf('"', contentKeyIndex + `"content":`.length);
    let valueEndIndex = -1;
    for (let i = valueStartIndex + 1; i < htmlStr.length; i++) {
        if (htmlStr[i] === '"' && htmlStr[i-1] !== '\\') {
            valueEndIndex = i;
            break;
        }
    }
    
    if (valueEndIndex === -1) {
        console.error(`Could not find the end of the content string for ${filename}`);
        return htmlStr;
    }
    
    const before = htmlStr.substring(0, valueStartIndex);
    const after = htmlStr.substring(valueEndIndex + 1);
    
    const chars = newMd.length;
    let res = before + escapedMd + after;
    
    const charsKeyIndex = res.indexOf(`"chars":`, fileIndex);
    if (charsKeyIndex !== -1 && charsKeyIndex < contentKeyIndex) {
        const charsValueStart = res.indexOf(':', charsKeyIndex) + 1;
        const charsValueEnd = res.indexOf(',', charsValueStart);
        const charsBefore = res.substring(0, charsValueStart);
        const charsAfter = res.substring(charsValueEnd);
        res = charsBefore + ' ' + chars + charsAfter;
    }
    
    return res;
}

// Ensure both files are correctly named as in the HTML JSON
html = updateContent(html, 'PhD_NhaTrang_CuongThinh.md', cuongThinhMd);
html = updateContent(html, 'PhD_NhaTrang_HAILP.md', hailpMd);

fs.writeFileSync(dashboardPath, html, 'utf8');
console.log('Dashboard updated successfully with both files!');
