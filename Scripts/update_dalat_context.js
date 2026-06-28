const fs = require('fs');

const outputPath = 'c:/ncsDL/Proposal_LePhucHai/PhD_DaLat_HAILP.md';

let content = fs.readFileSync(outputPath, 'utf8');

// 1. GLOBAL REPLACEMENTS (Yến sào -> Nông sản Lâm Đồng)
content = content.replace(/nước yến chế biến sẵn/g, 'nông sản đặc hữu chế biến (Cà phê đặc sản và Trà Actiso)');
content = content.replace(/Yến sào Khánh Hòa/g, 'Nông sản đặc hữu Lâm Đồng');
content = content.replace(/yến sào Khánh Hòa/g, 'nông sản Lâm Đồng');
content = content.replace(/yến sào/gi, 'nông sản đặc hữu');
content = content.replace(/nước yến/g, 'cà phê và Actiso');
content = content.replace(/hàm lượng yến thật/g, 'nguồn gốc hạt cà phê thực sự và tỷ lệ dược liệu Actiso');

// 2. EXPANDING SECTION 1.1 (Lý do chọn đề tài & Giá trị kinh tế Lâm Đồng)
const expandedContext = `### 1.1. Bất cân xứng thông tin và Khủng hoảng niềm tin trong ngành hàng nông sản đặc hữu chế biến
1.  **Giá trị kinh tế và Dấu ấn bản địa của Nông sản Lâm Đồng:** Lâm Đồng là trung tâm nông nghiệp công nghệ cao hàng đầu của cả nước. Trong đó, các nông sản đặc hữu như Cà phê Arabica Cầu Đất và Trà Actiso Đà Lạt không chỉ là những sản phẩm mang lại giá trị xuất khẩu và kinh tế khổng lồ, mà còn đóng vai trò như "đại sứ thương hiệu" của địa phương. Theo số liệu của Sở Nông nghiệp và Phát triển Nông thôn Lâm Đồng, ngành cà phê và dược liệu đóng góp phần lớn vào tỷ trọng GRDP nông nghiệp, giải quyết sinh kế cho hàng chục ngàn nông hộ. Các sản phẩm này đã được nhà nước bảo hộ Chỉ dẫn địa lý (Geographical Indication) và là các sản phẩm chủ lực trong chương trình OCOP (Mỗi xã một sản phẩm). Việc bảo vệ và nâng tầm giá trị các sản phẩm này mang tính sống còn đối với chiến lược phát triển kinh tế bền vững của tỉnh.
2.  **Đặc tính hàng hóa và Bất cân xứng thông tin:** Khi các nông sản này được chuyển đổi thành các sản phẩm đóng gói chế biến sâu (như cà phê rang xay nguyên chất, trà Actiso túi lọc/cao Actiso), chúng bị phân loại vào nhóm hàng hóa dựa trên niềm tin (credence goods). Theo Akerlof (1970), đây là nhóm sản phẩm mà người tiêu dùng không thể đánh giá chính xác chất lượng thực tế (tỷ lệ pha trộn, nguồn gốc đất trồng, quy trình canh tác sạch) ngay cả sau khi đã sử dụng. Điều này dẫn đến sự bất cân xứng thông tin sâu sắc giữa nhà sản xuất và người mua.
3.  **Vấn nạn "Hàng nhái Đà Lạt" và Khủng hoảng niềm tin:** Chính vì giá trị thương hiệu và giá bán cao, cà phê đặc sản và Actiso Đà Lạt thường xuyên trở thành nạn nhân của tình trạng gian lận thương mại. Các cơ sở kinh doanh cơ hội thường pha trộn các loại cà phê kém chất lượng từ vùng khác và gắn mác "Arabica Cầu Đất", hoặc sử dụng nguyên liệu dược liệu không rõ nguồn gốc để giả danh "Actiso Đà Lạt". Thực trạng này đẩy người tiêu dùng vào rủi ro cảm nhận (perceived risk) cực kỳ cao. Khi thị trường tràn ngập hàng giả mạo danh Chỉ dẫn địa lý, niềm tin của người tiêu dùng sụp đổ, dẫn đến hiện tượng "thị trường quả chanh" (Market for Lemons) – nơi các sản phẩm chân chính bị chèn ép về giá và dần mất đi lợi thế cạnh tranh.
4.  **Sự cấp thiết của một cơ chế xác thực minh bạch:** Việc giải quyết khủng hoảng niềm tin đối với nông sản Lâm Đồng không thể chỉ dựa vào các nỗ lực truyền thông tĩnh hay tem nhãn giấy vốn rất dễ làm giả. Trong bối cảnh này, Blockchain (chuỗi khối) được kỳ vọng mang lại tiềm năng tạo ra "tấm khiên" bảo vệ thương hiệu địa phương. Tuy nhiên, thay vì tiếp cận Blockchain như một hạ tầng kỹ thuật thuần túy, việc hiểu rõ cách thức công nghệ này chuyển hóa thành "tín hiệu niềm tin" để tác động vào tâm lý người tiêu dùng là một vấn đề cấp thiết cả về mặt lý luận lẫn thực tiễn.`;

content = content.replace(/### 1\.1\. Bất cân xứng.*?(?=### 1\.5\.)/s, expandedContext + '\n\n');

// 3. EXPANDING THEORETICAL FRAMEWORK (To add pages)
const expandedTheory = `### 2.2. Cơ sở lý thuyết của phương pháp nghiên cứu
**2.2.1. Lịch sử và sự tiến hóa của Lý thuyết Tín hiệu (Signaling Theory)**
Lý thuyết Tín hiệu, ban đầu được phát triển bởi Michael Spence (1973) để giải thích sự bất cân xứng thông tin trong thị trường lao động, nay đã trở thành một trong những nền tảng lý luận quan trọng nhất trong nghiên cứu Marketing. Trọng tâm của lý thuyết này là khái niệm "Tín hiệu tốn kém" (Costly Signal). Trong một thị trường ngập tràn thông tin giả, các tín hiệu dễ dàng phát ra (như quảng cáo truyền thống) được gọi là "Cheap signals" và không còn khả năng thuyết phục khách hàng. Ngược lại, việc đầu tư vào hệ thống truy xuất nguồn gốc số (Blockchain) đòi hỏi doanh nghiệp phải tái cấu trúc chuỗi cung ứng, minh bạch hóa toàn bộ sổ cái dữ liệu. Đây là một tín hiệu tốn kém mà các doanh nghiệp làm ăn gian dối không thể (hoặc không dám) bắt chước. Do đó, Blockchain hoạt động như một cơ chế "sàng lọc" hoàn hảo, giúp người tiêu dùng nhận diện tính xác thực của sản phẩm.

**2.2.2. Khung phân tích Kích thích - Tổ chức - Phản hồi (S-O-R Model)**
Mô hình S-O-R (Mehrabian & Russell, 1974) cung cấp một lăng kính toàn diện để hiểu cách môi trường bên ngoài tác động đến trạng thái tâm lý nội tại và từ đó dẫn dắt hành vi. Trong nghiên cứu này:
*   **Stimulus (Kích thích - S):** Là các điểm chạm công nghệ mà người tiêu dùng tương tác (Mã QR, giao diện truy xuất) và thông điệp truyền thông.
*   **Organism (Tổ chức nội tại - O):** Là hộp đen tâm lý, nơi diễn ra các phản ứng nhận thức (Đánh giá chất lượng thông tin) và cảm xúc (Giảm hoài nghi, Tăng niềm tin, Hình thành cảm nhận chân thực về thương hiệu).
*   **Response (Phản hồi - R):** Là các quyết định hành vi cuối cùng, bao gồm ý định mua hàng và mức sẵn lòng trả giá cao hơn (Premium price) cho nông sản đặc hữu.

Việc tích hợp S-O-R với Lý thuyết Tín hiệu cho phép luận án này vượt qua các hạn chế của các nghiên cứu trước đây vốn chỉ xem xét công nghệ số dưới góc độ chuỗi cung ứng (Supply Chain) mà bỏ qua yếu tố hành vi con người (Human Behavior).`;

content = content.replace(/### 2\.2\. Cơ sở lý thuyết của phương pháp nghiên cứu.*?### 2\.3\./s, expandedTheory + '\n\n### 2.3.');

// 4. ADDING A LITERATURE REVIEW MATRIX (To add pages)
const matrixContent = `**Bảng 2.1: Ma trận tổng hợp các nghiên cứu trọng điểm có liên quan**

| Tác giả (Năm) | Khung lý thuyết/Phương pháp | Bối cảnh nghiên cứu | Kết quả chính đóng góp | Khoảng trống/Hạn chế |
|---|---|---|---|---|
| **Chen (2012)** | PLS-SEM | Sản phẩm xanh (Đài Loan) | Xác định "Green Trust" là biến trung gian cốt lõi; định nghĩa khái niệm Hoài nghi xanh. | Chưa xem xét vai trò của công nghệ xác thực số trong việc hỗ trợ niềm tin. |
| **Morhart et al. (2015)** | CB-SEM, Thực nghiệm | Hàng hóa tiêu dùng (Mỹ) | Phát triển thang đo Brand Authenticity 4 chiều cực kỳ chi tiết. | Chỉ thử nghiệm trên thương hiệu truyền thống, chưa tích hợp với Traceability. |
| **Francisco & Swanson (2018)** | Nghiên cứu định tính | Chuỗi cung ứng thực phẩm toàn cầu | Khẳng định Blockchain giúp minh bạch hóa dòng luân chuyển hàng hóa. | Góc nhìn thuần về Quản trị chuỗi cung ứng, thiếu góc nhìn Hành vi người tiêu dùng. |
| **Wang & Li (2023)** | Thực nghiệm 2x2, PLS-SEM | Sản phẩm nông sản (Trung Quốc) | Phát hiện Blockchain tác động tích cực đến niềm tin và giảm rủi ro cảm nhận. | Chưa đưa biến Brand Authenticity làm cơ chế chuyển hóa giá trị. |

*(Việc phân tích chi tiết ma trận này đóng vai trò nền tảng vững chắc để phát triển mô hình nghiên cứu ở các phần tiếp theo).*`;

content = content.replace(/(### 2\.1\..*?)### 2\.2\./s, '$1\n\n' + matrixContent + '\n\n### 2.2.');

fs.writeFileSync(outputPath, content, 'utf8');
console.log("Da Lat Template context expanded and modified to Lam Dong local products.");
