const fs = require('fs');
const path = require('path');

const dir = 'c:\\ncsDL\\Proposal_HAILP_TDT';

// 1. Fix 02_TinhHinhNghienCuu.md (Gap 3)
let file2 = path.join(dir, '02_TinhHinhNghienCuu.md');
let content2 = fs.readFileSync(file2, 'utf8');
content2 = content2.replace(
    'Chưa kiểm định đồng thời vai trò của Kênh mua sắm trực tuyến trong việc đóng vai trò là tác động kép:',
    'Chưa kiểm định đồng thời vai trò của Kênh mua sắm trực tuyến trong việc tạo ra tác động kép:'
);
fs.writeFileSync(file2, content2, 'utf8');

// 2. Fix 05_PhuongPhap.md (Group 4 grammar and Study 1 en-dash)
let file5 = path.join(dir, '05_PhuongPhap.md');
let content5 = fs.readFileSync(file5, 'utf8');
content5 = content5.replace(
    'dễ bị "làm suy giảm" lòng trung thành thương hiệu',
    'dễ bị suy giảm lòng trung thành thương hiệu'
);
content5 = content5.replace(/CSI[ \-–]*CL[ \-–]*eWOM[ \-–]*CPO/g, 'CSI–CL–eWOM–CPO');
content5 = content5.replace(/CSI[ \-–]*CL[ \-–]*eWOM/g, 'CSI–CL–eWOM');
fs.writeFileSync(file5, content5, 'utf8');

// 3. Fix 03_MucDichNghienCuu.md (Q4 en-dash)
let file3 = path.join(dir, '03_MucDichNghienCuu.md');
let content3 = fs.readFileSync(file3, 'utf8');
content3 = content3.replace(/CSI[ \-–]*eWOM[ \-–]*CPO/g, 'CSI–eWOM–CPO');
content3 = content3.replace(/CSI[ \-–]*CL[ \-–]*CPO/g, 'CSI–CL–CPO');
fs.writeFileSync(file3, content3, 'utf8');

console.log("Fixed user reported text issues!");
