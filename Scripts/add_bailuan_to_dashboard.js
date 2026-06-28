const fs = require('fs');
const path = require('path');

const dashboardPath = 'c:\\ncsDL\\PhD_Dashboard.html';
const bailuanPath = 'c:\\ncsDL\\Proposal_LePhucHai\\bailuan.md';
const bailuanThinhPath = 'c:\\ncsDL\\Proposal_LePhucHai\\bailuan_THINH.md';

let html = fs.readFileSync(dashboardPath, 'utf8');
const bailuanMd = fs.readFileSync(bailuanPath, 'utf8');
const bailuanThinhMd = fs.readFileSync(bailuanThinhPath, 'utf8');

// Function to add a standalone entry to the data object in the HTML
function addStandalone(htmlStr, title, filename, content) {
    const standalonesMatch = htmlStr.match(/"standalones":\s*\[/);
    if (!standalonesMatch) return htmlStr;
    
    const insertionPoint = htmlStr.indexOf('[', standalonesMatch.index) + 1;
    const newEntry = {
        title: title,
        file: filename,
        chars: content.length,
        pages: (content.length / 1800).toFixed(1),
        content: content
    };
    
    const entryStr = JSON.stringify(newEntry, null, 2) + ",\n";
    return htmlStr.slice(0, insertionPoint) + "\n" + entryStr + htmlStr.slice(insertionPoint);
}

// Add the two bailuan files
html = addStandalone(html, "BÀI LUẬN NGHIÊN CỨU - LÊ PHÚC HẢI", "bailuan.md", bailuanMd);
html = addStandalone(html, "BÀI LUẬN NGHIÊN CỨU - NGUYỄN CƯỜNG THỊNH", "bailuan_THINH.md", bailuanThinhMd);

fs.writeFileSync(dashboardPath, html, 'utf8');
console.log('Successfully added Research Statements to Dashboard!');
