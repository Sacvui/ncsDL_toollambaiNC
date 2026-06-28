const fs = require('fs');
const path = require('path');

const dir = 'c:\\ncsDL\\Proposal_HAILP_TDT';

// 1. Fix 05_PhuongPhap.md
let file5 = path.join(dir, '05_PhuongPhap.md');
let content5 = fs.readFileSync(file5, 'utf8');
content5 = content5.replace(/<!-- H6-H9: Mediators to CPOs -->/g, '<!-- H6-H9: Mediators to CBOs -->');
content5 = content5.replace(/Phân loại \(nhỏ\/vừa\/lớn\)/g, 'Phân loại (thấp/vừa/cao)');
content5 = content5.replace(/Tự khai báo \(cảm nhận quy mô\)/g, 'Tự khai báo (cảm nhận tài sản)');
content5 = content5.replace(/Điều tiết theo thuật toán và quy mô/g, 'Điều tiết theo thuật toán và tài sản thương hiệu');
fs.writeFileSync(file5, content5, 'utf8');

// 2. Fix 03_MucDichNghienCuu.md
let file3 = path.join(dir, '03_MucDichNghienCuu.md');
let content3 = fs.readFileSync(file3, 'utf8');
content3 = content3.replace(/và quy mô doanh nghiệp\./g, 'và tài sản thương hiệu.');
fs.writeFileSync(file3, content3, 'utf8');

console.log("Cleaned up remaining text inconsistencies!");
