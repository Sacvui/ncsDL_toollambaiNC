const fs = require('fs');
const dataStr = fs.readFileSync('c:/ncsDL/dashboard_data.json', 'utf8');

const html_template = fs.readFileSync('c:/ncsDL/dashboard_template.html', 'utf8');

const data = JSON.parse(dataStr);
// Tính tổng trang chỉ dựa trên các chương lẻ (chapters)
const chapters = data.chapters || [];
const totalPages = chapters.reduce((sum, ch) => sum + parseFloat(ch.pages || 0), 0).toFixed(1);

const safeDataStr = dataStr.replace(/</g, '\\u003c').replace(/>/g, '\\u003e');
let finalHtml = html_template.replace('{{DATA}}', () => safeDataStr);
finalHtml = finalHtml.replace('{{PROGRESS}}', () => totalPages);
finalHtml = finalHtml.replace('{{NCS_NAME}}', () => 'Lê Phúc Hải');

fs.writeFileSync('c:/ncsDL/PhD_Dashboard.html', finalHtml);
console.log(`Dashboard generated successfully. Total pages (from chapters): ${totalPages}`);
