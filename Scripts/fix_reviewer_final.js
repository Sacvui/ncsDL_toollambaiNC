const fs = require('fs');

let content = fs.readFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', 'utf8');

// 1. Add Authenticity Argument in Section 2.5
const old_2_5_regex = /Khái niệm Brand Authenticity được phát triển mạnh trong nghiên cứu hành vi tiêu dùng gần đây\./;
const new_2_5 = `Khái niệm Brand Authenticity được phát triển mạnh trong nghiên cứu hành vi tiêu dùng gần đây. Trong thị trường hàng hóa dựa trên niềm tin (credence goods) và bối cảnh lạm dụng greenwashing, người tiêu dùng không còn tin vào các hình ảnh thương hiệu (Brand Image) được xây dựng đơn thuần bằng quảng cáo. Thay vào đó, họ tìm kiếm sự chân thật. Tính xác thực (Authenticity) là cấp độ cao hơn của niềm tin, nó gắn kết cả lý trí và cảm xúc, đóng vai trò là cơ chế trung gian then chốt.`;
content = content.replace(old_2_5_regex, new_2_5);

// 2. Add Authenticity Argument in Section 7.1
const old_7_1_regex = /\*   \*\*Mở rộng cơ chế trung gian trong nghiên cứu hành vi tiêu dùng xanh:\*\* Bổ sung vai trò của Brand Authenticity như một biến trung gian giữa niềm tin và hành vi tiêu dùng, thay vì chỉ dừng lại ở các mô hình truyền thống sử dụng Green Trust\./;
const new_7_1 = `*   **Mở rộng cơ chế trung gian trong nghiên cứu hành vi tiêu dùng xanh:** Khẳng định vai trò của Brand Authenticity như một biến trung gian cấp cao. Đóng góp này chứng minh rằng, trong thị trường credence goods ngập tràn greenwashing, Brand Image không còn đủ sức nặng; chỉ có sự chân thật (Brand Authenticity) mới là cơ sở vững chắc kết nối lý trí (thông tin truy xuất) và cảm xúc (niềm tin), từ đó dẫn đến hành vi mua.`;
content = content.replace(old_7_1_regex, new_7_1);

// 3. Parsimony / Perceived Risk justification in 3.1
const old_3_1_regex = /\*\*Logic chính:\*\*\nTín hiệu kỹ thuật \(traceability\) kết hợp với tín hiệu marketing làm thay đổi nhận thức và tâm lý, từ đó hình thành niềm tin và tính xác thực thương hiệu, cuối cùng dẫn đến hành vi mua và sự sẵn lòng trả giá cao hơn\./;
const new_3_1 = `**Logic chính:**
Tín hiệu kỹ thuật (traceability) kết hợp với tín hiệu marketing làm thay đổi nhận thức và tâm lý, từ đó hình thành niềm tin và tính xác thực thương hiệu, cuối cùng dẫn đến hành vi mua và sự sẵn lòng trả giá cao hơn.

**Tính tinh gọn của mô hình (Model Parsimony):** 
Mặc dù "Rủi ro cảm nhận" (Perceived Risk) là tiền đề nội tại của người tiêu dùng thực phẩm chức năng, nghiên cứu không vẽ nó thành một biến riêng biệt trong mô hình cấu trúc. Thay vào đó, sự suy giảm rủi ro cảm nhận được bao hàm (proxy) thông qua sự suy giảm của Hoài nghi (GS) và sự gia tăng của Niềm tin (GT). Việc này giúp mô hình đạt độ tinh gọn cần thiết, tập trung toàn lực để làm nổi bật tác động của Brand Authenticity.`;
content = content.replace(old_3_1_regex, new_3_1);

// 4. Update Sampling Strategy in 4.4
const old_4_4_regex = /\*   \*\*Phương pháp lấy mẫu:\*\* Lấy mẫu thuận tiện \(Convenience sampling\) kết hợp với bộ lọc \(screening\)\. Điều kiện sàng lọc yêu cầu người tham gia phải có hành vi tiêu thụ nước giải khát và có sự quan tâm cơ bản đến các sản phẩm tốt cho sức khỏe\./;
const new_4_4 = `*   **Phương pháp lấy mẫu:** Lấy mẫu phi xác suất có mục đích (Non-probability Purposive Sampling) kết hợp với kỹ thuật phát triển mầm (Snowball sampling) thông qua các hội nhóm Gen Z tại TP.HCM. Việc thu thập dữ liệu đi kèm với bộ lọc (screening) gắt gao để đảm bảo mẫu phản ánh đúng phân khúc khách hàng mục tiêu: có mức thu nhập trung bình khá trở lên, có hành vi tiêu thụ nước giải khát (FMCG) và đặc biệt quan tâm đến các vấn đề sức khỏe.`;
content = content.replace(old_4_4_regex, new_4_4);

// 5. Update Mermaid Diagram (S-O-R flow)
const old_mermaid_regex = /```mermaid.*?```/s;
// The document might have multiple mermaid. Wait, we only have one mermaid in 2.5
const new_mermaid = `\`\`\`mermaid
graph LR
    subgraph STIMULUS [S - Tín hiệu Kích thích]
        TR["Digital Traceability"]
        GM["Green Marketing"]
    end

    subgraph ORGANISM [O - Thay đổi Trạng thái Tâm lý]
        PIQ["Perceived Info Quality"]
        GS["Green Skepticism"]
        GT["Green Trust"]
        BA["Brand Authenticity"]
    end

    subgraph RESPONSE [R - Hành vi Phản hồi]
        PI["Purchase Intention"]
        WTP["Willingness to Pay Premium"]
    end

    TR -->|"H1 (+)"| PIQ
    TR -->|"H3 (-)"| GS
    GM -->|"H2 (+)"| GT
    PIQ -->|"H4a (+)"| GT
    GS -->|"H4b (-)"| GT
    GT -->|"H5 (+)"| BA
    BA --> PI
    BA --> WTP
    TR -.->|"H7 (Moderation)"| GM
\`\`\``;

content = content.replace(old_mermaid_regex, new_mermaid);

fs.writeFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', content, 'utf8');
console.log('Final polish applied.');
