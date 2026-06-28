const fs = require('fs');

let content = fs.readFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', 'utf8');

// Update section 11 table to match Nha Trang's specific credit program
const oldTable = `| 1 | Học các học phần ở trình độ Tiến sĩ và CĐ 1 | Tháng 1 - Tháng 6 | Hoàn thành chứng chỉ các môn học | ĐH Nha Trang |
| 2 | Viết Tiểu luận tổng quan và CĐ 2 | Tháng 7 - Tháng 12 | Bảo vệ thành công chuyên đề | ĐH Nha Trang |
| 3 | Nghiên cứu định tính và Pilot Test | Tháng 13 - Tháng 18 | Thang đo hiệu chỉnh (CVI > 0.8) | TP.HCM |
| 4 | Thu thập và xử lý dữ liệu thực nghiệm (PLS-SEM) | Tháng 19 - Tháng 24 | Báo cáo kết quả định lượng | TP.HCM |
| 5 | Viết bài, đăng bài trên các tạp chí HĐGS | Tháng 25 - Tháng 30 | Có ít nhất 02 bài báo được đăng | Các Tạp chí |
| 6 | Viết toàn văn luận án & Seminar cấp Bộ môn | Tháng 31 - Tháng 33 | Nộp bản thảo luận án cấp cơ sở | ĐH Nha Trang |
| 7 | Phản biện độc lập & Nộp luận án cấp Trường | Tháng 34 - Tháng 35 | Nhận ý kiến đồng ý bảo vệ | ĐH Nha Trang |
| 8 | Bảo vệ luận án cấp Trường | Tháng 36 | Đạt học vị Tiến sĩ | ĐH Nha Trang |`;

const newTable = `| 1 | Học kỳ 1: Học phần trình độ TS (Tổng quan NCKH, Các công cụ trong NCKH, Tự chọn) | Tháng 1 - Tháng 6 | Hoàn thành 8 Tín chỉ | ĐH Nha Trang |
| 2 | Học kỳ 2: Viết và bảo vệ Tiểu luận tổng quan | Tháng 7 - Tháng 12 | Hoàn thành 4 Tín chỉ | ĐH Nha Trang |
| 3 | Học kỳ 3: Chuyên đề Tiến sĩ 1 & 2, Bắt đầu làm Luận án | Tháng 13 - Tháng 18 | Hoàn thành 8 Tín chỉ chuyên đề | ĐH Nha Trang / TP.HCM |
| 4 | Học kỳ 4: Nghiên cứu định lượng & Xử lý dữ liệu (PLS-SEM) | Tháng 19 - Tháng 24 | Báo cáo kết quả định lượng | TP.HCM |
| 5 | Học kỳ 5: Viết báo khoa học (Seminar chuyên đề) | Tháng 25 - Tháng 30 | Đăng ít nhất 02 bài tạp chí HĐGS | Các Tạp chí |
| 6 | Học kỳ 6: Hoàn thiện toàn văn, Nộp luận án cấp cơ sở & Cấp trường | Tháng 31 - Tháng 36 | Bảo vệ thành công, Đạt học vị Tiến sĩ | ĐH Nha Trang |`;

content = content.replace(oldTable, newTable);

fs.writeFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', content, 'utf8');
console.log("Updated study plan to match NTU credits.");
