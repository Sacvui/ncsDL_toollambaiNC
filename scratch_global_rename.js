const fs = require('fs');
const path = require('path');

const dir = 'c:\\ncsDL\\Proposal_HAILP_TDT';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

for (let file of files) {
    let filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Rename CPO to CBO
    content = content.replace(/\bCPO\b/g, 'CBO');
    content = content.replace(/\bCPO1\b/g, 'CBO1');
    content = content.replace(/\bCPO2\b/g, 'CBO2');
    content = content.replace(/Customer Performance Outcomes/gi, 'Customer Behavioral Outcomes');
    content = content.replace(/Hiệu quả hoạt động cấp khách hàng/gi, 'Hiệu quả hành vi khách hàng');
    
    // 2. Rename Quy mô thương hiệu (W2) to Tài sản thương hiệu (BE)
    // Note: W2 might just stay W2 in code, but text changes. Let's change "(W2)" to "(BE)" for consistency!
    // Actually, W1 is ARD, let's rename W2 to BE.
    content = content.replace(/Quy mô thương hiệu/gi, 'Tài sản thương hiệu');
    content = content.replace(/Quy mô TH/g, 'Tài sản TH');
    // Change W2 to BE
    content = content.replace(/\bW2\b/g, 'BE');
    // Change "Nhỏ / Vừa / Lớn" in SVG to "Thấp / Trung bình / Cao"
    content = content.replace(/Nhỏ \/ Vừa \/ Lớn/g, 'Thấp / Vừa / Cao');

    // 3. Soften ACSI claims
    content = content.replace(/thách thức và thay đổi mô hình ACSI/gi, 'bổ khuyết và mở rộng cấu trúc đo lường ACSI');
    content = content.replace(/phá vỡ cấu trúc ACSI truyền thống/gi, 'hiệu chỉnh cấu trúc ACSI truyền thống');
    content = content.replace(/chưa phản ánh đúng thực tiễn mô hình ACSI/gi, 'giới hạn của mô hình ACSI nguyên bản');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
}
console.log("Global replacements done!");
