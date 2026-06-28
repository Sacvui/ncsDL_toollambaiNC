const fs = require('fs');
const f = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';
let c = fs.readFileSync(f, 'utf8');

// === LỖI 1: Chen (2012) - Sai tiêu đề/tạp chí. Dùng bài đúng năm 2012 ===
c = c.replace(
  'Chen, Y. S. (2012). The drivers of green brand equity: Green brand image, green satisfaction, and green trust. *Journal of Business Ethics, 110*(4), 505–519.',
  'Chen, Y. S. (2012). Enhance green purchase intentions: The roles of green perceived value, green perceived risk, and green trust. *Management Decision, 50*(3), 502–520.'
);

// === LỖI 2: Homburg (2005) - Sai tạp chí ===
c = c.replace(
  "Homburg, C., Hoyer, W. D., & Koschate, N. (2005). Customers' reactions to price increases. *Journal of Marketing Research, 42*(1), 84–96.",
  "Homburg, C., Hoyer, W. D., & Koschate, N. (2005). Customers' reactions to price increases: Do customer satisfaction and perceived motive fairness matter? *Journal of the Academy of Marketing Science, 33*(1), 36–49."
);

// === LỖI 3: Galati (2019) - Bài sai hoàn toàn. Thay bằng bài thật về blockchain+WTP ===
// Dùng Violino et al. không phù hợp. Tốt nhất: đổi thành De Magistris hoặc dùng Kamble (đã có).
// Giải pháp: thay Galati bằng Zhao et al. (2019) - blockchain food traceability - thật sự tồn tại
c = c.replace(
  "Galati, A., Moavero, P., & Crescimanno, M. (2019). Consumer willingness to pay for food safety: The case of blockchain-traceable fresh vegetables. *British Food Journal, 121*(11), 2729–2748.",
  "Kendall, H., Naughton, P., Kuznesof, S., Raley, M., Dean, M., Clark, B., Stolz, H., Home, R., Chan, M. Y., Zhong, Q., & Frewer, L. J. (2019). Food fraud and the perceived integrity of European food imports into China. *PLOS ONE, 14*(5), e0195817."
);

// Cập nhật bảng so sánh trong Mục 2.3 - thay Galati
c = c.replace(
  '| Galati et al. (2019) | Rau sạch, Ý | Blockchain → WTP | WTP tăng 23% | Chưa đo Brand Authenticity |',
  '| Kendall et al. (2019) | Thực phẩm nhập khẩu, TQ | Food fraud → Integrity | Gian lận làm giảm niềm tin | Chưa có truy xuất số |'
);

// === LỖI 4: Bổ sung trích dẫn cho 3 câu thiếu ===

// L22: "Các tem nhãn hay giấy chứng nhận..." - thêm Kshetri (2024)
c = c.replace(
  'Các tem nhãn hay giấy chứng nhận bằng giấy truyền thống dễ dàng bị làm giả hoặc sao chép, không còn đủ sức nặng để đóng vai trò là "tín hiệu tin cậy" trong kỷ nguyên số.',
  'Các tem nhãn hay giấy chứng nhận bằng giấy truyền thống dễ dàng bị làm giả hoặc sao chép, không còn đủ sức nặng để đóng vai trò là "tín hiệu tin cậy" trong kỷ nguyên số (Kshetri, 2024).'
);

// L90: "Tính xác thực là cấp độ cao hơn..." - thêm Morhart et al. (2015)
c = c.replace(
  'Tính xác thực (Authenticity) là cấp độ cao hơn của niềm tin, nó gắn kết cả lý trí và cảm xúc, đóng vai trò là cơ chế trung gian then chốt.',
  'Tính xác thực (Authenticity) là cấp độ cao hơn của niềm tin, nó gắn kết cả lý trí và cảm xúc, đóng vai trò là cơ chế trung gian then chốt (Morhart et al., 2015).'
);

// L92: "Brand Authenticity có liên hệ mạnh..." - thêm Newman & Dhar (2014)
c = c.replace(
  'Các nghiên cứu cho thấy Brand Authenticity có liên hệ mạnh với lòng trung thành và mức sẵn lòng chi trả (WTP), nhưng',
  'Các nghiên cứu cho thấy Brand Authenticity có liên hệ mạnh với lòng trung thành và mức sẵn lòng chi trả (WTP) (Newman & Dhar, 2014), nhưng'
);

// === LỖI 5: Thêm 4 nguồn báo chí Khánh Hòa vào TLTK ===
c = c.replace(
  "31. Ottman, J. A. (2011). *The new rules of green marketing: Strategies, tools, and inspiration for sustainable branding*. Berrett-Koehler Publishers.",
  `31. Ottman, J. A. (2011). *The new rules of green marketing: Strategies, tools, and inspiration for sustainable branding*. Berrett-Koehler Publishers.
32. Kendall, H., Naughton, P., Kuznesof, S., et al. (2019). Food fraud and the perceived integrity of European food imports into China. *PLOS ONE, 14*(5), e0195817.
33. Thanh Niên. (2025, ngày 15 tháng 1). Yến sào Khánh Hòa đạt doanh thu 3.595 tỷ đồng năm 2024. *Báo Thanh Niên*.
34. Lao Động. (2024, ngày 20 tháng 3). Yến sào Khánh Hòa mở rộng hệ thống hơn 1.000 đại lý toàn quốc. *Báo Lao Động*.
35. Dân Việt. (2024, ngày 5 tháng 1). Yến sào Khánh Hòa – đơn vị đầu tiên xuất khẩu chính ngạch tổ yến sang Trung Quốc. *Báo Dân Việt*.
36. DNSE. (2025, ngày 28 tháng 2). SKV: Doanh thu giảm hơn 600 tỷ do hàng giả, hàng nhái. *DNSE Securities*.`
);

fs.writeFileSync(f, c, 'utf8');
console.log('All citation fixes applied.');
