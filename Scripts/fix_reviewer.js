const fs = require('fs');

let content = fs.readFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', 'utf8');

// 1. Rewrite Section 1.1 (Remove PR tone)
const old_1_1_regex = /### 1\.1\. Tầm quan trọng.*?Trong bối cảnh này, Blockchain \(chuỗi khối\) được kỳ vọng có tiềm năng minh bạch hóa tỷ lệ thành phần thực tế trong từng sản phẩm\. Từ đó, công nghệ này giúp bảo vệ người tiêu dùng khỏi sự thiếu rõ ràng về thông tin\./s;
const new_1_1 = `### 1.1. Bất cân xứng thông tin và Khủng hoảng niềm tin trong ngành hàng thực phẩm chức năng
1.  **Đặc tính hàng hóa và Bất cân xứng thông tin:** Các sản phẩm thực phẩm chức năng, đặc biệt là nhóm nước yến đóng lon (RTD), được phân loại vào nhóm hàng hóa dựa trên niềm tin (credence goods). Theo Akerlof (1970), đây là nhóm sản phẩm mà người tiêu dùng không thể đánh giá chính xác chất lượng thực tế ngay cả sau khi đã sử dụng. Điều này dẫn đến sự bất cân xứng thông tin sâu sắc giữa nhà sản xuất và người mua.
2.  **Rủi ro cảm nhận và Khủng hoảng niềm tin:** Ngành hàng sản phẩm RTD đang đối mặt với thử thách nghiêm trọng về niềm tin. Người tiêu dùng hiện đại, đặc biệt là thế hệ Gen Z, có sự quan tâm lớn đến sức khỏe nhưng lại đối mặt với rủi ro cảm nhận (perceived risk) cao đối với các dòng nước yến đóng chai công nghiệp. Sự hoài nghi chủ yếu xoay quanh hàm lượng yến thật và việc lạm dụng chất bảo quản. Sự mập mờ trong các thông điệp truyền thống khiến niềm tin đối với các cam kết "tự nhiên" có xu hướng giảm.
3.  **Sự cấp thiết của một cơ chế xác thực minh bạch:** Việc giải quyết khủng hoảng niềm tin không thể chỉ dựa vào các nỗ lực truyền thông truyền thống hay các chứng nhận tĩnh bằng giấy vốn dễ bị làm giả. Trong bối cảnh này, Blockchain (chuỗi khối) được kỳ vọng mang lại tiềm năng minh bạch hóa triệt để chuỗi cung ứng. Tuy nhiên, thay vì tiếp cận Blockchain như một hạ tầng kỹ thuật thuần túy, việc hiểu rõ cách thức công nghệ này chuyển hóa thành "tín hiệu niềm tin" để làm giảm rủi ro cảm nhận của người tiêu dùng là một vấn đề cấp thiết cả về mặt lý luận lẫn thực tiễn.`;
content = content.replace(old_1_1_regex, new_1_1);

// 2. Rewrite Section 1.5 (Object vs Subject)
const old_1_5_regex = /### 1\.5\. Phạm vi và Giới hạn nghiên cứu.*?những tranh cãi về mặt kỹ thuật phần mềm\./s;
// We actually shouldn't replace until the end of 1.5, let's target 1.5 carefully
const old_1_5_specific_regex = /### 1\.5\. Phạm vi và Giới hạn nghiên cứu \(Research Scope & Boundaries\).*?tránh bị hội đồng bắt lỗi ngoại suy quá mức\./s;
const new_1_5 = `### 1.5. Phạm vi và Giới hạn nghiên cứu (Research Scope & Boundaries)
Để đảm bảo tính khả thi và độ chặt chẽ khoa học (scientific rigor) của một luận án Tiến sĩ, nghiên cứu này thiết lập các ranh giới cụ thể:
1.  **Đối tượng nghiên cứu (Object of Study):** Cơ chế tác động tâm lý và hành vi của người tiêu dùng trong việc phản ứng với các tín hiệu nhận thức về truy xuất nguồn gốc (Perceived Traceability - TR) thông qua công nghệ Blockchain trong bối cảnh sản phẩm nước yến đóng lon (RTD).
2.  **Khách thể nghiên cứu (Subject of Study):** Người tiêu dùng thế hệ Gen Z (18-27 tuổi) đang sinh sống và làm việc tại khu vực đô thị (cụ thể là TP.HCM).
3.  **Phạm vi không gian và thời gian:** Dữ liệu dự kiến được thu thập tại TP.HCM trong khoảng thời gian từ quý 3/2026 đến quý 1/2027.
4.  **Phạm vi bối cảnh (Contextual Scope):** Đề tài chỉ tập trung vào bối cảnh ngành hàng tiêu dùng nhanh (FMCG) với dòng sản phẩm nước yến đóng lon (RTD). Việc sử dụng Mockup giới hạn trong trải nghiệm giao diện người dùng (Front-end), không đi sâu đánh giá hiệu năng kỹ thuật của mạng lưới Blockchain (Back-end) trên chuỗi cung ứng.`;
content = content.replace(old_1_5_specific_regex, new_1_5);

// 3. Lit Review - Make it a dialogue and add Signaling depth
const old_2_2_regex = /Tuy nhiên, phần lớn các nghiên cứu hiện tại tập trung vào nội dung truyền thông \(message-based trust\), trong khi thiếu các cơ chế xác thực kỹ thuật \(evidence-based trust\)\./;
const new_2_2 = `Mặc dù Chen (2012) cho rằng niềm tin xanh có thể hình thành qua truyền thông, nhưng lập luận này bỏ qua sự gia tăng cực độ của rủi ro cảm nhận (perceived risk) trong thị trường hiện đại. Khi rủi ro cảm nhận quá cao, các nỗ lực marketing xanh truyền thống mất đi hiệu lực. Do đó, nghiên cứu này lập luận rằng cần có sự can thiệp của các cơ chế xác thực kỹ thuật (evidence-based trust) để vượt qua rào cản hoài nghi này.`;
content = content.replace(old_2_2_regex, new_2_2);

const old_2_4_regex = /Phần lớn nghiên cứu hiện tại giả định người tiêu dùng hiểu và tin vào công nghệ, nhưng không kiểm định quá trình nhận thức \(perception formation\)\./;
const new_2_4 = `Thay vì chỉ đơn thuần coi Blockchain là một tín hiệu tốn kém, dưới lăng kính chi phí tín hiệu (Signaling cost) và đánh giá độ khả tín của người nhận (Receiver's credibility assessment), tín hiệu kỹ thuật chỉ phát huy tác dụng khi người tiêu dùng cảm nhận được tính xác thực của thông tin được giải mã. Phần lớn nghiên cứu hiện tại giả định người tiêu dùng tự động tin vào công nghệ Blockchain, bỏ qua việc kiểm định quá trình chuyển hóa phức tạp từ một "Technical Signal" khô khan thành "Psychological Trust".`;
content = content.replace(old_2_4_regex, new_2_4);

const old_gap_2 = /- \*\*Gap 2 – Khoảng trống về tích hợp lý thuyết \(Theoretical Integration Gap\):\*\* Các dòng nghiên cứu hiện tại thường tách biệt nghiên cứu về traceability \/ blockchain \(supply chain, information systems\) và nghiên cứu về consumer behavior \(trust, skepticism, intention\)\. Do đó, thiếu các mô hình tích hợp giải thích toàn bộ chuỗi: Tín hiệu kỹ thuật → Nhận thức thông tin → Trạng thái tâm lý → Hành vi tiêu dùng\. Đặc biệt, việc kết hợp S-O-R framework với Signaling Theory trong bối cảnh này vẫn còn hạn chế\./;
const new_gap_2 = `- **Gap 2 – Khoảng trống về tích hợp lý thuyết (Theoretical Integration Gap):** Các nghiên cứu hiện tại thường tách rời hai nhánh hệ thống thông tin (supply chain) và hành vi (consumer behavior). Đề tài giải quyết khoảng trống này bằng cách đề xuất một khung lý thuyết tích hợp mang tên **Blockchain-based Trust-Building Model in Credence Goods**. Khung lý thuyết này cơ chế hóa quá trình kết hợp giữa S-O-R và Signaling Theory, giải thích trọn vẹn chuỗi chuyển hóa: Tín hiệu kỹ thuật → Nhận thức thông tin → Trạng thái tâm lý → Hành vi tiêu dùng.`;
content = content.replace(old_gap_2, new_gap_2);

// 4. Methodology (Mockup & CMB)
const old_mockup_regex = /Vật liệu thực nghiệm được phát triển dưới dạng \*\*Mockup sản phẩm\*\*\. Thiết kế hình ảnh sản phẩm nước yến đóng lon sẽ bao gồm:\n\*   Bao bì sản phẩm \(nhãn mác, thông điệp truyền thông\)\.\n\*   QR code giả lập\.\n\*   Giao diện truy xuất nguồn gốc hiển thị trên màn hình điện thoại \(đối với kịch bản có yếu tố TR\)\./;
const new_mockup = `Vật liệu thực nghiệm được phát triển dưới dạng **Bản sao số (Digital Twin) / Mockup sản phẩm**. Thiết kế hình ảnh sản phẩm sẽ bao gồm:
*   Bao bì sản phẩm với một **thương hiệu giả định (Fictitious Brand)**. Việc sử dụng thương hiệu hoàn toàn mới là bắt buộc nhằm loại bỏ nhiễu ngoại lai từ Lòng trung thành thương hiệu (Brand Loyalty) hay Hình ảnh thương hiệu (Brand Image) đã có sẵn trên thị trường.
*   QR code giả lập có khả năng tương tác.
*   Giao diện truy xuất nguồn gốc hiển thị chi tiết vòng đời sản phẩm từ khâu nguyên liệu đến thành phẩm.`;
content = content.replace(old_mockup_regex, new_mockup);

const old_pls_regex = /2\.  \*\*Đánh giá độ giá trị phân biệt \(Discriminant Validity\):\*\* Sử dụng chỉ số HTMT \(Heterotrait-Monotrait Ratio\)\.\n3\.  \*\*Đánh giá mô hình cấu trúc/;
const new_pls = `2.  **Đánh giá độ giá trị phân biệt (Discriminant Validity):** Đánh giá chéo qua Fornell-Larcker criterion và chỉ số HTMT (Heterotrait-Monotrait Ratio).
3.  **Đánh giá mô hình cấu trúc`;
content = content.replace(old_pls_regex, new_pls);

const old_bootstrap_regex = /Sử dụng kỹ thuật Bootstrap để kiểm định các mối quan hệ trung gian/;
const new_bootstrap = `Sử dụng kỹ thuật Bootstrapping với ít nhất 5.000 mẫu lặp (sub-samples) để kiểm định ý nghĩa thống kê của các mối quan hệ trung gian`;
content = content.replace(old_bootstrap_regex, new_bootstrap);

const old_cmb_regex = /1\.  \*\*Common Method Bias \(CMB\):\*\* Sử dụng phép thử Harman’s single factor test và phân tích hệ số nhân tử phóng đại phương sai \(Full collinearity VIF\) để loại trừ phương sai phương pháp chung\./;
const new_cmb = `1.  **Common Method Bias (CMB):** Ngay từ khâu thiết kế, nghiên cứu áp dụng các biện pháp kiểm soát thủ tục (Ex-ante procedural remedies) như hoán đổi thứ tự câu hỏi và sử dụng biến đánh dấu (Marker variable). Trong khâu phân tích dữ liệu, phương sai phương pháp chung được kiểm tra thông qua Harman’s single factor test và Full collinearity VIF.`;
content = content.replace(old_cmb_regex, new_cmb);

fs.writeFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', content, 'utf8');
console.log('Modifications applied.');
