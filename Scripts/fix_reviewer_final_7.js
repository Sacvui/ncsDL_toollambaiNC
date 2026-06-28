const fs = require('fs');

const filePath = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';
let content = fs.readFileSync(filePath, 'utf8');

// Section 1: Lý do chọn đề tài
content = content.replace(/### 1\.2\. Truy xuất nguồn gốc số như một tín hiệu minh bạch/g, '### 1.2. Giới hạn của marketing truyền thống và nhu cầu minh bạch số');

// Section 3: Mục tiêu và Câu hỏi nghiên cứu
const section3Regex = /## 3\. MỤC TIÊU NGHIÊN CỨU CỦA LUẬN ÁN[\s\S]*?## 4\. NỘI DUNG NGHIÊN CỨU/m;
const newSection3 = `## 3. MỤC TIÊU NGHIÊN CỨU CỦA LUẬN ÁN
### 3.1. Mục tiêu tổng quát
Kiểm định cơ chế tác động của nhận thức về truy xuất nguồn gốc số đến ý định mua sản phẩm nước yến chế biến sẵn, thông qua vai trò trung gian của tính xác thực thương hiệu.

### 3.2. Mục tiêu cụ thể
1.  **Xác định tác động của truy xuất nguồn gốc số:** Đánh giá ảnh hưởng của tín hiệu truy xuất nguồn gốc đến chất lượng thông tin cảm nhận và tính xác thực thương hiệu.
2.  **Làm rõ vai trò trung gian:** Kiểm định vai trò trung gian của tính xác thực thương hiệu trong việc kết nối nhận thức về tín hiệu số với ý định hành vi.
3.  **Kiểm định tác động kết quả:** Đánh giá sự ảnh hưởng của tính xác thực thương hiệu đến ý định mua hàng (purchase intention) và định giá sản phẩm (WTP).

### 3.3. Câu hỏi nghiên cứu
1.  Tín hiệu truy xuất nguồn gốc số tác động như thế nào đến chất lượng thông tin cảm nhận và tính xác thực thương hiệu?
2.  Tính xác thực thương hiệu đóng vai trò trung gian như thế nào trong cơ chế hình thành ý định tiêu dùng?
3.  Sự thay đổi về tính xác thực thương hiệu ảnh hưởng ra sao đến ý định mua hàng và mức sẵn lòng chi trả thêm (WTP) của khách hàng?

## 4. NỘI DUNG NGHIÊN CỨU`;
content = content.replace(section3Regex, newSection3);

// Section 4: Nội dung nghiên cứu
const section4Regex = /## 4\. NỘI DUNG NGHIÊN CỨU[\s\S]*?## 5\. Ý NGHĨA KHOA HỌC/m;
const newSection4 = `## 4. NỘI DUNG NGHIÊN CỨU
1.  **Xây dựng khung lý thuyết:** Hệ thống hóa cơ sở lý luận về Lý thuyết Tín hiệu (Signaling Theory), hàng hóa khó kiểm chứng (credence goods), và cơ chế hình thành tính xác thực.
2.  **Hoàn thiện thang đo và mô thức thực nghiệm:** Thiết lập các kịch bản thực nghiệm (có/không có tín hiệu truy xuất) và hiệu chỉnh thang đo thông qua đánh giá định tính.
3.  **Kiểm định bằng dữ liệu thực:** Thu thập dữ liệu khảo sát và xử lý thống kê để đánh giá độ tin cậy của thang đo cũng như kiểm định các giả thuyết trong mô hình cấu trúc.

## 5. Ý NGHĨA KHOA HỌC`;
content = content.replace(section4Regex, newSection4);

// Section 5: Đóng góp khoa học và thực tiễn
const section5Regex = /## 5\. Ý NGHĨA KHOA HỌC VÀ THỰC TIỄN CỦA ĐỀ TÀI[\s\S]*?## 6\. PHẠM VI NGHIÊN CỨU/m;
const newSection5 = `## 5. Ý NGHĨA KHOA HỌC VÀ THỰC TIỄN CỦA ĐỀ TÀI
### 5.1. Đóng góp cấp lý thuyết
*   **Kiểm định lại vai trò của tín hiệu minh bạch số:** Cung cấp bằng chứng thực nghiệm về việc truy xuất nguồn gốc số không chỉ là công cụ kỹ thuật mà còn hoạt động như một "tín hiệu nhận thức" mạnh mẽ đối với hàng hóa khó kiểm chứng.
*   **Làm rõ cơ chế Authenticity:** Bổ sung góc nhìn lý thuyết về cách một công cụ kỹ thuật khô khan có thể được người tiêu dùng chuyển hóa thành sự gắn kết tâm lý sâu sắc (Tính xác thực thương hiệu).
*   **Bổ sung bằng chứng từ bối cảnh Việt Nam:** Cung cấp dữ liệu thực chứng đáng tin cậy về hành vi của nhóm người tiêu dùng trẻ đối với sản phẩm chế biến sâu mang tính đặc thù cao.

### 5.2. Đóng góp cấp thực tiễn
*   Hỗ trợ trực tiếp cho các **doanh nghiệp nước yến RTD** trong việc hoạch định chiến lược minh bạch nguồn gốc.
*   Gợi ý phương thức **truyền thông dựa trên tín hiệu số** thay vì chỉ dựa vào các cam kết quảng cáo truyền thống.
*   Giúp các nhãn hàng **tối ưu ý định mua của Gen Z tại đô thị**, từ đó xây dựng lợi thế cạnh tranh bền vững nhờ sự chân thật của thương hiệu.

## 6. PHẠM VI NGHIÊN CỨU`;
content = content.replace(section5Regex, newSection5);

// Section 6 & 7: Phạm vi & Đối tượng
content = content.replace(/TP\.HCM\. Lý do chọn địa bàn này vì đây là thị trường tiêu thụ hiện đại, nơi người tiêu dùng có khả năng tiếp cận nhanh với các ứng dụng công nghệ và sự đa dạng của các sản phẩm FMCG cao nhất cả nước\./g, 'TP.HCM, thị trường đô thị lớn với độ tiếp cận công nghệ cao.');
content = content.replace(/từng sử dụng thực phẩm chức năng \/ nước giải khát dinh dưỡng\./g, 'có kinh nghiệm mua và sử dụng nước yến RTD hoặc các sản phẩm dinh dưỡng tương đương.');
content = content.replace(/TP\.HCM\./g, 'TP.HCM, thị trường đô thị lớn với độ tiếp cận công nghệ cao.');
// Clean up duplicate replacement just in case
content = content.replace(/TP\.HCM, thị trường đô thị lớn với độ tiếp cận công nghệ cao\., thị trường đô thị lớn với độ tiếp cận công nghệ cao\./g, 'TP.HCM, thị trường đô thị lớn với độ tiếp cận công nghệ cao.');

// Section 8: Phương pháp - Đơn giản hóa phần thao tác vs đo lường và PLS-SEM
const section82Regex = /#### 8\.2\.4\. Lý do chọn PLS-SEM[\s\S]*?### 8\.3\. Thang đo/m;
const newSection82 = `#### 8.2.4. Công cụ phân tích dữ liệu (PLS-SEM)
Nghiên cứu sử dụng mô hình PLS-SEM (SmartPLS 4) vì phương pháp này đặc biệt phù hợp với các mô hình nghiên cứu chứa biến tiềm ẩn (latent variables) và có định hướng mạnh về năng lực dự báo hành vi (predictive capability), đáp ứng tốt yêu cầu phân tích dữ liệu từ thiết kế thực nghiệm.

### 8.3. Thang đo`;
content = content.replace(section82Regex, newSection82);

// Section 9: Kết quả mong đợi (WTP consistency)
const section9Regex = /## 9\. KẾT QUẢ MONG ĐỢI[\s\S]*?## 10\. NGUỒN KINH PHÍ/m;
const newSection9 = `## 9. KẾT QUẢ MONG ĐỢI
Nghiên cứu kỳ vọng đạt được:
1.  Xác nhận vai trò trung gian cốt lõi của Tính xác thực thương hiệu (BA) trong việc kết nối tín hiệu truy xuất số với ý định mua hàng. Nếu mức độ tác động không đủ mạnh, nghiên cứu sẽ phân tích các rào cản nhận thức khiến tín hiệu kỹ thuật chưa phát huy tối đa hiệu quả.
2.  Chứng minh định lượng việc minh bạch thông tin ảnh hưởng trực tiếp đến giá trị kinh tế của sản phẩm yến sào thông qua mức sẵn lòng chi trả thêm (WTP được đo bằng định giá trực tiếp).

## 10. NGUỒN KINH PHÍ`;
content = content.replace(section9Regex, newSection9);

// Ensure no 2x2 remnants
content = content.replace(/thiết kế thực nghiệm 2x2/g, 'thiết kế thực nghiệm');
content = content.replace(/Thiết kế thực nghiệm 2x2/g, 'Thiết kế thực nghiệm');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update fix_reviewer_final_7 complete.');
