const fs = require('fs');
let content = fs.readFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', 'utf8');

// 1
const old_1 = `Trong bối cảnh nền kinh tế xanh toàn cầu đang trỗi dậy, Yến sào không chỉ đơn thuần là một thực phẩm chức năng cao cấp mà còn là một mắt xích quan trọng trong chuỗi giá trị nông nghiệp bền vững của Việt Nam. Riêng tại Khánh Hòa, ngành Yến sào đóng vai trò trụ cột kinh tế với những đóng góp cụ thể:
1.  **Đóng góp kinh tế vĩ mô:** Theo báo cáo ngành (2024), ngành Yến sào đóng góp đáng kể vào tổng kim ngạch xuất khẩu nông sản địa phương, tạo ra hệ sinh thái kinh tế cho hàng ngàn lao động và đóng góp vào GDP của tỉnh.
2.  **Di sản văn hóa và Thương hiệu quốc gia:** Được mệnh danh là “Vàng trắng”, Yến sào Khánh Hòa là biểu tượng của tinh hoa thiên nhiên và kỹ nghệ khai thác truyền thống, đóng vai trò là đại sứ thương hiệu nông sản Việt Nam trên thị trường quốc tế.
3.  **Nghịch lý giá trị:** Mặc dù có giá trị kinh tế và hàm lượng dinh dưỡng cao, ngành hàng nước yến (FMCG) đang đối mặt với "khủng hoảng danh tiếng". Thay vì vấn nạn hàng giả của yến tổ truyền thống, người tiêu dùng hiện đại đặc biệt quan ngại về **"Hàm lượng yến thật" và "Chất bảo quản/Đường hóa học"**. Người tiêu dùng Gen Z rất quan tâm đến sức khỏe nhưng lại hoài nghi các dòng nước yến đóng chai công nghiệp trên thị trường có "nhiều đường hơn yến". Theo các nghiên cứu gần đây, niềm tin đối với các cam kết "tự nhiên" của nước yến đóng chai đã sụt giảm. Trong bối cảnh này, công nghệ Blockchain được kỳ vọng có tiềm năng minh bạch hóa tỷ lệ phần trăm yến thực tế trong từng hũ sản phẩm, bảo vệ người tiêu dùng khỏi các thông điệp lập lờ.`;

const new_1 = `Trong bối cảnh kinh tế toàn cầu, Yến sào không chỉ là thực phẩm chức năng cao cấp mà còn là mắt xích quan trọng trong chuỗi giá trị nông nghiệp của Việt Nam. Tại Khánh Hòa, ngành Yến sào đóng vai trò trụ cột kinh tế với những đóng góp cụ thể:
1.  **Đóng góp kinh tế vĩ mô:** Theo ước tính của ngành (Cục Xuất nhập khẩu, 2024), ngành Yến sào có đóng góp cụ thể vào kim ngạch xuất khẩu nông sản địa phương. Ngành cũng tạo ra hệ sinh thái kinh tế cho lực lượng lao động lớn và đóng góp vào GDP của tỉnh.
2.  **Di sản văn hóa và Thương hiệu quốc gia:** Yến sào Khánh Hòa là biểu tượng của tinh hoa thiên nhiên và kỹ nghệ khai thác truyền thống. Sản phẩm đóng vai trò là đại sứ thương hiệu nông sản Việt Nam trên thị trường quốc tế.
3.  **Nghịch lý giá trị:** Mặc dù có giá trị kinh tế cao, ngành hàng nước yến đóng lon (RTD Bird's Nest) đang đối mặt với thử thách về niềm tin. Thay vì vấn nạn hàng giả của yến tổ thô, người tiêu dùng hiện đại quan ngại về hàm lượng yến thật và việc sử dụng chất bảo quản. Người tiêu dùng Gen Z quan tâm đến sức khỏe nhưng có sự hoài nghi đối với các dòng nước yến đóng chai công nghiệp. Theo một số nghiên cứu gần đây, niềm tin đối với các cam kết "tự nhiên" của nước yến có xu hướng giảm. Trong bối cảnh này, công nghệ Blockchain được kỳ vọng có tiềm năng minh bạch hóa tỷ lệ thành phần thực tế trong từng sản phẩm. Từ đó, công nghệ này giúp bảo vệ người tiêu dùng khỏi sự thiếu rõ ràng về thông tin.`;

content = content.replace(old_1, new_1);

// 2
const old_2 = `Nghiên cứu kỳ vọng sẽ tạo ra một cú hích lớn, chuyển dịch ngành yến sào từ mô hình "kinh doanh dựa trên danh tiếng cũ" sang mô hình "kinh doanh dựa trên sự xác thực số minh bạch", đảm bảo sự phát triển bền vững trong kỷ nguyên công nghệ 4.0.`;
const new_2 = `Nghiên cứu kỳ vọng sẽ có những đóng góp quan trọng, hỗ trợ chuyển dịch ngành yến sào từ mô hình kinh doanh dựa trên danh tiếng truyền thống sang mô hình kinh doanh dựa trên sự xác thực số minh bạch. Điều này góp phần đảm bảo sự phát triển bền vững trong kỷ nguyên công nghệ số.`;
content = content.replace(old_2, new_2);

// 3. Capitalization
let parts = content.split('## 13. TÀI LIỆU THAM KHẢO (REFERENCES)');
if (parts.length > 1) {
    let main_body = parts[0];
    let refs = '## 13. TÀI LIỆU THAM KHẢO (REFERENCES)' + parts[1];

    main_body = main_body.replace(/\\bblockchain\\b/gi, 'Blockchain');
    main_body = main_body.replace(/\\bbrand authenticity\\b/gi, 'Brand Authenticity');
    main_body = main_body.replace(/\\bgreen trust\\b/gi, 'Green Trust');
    main_body = main_body.replace(/\\bgreen skepticism\\b/gi, 'Green Skepticism');
    main_body = main_body.replace(/\\brtd bird\\'s nest\\b/gi, "RTD Bird's Nest");

    main_body = main_body.replace('niềm tin (trust)', 'Niềm tin xanh (Green Trust)');

    fs.writeFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', main_body + refs, 'utf8');
} else {
    console.log("Could not find references section");
}
