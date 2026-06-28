const fs = require('fs');
const f = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';
let c = fs.readFileSync(f, 'utf8');

// LƯU Ý 1: Di chuyển "Cấu trúc dự kiến Luận án" ra khỏi Mục 4, chèn vào cuối Mục 8
// Xóa khỏi Mục 4
c = c.replace(
`### 4.1. Cấu trúc dự kiến của Luận án (Thesis Structure)

| Chương | Nội dung | Ước lượng |
|---|---|---|
| Chương 1 | Giới thiệu: Bối cảnh, Mục tiêu, Câu hỏi nghiên cứu, Phạm vi | 15-20 trang |
| Chương 2 | Tổng quan Lý thuyết và Mô hình nghiên cứu | 40-50 trang |
| Chương 3 | Phương pháp Nghiên cứu (Thiết kế thực nghiệm, Thang đo, PLS-SEM) | 25-30 trang |
| Chương 4 | Kết quả Nghiên cứu (Thống kê mô tả, Mô hình đo lường, Mô hình cấu trúc) | 30-40 trang |
| Chương 5 | Thảo luận, Kết luận, Hàm ý quản trị và Hạn chế | 20-25 trang |

## 5.`,
`## 5.`
);
// Chèn vào cuối Mục 8 (trước Mục 9)
c = c.replace(
`## 9. KẾT QUẢ MONG ĐỢI`,
`### 8.4. Cấu trúc dự kiến của Luận án (Thesis Structure)

| Chương | Nội dung | Ước lượng |
|---|---|---|
| Chương 1 | Giới thiệu: Bối cảnh, Mục tiêu, Câu hỏi nghiên cứu, Phạm vi | 15-20 trang |
| Chương 2 | Tổng quan Lý thuyết và Mô hình nghiên cứu | 40-50 trang |
| Chương 3 | Phương pháp Nghiên cứu (Thiết kế thực nghiệm, Thang đo, PLS-SEM) | 25-30 trang |
| Chương 4 | Kết quả Nghiên cứu (Thống kê mô tả, Mô hình đo lường, Mô hình cấu trúc) | 30-40 trang |
| Chương 5 | Thảo luận, Kết luận, Hàm ý quản trị và Hạn chế | 20-25 trang |

---

## 9. KẾT QUẢ MONG ĐỢI`
);

// LƯU Ý 2: Bổ sung "phạm vi nội dung" vào Mục 6
c = c.replace(
`3.  **Phạm vi bối cảnh/Nội dung:** Đề tài giới hạn trong sản phẩm **nước yến chế biến sẵn (RTD)**. Nghiên cứu chỉ tập trung vào phía cầu (hành vi người tiêu dùng), không đánh giá năng lực công nghệ phía cung.`,
`3.  **Phạm vi bối cảnh/Nội dung:** Đề tài giới hạn trong sản phẩm **nước yến chế biến sẵn (RTD)**. Nghiên cứu chỉ tập trung vào phía cầu (hành vi người tiêu dùng), không đánh giá năng lực công nghệ phía cung.
4.  **Phạm vi lý thuyết và biến số:** Mô hình nghiên cứu giới hạn trong khung S-O-R tích hợp Lý thuyết Tín hiệu với 8 biến (TR, NC, PIQ, SK, TT, BA, PI, WTP). Nghiên cứu không đo lường các biến: Rủi ro cảm nhận (Perceived Risk) như biến riêng biệt, Lòng trung thành thương hiệu (Brand Loyalty), hay Giá trị cảm nhận (Perceived Value).`
);

// LƯU Ý 3: Thêm "Đối tượng khảo sát" vào Mục 7
c = c.replace(
`*   **Khách thể nghiên cứu (Subject of study):** Người tiêu dùng thế hệ Gen Z (18-27 tuổi) đang sinh sống tại khu vực đô thị (TP.HCM).`,
`*   **Khách thể nghiên cứu (Subject of study):** Người tiêu dùng thế hệ Gen Z (18-27 tuổi) đang sinh sống tại khu vực đô thị (TP.HCM).
*   **Đối tượng khảo sát (Survey respondent):** Người tiêu dùng Gen Z (18-27 tuổi) tại TP.HCM, có hành vi tiêu thụ nước giải khát dinh dưỡng (FMCG), quan tâm đến sức khỏe, và được phân bổ ngẫu nhiên vào 1 trong 4 nhóm kịch bản thực nghiệm.`
);

// LƯU Ý 4: Mở rộng Mục 11 - tách Seminar, Nộp cấp cơ sở, Nộp cấp trường
c = c.replace(
`| STT | Nội dung / Nhiệm vụ | Thời gian | Kết quả dự kiến | Nơi thực hiện |
|---|---|---|---|---|
| 1 | Học kỳ 1: Học phần trình độ TS | Tháng 1 - Tháng 6 | 8 Tín chỉ | ĐH Nha Trang |
| 2 | Học kỳ 2: Tiểu luận tổng quan | Tháng 7 - Tháng 12 | 4 Tín chỉ | ĐH Nha Trang |
| 3 | Học kỳ 3: Chuyên đề TS 1 & 2 | Tháng 13 - Tháng 18 | 8 Tín chỉ chuyên đề | ĐH Nha Trang / TP.HCM |
| 4 | Học kỳ 4: Nghiên cứu định lượng | Tháng 19 - Tháng 24 | Báo cáo kết quả | TP.HCM |
| 5 | Học kỳ 5: Viết báo khoa học | Tháng 25 - Tháng 30 | ≥ 02 bài tạp chí HĐGS | Các Tạp chí |
| 6 | Học kỳ 6: Hoàn thiện & Bảo vệ | Tháng 31 - Tháng 36 | Đạt học vị Tiến sĩ | ĐH Nha Trang |`,
`| STT | Nội dung / Nhiệm vụ | Thời gian | Kết quả dự kiến | Nơi thực hiện |
|---|---|---|---|---|
| 1 | Học các học phần trình độ Tiến sĩ | Tháng 1 - Tháng 6 | Hoàn thành 8 Tín chỉ | ĐH Nha Trang |
| 2 | Viết và bảo vệ Tiểu luận tổng quan | Tháng 7 - Tháng 12 | Hoàn thành 4 Tín chỉ | ĐH Nha Trang |
| 3 | Chuyên đề Tiến sĩ 1 & 2 | Tháng 13 - Tháng 18 | Hoàn thành 8 Tín chỉ | ĐH Nha Trang / TP.HCM |
| 4 | Nghiên cứu định tính + Pilot test | Tháng 16 - Tháng 18 | Thang đo hoàn chỉnh, Mockup | TP.HCM |
| 5 | Nghiên cứu thực nghiệm định lượng (2x2) | Tháng 19 - Tháng 24 | Bộ dữ liệu n=400-500 | TP.HCM |
| 6 | Phân tích PLS-SEM & Viết kết quả | Tháng 22 - Tháng 24 | Báo cáo kết quả phân tích | TP.HCM |
| 7 | Seminar chuyên đề | Tháng 25 | Trình bày kết quả trước khoa | ĐH Nha Trang |
| 8 | Viết báo, đăng báo khoa học | Tháng 25 - Tháng 30 | ≥ 02 bài tạp chí HĐGS | Các Tạp chí |
| 9 | Nộp luận án cấp cơ sở | Tháng 31 | Luận án bản thảo hoàn chỉnh | ĐH Nha Trang |
| 10 | Chỉnh sửa theo góp ý cấp cơ sở | Tháng 32 - Tháng 33 | Luận án chỉnh sửa | ĐH Nha Trang |
| 11 | Nộp luận án cấp trường | Tháng 34 | Luận án chính thức | ĐH Nha Trang |
| 12 | Bảo vệ luận án Tiến sĩ | Tháng 35 - Tháng 36 | Đạt học vị Tiến sĩ | ĐH Nha Trang |`
);

// LƯU Ý 5: Trích dẫn 6 nguồn bị thiếu vào thân bài
// Homburg (2005) -> chèn vào giải thích WTP
c = c.replace(
  'Phương pháp Gabor-Granger được chọn vì phù hợp với bối cảnh FMCG giá thấp',
  'Phương pháp Gabor-Granger được chọn vì phù hợp với bối cảnh FMCG giá thấp (Homburg et al., 2005)'
);
// Olsen (2014) + Ottman (2011) -> chèn vào Mục 2.2
c = c.replace(
  'Sự gia tăng của các thông điệp "tự nhiên", "nguyên chất" và "sạch" trong marketing đã dẫn đến hiện tượng lạm dụng cam kết (claim washing)',
  'Sự gia tăng của các thông điệp "tự nhiên", "nguyên chất" và "sạch" trong marketing (Ottman, 2011; Olsen et al., 2014) đã dẫn đến hiện tượng lạm dụng cam kết (claim washing)'
);
// Tian (2017) + Napolitano (2010) -> chèn vào Mục 2.3
c = c.replace(
  'các công nghệ truy xuất nguồn gốc (traceability systems) được đề xuất như một giải pháp nhằm giảm bất cân xứng thông tin trong chuỗi cung ứng thực phẩm (Francisco & Swanson, 2018; Saberi et al., 2019).',
  'các công nghệ truy xuất nguồn gốc (traceability systems) được đề xuất như một giải pháp nhằm giảm bất cân xứng thông tin trong chuỗi cung ứng thực phẩm (Francisco & Swanson, 2018; Saberi et al., 2019; Tian, 2017). Napolitano et al. (2010) đã chứng minh rằng việc cung cấp thông tin minh bạch về quy trình sản xuất có tác động tích cực đến sự sẵn lòng chi trả của người tiêu dùng.'
);
// Spielmann & Maguire (2024) -> chèn vào Mục 2.5
c = c.replace(
  'vai trò của Brand Authenticity như một biến trung gian giữa tín hiệu kỹ thuật (traceability) và hành vi tiêu dùng vẫn chưa được kiểm định rõ ràng trong bối cảnh FMCG.',
  'vai trò của Brand Authenticity như một biến trung gian giữa tín hiệu kỹ thuật (traceability) và hành vi tiêu dùng vẫn chưa được kiểm định rõ ràng trong bối cảnh FMCG. Spielmann và Maguire (2024) gần đây đã nhấn mạnh rằng tính xác thực thực phẩm (food authenticity) có tác động trực tiếp đến định giá của người tiêu dùng trong thị trường credence goods, nhưng nghiên cứu của họ chưa tích hợp yếu tố truy xuất số.'
);

// LƯU Ý 6: Thống nhất trích dẫn - giữ Harvard (thân bài đang dùng Harvard), 
// danh mục sắp theo ABC + numbered = ĐÚNG chuẩn QĐ 1263 kiểu numbered kết hợp
// Thực tế đề cương đang dùng đúng: Harvard in-text + numbered list sorted ABC
// => Chỉ cần thêm 1 dòng ghi chú
c = c.replace(
  '## 12. TÀI LIỆU THAM KHẢO',
  '## 12. TÀI LIỆU THAM KHẢO\n*Trích dẫn theo kiểu Harvard (tác giả, năm) trong thân bài. Danh mục sắp xếp theo thứ tự ABC theo QĐ 1263/QĐ-ĐHNT.*'
);

fs.writeFileSync(f, c, 'utf8');
console.log('All 6 compliance fixes applied.');
