const fs = require('fs');
const path = require('path');

const dir = 'c:\\ncsDL\\Proposal_HAILP_TDT';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f.match(/^\d{2}_/));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // 1. Remove quotes
    content = content.replace(/"kịch bản"/g, 'kịch bản');
    content = content.replace(/"Thói quen"/g, 'thói quen');
    content = content.replace(/"Sự thân thuộc"/g, 'sự thân thuộc');
    content = content.replace(/"Kỳ vọng"/g, 'kỳ vọng');
    content = content.replace(/"Kỳ vọng khách hàng"/g, 'kỳ vọng khách hàng');
    content = content.replace(/"Thói quen tiêu dùng"/g, 'thói quen tiêu dùng');
    content = content.replace(/"bản cập nhật bối cảnh"/g, 'bản cập nhật bối cảnh');
    content = content.replace(/"Ngụy biện sinh thái \(mâu thuẫn cấp độ phân tích\)"/g, 'ngụy biện sinh thái (mâu thuẫn cấp độ phân tích)');
    content = content.replace(/"rất hài lòng"/g, 'rất hài lòng');
    content = content.replace(/"tại sao"/g, 'tại sao');
    
    // 2. Remove unnecessary colons and fix capitalization right after them
    content = content.replace(/Khách thể nghiên cứu chính là: Người/g, 'Khách thể nghiên cứu chính là người');
    content = content.replace(/gồm ba tiền đề: Kỳ vọng khách hàng, Chất lượng cảm nhận, và Giá trị cảm nhận/g, 'gồm ba tiền đề: kỳ vọng khách hàng, chất lượng cảm nhận, và giá trị cảm nhận');
    content = content.replace(/được đo lường: \(1\) Tính nhạy cảm/g, 'được đo lường: (1) tính nhạy cảm');
    content = content.replace(/như biến kết quả\. Study 2/g, 'như biến kết quả. Study 2'); // just in case
    
    // 3. Lowercase variables in the middle of text (only if preceded by space to avoid titles)
    const varsToLower = [
        ['Chỉ số Hài lòng Khách hàng', 'chỉ số hài lòng khách hàng'],
        ['Ý định chi trả giá cao', 'ý định chi trả giá cao'],
        ['Tỷ trọng chi tiêu dự kiến', 'tỷ trọng chi tiêu dự kiến'],
        ['Tỷ trọng chi tiêu', 'tỷ trọng chi tiêu'],
        ['Lòng trung thành thương hiệu', 'lòng trung thành thương hiệu'],
        ['Lòng trung thành', 'lòng trung thành'],
        ['Sự phụ thuộc vào Thuật toán Đề xuất', 'sự phụ thuộc vào thuật toán đề xuất'],
        ['Tính nhạy cảm về giá', 'tính nhạy cảm về giá'],
        ['Chất lượng cảm nhận', 'chất lượng cảm nhận'],
        ['Giá trị cảm nhận', 'giá trị cảm nhận'],
        ['Thói quen tiêu dùng', 'thói quen tiêu dùng'],
        ['Kỳ vọng khách hàng', 'kỳ vọng khách hàng']
    ];
    
    varsToLower.forEach(([upper, lower]) => {
        // Regex to replace only when preceded by a space (so it doesn't replace bullet points or sentence starts)
        const regex = new RegExp(`(?<= )${upper}`, 'g');
        content = content.replace(regex, lower);
        // Also handle the case where they might be after a preposition like "của", "đến"
    });
    
    // Manual replacements for safe cases without lookbehinds if lookbehind fails
    content = content.replace(/ biến Kỳ vọng/g, ' biến kỳ vọng');
    content = content.replace(/ biến Thói quen/g, ' biến thói quen');
    
    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log("Applied punctuation and capitalization fixes!");
