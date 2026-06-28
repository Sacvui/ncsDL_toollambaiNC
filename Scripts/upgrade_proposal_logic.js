const fs = require('fs');
const path = require('path');

const dashboardPath = path.join(__dirname, 'dashboard_data.json');
let data = JSON.parse(fs.readFileSync(dashboardPath, 'utf8'));

// Cập nhật từng standalone
data.standalones.forEach((standalone, index) => {
    if (!standalone.content) return;
    
    let text = standalone.content;

    // 1. Hạ tông học thuật & Khử Marketing
    text = text.replace(/khủng hoảng niềm tin/g, 'sự suy giảm niềm tin');
    text = text.replace(/tín hiệu tốn kém/g, 'dấu hiệu nhận biết (signals)');
    text = text.replace(/chưa có ai nghiên cứu/g, 'chưa được kiểm chứng đầy đủ');
    text = text.replace(/hoàn toàn mới/g, 'có tính mới');
    text = text.replace(/chắc chắn/g, 'gợi ý rằng');

    // 2. Chỉnh trật tự nhân quả: TT -> BA thành BA -> TT
    text = text.replace(/TR → PIQ → TT → BA/g, 'TR → PIQ → BA → TT');
    text = text.replace(/TT → BA/g, 'BA → TT');
    
    // Thay đổi giả thuyết
    // Cũ: Niềm tin (TT) tác động tích cực đến Tính xác thực thương hiệu (BA).
    // Mới: Tính xác thực thương hiệu (BA) tác động tích cực đến Niềm tin (TT).
    text = text.replace(/Niềm tin \(TT\) tác động tích cực đến Tính xác thực thương hiệu \(BA\)/g, 'Tính xác thực thương hiệu (BA) tác động tích cực đến Niềm tin (TT)');
    
    // Điều chỉnh H7 và H9 nếu cần
    // H7 (+): Niềm tin (TT) tác động tích cực đến Tính xác thực thương hiệu (BA). => Đã bị replace ở trên
    // Chúng ta cần cẩn thận với số hiệu. Tạm thời replace text đã đủ hiểu.
    
    // 3. Rào chắn Thực nghiệm
    if (text.includes('Thực nghiệm') || text.includes('2x2')) {
        // Chèn thêm Manipulation Check và Random Assignment vào đoạn mô tả thiết kế
        if (!text.includes('Kiểm tra thao tác kích thích')) {
            text = text.replace(
                /(Phương pháp Gabor-Granger.*?WTP.*?$)/m, 
                `$1\n\n**Kiểm tra thao tác kích thích (Manipulation Check) & Phân nhóm:**\nĐể đảm bảo tính giá trị nội tại của thiết kế thực nghiệm 2x2, một câu hỏi kiểm tra thao tác (manipulation check) được sử dụng nhằm xác nhận đáp viên thực sự nhận thức được sự hiện diện của mã QR và loại thông điệp. Đồng thời, tính năng phân nhóm ngẫu nhiên (Random Assignment) của công cụ khảo sát được kích hoạt để loại trừ thiên kiến chọn mẫu, dù sử dụng phương pháp lấy mẫu thuận tiện.`
            );
        }
    }

    // Cập nhật lại vào JSON
    standalone.content = text;
});

// Cập nhật timestamp
data.lastUpdated = new Date().toISOString();

fs.writeFileSync(dashboardPath, JSON.stringify(data, null, 2), 'utf8');
console.log('✅ Đã cập nhật thành công dashboard_data.json với các nguyên tắc mới!');
