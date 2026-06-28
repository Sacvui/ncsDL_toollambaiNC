const fs = require('fs');

let content = fs.readFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', 'utf8');

// We will insert the Empirical Context (Khanh Hoa Bird's Nest) into Section 1.1
// Right after point 3, we add a new point 4 about Empirical Context.
const target_regex = /3\.  \*\*Sự cấp thiết của việc nghiên cứu cơ chế giải mã tín hiệu số:\*\*.*?(?=\n\n### 1\.2\. Vấn đề nghiên cứu)/s;

const match = content.match(target_regex);
if (match) {
    const new_text = match[0] + `\n4.  **Tính đặc thù và tầm quan trọng của bối cảnh thực nghiệm (Yến sào Khánh Hòa):** Việc lựa chọn ngành hàng yến sào, đặc biệt gắn với bối cảnh địa phương Khánh Hòa, làm đối tượng khảo sát thực nghiệm mang lại giá trị thực tiễn to lớn. Ngành yến sào hiện là một mắt xích quan trọng trong chuỗi giá trị kinh tế nông nghiệp của tỉnh, đóng góp đáng kể vào GRDP, giải quyết việc làm cho hàng ngàn lao động và đã được nhà nước công nhận Chỉ dẫn địa lý (Geographical Indication). Tuy nhiên, chính giá trị kinh tế cao đã biến yến sào thành mục tiêu của nạn hàng giả và gian lận thương mại. Việc giải quyết thành công bài toán "niềm tin" không chỉ có ý nghĩa học thuật mà còn trực tiếp bảo vệ thương hiệu quốc gia, duy trì tính toàn vẹn của chỉ dẫn địa lý và tạo động lực phát triển bền vững cho kinh tế địa phương.`;
    
    content = content.replace(target_regex, new_text);
    fs.writeFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', content, 'utf8');
    console.log("Khanh Hoa context restored.");
} else {
    console.log("Target regex not found.");
}
