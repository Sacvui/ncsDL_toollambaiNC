const fs = require('fs');

let content = fs.readFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', 'utf8');

// Fix Section 5 (Ý nghĩa)
content = content.replace(/### 7\.1\. Đóng góp học thuật/g, '### 5.1. Đóng góp học thuật');
content = content.replace(/### 7\.2\. Đóng góp thực tiễn/g, '### 5.2. Đóng góp thực tiễn');

// Fix Section 8.1 (Mô hình)
content = content.replace(/### 3\.1\. Logic xây dựng mô hình/g, '#### 8.1.1. Logic xây dựng mô hình');
content = content.replace(/### 3\.2\. Mô hình nghiên cứu đề xuất/g, '#### 8.1.2. Mô hình nghiên cứu đề xuất');
content = content.replace(/### 3\.3\. Giả thuyết nghiên cứu/g, '#### 8.1.3. Giả thuyết nghiên cứu');
content = content.replace(/### 3\.4\. Định vị khoa học/g, '#### 8.1.4. Định vị khoa học');

// Fix Section 8.2 (Thiết kế)
content = content.replace(/### 4\.1\. Cách tiếp cận/g, '#### 8.2.1. Cách tiếp cận');
content = content.replace(/#### 4\.1\.1\. Giai đoạn 1: Nghiên cứu định tính \(Qualitative Phase\)/g, '* **Giai đoạn 1: Nghiên cứu định tính (Qualitative Phase)**');
content = content.replace(/#### 4\.1\.2\. Giai đoạn 2: Nghiên cứu thực nghiệm định lượng \(Quantitative Phase\)/g, '* **Giai đoạn 2: Nghiên cứu thực nghiệm định lượng (Quantitative Phase)**');
content = content.replace(/### 4\.2\. Thiết kế nghiên cứu/g, '#### 8.2.2. Thiết kế nghiên cứu');
content = content.replace(/### 4\.3\. Vật liệu thực nghiệm/g, '#### 8.2.3. Vật liệu thực nghiệm');
content = content.replace(/### 4\.4\. Đối tượng và Phương pháp/g, '#### 8.2.4. Đối tượng và Phương pháp');
content = content.replace(/### 4\.5\. Thang đo và Xây dựng/g, '#### 8.2.5. Thang đo và Xây dựng');
content = content.replace(/### 4\.6\. Phân tích dữ liệu/g, '#### 8.2.6. Phân tích dữ liệu');
content = content.replace(/### 4\.7\. Kiểm soát sai lệch/g, '#### 8.2.7. Kiểm soát sai lệch');
content = content.replace(/### 4\.8\. Đạo đức nghiên cứu/g, '#### 8.2.8. Đạo đức nghiên cứu');
content = content.replace(/### 4\.9\. Định vị sức mạnh/g, '#### 8.2.9. Định vị sức mạnh');

// Fix Section 8.3 (Thang đo)
content = content.replace(/## 5\. THANG ĐO & BẢNG CÂU HỎI \(MEASUREMENT MODEL & QUESTIONNAIRE\)/g, '### 8.3. Thang đo & Bảng câu hỏi (Measurement Model & Questionnaire)');
content = content.replace(/### 5\.1\. Nguyên tắc/g, '#### 8.3.1. Nguyên tắc');
content = content.replace(/### 5\.2\. Cấu trúc bảng hỏi/g, '#### 8.3.2. Cấu trúc bảng hỏi');
content = content.replace(/### 5\.3\. Biến kiểm tra/g, '#### 8.3.3. Biến kiểm tra');
content = content.replace(/### 5\.4\. Biến kiểm soát/g, '#### 8.3.4. Biến kiểm soát');
content = content.replace(/### 5\.5\. Kiểm định thang đo/g, '#### 8.3.5. Kiểm định thang đo');
content = content.replace(/### 5\.6\. Định vị điểm mạnh/g, '#### 8.3.6. Định vị điểm mạnh');

// Fix Section 9 (Kết quả)
content = content.replace(/### 10\.1\. Kết quả khoa học/g, '### 9.1. Kết quả khoa học');
content = content.replace(/### 10\.2\. Lộ trình công bố/g, '### 9.2. Lộ trình công bố');

fs.writeFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', content, 'utf8');
console.log("Numbering fixed.");
