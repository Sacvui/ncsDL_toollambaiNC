const fs = require('fs');
const path = require('path');

const dir = 'c:\\ncsDL\\Proposal_HAILP_TDT';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f.match(/^\d{2}_/));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Replace colloquial metaphors with academic terms
    content = content.replace(/bào mòn/g, 'làm suy giảm');
    content = content.replace(/cắm rễ mô hình/g, 'gắn kết mô hình');
    content = content.replace(/một nghịch lý lớn đã xuất hiện/g, 'một nghịch lý đáng chú ý đã xuất hiện');
    content = content.replace(/trung thành thực sự/g, 'trung thành bền vững');
    content = content.replace(/"con dao hai lưỡi"/g, 'tác động kép');
    content = content.replace(/rõ ràng và thực chất/g, 'rõ ràng và thiết thực');
    content = content.replace(/các CEO đều trăn trở/g, 'giới quản trị đều đặt ra câu hỏi');
    content = content.replace(/lợi thế cạnh tranh thực sự/g, 'lợi thế cạnh tranh bền vững');
    
    // Some minor grammar polishing
    content = content.replace(/làm giảm chi phí nhận thức/g, 'giảm thiểu nỗ lực nhận thức');

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log("Applied final academic formality fixes!");
