# 🧠 BỘ QUY TẮC & CẤU TRÚC DỰ ÁN (AI ONBOARDING GUIDE)

> **THÔNG ĐIỆP GỬI AI ASSISTANT:**
> Khi bạn (AI) được yêu cầu làm việc trong thư mục này, HÃY ĐỌC KỸ tài liệu này. Đây là kim chỉ nam về quy trình, cấu trúc và luật lệ học thuật của toàn bộ hệ thống.

---

## 📂 1. CẤU TRÚC THƯ MỤC LÕI (DIRECTORY ARCHITECTURE)
Hệ thống quản lý nhiều đề tài nghiên cứu Tiến sĩ/Bài báo độc lập, được tổ chức theo cấu trúc sau:

- `Global_Writing_Style_Guide.md` : **(QUAN TRỌNG)** Hiến pháp học thuật chung. Bắt buộc tuân thủ văn phong hàn lâm, chống AI, không dùng từ ngữ PR/Marketing.
- `index.html` : Cổng thông tin (PhD Portal) chứa link mở các Dashboard trực quan.
- `manage.js` : Trái tim của hệ thống. Dùng để tạo mới và biên dịch Markdown thành HTML Dashboard (Lệnh: `node manage.js compile <tên_dự_án>`).
- `Scripts/` : Thư mục chứa các script hỗ trợ (Fix bug, chuẩn hóa ref, update template...).
- `TaiLieuThamKhao/` : Chứa các file gốc (.pdf, .docx, .txt) làm tài liệu tham khảo, luận án mẫu, quy định ĐH Nha Trang...
- `Proposal_<Tên_Dự_Án>/` : Các kho chứa đề tài độc lập. Hiện tại gồm:
  - `Proposal_LePhucHai`: Đề cương VBM của NCS Lê Phúc Hải.
  - `Proposal_CuongThinh`: Đề cương của NCS Nguyễn Cường Thịnh.
  - `Proposal_AnhHuongCuaHop`: Bài báo cáo nhóm (Hải & Tín) về tác động của họp hành.

---

## 📜 2. NGUYÊN TẮC KẾ THỪA (INHERITANCE RULES)
Hệ thống sử dụng cơ chế luật đa cấp. AI **phải tuân thủ** thứ tự ưu tiên sau khi soạn thảo nội dung:

1. **Luật Địa Phương (Ưu tiên Cao nhất):** Kiểm tra file `Local_Journal_Requirements.md` nằm bên trong thư mục `Proposal_...` đang làm việc. File này định nghĩa giới hạn từ, chuẩn format (APA/Harvard), và các yêu cầu khắt khe riêng của hội đồng/tạp chí đó.
2. **Luật Toàn Cục (Ưu tiên Core):** Luôn áp dụng các nguyên tắc tại `Global_Writing_Style_Guide.md` ở thư mục gốc (Cách xưng hô khiêm tốn, thiết kế mô hình nhân quả chuẩn mực...).

---

## 🛠️ 3. QUY TRÌNH LÀM VIỆC (AI WORKFLOW)
Mỗi khi User yêu cầu chỉnh sửa/phát triển một đề cương:

1. **Xác định kho chứa:** Di chuyển vào thư mục `Proposal_<Tên_Dự_Án>` tương ứng.
2. **Nắm bắt luật chơi:** Đọc file `Local_Journal_Requirements.md` của thư mục đó.
3. **Thao tác nội dung:** Sửa các file Markdown chia nhỏ (vd: `01_DatVanDe.md`, `02_TongQuan.md`) hoặc file toàn văn (`PhD_...md`).
4. **Biên dịch:** Chạy lệnh `node manage.js compile <Tên_Dự_Án>` tại thư mục gốc `c:\ncsDL` để nối các file và tạo Dashboard mới.
   *(Ví dụ: `node manage.js compile LePhucHai`)*
5. **Kiểm tra:** Đảm bảo xuất ra thông báo "QUÁ TRÌNH BIÊN DỊCH HOÀN TẤT THÀNH CÔNG!" và hướng dẫn User xem kết quả tại `Dashboard_<Tên>.html` hoặc `index.html`.

---

## ⚠️ 4. NHỮNG ĐIỀU AI TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM
- KHÔNG tự ý vứt file tiện ích (.js, .py) hay tài liệu rác ra thư mục gốc `c:\ncsDL`.
- KHÔNG ghi đè cấu trúc Mermaid nếu chưa tắt cờ HTML (`htmlLabels: false`) vì sẽ làm hỏng chức năng xuất file Word MHT.
- KHÔNG tạo nội dung tự khen ngợi, sử dụng câu khẳng định tuyệt đối (Ví dụ: "Giải pháp hoàn hảo", "Chắc chắn rằng").
- KHÔNG thay đổi file `manage.js` trừ khi User có yêu cầu nâng cấp tính năng hệ thống rõ ràng.
