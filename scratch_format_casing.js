const fs = require('fs');
const path = require('path');

const dir = 'c:\\ncsDL\\Proposal_HAILP_TDT';

// Fix 05_PhuongPhap.md
let file5 = path.join(dir, '05_PhuongPhap.md');
let content5 = fs.readFileSync(file5, 'utf8');

// Fix bold scale headings
content5 = content5.replace(/\*\*HB: thói quen tiêu dùng\*\*/g, '**HB: Thói quen tiêu dùng**');
content5 = content5.replace(/\*\*PQ: chất lượng cảm nhận\*\*/g, '**PQ: Chất lượng cảm nhận**');
content5 = content5.replace(/\*\*PV: giá trị cảm nhận\*\*/g, '**PV: Giá trị cảm nhận**');
content5 = content5.replace(/\*\*CL: lòng trung thành thương hiệu\*\*/g, '**CL: Lòng trung thành thương hiệu**');
content5 = content5.replace(/\*\*CPO1: ý định chi trả giá cao \(WTPP\)\*\*/g, '**CPO1: Ý định chi trả giá cao (WTPP)**');
content5 = content5.replace(/\*\*CPO2: tỷ trọng chi tiêu dự kiến \(eSOW\)\*\*/g, '**CPO2: Tỷ trọng chi tiêu dự kiến (eSOW)**');
content5 = content5.replace(/\*\*ARD: sự phụ thuộc vào thuật toán đề xuất\*\*/g, '**ARD: Sự phụ thuộc vào thuật toán đề xuất**');

// Fix in sentences
content5 = content5.replace(/Đo lường lòng trung thành thương hiệu \(CL\), Truyền miệng điện tử \(eWOM\)/g, 'Đo lường lòng trung thành thương hiệu (CL), truyền miệng điện tử (eWOM)');
content5 = content5.replace(/thay thế bằng biến \*\*Thói quen tiêu dùng \(HB\)\*\*/g, 'thay thế bằng biến **thói quen tiêu dùng (HB)**');
content5 = content5.replace(/ Truyền miệng điện tử có tác động tích cực/g, ' truyền miệng điện tử có tác động tích cực');
content5 = content5.replace(/ Thói quen \(/g, ' thói quen (');

fs.writeFileSync(file5, content5, 'utf8');

// Fix 02_TinhHinhNghienCuu.md
let file2 = path.join(dir, '02_TinhHinhNghienCuu.md');
let content2 = fs.readFileSync(file2, 'utf8');
content2 = content2.replace(/\*\*Thói quen tiêu dùng \(HB\)\*\*/g, '**thói quen tiêu dùng (HB)**');
fs.writeFileSync(file2, content2, 'utf8');

console.log("Applied final format casing fixes!");
