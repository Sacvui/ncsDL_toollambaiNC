const fs = require('fs');

let content = fs.readFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', 'utf8');

// Find Section 8 and append the new bullet point
const target_regex = /(## 8\. HƯỚNG NGHIÊN CỨU TƯƠNG LAI.*?(?=\n\n---|\n\n\*\*Nghiên cứu sinh:\*\*))/s;
const match = content.match(target_regex);

if (match) {
    const new_bullet = `\n*   **Nghiên cứu đối chiếu theo phân loại hàng hóa:** Tiến hành nghiên cứu so sánh cơ chế hoạt động của tín hiệu Blockchain trên nhóm sản phẩm yến thô/yến tinh chế cao cấp. Khác với yến chế biến sẵn (credence goods), yến thô mang đặc tính của hàng hóa tìm kiếm/trải nghiệm (search/experience goods), nơi người tiêu dùng có thể tự kiểm chứng chất lượng bằng mắt thường và quá trình chưng cất. Việc so sánh này sẽ giúp mở rộng lý thuyết về sự thay đổi trọng số của "tín hiệu kỹ thuật" trong các phân loại hàng hóa khác nhau.`;
    const new_text = match[0] + new_bullet;
    content = content.replace(target_regex, new_text);
    fs.writeFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', content, 'utf8');
    console.log("Future research updated.");
} else {
    console.log("Section 8 not found.");
}
