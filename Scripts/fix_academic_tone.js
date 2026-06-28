const fs = require('fs');

let content = fs.readFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', 'utf8');

// 1. Hyperbolic words
content = content.replace(/minh bạch hóa triệt để/g, 'nâng cao đáng kể tính minh bạch');
content = content.replace(/giải quyết tận gốc/g, 'giải quyết căn bản');
content = content.replace(/'người tốt' và 'kẻ xấu'/g, 'doanh nghiệp minh bạch và doanh nghiệp cơ hội');
content = content.replace(/tập trung toàn lực để làm nổi bật/g, 'nhằm làm rõ');
content = content.replace(/hoàn toàn vào yếu tố nhận thức \(Perception\): Các câu hỏi được thiết kế đúng chuẩn chuyên ngành Hành vi người tiêu dùng \(Consumer Behavior\), không đòi hỏi kiến thức kỹ thuật về blockchain, tránh rủi ro lạc đề/g, 'vào yếu tố nhận thức (Perception): Các cấu trúc đo lường được thiết kế đúng chuẩn chuyên ngành hành vi người tiêu dùng, tập trung vào trải nghiệm khách hàng');
content = content.replace(/bền vững trong kỷ nguyên công nghệ số/g, 'bền vững');

// 2. Inappropriate bolding
content = content.replace(/\*\*khoảng trống tri thức và thực tiễn\*\*/g, 'khoảng trống tri thức và thực tiễn');
content = content.replace(/\*\*Bản sao số \(Digital Twin\) \/ Mockup sản phẩm\*\*/g, 'Bản sao số (Digital Twin) / Mockup sản phẩm');
content = content.replace(/\*\*thương hiệu giả định \(Fictitious Brand\)\*\*/g, 'thương hiệu giả định (fictitious brand)');
content = content.replace(/\*\*hệ thống Mockup\/Pilot in-house\*\*/g, 'hệ thống mockup/pilot in-house');
content = content.replace(/khu biệt mẫu tại \*\*TP\.HCM\*\*/g, 'khu biệt mẫu tại TP.HCM');

// 3. Annotations
content = content.replace(/\(credence goods\) \(hàng hóa dựa trên niềm tin\)/g, '(credence goods)');
content = content.replace(/\(Theoretical Framework \* Integrated Model\)/g, '(Theoretical Framework - Integrated Model)');
content = content.replace(/\(KEY CONTRIBUTION\)/g, '');
content = content.replace(/\(High Internal Validity\):/g, ':');
content = content.replace(/\(Realistic Experience\):/g, ':');
content = content.replace(/\(Consumer Behavior Alignment\):/g, ':');
content = content.replace(/\* Adapted from traceability literature\)/g, '- Adapted from traceability literature)');
content = content.replace(/, chỉ số rho_A \(đặc thù của PLS\),/g, ', chỉ số rho_A,');

// 4. Sentences and Section titles
content = content.replace(/chất tạo đặc hoặc đường hóa học/g, 'thành phần nhân tạo hoặc vi phạm tỷ lệ cam kết');
content = content.replace(/## 11\. QUẢN LÝ RỦI RO VÀ GIẢI PHÁP/g, '## 11. TÍNH KHẢ THI CỦA ĐỀ TÀI');
content = content.replace(/## 12\. KẾ HOẠCH CHÍNH SÁCH & ĐỀ XUÁT/g, '## 12. HÀM Ý QUẢN TRỊ VÀ CHÍNH SÁCH');
content = content.replace(/\* \*\*Rủi ro công nghệ:\*\*/g, '* **Tính khả thi về công nghệ:**');
content = content.replace(/\* \*\*Rủi ro thu thập dữ liệu:\*\*/g, '* **Tính khả thi về dữ liệu:**');
content = content.replace(/\* \*\*Rủi ro đạo đức:\*\*/g, '* **Tuân thủ đạo đức nghiên cứu:**');
content = content.replace(/\* \*\*Rủi ro thị trường:\*\*/g, '* **Tính khả thi về ứng dụng:**');

fs.writeFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', content, 'utf8');
console.log("Academic tone filtering applied.");
