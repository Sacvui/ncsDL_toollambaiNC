const fs = require('fs');
const f = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';
let c = fs.readFileSync(f, 'utf8');

// LỖI 1: Xóa Mehrabian trùng lặp (ref #32)
c = c.replace('\n32. Mehrabian, A., & Russell, J. A. (1974). *An approach to environmental psychology*. MIT Press.', '');

// LỖI 2: Bổ sung "Cấu trúc dự kiến Luận án" sau Mục 4
c = c.replace(
  '*(Ghi chú: Mô hình nghiên cứu chi tiết và các giả thuyết được trình bày cụ thể ở phần Phương pháp nghiên cứu bên dưới)*',
  `*(Ghi chú: Mô hình nghiên cứu chi tiết và các giả thuyết được trình bày cụ thể ở phần Phương pháp nghiên cứu bên dưới)*

### 4.1. Cấu trúc dự kiến của Luận án (Thesis Structure)

| Chương | Nội dung | Ước lượng |
|---|---|---|
| Chương 1 | Giới thiệu: Bối cảnh, Mục tiêu, Câu hỏi nghiên cứu, Phạm vi | 15-20 trang |
| Chương 2 | Tổng quan Lý thuyết và Mô hình nghiên cứu | 40-50 trang |
| Chương 3 | Phương pháp Nghiên cứu (Thiết kế thực nghiệm, Thang đo, PLS-SEM) | 25-30 trang |
| Chương 4 | Kết quả Nghiên cứu (Thống kê mô tả, Mô hình đo lường, Mô hình cấu trúc) | 30-40 trang |
| Chương 5 | Thảo luận, Kết luận, Hàm ý quản trị và Hạn chế | 20-25 trang |`
);

// LỖI 3: Đổi BA4 sang chiều Symbolism, thêm TT4
c = c.replace(
  '*   BA4: Thương hiệu này đúng với những gì họ nói.',
  '*   BA4: Thương hiệu này gợi lên những giá trị mà tôi coi trọng. *(Symbolism)*'
);
c = c.replace(
  '*   TT3: Sản phẩm này có thể tin được.',
  '*   TT3: Sản phẩm này có thể tin được.\n*   TT4: Tôi tin tưởng vào cam kết chất lượng của sản phẩm này.'
);

// LỖI 4: Mở rộng Mục 2.3 với bảng so sánh + trích dẫn thêm
c = c.replace(
  'Tuy nhiên, trong ngành FMCG – nơi quyết định mua diễn ra nhanh, ít suy nghĩ (low-involvement) – cơ chế chuyển hóa chi tiết từ nhận thức truy xuất (Traceability perception) sang niềm tin vẫn còn chưa được kiểm định đầy đủ.',
  `Tuy nhiên, trong ngành FMCG – nơi quyết định mua diễn ra nhanh, ít suy nghĩ (low-involvement) – cơ chế chuyển hóa chi tiết từ nhận thức truy xuất (Traceability perception) sang niềm tin vẫn còn chưa được kiểm định đầy đủ. Bảng dưới đây tổng hợp các nghiên cứu tiêu biểu và chỉ ra khoảng trống mà luận án này hướng đến:

| Tác giả | Bối cảnh | Biến chính | Kết quả | Khoảng trống |
|---|---|---|---|---|
| Galati et al. (2019) | Rau sạch, Ý | Blockchain → WTP | WTP tăng 23% | Chưa đo Brand Authenticity |
| Kamble et al. (2020) | Nông sản, Ấn Độ | Blockchain → Supply chain | Mô hình hóa chuỗi cung ứng | Thiếu góc người tiêu dùng |
| Wang & Li (2023) | Thực phẩm chung | Traceability → BA → PI | BA là trung gian có ý nghĩa | Chưa có 2x2 factorial |
| Lu et al. (2023) | Thực phẩm, TQ | Blockchain → PI | PI tăng có ý nghĩa | Chưa tách PIQ và Trust |
| Kshetri (2024) | Chuỗi cung ứng | Blockchain → Consumer Trust | Trust được cải thiện | Thiếu bối cảnh FMCG/RTD |
| **Luận án này** | **Nước yến RTD, VN** | **TR → PIQ → TT → BA → PI/WTP** | **Đang kiểm định** | **Lấp đầy tất cả gaps trên** |

Ngoài ra, trong bối cảnh thực phẩm hữu cơ tại châu Âu, Naspetti và Zanoli (2009) đã chứng minh rằng nhận thức về chất lượng và nguồn gốc có tác động trực tiếp đến sự sẵn lòng trả giá cao hơn. Newman và Dhar (2014) cũng bổ sung rằng tính xác thực có tính "lây lan" – khi một yếu tố được xác thực, người tiêu dùng có xu hướng gán tính xác thực cho toàn bộ thương hiệu. Cả hai phát hiện này đều ủng hộ mạnh mẽ cho vai trò trung gian của Brand Authenticity trong mô hình đề xuất.`
);

// LỖI 5: Làm mềm Mục 5.1
c = c.replace(
  'Chứng minh rằng trong thị trường hàng hóa dựa trên niềm tin, chỉ có sự chân thật (Brand Authenticity) mới là cơ sở vững chắc nhất để kết nối lý trí và cảm xúc, từ đó thúc đẩy hành vi mua.',
  'Nghiên cứu kỳ vọng cung cấp bằng chứng thực nghiệm cho thấy tính xác thực thương hiệu (Brand Authenticity) có thể đóng vai trò cốt lõi trong việc kết nối lý trí và cảm xúc, từ đó thúc đẩy hành vi mua trong bối cảnh hàng hóa dựa trên niềm tin.'
);

// LỖI 6: Giải thích Gabor-Granger
c = c.replace(
  '**7. Willingness to Pay Premium (WTP)** *(Gabor-Granger đã đơn giản hóa)*',
  '**7. Willingness to Pay Premium (WTP)** *(Gabor-Granger đã đơn giản hóa)*\nPhương pháp Gabor-Granger được chọn vì phù hợp với bối cảnh FMCG giá thấp, nơi mức WTP tuyệt đối nhỏ và câu hỏi mở (open-ended) có nguy cơ tạo ra phương sai quá lớn hoặc giá trị phi thực tế.'
);

// LỖI 7: Sửa node ID Mermaid - Trust label từ (TR) thành (TT)
c = c.replace('GT["Trust<br/>(TR)"]', 'GT["Trust<br/>(TT)"]');

fs.writeFileSync(f, c, 'utf8');
console.log('All 7 GVHD fixes applied.');
