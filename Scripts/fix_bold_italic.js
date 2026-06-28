const fs = require('fs');
const f = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';
let c = fs.readFileSync(f, 'utf8');

// === QUY TẮC: ===
// GIỮBOLD: heading labels (Mục tiêu 1:, Nội dung 1:, Gap 1, etc), biến lần đầu
// BỎ BOLD: số liệu trong câu văn, tên phương pháp, tên địa danh, từ thông thường

// 1. Bỏ bold số liệu trong Mục 1.1 điểm 2
c = c.replace('**8.500 tỷ VNĐ**', '8.500 tỷ VNĐ');

// 2. Bỏ bold số liệu trong Mục 1.1 điểm 4 (Khánh Hòa) 
c = c.replace('**3.595 tỷ VNĐ**', '3.595 tỷ VNĐ');
c = c.replace('**13.000 tỷ VNĐ**', '13.000 tỷ VNĐ');
c = c.replace('**1.000 đại lý**', '1.000 đại lý');
c = c.replace('**Chỉ dẫn địa lý (Geographical Indication)**', 'Chỉ dẫn địa lý (Geographical Indication)');
c = c.replace('**sụt giảm doanh thu hơn 600 tỷ VNĐ**', 'sụt giảm doanh thu hơn 600 tỷ VNĐ');

// 3. Bỏ bold trong Mục 6 (phạm vi) - tên địa danh không cần bold
c = c.replace('**TP.HCM**', 'TP.HCM');
c = c.replace('**nước yến chế biến sẵn (RTD)**', 'nước yến chế biến sẵn (RTD)');

// 4. Bỏ bold "Phạm vi..." labels - chỉ là liệt kê bình thường
c = c.replace('**Phạm vi không gian:**', 'Phạm vi không gian:');
c = c.replace('**Phạm vi thời gian:**', 'Phạm vi thời gian:');
c = c.replace('**Phạm vi bối cảnh/Nội dung:**', 'Phạm vi bối cảnh/Nội dung:');
c = c.replace('**Phạm vi lý thuyết và biến số:**', 'Phạm vi lý thuyết và biến số:');

// 5. Bỏ bold trong bảng so sánh Mục 2.3 (dòng "Luận án này")
c = c.replace('| **Luận án này**', '| Luận án này');
c = c.replace('| **Nước yến RTD, VN**', '| Nước yến RTD, VN');
c = c.replace('| **TR → PIQ → TT → BA → PI/WTP**', '| TR → PIQ → TT → BA → PI/WTP');
c = c.replace('| **Đang kiểm định**', '| Đang kiểm định');
c = c.replace('| **Lấp đầy tất cả gaps trên**', '| Lấp đầy tất cả gaps trên');

// 6. Bỏ bold tên phương pháp trong Mục 8
c = c.replace('**hỗn hợp (Mixed-methods)**', 'hỗn hợp (Mixed-methods)');
c = c.replace('**PLS-SEM**', 'PLS-SEM');
c = c.replace('**Likert 7 điểm**', 'Likert 7 điểm');
c = c.replace('**thương hiệu giả định**', 'thương hiệu giả định');

// 7. Bỏ bold labels trong Đối tượng NC (Mục 7) - dùng italic thay thế
c = c.replace('**Đối tượng nghiên cứu (Object of study):**', '*Đối tượng nghiên cứu (Object of study):*');
c = c.replace('**Khách thể nghiên cứu (Subject of study):**', '*Khách thể nghiên cứu (Subject of study):*');
c = c.replace('**Đối tượng khảo sát (Survey respondent):**', '*Đối tượng khảo sát (Survey respondent):*');

// 8. Bỏ bold label trong Mục 8.2.4 
c = c.replace('**Đối tượng:**', '*Đối tượng:*');
c = c.replace('**Phương pháp lấy mẫu:**', '*Phương pháp lấy mẫu:*');
c = c.replace('**Kích thước mẫu dự kiến:**', '*Kích thước mẫu dự kiến:*');

// 9. Bỏ bold label trong Mục 8.2.5
c = c.replace('**Quy trình chuẩn hóa:**', '*Quy trình chuẩn hóa:*');
c = c.replace('**Pilot test:**', '*Pilot test:*');

// 10. Fix BA4 double italic 
c = c.replace('*(Symbolism)*', '(Symbolism)');

fs.writeFileSync(f, c, 'utf8');
console.log('Bold/italic cleanup done.');
