const fs = require('fs');

const filePath = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Lý do chọn đề tài
content = content.replace(
    /công nghệ truy xuất nguồn gốc số \(như Blockchain\) có khả năng cung cấp bằng chứng minh bạch không thể giả mạo/g,
    'công nghệ truy xuất nguồn gốc số (như Blockchain) được kỳ vọng cung cấp tín hiệu minh bạch có thể kiểm chứng'
);

content = content.replace(
    /Hoài nghi xanh \(green skepticism\)/g,
    'Hoài nghi về tính tự nhiên/xanh (Green/Natural Skepticism)'
);
content = content.replace(
    /hoài nghi xanh/g,
    'hoài nghi về tính tự nhiên'
);
content = content.replace(
    /Hoài nghi xanh/g,
    'Hoài nghi về tính tự nhiên'
);

// 2. Tổng quan nghiên cứu - Deepen the critique
const overviewRegex = /## 2\. TÌNH HÌNH NGHIÊN CỨU TRONG VÀ NGOÀI NƯỚC[\s\S]*?#### Sơ đồ Mô hình Nghiên cứu/m;
const newOverview = `## 2. TÌNH HÌNH NGHIÊN CỨU TRONG VÀ NGOÀI NƯỚC
### 2.1. Bất cân xứng thông tin trong hàng hóa dựa trên niềm tin (Credence Goods)
*   **Kết quả chính:** Các nghiên cứu nền tảng (Akerlof, 1970) và các nghiên cứu ứng dụng gần đây trên mẫu người tiêu dùng thực phẩm chức năng (Nielsen, 2022) đều chỉ ra rằng bất cân xứng thông tin khiến người bán nắm giữ thông tin vượt trội, tạo rủi ro lựa chọn bất lợi.
*   **Giới hạn:** Hầu hết các nghiên cứu tập trung vào nông sản tươi sống (fresh produce) ở các nước phát triển, hoặc dùng mẫu nghiên cứu chung chung. Kết quả cho thấy các dấu hiệu nhận diện truyền thống (chứng nhận giấy, tem nhãn) đang giảm hiệu lực.
*   **Khoảng trống:** Rất thiếu nghiên cứu thực nghiệm kiểm định các giải pháp công nghệ số trong bối cảnh sản phẩm chế biến sâu (FMCG) như nước yến, nơi quá trình biến đổi vật lý làm mất đi hoàn toàn hình thái tự nhiên ban đầu, đẩy bất cân xứng thông tin lên mức cực đại.

### 2.2. Hoài nghi về tính tự nhiên (Green/Natural Skepticism) và Greenwashing
*   **Kết quả chính:** Skarmeas & Leonidou (2013) khảo sát trên mẫu người tiêu dùng Anh, chứng minh sự lạm dụng thông điệp "tự nhiên" làm tăng hoài nghi và phá vỡ niềm tin. Chen (2012) tại Đài Loan cũng tìm ra kết quả tương tự đối với sản phẩm điện tử.
*   **Giới hạn:** Sự không nhất quán xuất hiện ở bối cảnh ngành hàng: các nghiên cứu thường mặc định hoài nghi chỉ áp dụng cho sản phẩm "bảo vệ môi trường" (green eco-products), trong khi bỏ qua nhóm sản phẩm "sức khỏe tự nhiên" (natural health products) như nước yến.
*   **Khoảng trống:** Đề tài làm rõ cơ chế chuyển hóa từ "hoài nghi thông điệp quảng cáo" sang "tin tưởng bằng chứng kỹ thuật", một khoảng trống chưa được lý giải thỏa đáng trong lý thuyết truyền thông hiện tại.

### 2.3. Truy xuất nguồn gốc số (Digital Traceability / Blockchain)
*   **Kết quả chính:** Wang & Li (2023) thực hiện nghiên cứu thực nghiệm tại Trung Quốc cho thấy blockchain cải thiện niềm tin. Francisco & Swanson (2018) phân tích hệ thống ở cấp độ chuỗi cung ứng (B2B).
*   **Giới hạn:** Đa phần tiếp cận traceability như một "giải pháp phần mềm" thay vì một "tín hiệu tâm lý". Nghiên cứu của Wang & Li (2023) có mẫu nhỏ và chỉ đo lường chung về sản phẩm nông nghiệp, không phân tách rõ giữa "sự hiện diện của công nghệ" (Stimulus) và "đánh giá chất lượng thông tin" (Information Quality).
*   **Khoảng trống:** Đánh giá cách người tiêu dùng nhận thức về "Traceability" (bỏ qua yếu tố kỹ thuật lõi) như một tín hiệu đầu vào (Stimulus) được diễn giải như thế nào trong bối cảnh tiêu dùng nhanh (FMCG).

### 2.4. Tính xác thực thương hiệu (Brand Authenticity) và Ý định mua
*   **Kết quả chính:** Morhart et al. (2015) cung cấp thang đo chuẩn về Brand Authenticity, chứng minh nó tác động mạnh đến lòng trung thành.
*   **Giới hạn:** Brand Authenticity thường chỉ được gắn với yếu tố di sản (heritage) hoặc kỹ năng thủ công (craftsmanship). Rất ít nghiên cứu chứng minh được liệu sự "minh bạch dữ liệu" (data transparency) có tạo ra được cảm giác "chân thật" (authenticity) hay không.
*   **Khoảng trống:** Đây là một đóng góp lý thuyết lõi: Nghiên cứu bác bỏ giả định rằng công nghệ số gây ra sự khô khan, xa lánh; thay vào đó chứng minh tín hiệu truy xuất minh bạch chính là động lực mới để hình thành Tính xác thực thương hiệu.

#### Sơ đồ Mô hình Nghiên cứu`;
content = content.replace(overviewRegex, newOverview);

// 3. Phương pháp nghiên cứu - Sửa phần logic nhân quả và phân định rạch ròi biến
const logicRegex = /#### 8\.1\.1\. Logic xây dựng mô hình \(Model Logic\)[\s\S]*?#### 8\.1\.2\. Mô hình nghiên cứu đề xuất \(Proposed Model\)/m;
const newLogic = `#### 8.1.1. Logic xây dựng mô hình (Model Logic)
Mô hình nghiên cứu được xây dựng dựa trên sự tích hợp giữa **Stimulus – Organism – Response (S-O-R) framework** và **Signaling Theory**, với sự điều chỉnh lý thuyết quan trọng để phản biện các mô hình truyền thống.

**Lý giải sâu về chuỗi nhân quả (Causal Logic Justification):**
1.  **Từ Tín hiệu đến Hoài nghi / Nhận thức:** Tín hiệu truy xuất nguồn gốc số (TR) cung cấp bằng chứng kỹ thuật khách quan, làm suy giảm sự hoài nghi (GS) về các cam kết "tự nhiên" và nâng cao chất lượng thông tin cảm nhận (PIQ).
2.  **Từ Hoài nghi / Nhận thức đến Niềm tin:** Khi thông tin đạt chất lượng và sự hoài nghi bị triệt tiêu, người tiêu dùng bắt đầu hình thành Niềm tin xanh/Niềm tin tự nhiên (GT) đối với sản phẩm. Đây là trạng thái tin tưởng bước đầu dựa trên các thông số và cam kết.
3.  **Từ Niềm tin (Trust) sang Tính xác thực (Authenticity) - Một đóng góp lý thuyết mới:** Một câu hỏi phản biện lớn là: Tại sao "tin" (Trust) lại dẫn đến "thật" (Authenticity)? Nghiên cứu lập luận rằng, trong bối cảnh credence goods bị khủng hoảng niềm tin, *Niềm tin (Trust)* là sự xác nhận về mặt lý trí và đánh giá rủi ro đối với một sản phẩm cụ thể. Khi niềm tin này được duy trì và bảo chứng bởi dữ liệu số minh bạch, nó thăng hoa thành *Tính xác thực thương hiệu (Brand Authenticity)* – một nhận định sâu sắc, mang tính cảm xúc và tổng thể về bản chất "chân thật, không giả tạo" của toàn bộ thực thể thương hiệu. Do đó, Trust là tiền đề thiết yếu (necessary precursor) để hình thành Authenticity trong kỷ nguyên số.
4.  **Từ Xác thực đến Hành vi:** Brand Authenticity dẫn dắt đến ý định mua (PI) và mức sẵn lòng chi trả (WTP).

#### 8.1.2. Mô hình nghiên cứu đề xuất (Proposed Model)`;
content = content.replace(logicRegex, newLogic);

// 4. Phương pháp nghiên cứu - Thiết kế thực nghiệm và rạch ròi TR là Stimulus hay Measure
const expRegex = /#### 8\.2\.1\. Cơ sở chọn thiết kế thực nghiệm 2x2[\s\S]*?#### 8\.2\.3\. Chiến lược lấy mẫu và sàng lọc/m;
const newExp = `#### 8.2.1. Cơ sở chọn thiết kế thực nghiệm 2x2 và Định nghĩa Biến
Để đảm bảo tính chặt chẽ về phương pháp và tránh sự nhầm lẫn khái niệm, nghiên cứu áp dụng thiết kế thực nghiệm $2 \\times 2$ factorial design và phân định cực kỳ rạch ròi giữa **Thao tác thực nghiệm (Stimulus)** và **Biến đo lường nhận thức (Perception)**.

*   **Biến thiết kế (Experimental Stimuli - Phân bổ ngẫu nhiên):**
    *   **Traceability Stimulus (TR_STIM):** Có giao diện truy xuất (1) / Không có giao diện truy xuất (0).
    *   **Green Marketing Stimulus (GM_STIM):** Thông điệp nhấn mạnh yếu tố tự nhiên, thân thiện môi trường / Thông điệp chỉ nêu công dụng sức khỏe.

*   **Biến đo lường (Perception Measures - Đưa vào mô hình PLS-SEM):**
    *   **Nhận thức về khả năng truy xuất (Perceived Traceability - PT):** Đo lường mức độ người tham gia cảm nhận được khả năng kiểm chứng nguồn gốc. PT chính là biến TR trong mô hình cấu trúc. Cơ chế: Thao tác (TR_STIM) kích hoạt Nhận thức (PT). 
    *   Việc đo lường PT bằng thang Likert (thay vì đưa trực tiếp biến giả 0/1 vào mô hình R^2) giúp giải quyết triệt để rủi ro nhầm lẫn giữa thiết kế và đo lường. Nếu người dùng ở nhóm TR_STIM=1 nhưng PT thấp, điều đó cho thấy mockup thiết kế chưa đạt yêu cầu.

#### 8.2.2. Quy trình xây dựng và tiền kiểm định mockup
Sản phẩm là bản mockup nước yến RTD với thương hiệu giả định để loại trừ "lòng trung thành thương hiệu" có sẵn.
*   **Quy trình xây dựng:** 4 phiên bản bao bì. Ở nhóm "Có truy xuất", người tham gia sẽ được tương tác với một giao diện mô phỏng (interactive mockup) hiển thị vòng đời sản phẩm thay vì chỉ xem ảnh tĩnh. Điều này gia tăng độ chân thực (ecological validity) của thí nghiệm.
*   **Tiền kiểm định (Manipulation Check khắt khe):** Pilot test (n=30) không chỉ kiểm tra từ ngữ mà buộc phải chạy T-test/ANOVA để chứng minh mức Perceived Traceability ở nhóm TR_STIM=1 cao hơn nhóm TR_STIM=0 có ý nghĩa thống kê. Nếu không đạt, mockup phải thiết kế lại.

#### 8.2.3. Chiến lược lấy mẫu và sàng lọc`;
content = content.replace(expRegex, newExp);

// 5. Trùng lắp khái niệm - Cập nhật phần 8.2.4
const semRegex = /#### 8\.2\.4\. Lý do chọn PLS-SEM[\s\S]*?#### 8\.2\.5\. Chiến lược xử lý sai lệch và kiểm tra độ bền kết quả/m;
const newSem = `#### 8.2.4. Lý do chọn PLS-SEM và Giải quyết rủi ro trùng lắp khái niệm
Nghiên cứu sử dụng mô hình PLS-SEM (SmartPLS 4) không chỉ vì năng lực dự báo, mà còn vì công cụ này có khả năng giải quyết trực tiếp rủi ro phản biện về trùng lắp khái niệm (Conceptual Overlap):

1.  **Green Trust vs. Brand Authenticity:** Nhiều người nhầm lẫn hai khái niệm này. PLS-SEM sử dụng chỉ số **HTMT (Heterotrait-Monotrait Ratio)**. Nghiên cứu cam kết duy trì mức HTMT < 0.85 giữa Trust và Authenticity để chứng minh về mặt thống kê rằng "tin tưởng một thuộc tính" khác với "cảm nhận tính chân thật của một thương hiệu".
2.  **Perceived Traceability (PT) vs. Perceived Information Quality (PIQ):** PT đo lường *sự hiện diện và khả năng* kiểm tra dữ liệu, trong khi PIQ đo lường *sự đánh giá chủ quan về chất lượng* (tính đầy đủ, dễ hiểu) của chính dữ liệu đó. Discriminant Validity qua Fornell-Larcker sẽ được báo cáo nghiêm ngặt.
3.  **Purchase Intention (PI) vs. WTP:** PI đo lường "ý định hành vi" bằng thang Likert, trong khi WTP đo lường "giá trị kinh tế" thông qua thang đo liên tục hoặc thang thanh trượt (slider scale) về số tiền cụ thể. Sự khác biệt về dạng thang đo và bản chất phương sai giúp tách bạch hai khái niệm này.

#### 8.2.5. Chiến lược xử lý sai lệch và kiểm tra độ bền kết quả`;
content = content.replace(semRegex, newSem);

// 6. Sửa WTP trong phần thang đo 8.3.2
const wtpRegex = /\*\*7\. Sẵn lòng chi trả thêm \(Willingness to Pay Premium - WTP\)\*\*[\s\S]*?#### 8\.3\.3\. Biến kiểm tra thao tác/m;
const newWtp = `**7. Sẵn lòng chi trả thêm (Willingness to Pay Premium - WTP)** *(Áp dụng thang đo thanh trượt liên tục - Continuous Slider Scale)*
Thay vì dùng các mức giá rời rạc dễ gây sai lệch (như +2000đ, +5000đ), nghiên cứu sử dụng thang đo thanh trượt (slider) từ 0% đến 50%.
*   **Câu hỏi:** "Nếu sản phẩm này có mức giá cơ sở là 40.000 VNĐ, bạn sẵn sàng trả thêm tối đa bao nhiêu % để mua sản phẩm từ thương hiệu minh bạch này?"
*   [Thanh trượt từ 0% đến 50%] - Giá trị thu được là biến định lượng liên tục (Continuous variable), phản ánh chính xác hành vi định giá.

#### 8.3.3. Biến kiểm tra thao tác`;
content = content.replace(wtpRegex, newWtp);

// 7. Đóng góp cấp lý thuyết (Mục 5.1) - Tính mới
const novelRegex = /### 5\.1\. Đóng góp cấp lý thuyết[\s\S]*?### 5\.2\. Đóng góp cấp thực tiễn/m;
const newNovel = `### 5.1. Đóng góp cấp lý thuyết (Tính mới học thuật)
*   **Bác bỏ và điều chỉnh giả định truyền thống về Truyền thông Xanh:** Các nghiên cứu trước đây (Chen, 2012) giả định rằng thông điệp marketing xanh tự nó có khả năng định hình niềm tin. Nghiên cứu này chứng minh điều kiện biên (boundary condition) mới: Trong bối cảnh hàng hóa credence goods bị lạm dụng greenwashing, thông điệp xanh mất hiệu lực nếu không có "tín hiệu tốn kém" (costly signal) là truy xuất nguồn gốc số bảo chứng.
*   **Lý thuyết hóa mối quan hệ Trust - Authenticity:** Nghiên cứu không chỉ đơn thuần ghép nối các biến. Bằng cách thiết lập cấu trúc nhân quả *Niềm tin (về thuộc tính sản phẩm)* $\\rightarrow$ *Tính xác thực (về bản chất thương hiệu)*, đề tài cung cấp góc nhìn lý thuyết mới: Tín hiệu công nghệ số không trực tiếp làm thương hiệu trở nên "thật" hơn, mà nó cung cấp một vùng đệm lý trí (Trust) để người tiêu dùng dần chuyển hóa sang sự công nhận về mặt cảm xúc sâu sắc (Authenticity). Đây là cơ chế chưa được làm rõ trong các nghiên cứu về hệ thống truy xuất trước đây.
*   **Tách bạch Thao tác thực nghiệm và Đo lường nhận thức:** Đóng góp về mặt thiết kế đo lường khi phân tách rõ ràng giữa *Sự hiện diện khách quan của nền tảng số (Traceability Stimulus)* và *Sự nhận thức chủ quan của người tiêu dùng (Perceived Traceability)*, khắc phục điểm yếu của các nghiên cứu ứng dụng blockchain hiện hữu.

### 5.2. Đóng góp cấp thực tiễn`;
content = content.replace(novelRegex, newNovel);


// Replace variable TR with PT in the mermaid code to reflect Perceived Traceability
content = content.replace(/TR\["Digital Traceability \(TR\)"\]/g, 'TR["Perceived Traceability (PT)"]');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update fix_reviewer_final_4 complete.');
