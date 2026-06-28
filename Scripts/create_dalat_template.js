const fs = require('fs');

const inputPath = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';
const outputPath = 'c:/ncsDL/Proposal_LePhucHai/PhD_DaLat_HAILP.md';

let content = fs.readFileSync(inputPath, 'utf8');

// Helper to extract sections
function extractSection(text, startRegex, endRegex) {
    const startMatch = text.match(startRegex);
    if (!startMatch) return '';
    const startIndex = startMatch.index;
    
    let endIndex = text.length;
    if (endRegex) {
        const textAfterStart = text.substring(startIndex + startMatch[0].length);
        const endMatch = textAfterStart.match(endRegex);
        if (endMatch) {
            endIndex = startIndex + startMatch[0].length + endMatch.index;
        }
    }
    return text.substring(startIndex, endIndex).trim();
}

// Extract cores from Nha Trang file
const lydo = extractSection(content, /### 1\.1\. Bất cân xứng/, /## 2\. TÌNH HÌNH/);
const tongquan = extractSection(content, /### 2\.1\. Bất cân xứng/, /## 3\. MỤC TIÊU/);
const muctieu = extractSection(content, /### 3\.1\. Mục tiêu tổng quát/, /## 4\. NỘI DUNG/);
const noidung = extractSection(content, /Để giải quyết các mục tiêu trên/, /## 5\. Ý NGHĨA/);
const ynghia = extractSection(content, /### 5\.1\. Đóng góp học thuật/, /## 6\. PHẠM VI/);
const phamvi = extractSection(content, /1\. \*\*Phạm vi không gian:\*\*/, /## 7\. ĐỐI TƯỢNG/);
const doituong = extractSection(content, /\* \*\*Đối tượng nghiên cứu/, /## 8\. PHƯƠNG PHÁP/);
const phuongphap = extractSection(content, /#### 8\.1\.1\. Logic xây dựng/, /## 9\. KẾT QUẢ/);
const ketqua = extractSection(content, /### 9\.1\. Kết quả khoa học/, /## 10\. NGUỒN KINH PHÍ/);
const tiendo = extractSection(content, /Kế hoạch học tập và nghiên cứu toàn khóa/, /## 12\. TÀI LIỆU/);
const tailieu = extractSection(content, /1\. Akerlof/, null);

// Re-assemble into Da Lat 7-point structure
const dalatContent = `# ĐỀ CƯƠNG DỰ TUYỂN TRÌNH ĐỘ TIẾN SĨ

**Tên định hướng nghiên cứu:** Truy xuất nguồn gốc số như một tín hiệu niềm tin: Vai trò trung gian của tính xác thực thương hiệu đối với hành vi mua sản phẩm nước yến chế biến sẵn
**Chuyên ngành:** Quản trị Kinh doanh
**Mã số:** 9340101
**Tên người dự tuyển:** Lê Phúc Hải
**Cơ quan công tác:** ...

---

## 1. ĐẶT VẤN ĐỀ
${lydo}

### 1.5. Phạm vi và Đối tượng nghiên cứu
**Phạm vi nghiên cứu:**
${phamvi}

**Đối tượng và Khách thể nghiên cứu:**
${doituong}

## 2. TỔNG QUAN VẤN ĐỀ NGHIÊN CỨU
### 2.1. Tổng quan các nghiên cứu trước đây và Khoảng trống (Research Gap)
${tongquan}

### 2.2. Cơ sở lý thuyết của phương pháp nghiên cứu
Phần này trình bày nền tảng lý thuyết làm cơ sở cho mô hình nghiên cứu: Lý thuyết Tín hiệu (Signaling Theory) và Mô hình S-O-R (Stimulus-Organism-Response).
${extractSection(phuongphap, /Mô hình nghiên cứu được xây dựng dựa trên/, /#### 8\.1\.2\. Mô hình/)}

### 2.3. Phương pháp nghiên cứu, đánh giá (Methodology)
Để lấp đầy các khoảng trống nghiên cứu, đề cương đề xuất phương pháp luận và mô hình đánh giá như sau:
${extractSection(phuongphap, /#### 8\.1\.2\. Mô hình nghiên cứu đề xuất/, /### 8\.3\. Thang đo & Bảng câu hỏi/)}

### 2.4. Cơ sở thực tiễn
Nghiên cứu tập trung giải quyết bài toán khủng hoảng niềm tin (Greenwashing) trong ngành hàng tiêu dùng nhanh (FMCG), đặc biệt là nước yến chế biến sẵn (RTD). 

## 3. MỤC TIÊU VÀ NỘI DUNG CỦA LUẬN ÁN
${muctieu}

### 3.2. Nội dung nghiên cứu
${noidung}

### 3.3. Cấu trúc dự kiến của luận án
Dự kiến luận án được kết cấu thành 5 chương:
*   **Chương 1: Tổng quan tình hình nghiên cứu và Cơ sở lý luận.** 
*   **Chương 2: Thiết kế và Phương pháp nghiên cứu.** 
*   **Chương 3: Bối cảnh và Thực trạng.** 
*   **Chương 4: Phân tích kết quả thực nghiệm và Thảo luận.** 
*   **Chương 5: Kết luận và Hàm ý quản trị.**

## 4. TIẾN ĐỘ THỰC HIỆN ĐỀ TÀI
${tiendo}

## 5. DỰ KIẾN KẾT QUẢ ĐẠT ĐƯỢC
${ketqua}
${ynghia}

## 6. DANH MỤC CÁC TÀI LIỆU THAM KHẢO
${tailieu}

## 7. CÁN BỘ HƯỚNG DẪN DỰ KIẾN
*   **Hướng dẫn 1:** (Họ và tên, Cơ quan công tác)
*   **Hướng dẫn 2:** (Họ và tên, Cơ quan công tác)
`;

fs.writeFileSync(outputPath, dalatContent, 'utf8');
console.log("Da Lat Template created.");
