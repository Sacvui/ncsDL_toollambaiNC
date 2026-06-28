const fs = require('fs');

const file_path = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';
let content = fs.readFileSync(file_path, 'utf8');

// Helper to extract sections
function extractSection(text, startRegex, endRegex) {
    const startMatch = text.match(startRegex);
    if (!startMatch) return '';
    const startIndex = startMatch.index;
    
    // If no endRegex is provided, extract to the end of the file
    let endIndex = text.length;
    if (endRegex) {
        // We want to find the NEXT occurrence of endRegex after the startIndex
        const textAfterStart = text.substring(startIndex + startMatch[0].length);
        const endMatch = textAfterStart.match(endRegex);
        if (endMatch) {
            endIndex = startIndex + startMatch[0].length + endMatch.index;
        }
    }
    return text.substring(startIndex, endIndex).trim();
}

// 1. Extract pieces
const lydo_core = extractSection(content, /### 1\.1\. Bất cân xứng/, /### 1\.7\. Phạm vi/);
const tongquan_core = extractSection(content, /### 2\.1\. Bất cân xứng/, /## 3\. MÔ HÌNH/);
const mohinh_core = extractSection(content, /### 3\.1\. Logic/, /## 4\. PHƯƠNG PHÁP/);
const phuongphap_core = extractSection(content, /### 4\.1\. Cách tiếp cận/, /## 6\. KẾ HOẠCH/);
const ynghia_core = extractSection(content, /### 7\.1\. Đóng góp/, /## 8\. HƯỚNG NGHIÊN/);
const ketqua_core = extractSection(content, /### 10\.1\. Kết quả/, /## 11\. TÍNH KHẢ THI/);
const tailieu_core = extractSection(content, /1\. Akerlof/, null);

// 2. Build the exact 12-point structure

let newContent = `# ĐỀ CƯƠNG NGHIÊN CỨU LUẬN ÁN TIẾN SĨ\n
**Tên đề tài:** Truy xuất nguồn gốc số như một tín hiệu niềm tin: Vai trò trung gian của tính xác thực thương hiệu đối với hành vi mua sản phẩm nước yến chế biến sẵn
**Chuyên ngành đào tạo:** Quản trị Kinh doanh  
**Mã chuyên ngành:** 9340101  
**Nghiên cứu sinh:** Lê Phúc Hải  
**Cơ sở đào tạo:** Trường Đại học Nha Trang

---

## 1. LÝ DO CHỌN ĐỀ TÀI CỦA LUẬN ÁN
${lydo_core}

## 2. TÌNH HÌNH NGHIÊN CỨU TRONG VÀ NGOÀI NƯỚC
${tongquan_core}

## 3. MỤC TIÊU NGHIÊN CỨU CỦA LUẬN ÁN
### 3.1. Mục tiêu tổng quát
Đánh giá cơ chế tác động của tín hiệu truy xuất nguồn gốc số (Blockchain) đối với nhận thức, tính xác thực thương hiệu và hành vi tiêu dùng của khách hàng đối với các sản phẩm hàng hóa dựa trên niềm tin (credence goods) trong ngành hàng tiêu dùng nhanh.

### 3.2. Mục tiêu cụ thể
1.  **Mục tiêu 1:** Hệ thống hóa cơ sở lý luận về bất cân xứng thông tin, lý thuyết tín hiệu và niềm tin trong bối cảnh truy xuất nguồn gốc số.
2.  **Mục tiêu 2:** Xây dựng và kiểm định mô hình đánh giá tác động của nhận thức về truy xuất nguồn gốc đến Hoài nghi xanh, Niềm tin xanh và Tính xác thực thương hiệu.
3.  **Mục tiêu 3:** Đo lường tác động của Tính xác thực thương hiệu lên Ý định mua hàng và Mức sẵn lòng chi trả thêm (WTP).
4.  **Mục tiêu 4:** Đề xuất các hàm ý quản trị giúp doanh nghiệp Yến sào Khánh Hòa tối ưu hóa chiến lược chuyển đổi số.

### 3.3. Câu hỏi nghiên cứu
1.  Làm thế nào tín hiệu truy xuất nguồn gốc số có thể tác động đến các biến tâm lý như Hoài nghi xanh (Green Skepticism) và Niềm tin xanh (Green Trust)?
2.  Liệu việc người tiêu dùng nhận thức được tín hiệu này có thực sự giúp nâng cao Tính xác thực thương hiệu (Brand Authenticity) và từ đó thúc đẩy Ý định mua hàng (PI) cũng như Mức sẵn lòng chi trả thêm (WTP) hay không?
3.  Cơ chế tác động tương tác giữa nội dung Marketing xanh (thông điệp cảm xúc) và Xác thực số (bằng chứng kỹ thuật) diễn ra như thế nào để tối ưu hóa hiệu quả truyền thông?

## 4. NỘI DUNG NGHIÊN CỨU
Để giải quyết các mục tiêu trên, luận án sẽ triển khai 4 nội dung nghiên cứu chính:
1.  **Nội dung 1: Khung lý thuyết và mô hình.** Xây dựng mô hình nghiên cứu tích hợp dựa trên khung S-O-R và Lý thuyết Tín hiệu (Signaling Theory). Thiết lập hệ thống giả thuyết nghiên cứu.
2.  **Nội dung 2: Nghiên cứu định tính.** Phỏng vấn chuyên gia để hiệu chỉnh thang đo và xác nhận tính hợp lý của kịch bản thực nghiệm (mockup sản phẩm).
3.  **Nội dung 3: Nghiên cứu định lượng.** Thiết kế thực nghiệm 2x2, thu thập dữ liệu bằng bảng hỏi phân bổ ngẫu nhiên theo kịch bản, và phân tích dữ liệu bằng mô hình phương trình cấu trúc (PLS-SEM).
4.  **Nội dung 4: Thảo luận và đề xuất.** Thảo luận kết quả phân tích, so sánh với các nghiên cứu trước đây và đề xuất hàm ý quản trị, chính sách.

*(Ghi chú: Mô hình nghiên cứu chi tiết và các giả thuyết được trình bày cụ thể ở phần Phương pháp nghiên cứu bên dưới)*

## 5. Ý NGHĨA KHOA HỌC VÀ THỰC TIỄN CỦA ĐỀ TÀI
${ynghia_core}

## 6. PHẠM VI NGHIÊN CỨU CỦA ĐỀ TÀI
1.  **Phạm vi không gian:** Nghiên cứu và thu thập dữ liệu được thực hiện tại **TP.HCM**, thị trường tiêu thụ trọng điểm mang tính đại diện cao cho xu hướng tiêu dùng hiện đại.
2.  **Phạm vi thời gian:** Dữ liệu dự kiến được thu thập từ quý 3/2026 đến quý 1/2027. Dữ liệu thứ cấp và tổng quan tài liệu tập trung trong giai đoạn 2015-2025.
3.  **Phạm vi bối cảnh/Nội dung:** Đề tài giới hạn trong ngành hàng tiêu dùng nhanh (FMCG) với sản phẩm **nước yến chế biến sẵn (RTD)**. Nghiên cứu chỉ tập trung vào phía cầu (hành vi người tiêu dùng), không đánh giá năng lực công nghệ phía cung.

## 7. ĐỐI TƯỢNG NGHIÊN CỨU CỦA ĐỀ TÀI
*   **Đối tượng nghiên cứu (Object of study):** Cơ chế tác động tâm lý và hành vi của người tiêu dùng trong việc phản ứng với các tín hiệu nhận thức về truy xuất nguồn gốc (Perceived Traceability) thông qua công nghệ số.
*   **Khách thể nghiên cứu (Subject of study):** Người tiêu dùng thế hệ Gen Z (18-27 tuổi) đang sinh sống tại khu vực đô thị (TP.HCM).

## 8. PHƯƠNG PHÁP NGHIÊN CỨU
### 8.1. Mô hình nghiên cứu và Giả thuyết
${mohinh_core}

### 8.2. Thiết kế và quy trình nghiên cứu
${phuongphap_core}

## 9. KẾT QUẢ MONG ĐỢI
${ketqua_core}

## 10. NGUỒN KINH PHÍ
Nghiên cứu sinh tự túc nguồn kinh phí thực hiện luận án (bao gồm chi phí khảo sát, xây dựng mockup thực nghiệm, và công bố bài báo quốc tế/trong nước).

## 11. DỰ KIẾN KẾ HOẠCH HỌC TẬP, NGHIÊN CỨU TOÀN KHÓA
Kế hoạch học tập và nghiên cứu toàn khóa được thiết kế trong thời gian chuẩn 3 năm (36 tháng):

| STT | Nội dung / Nhiệm vụ | Thời gian | Kết quả dự kiến | Nơi thực hiện |
|---|---|---|---|---|
| 1 | Học các học phần ở trình độ Tiến sĩ và CĐ 1 | Tháng 1 - Tháng 6 | Hoàn thành chứng chỉ các môn học | ĐH Nha Trang |
| 2 | Viết Tiểu luận tổng quan và CĐ 2 | Tháng 7 - Tháng 12 | Bảo vệ thành công chuyên đề | ĐH Nha Trang |
| 3 | Nghiên cứu định tính và Pilot Test | Tháng 13 - Tháng 18 | Thang đo hiệu chỉnh (CVI > 0.8) | TP.HCM |
| 4 | Thu thập và xử lý dữ liệu thực nghiệm (PLS-SEM) | Tháng 19 - Tháng 24 | Báo cáo kết quả định lượng | TP.HCM |
| 5 | Viết bài, đăng bài trên các tạp chí HĐGS | Tháng 25 - Tháng 30 | Có ít nhất 02 bài báo được đăng | Các Tạp chí |
| 6 | Viết toàn văn luận án & Seminar cấp Bộ môn | Tháng 31 - Tháng 33 | Nộp bản thảo luận án cấp cơ sở | ĐH Nha Trang |
| 7 | Phản biện độc lập & Nộp luận án cấp Trường | Tháng 34 - Tháng 35 | Nhận ý kiến đồng ý bảo vệ | ĐH Nha Trang |
| 8 | Bảo vệ luận án cấp Trường | Tháng 36 | Đạt học vị Tiến sĩ | ĐH Nha Trang |

## 12. TÀI LIỆU THAM KHẢO
${tailieu_core}
`;

fs.writeFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', newContent, 'utf8');
console.log("Restructured matching the 12-point Nha Trang guideline.");
