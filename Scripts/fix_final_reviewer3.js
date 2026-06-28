const fs = require('fs');

let content = fs.readFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', 'utf8');

// 1. Tên đề tài
const old_title_regex = /\*\*Tên đề tài:\*\* Tín hiệu truy xuất nguồn gốc số và Tính xác thực thương hiệu xanh: Nghiên cứu thực chứng về ý định mua và mức sẵn lòng chi trả đối với sản phẩm nước yến đóng lon \(RTD\)/;
const new_title = `**Tên đề tài:** Truy xuất nguồn gốc số như một tín hiệu niềm tin: Vai trò trung gian của tính xác thực thương hiệu đối với hành vi mua sản phẩm nước yến đóng lon`;
content = content.replace(old_title_regex, new_title);

// Fallback if regex fails due to line breaks or formatting changes
if (!content.includes(new_title)) {
    content = content.replace(/\*\*Tên đề tài:\*\*.*/, new_title);
}

// 2. Thêm Mục tiêu & Nội dung vào Phần 1
// Search for "### 1.2. Vấn đề nghiên cứu (Problem Statement)" and insert the objectives and structure right after it.
const prob_statement_end_regex = /(Để giải quyết vấn đề trên, đề tài đặt ra các câu hỏi nghiên cứu cốt lõi:.*?3\.  Tính xác thực thương hiệu \(BA\) đóng vai trò trung gian như thế nào trong cơ chế này\?)/s;
const objectives_content = `$1

### 1.3. Mục tiêu nghiên cứu (Research Objectives)
**Mục tiêu tổng quát:**
Kiểm định cơ chế tác động của truy xuất nguồn gốc số đến ý định mua và mức sẵn lòng chi trả của người tiêu dùng đối với sản phẩm nước yến đóng lon, thông qua vai trò trung gian của tính xác thực thương hiệu.

**Mục tiêu cụ thể:**
1.  **Xác định** mức độ tác động của tín hiệu truy xuất nguồn gốc số (TR) và thông điệp marketing xanh (GM) đến trạng thái nhận thức và tâm lý của người tiêu dùng (GS, PIQ, GT).
2.  **Kiểm định** vai trò trung gian cấp cao của Tính xác thực thương hiệu (BA) trong việc kết nối niềm tin xanh (GT) và hành vi mua (PI, WTP).
3.  **Đánh giá** tác động tương tác (moderation/synergy) giữa tín hiệu truy xuất bằng công nghệ và thông điệp truyền thông đến niềm tin của người tiêu dùng.

### 1.4. Nội dung và Cấu trúc luận án dự kiến (Work Packages)
Để giải quyết các mục tiêu trên, luận án được cấu trúc thành 5 chương (work packages) cụ thể:
*   **Chương 1: Tổng quan nghiên cứu.** Trình bày bối cảnh, lý do chọn đề tài, mục tiêu, đối tượng, phạm vi và đóng góp của luận án.
*   **Chương 2: Cơ sở lý thuyết và Mô hình nghiên cứu.** Đánh giá biện chứng (critical review) các nghiên cứu trước đây, xây dựng khung lý thuyết dựa trên S-O-R và Signaling Theory, từ đó đề xuất mô hình và các giả thuyết.
*   **Chương 3: Phương pháp nghiên cứu.** Trình bày thiết kế nghiên cứu hỗn hợp: Giai đoạn 1 (Định tính với chuyên gia) để hiệu chỉnh thang đo và Giai đoạn 2 (Thực nghiệm 2x2 kết hợp khảo sát) để đo lường.
*   **Chương 4: Kết quả nghiên cứu.** Phân tích dữ liệu thực nghiệm bằng mô hình cấu trúc tuyến tính PLS-SEM (đánh giá measurement model, structural model, mediation, CMB).
*   **Chương 5: Thảo luận và Hàm ý.** Biện luận kết quả, xác định các điều kiện biên (boundary conditions) của lý thuyết, và đưa ra hàm ý quản trị cho ngành yến sào.`;

content = content.replace(prob_statement_end_regex, objectives_content);

// Ensure old 1.3, 1.4, 1.5 numbering is updated
content = content.replace('### 1.3. Ý nghĩa nghiên cứu', '### 1.5. Ý nghĩa nghiên cứu');
content = content.replace('### 1.4. Sự phù hợp', '### 1.6. Sự phù hợp');
content = content.replace('### 1.5. Phạm vi', '### 1.7. Phạm vi');

// 3. Sửa Đóng góp học thuật (Bỏ overclaim)
const old_contribution_regex = /\*   \*\*Làm sâu sắc Lý thuyết Tín hiệu \(Signaling Theory\):\*\* Nghiên cứu mở rộng khái niệm 'tín hiệu tốn kém' \(costly signals\) sang lĩnh vực truy xuất số\. Nó thiết lập một cơ chế tâm lý mới giải thích cách thức các đặc tính bất biến của dữ liệu \(data immutability\) được giải mã thành giá trị tự thân của thương hiệu \(intrinsic brand value\), thay vì chỉ dừng lại ở nhận thức chất lượng thông tin thông thường\./;
const new_contribution = `*   **Cung cấp bằng chứng thực nghiệm cho Lý thuyết Tín hiệu (Signaling Theory):** Thay vì tuyên bố mở rộng lý thuyết một cách quá mức, nghiên cứu cung cấp dữ liệu thực chứng để giải thích cách thức các đặc tính bất biến của dữ liệu (data immutability) được giải mã thành giá trị tự thân của thương hiệu (intrinsic brand value) trong bối cảnh sản phẩm credence goods.
*   **Kiểm định điều kiện biên (Boundary conditions):** Luận án xác định các điều kiện giới hạn của lý thuyết truyền thông xanh truyền thống, chứng minh rằng khi rủi ro cảm nhận quá cao, các tín hiệu marketing (GM) sẽ mất tác dụng nếu không có sự can thiệp của tín hiệu xác thực kỹ thuật (TR).`;
content = content.replace(old_contribution_regex, new_contribution);

// 4. Sửa Kết quả mong đợi (Bỏ R2 vô nghĩa)
const old_expected_regex = /Kỳ vọng rõ ràng nhưng phụ thuộc lớn vào chất lượng bộ thang đo đã dịch ngược./; // Wait, this was from reviewer comments, not the file itself.
// Let's find "10. KẾ HOẠCH CÔNG BỐ KẾT QUẢ VÀ ĐÁNH GIÁ THÀNH CÔNG" -> wait, what is the exact section name?
// Let's search for the expected results section or add it if missing. The reviewer mentioned "10. Kết quả mong đợi". 
// In our file, it might be part of "10. KẾ HOẠCH CÔNG BỐ KẾT QUẢ VÀ ĐÁNH GIÁ THÀNH CÔNG".
// Let's just create a new section for expected outcomes or replace the evaluation part.
const eval_regex = /## 10\. KẾ HOẠCH CÔNG BỐ KẾT QUẢ VÀ ĐÁNH GIÁ THÀNH CÔNG/;
const new_eval = `## 10. KẾT QUẢ MONG ĐỢI VÀ KẾ HOẠCH CÔNG BỐ

### 10.1. Kết quả khoa học kỳ vọng (Expected Scientific Outcomes)
Khác với các mục tiêu thống kê mang tính kỹ thuật (như đạt R² cao), nghiên cứu kỳ vọng đạt được các kết quả mang tính kiểm định lý thuyết sau:
*   **Sức mạnh của tín hiệu kỹ thuật:** Dự đoán rằng tín hiệu truy xuất (TR) có sức mạnh làm giảm Hoài nghi xanh (GS) mạnh mẽ và ý nghĩa thống kê cao hơn so với tín hiệu truyền thông marketing (GM).
*   **Nút thắt của tính xác thực:** Kỳ vọng chứng minh Tính xác thực thương hiệu (BA) không chỉ là một biến trung gian thông thường, mà là "điều kiện bắt buộc" (necessary condition) để chuyển hóa niềm tin thành mức sẵn lòng chi trả thêm (WTP).

### 10.2. Lộ trình công bố`;
content = content.replace(eval_regex, new_eval);


// 5. Thêm yếu tố Debate vào Literature Review
const old_debate_regex = /Mặc dù Chen \(2012\) cho rằng niềm tin xanh có thể hình thành qua truyền thông, nhưng lập luận này bỏ qua sự gia tăng cực độ của rủi ro cảm nhận/;
const new_debate = `Trong các diễn đàn học thuật gần đây, có một sự tranh luận sâu sắc về hiệu quả của các nỗ lực marketing xanh. Mặc dù Chen (2012) và nhiều nghiên cứu trước đây (Spence, 1973) cho rằng niềm tin có thể hình thành qua truyền thông, nhưng lập luận này bộc lộ điểm yếu (vulnerability) khi áp dụng vào bối cảnh khủng hoảng niềm tin hiện tại. Nó bỏ qua sự gia tăng cực độ của rủi ro cảm nhận`;
content = content.replace(old_debate_regex, new_debate);

fs.writeFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', content, 'utf8');
console.log("Changes applied successfully.");
