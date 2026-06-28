const fs = require('fs');

let content = fs.readFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', 'utf8');

// 1. Cập nhật Bước 1 (Thêm rho_A)
content = content.replace(
    /Kiểm tra độ tin cậy thông qua Cronbach’s Alpha và Composite Reliability \(CR\)/g,
    'Kiểm tra độ tin cậy thông qua Cronbach’s Alpha, chỉ số rho_A (đặc thù của PLS), và Composite Reliability (CR)'
);

// 2. Cập nhật Bước 3 (Thêm PLSpredict Q2)
content = content.replace(
    /Đánh giá các hệ số đường dẫn \(Path coefficients \* β\), hệ số xác định \(R²\), và kích thước tác động \(f²\)\./g,
    'Đánh giá các hệ số đường dẫn (Path coefficients β), hệ số xác định (R²), kích thước tác động (f²), và năng lực dự báo ngoài mẫu (out-of-sample prediction) thông qua thuật toán PLSpredict (Q² predict).'
);

// 3. Cập nhật phần kiểm soát CMB (Bỏ Harman's test của SPSS, dùng Full Collinearity VIF của SmartPLS)
content = content.replace(
    /Trong khâu phân tích dữ liệu, phương sai phương pháp chung được kiểm tra thông qua Harman’s single factor test và Full collinearity VIF\./g,
    'Trong khâu phân tích dữ liệu bằng phần mềm SmartPLS, phương sai phương pháp chung được kiểm tra hoàn toàn bằng kỹ thuật Full collinearity VIF (đảm bảo các hệ số VIF nội sinh đều < 3.3 theo tiêu chuẩn của Kock, 2015).'
);

// 4. Nhấn mạnh việc dùng SmartPLS 4 (bản mới nhất)
content = content.replace(
    /Phương pháp phân tích cốt lõi là \*\*PLS-SEM\*\*\./g,
    'Phương pháp phân tích cốt lõi là **PLS-SEM** (thực hiện hoàn toàn trên phần mềm **SmartPLS 4**).'
);

fs.writeFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', content, 'utf8');
console.log("Updated to Full SmartPLS workflow.");
