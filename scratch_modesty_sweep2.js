const fs = require('fs');
const path = require('path');

const dir = 'c:\\ncsDL\\Proposal_HAILP_TDT';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f.match(/^\d{2}_/));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Sweep 2: Aggressive tone and "công kích" words
    
    // In 05_PhuongPhap.md
    content = content.replace(/Việc áp dụng máy móc mô hình ACSI/g, 'Việc ứng dụng nguyên bản mô hình ACSI');
    content = content.replace(/bộc lộ nhiều điểm yếu do tính chất mua lặp lại/g, 'bộc lộ một số hạn chế do đặc thù mua lặp lại');
    
    // In 02_TinhHinhNghienCuu.md
    content = content.replace(/việc tiếp tục cố chấp đo lường "Kỳ vọng" sẽ tạo ra một mô hình thiếu bản lĩnh lý thuyết\. Thay vì lảng tránh, nghiên cứu này chủ động loại bỏ/g, 
        'việc tiếp tục đo lường biến Kỳ vọng có thể chưa phản ánh chính xác cơ chế tâm lý của người tiêu dùng. Do đó, nghiên cứu này đề xuất thay thế');
    
    content = content.replace(/mang tính khiên cưỡng và vấp phải/g, 'có thể gặp rào cản về phương pháp luận và vấp phải');
    
    content = content.replace(/chỉ trích việc chỉ dùng Lòng trung thành/g, 'lập luận rằng việc chỉ dùng Lòng trung thành');
    
    content = content.replace(/hoặc quá hời hợt khi dừng ở "Ý định mua lại"/g, 'hoặc chủ yếu dừng lại ở mức đo lường Ý định mua lại');
    
    // In 01_TinhCapThiet.md
    content = content.replace(/đã bộc lộ nhiều điểm yếu khi ứng dụng vào/g, 'đã bộc lộ một số hạn chế khi ứng dụng vào');
    content = content.replace(/Sự xuất hiện của biến Kỳ vọng bị đánh giá là khiên cưỡng và rập khuôn\./g, 'Biến Kỳ vọng đôi khi chưa thực sự phản ánh đúng hành vi của người tiêu dùng trong lĩnh vực này.');
    
    // General
    content = content.replace(/một cách khiên cưỡng/g, 'chưa thực sự phù hợp');
    content = content.replace(/khiên cưỡng/g, 'chưa thực sự phù hợp');
    content = content.replace(/rập khuôn/g, 'chưa phản ánh đúng thực tiễn');
    
    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log("Applied anti-aggression tone fixes!");
