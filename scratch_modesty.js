const fs = require('fs');
const path = require('path');

const dir = 'c:\\ncsDL\\Proposal_HAILP_TDT';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f.match(/^\d{2}_/));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Modesty & Academic Tone Adjustments
    
    // Q1/Q2 claims
    content = content.replace(/nhằm đạt chuẩn công bố tại các tạp chí quốc tế hạng Q1\/Q2, bao gồm:/g, 
        'nhằm tăng cường độ tin cậy và giá trị học thuật của nghiên cứu, bao gồm:');
        
    content = content.replace(/Mục tiêu đầu ra là ít nhất 02 bài báo trong danh mục ISI\/Scopus Q1\/Q2 trong suốt thời gian đào tạo\./g, 
        'Nghiên cứu sinh đặt mục tiêu phấn đấu công bố các kết quả nghiên cứu trên các tạp chí khoa học quốc tế uy tín nhằm đáp ứng chuẩn đầu ra của chương trình.');

    // Absolutes: triệt để, tuyệt đối, hoàn toàn, hoàn hảo, vô tiền khoáng hậu
    content = content.replace(/sai lầm phương pháp luận cần được chấn chỉnh/g, 
        'hạn chế về phương pháp luận cần được điều chỉnh');
        
    content = content.replace(/tiềm ẩn sai lầm lý thuyết/g, 
        'bộc lộ một số điểm chưa phù hợp về mặt lý thuyết');
        
    content = content.replace(/một sự rập khuôn máy móc/g, 
        'chưa phản ánh đầy đủ đặc thù ngành');
        
    content = content.replace(/Để giải quyết triệt để/g, 
        'Để góp phần khắc phục hạn chế này');
        
    content = content.replace(/kiểm soát triệt để/g, 
        'kiểm soát chặt chẽ');
        
    content = content.replace(/giải quyết trọn vẹn/g, 
        'tiếp cận');
        
    content = content.replace(/loại bỏ hoàn toàn việc thu thập dữ liệu vĩ mô từ phía doanh nghiệp nhằm tránh lỗi suy luận sai lầm mức độ/g, 
        'không sử dụng dữ liệu vĩ mô từ phía doanh nghiệp nhằm giảm thiểu rủi ro ngụy biện sinh thái');
        
    content = content.replace(/chưa tạo ra lợi thế cạnh tranh tuyệt đối/g, 
        'chưa hẳn đã tạo ra lợi thế cạnh tranh vững chắc');
        
    content = content.replace(/chứng minh quan hệ nhân quả một cách tuyệt đối/g, 
        'hỗ trợ xác lập bằng chứng về mối quan hệ nhân quả');
        
    // Other overstatements
    content = content.replace(/cực kỳ cấp thiết/g, 'rất cần thiết');
    content = content.replace(/đột phá/g, 'mới');
    content = content.replace(/một khoảng trống lớn/g, 'một khoảng trống');
    content = content.replace(/rất xuất sắc/g, 'tốt');
    content = content.replace(/hoàn hảo/g, 'phù hợp');
    content = content.replace(/quyền lực vô tiền khoáng hậu/g, 'quyền lực to lớn');
    
    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log("Applied academic modesty fixes!");
