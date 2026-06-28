const fs = require('fs');

let content = fs.readFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', 'utf8');

// Replace point 3 of 1.1 and the start of 1.2 with the reviewer's brilliant template.
const old_regex = /3\.  \*\*Sự cấp thiết của một cơ chế xác thực minh bạch:\*\* Việc giải quyết khủng hoảng niềm tin không thể chỉ dựa vào các nỗ lực truyền thông truyền thống hay các chứng nhận tĩnh bằng giấy vốn dễ bị làm giả\. Trong bối cảnh này, Blockchain \(chuỗi khối\) được kỳ vọng mang lại tiềm năng minh bạch hóa triệt để chuỗi cung ứng\. Tuy nhiên, thay vì tiếp cận Blockchain như một hạ tầng kỹ thuật thuần túy, việc hiểu rõ cách thức công nghệ này chuyển hóa thành "tín hiệu niềm tin" để làm giảm rủi ro cảm nhận của người tiêu dùng là một vấn đề cấp thiết cả về mặt lý luận lẫn thực tiễn\.\n\n### 1\.2\. Vấn đề nghiên cứu \(Problem Statement\)\nMặc dù tính xác thực và niềm tin đóng vai trò then chốt trong ngành thực phẩm chức năng, việc lạm dụng thông điệp quảng cáo xanh đang gây ra hiệu ứng ngược \(greenwashing backlash\)\. Ngành công nghiệp yến sào đang đối mặt với sự hoài nghi ngày càng lớn từ người tiêu dùng\. Truy xuất nguồn gốc số thông qua công nghệ Blockchain nổi lên như một công cụ tiềm năng để giảm bất cân xứng thông tin\./s;

const new_content = `3.  **Sự cấp thiết của việc nghiên cứu cơ chế giải mã tín hiệu số:** Trong bối cảnh thị trường hàng hóa dựa trên niềm tin (credence goods) ngày càng đối mặt với vấn đề bất cân xứng thông tin, các công nghệ truy xuất nguồn gốc được kỳ vọng đóng vai trò như một tín hiệu minh bạch. Tuy nhiên, tại Việt Nam, mức độ ứng dụng thực tế của các hệ thống truy xuất số (đặc biệt là Blockchain) vẫn còn rất hạn chế và chưa hình thành các bằng chứng thực nghiệm rõ ràng về hiệu quả của chúng. Điều này vô tình tạo ra một khoảng trống lớn: Liệu người tiêu dùng có thực sự diễn giải thông tin truy xuất này như một "tín hiệu đáng tin cậy" theo cách mà lý thuyết kỳ vọng hay không?

### 1.2. Vấn đề nghiên cứu (Problem Statement)
Thay vì đi theo lối mòn giả định rằng "công nghệ Blockchain mặc định tạo ra niềm tin", vấn đề cốt lõi mà nghiên cứu này cần giải quyết là sự thiếu vắng nền tảng học thuật về cách thức người tiêu dùng (đặc biệt là thế hệ Gen Z) nhận thức và phản ứng với các tín hiệu công nghệ này. Trong bối cảnh sự hoài nghi xanh (Green Skepticism) ngày càng gia tăng do vấn nạn "tẩy xanh", việc chỉ dựa vào thông điệp quảng cáo truyền thống đang gây ra hiệu ứng ngược.`;

content = content.replace(old_regex, new_content);

fs.writeFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', content, 'utf8');
console.log("Updated effectively.");
