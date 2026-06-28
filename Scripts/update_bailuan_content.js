const fs = require('fs');

const dashboardPath = 'c:\\ncsDL\\PhD_Dashboard.html';
const bailuanPath = 'c:\\ncsDL\\Proposal_LePhucHai\\bailuan.md';
const bailuanThinhPath = 'c:\\ncsDL\\Proposal_LePhucHai\\bailuan_THINH.md';

let html = fs.readFileSync(dashboardPath, 'utf8');
const bailuanMd = fs.readFileSync(bailuanPath, 'utf8');
const bailuanThinhMd = fs.readFileSync(bailuanThinhPath, 'utf8');

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

html = updateContent(html, 'bailuan.md', bailuanMd);
html = updateContent(html, 'bailuan_THINH.md', bailuanThinhMd);

fs.writeFileSync(dashboardPath, html, 'utf8');
console.log('Dashboard updated successfully with upgraded bailuan files!');
