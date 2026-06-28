const fs = require('fs');

const filePath = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';
let content = fs.readFileSync(filePath, 'utf8');

// Section 1.1: Làm mềm câu văn
content = content.replace(/người tiêu dùng luôn mang tâm lý e ngại/g, 'người tiêu dùng có xu hướng e ngại');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update text softening complete.');
