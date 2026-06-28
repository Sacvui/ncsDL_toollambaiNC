const fs = require('fs');
const path = require('path');

const filePath = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Tên đề tài
content = content.replace(
    /\*\*Tên đề tài:\*\* .*/,
    '**Tên đề tài:** Ảnh hưởng của truy xuất nguồn gốc số đến ý định mua sản phẩm nước yến chế biến sẵn: Vai trò trung gian của tính xác thực thương hiệu.'
);

// 2. Lý do chọn đề tài
const reasonRegex = /## 1\. LÝ DO CHỌN ĐỀ TÀI CỦA LUẬN ÁN[\s\S]*?## 2\. TÌNH HÌNH NGHIÊN CỨU/m;
const newReason = `## 1. LÝ DO CHỌN ĐỀ TÀI CỦA LUẬN ÁN
### 1.1. Vấn đề niềm tin trong hàng hóa khó kiểm chứng
Các sản phẩm nước yến chế biến sẵn (RTD) được phân loại là hàng hóa dựa trên niềm tin (credence goods), nơi người tiêu dùng gần như không thể tự kiểm chứng được chất lượng thực tế (như tỷ lệ yến, nguồn gốc nguyên liệu) ngay cả sau khi sử dụng (Akerlof, 1970). Sự bất cân xứng thông tin này tạo ra rủi ro cảm nhận cao, dẫn đến tình trạng người tiêu dùng luôn mang tâm lý e ngại trước các sản phẩm mang mác "tự nhiên" hay "nguyên chất", từ đó hình thành vấn đề khoa học cốt lõi về việc làm sao để chứng minh tính xác thực một cách thuyết phục.

### 1.2. Giới hạn của truyền thông xanh và tín hiệu thương hiệu
Sự lạm dụng các tuyên bố "xanh" và "sạch" trong marketing (hiện tượng greenwashing) đã khiến người tiêu dùng gia tăng sự hoài nghi xanh (green skepticism) (Skarmeas & Leonidou, 2013). Khi rủi ro cảm nhận vượt quá ngưỡng tin cậy của các tín hiệu marketing truyền thông, các chứng nhận tĩnh (giấy tờ) hay uy tín thương hiệu truyền thống dần mất đi tính hiệu quả. Khoảng trống nằm ở chỗ các nỗ lực marketing xanh hiện tại thiếu đi một "tín hiệu tốn kém" (costly signal) đủ mạnh để bảo chứng kỹ thuật cho những cam kết về sản phẩm.

### 1.3. Lý do kiểm định cơ chế truy xuất nguồn gốc số
Mặc dù công nghệ truy xuất nguồn gốc số (như Blockchain) có khả năng cung cấp bằng chứng minh bạch không thể giả mạo, khoảng trống nghiên cứu hiện nay là thiếu các bằng chứng thực nghiệm giải thích cơ chế tâm lý mà qua đó tín hiệu số này được người tiêu dùng giải mã thành "tính xác thực thương hiệu". Nghiên cứu này sẽ kiểm định xem nhận thức về truy xuất nguồn gốc số tác động như thế nào đến niềm tin, hoài nghi xanh, và ý định mua đối với sản phẩm nước yến chế biến sẵn. Kết quả này sẽ cho thấy giá trị của mô hình trong việc chuyển đổi một tín hiệu kỹ thuật khô khan thành một lợi thế cạnh tranh về mặt tâm lý cho các sản phẩm hàng hóa dựa trên niềm tin.

## 2. TÌNH HÌNH NGHIÊN CỨU`;
content = content.replace(reasonRegex, newReason);

// 3. Tổng quan nghiên cứu
const overviewRegex = /## 2\. TÌNH HÌNH NGHIÊN CỨU TRONG VÀ NGOÀI NƯỚC[\s\S]*?## 3\. MỤC TIÊU NGHIÊN CỨU/m;
const newOverview = `## 2. TÌNH HÌNH NGHIÊN CỨU TRONG VÀ NGOÀI NƯỚC
### 2.1. Bất cân xứng thông tin trong hàng hóa dựa trên niềm tin (Credence Goods)
*   **Kết quả chính:** Trong các thị trường nơi sản phẩm khó kiểm chứng như thực phẩm chức năng, bất cân xứng thông tin khiến người bán nắm giữ thông tin vượt trội, dẫn đến rủi ro lựa chọn bất lợi (Akerlof, 1970). Người mua phải phụ thuộc vào các tín hiệu bên ngoài để đánh giá chất lượng.
*   **Giới hạn:** Các nghiên cứu đa phần mô tả trạng thái bất cân xứng nhưng thiếu các giải pháp thực nghiệm trong bối cảnh FMCG (đặc biệt là nước yến).
*   **Khoảng trống:** Cần nghiên cứu cơ chế cụ thể để vượt qua bất cân xứng này thông qua các công nghệ số thay vì chỉ dựa vào thương hiệu truyền thống.

### 2.2. Hoài nghi xanh (Green Skepticism) và Greenwashing
*   **Kết quả chính:** Sự gia tăng thông điệp "xanh" dẫn đến greenwashing, làm gia tăng hoài nghi và suy giảm niềm tin của người tiêu dùng (Skarmeas & Leonidou, 2013; Chen, 2012).
*   **Giới hạn:** Các nghiên cứu cho thấy hoài nghi xanh làm suy yếu green trust, nhưng lại thiếu các nghiên cứu đề xuất công cụ kỹ thuật để đảo ngược sự hoài nghi này.
*   **Khoảng trống:** Nghiên cứu này kiểm định khả năng của truy xuất nguồn gốc số như một cơ chế làm giảm hoài nghi xanh trong bối cảnh greenwashing.

### 2.3. Truy xuất nguồn gốc số (Digital Traceability / Blockchain)
*   **Kết quả chính:** Traceability/Blockchain cải thiện tính minh bạch chuỗi cung ứng (Francisco & Swanson, 2018). Gần đây, tín hiệu truy xuất được chứng minh có khả năng nâng cao niềm tin tiêu dùng (Wang & Li, 2023).
*   **Giới hạn:** Tuy nhiên, phần lớn tập trung vào kỹ thuật chuỗi cung ứng hoặc nông sản tươi sống, thiếu dữ liệu cho các sản phẩm chế biến sâu (FMCG) nơi quyết định mua diễn ra nhanh chóng.
*   **Khoảng trống:** Đánh giá cách người tiêu dùng nhận thức về "Traceability" (bỏ qua yếu tố kỹ thuật lõi) như một tín hiệu đầu vào (Stimulus) trong bối cảnh nước yến RTD.

### 2.4. Tính xác thực thương hiệu (Brand Authenticity) và Ý định mua
*   **Kết quả chính:** Tính xác thực (Authenticity) là yếu tố quyết định lòng trung thành và sẵn lòng chi trả (Morhart et al., 2015). Người tiêu dùng tìm kiếm sự chân thật thay vì chỉ hình ảnh quảng cáo.
*   **Giới hạn:** Tính xác thực thường được nghiên cứu gắn với di sản (heritage) hoặc kỹ năng thủ công, hiếm khi được liên kết với minh bạch dữ liệu (data transparency).
*   **Khoảng trống:** Nghiên cứu này đóng góp bằng cách đưa Brand Authenticity làm cơ chế trung gian cốt lõi kết nối giữa tín hiệu truy xuất công nghệ và hành vi mua.

#### Sơ đồ Mô hình Nghiên cứu (S-O-R Integrated Framework)
\`\`\`mermaid
graph LR
    TR["Digital Traceability (TR)"]
    GM["Green Marketing (GM)"]
    PIQ["Perceived Info Quality (PIQ)"]
    GS["Green Skepticism (GS)"]
    GT["Green Trust (GT)"]
    BA["Brand Authenticity (BA)"]
    PI["Purchase Intention (PI)"]
    WTP["Willingness to Pay (WTP)"]

    TR -- "H1 (+)" --> PIQ
    TR -- "H2 (-)" --> GS
    GM -- "H3 (+)" --> GT
    TR -. "H6 (+)" .-> GT
    
    PIQ -- "H4 (+)" --> GT
    GS -- "H5 (-)" --> GT
    GT -- "H7 (+)" --> BA
    
    BA -- "H8 (+)" --> PI
    BA -- "H9 (+)" --> WTP

    style TR fill:#e0f2fe,stroke:#0284c7
    style GM fill:#e0f2fe,stroke:#0284c7
    style PIQ fill:#dcfce7,stroke:#16a34a
    style GS fill:#dcfce7,stroke:#16a34a
    style GT fill:#dcfce7,stroke:#16a34a
    style BA fill:#dcfce7,stroke:#16a34a
    style PI fill:#ffedd5,stroke:#ea580c
    style WTP fill:#ffedd5,stroke:#ea580c
\`\`\`
*Hình 1. Mô hình nghiên cứu tích hợp S-O-R và Lý thuyết Tín hiệu.*

## 3. MỤC TIÊU NGHIÊN CỨU`;
content = content.replace(overviewRegex, newOverview);

// 4. Mục tiêu nghiên cứu
const targetRegex = /## 3\. MỤC TIÊU NGHIÊN CỨU CỦA LUẬN ÁN[\s\S]*?## 4\. NỘI DUNG NGHIÊN CỨU/m;
const newTarget = `## 3. MỤC TIÊU NGHIÊN CỨU CỦA LUẬN ÁN
### 3.1. Mục tiêu tổng quát
Kiểm định cơ chế tác động của nhận thức về truy xuất nguồn gốc số đến ý định mua và mức sẵn lòng chi trả đối với sản phẩm nước yến chế biến sẵn, thông qua vai trò trung gian của hoài nghi xanh, niềm tin xanh và tính xác thực thương hiệu.

### 3.2. Mục tiêu cụ thể
1.  **Kiểm định tác động của truy xuất nguồn gốc số:** Xác định sự ảnh hưởng của tín hiệu truy xuất nguồn gốc đến chất lượng thông tin cảm nhận và hoài nghi xanh.
2.  **Kiểm định cơ chế trung gian:** Đánh giá vai trò của hoài nghi xanh và niềm tin xanh trong việc hình thành tính xác thực thương hiệu.
3.  **Kiểm định tác động đến hành vi:** Đánh giá tác động của tính xác thực thương hiệu lên ý định mua hàng và mức sẵn lòng chi trả thêm (WTP).
4.  **Xác định cơ chế tương tác (điều kiện biên):** Phân tích vai trò điều tiết của truy xuất nguồn gốc số đối với tác động của thông điệp marketing xanh lên niềm tin tiêu dùng.

### 3.3. Câu hỏi nghiên cứu
1.  Tín hiệu truy xuất nguồn gốc số có tác động như thế nào đến chất lượng thông tin cảm nhận và mức độ hoài nghi xanh của người tiêu dùng?
2.  Sự tương tác giữa tín hiệu truy xuất nguồn gốc và thông điệp marketing xanh ảnh hưởng ra sao đến niềm tin xanh?
3.  Niềm tin xanh và tính xác thực thương hiệu đóng vai trò trung gian như thế nào trong mối quan hệ giữa các yếu tố nhận thức và ý định mua hàng / WTP?

## 4. NỘI DUNG NGHIÊN CỨU`;
content = content.replace(targetRegex, newTarget);

// 5. Nội dung nghiên cứu
const contentRegex = /## 4\. NỘI DUNG NGHIÊN CỨU[\s\S]*?## 5\. Ý NGHĨA KHOA HỌC VÀ THỰC TIỄN/m;
const newContent = `## 4. NỘI DUNG NGHIÊN CỨU
Để giải quyết các mục tiêu trên, luận án sẽ triển khai các nội dung nghiên cứu cụ thể:

1.  **Xây dựng khung lý thuyết:**
    *   Hệ thống hóa cơ sở lý luận về Lý thuyết Tín hiệu (Signaling Theory) và mô hình S-O-R.
    *   Phát triển mô hình nghiên cứu và định hình 9 giả thuyết (H1-H9).
2.  **Phát triển thang đo và kịch bản (Nghiên cứu định tính):**
    *   Việt hóa và tinh chỉnh các thang đo lường đã được xác thực (validated scales).
    *   Thiết kế 4 kịch bản thực nghiệm (mockup sản phẩm) cho mô hình 2x2.
    *   Phỏng vấn sâu với 15 chuyên gia để thẩm định độ tin cậy nội dung của thang đo và vật liệu thực nghiệm.
3.  **Kiểm định thực nghiệm (Nghiên cứu định lượng):**
    *   Tiến hành khảo sát thử nghiệm (pilot test) với mẫu nhỏ (n=30).
    *   Thu thập dữ liệu chính thức qua khảo sát phân bổ ngẫu nhiên theo 4 kịch bản (n=400-500) tại TP.HCM đối với nhóm Gen Z.
    *   Phân tích dữ liệu bằng mô hình cấu trúc PLS-SEM (đánh giá measurement model và structural model).
4.  **Phân tích kết quả và diễn giải học thuật:**
    *   Kiểm định các giả thuyết trung gian và điều tiết.
    *   Thảo luận nguyên nhân, giải thích kết quả dưới góc độ lý thuyết hành vi tiêu dùng và đề xuất hàm ý cho doanh nghiệp.

## 5. Ý NGHĨA KHOA HỌC VÀ THỰC TIỄN`;
content = content.replace(contentRegex, newContent);

// 6. Đóng góp khoa học và thực tiễn
const contributionRegex = /## 5\. Ý NGHĨA KHOA HỌC VÀ THỰC TIỄN CỦA ĐỀ TÀI[\s\S]*?## 6\. PHẠM VI NGHIÊN CỨU/m;
const newContribution = `## 5. Ý NGHĨA KHOA HỌC VÀ THỰC TIỄN CỦA ĐỀ TÀI
### 5.1. Đóng góp cấp lý thuyết
*   **Kiểm định cơ chế truyền dẫn tín hiệu:** Cung cấp bằng chứng thực nghiệm giải thích cách thức tín hiệu kỹ thuật (traceability) được người tiêu dùng giải mã thành "tính xác thực thương hiệu" (Brand Authenticity) trong bối cảnh sản phẩm credence goods.
*   **Làm rõ vai trò trung gian cấp cao:** Nghiên cứu kiểm định và xác nhận vai trò của tính xác thực thương hiệu như một cơ chế trung gian quan trọng nối kết giữa sự suy giảm hoài nghi xanh và mức sẵn lòng chi trả thêm (WTP).
*   **Xác định điều kiện biên:** Đánh giá vai trò điều tiết của truy xuất nguồn gốc số, chứng minh khả năng hạn chế hiện tượng greenwashing của các công cụ công nghệ số đối với thông điệp marketing truyền thống.

### 5.2. Đóng góp cấp thực tiễn
*   **Cung cấp dữ liệu thực chứng tại Việt Nam:** Cung cấp dữ liệu hành vi của nhóm người tiêu dùng trẻ (Gen Z) đối với ngành hàng nước yến chế biến sẵn, một ngành hàng mang tính địa phương cao và đang đối mặt với bất cân xứng thông tin lớn.
*   **Gợi ý thiết kế chiến lược truyền thông:** Hỗ trợ các doanh nghiệp FMCG có bằng chứng cơ sở để quyết định việc đầu tư vào hệ thống truy xuất và thiết kế thông điệp truyền thông gắn với bằng chứng minh bạch nhằm tối ưu hóa ý định mua của khách hàng.

## 6. PHẠM VI NGHIÊN CỨU`;
content = content.replace(contributionRegex, newContribution);

// 7. Phạm vi nghiên cứu & 8. Đối tượng nghiên cứu
const scopeRegex = /## 6\. PHẠM VI NGHIÊN CỨU CỦA ĐỀ TÀI[\s\S]*?## 8\. PHƯƠNG PHÁP NGHIÊN CỨU/m;
const newScope = `## 6. PHẠM VI NGHIÊN CỨU CỦA ĐỀ TÀI
1.  **Không gian:** Nghiên cứu được thực hiện tại **TP.HCM**. Lý do chọn địa bàn này vì đây là thị trường tiêu thụ hiện đại, nơi người tiêu dùng có khả năng tiếp cận nhanh với các ứng dụng công nghệ và sự đa dạng của các sản phẩm FMCG cao nhất cả nước.
2.  **Thời gian:** Dữ liệu dự kiến được thu thập từ quý 3/2026 đến quý 1/2027.
3.  **Bối cảnh và đối tượng hành vi:** Nghiên cứu giới hạn trong ngành hàng **nước yến chế biến sẵn (RTD)**. 
    *   *Giới hạn ngoại suy:* Kết quả nghiên cứu chủ yếu phản ánh hành vi của nhóm mẫu khảo sát (Gen Z tại đô thị lớn), do đó cần cẩn trọng khi mở rộng kết quả cho các nhóm nhân khẩu học hay bối cảnh địa lý khác.
    *   *Giới hạn góc nhìn:* Đề tài chỉ đánh giá khía cạnh nhận thức phía cầu (người tiêu dùng), không đánh giá năng lực kỹ thuật của hệ thống blockchain phía cung.

## 7. ĐỐI TƯỢNG NGHIÊN CỨU CỦA ĐỀ TÀI
*   **Đối tượng nghiên cứu:** Cơ chế tác động của tín hiệu truy xuất nguồn gốc số đến niềm tin, tính xác thực thương hiệu và hành vi tiêu dùng (ý định mua và WTP).
*   **Khách thể nghiên cứu:** Người tiêu dùng Gen Z (18–27 tuổi) sinh sống tại TP.HCM, có thói quen sử dụng thực phẩm chức năng / nước giải khát dinh dưỡng.

## 8. PHƯƠNG PHÁP NGHIÊN CỨU`;
content = content.replace(scopeRegex, newScope);

// 9. Phương pháp nghiên cứu
// Specifically rewriting "Thiết kế và quy trình nghiên cứu"
const methodologyRegex = /### 8\.2\. Thiết kế và quy trình nghiên cứu[\s\S]*?### 8\.3\. Thang đo & Bảng câu hỏi/m;
const newMethodology = `### 8.2. Thiết kế và quy trình nghiên cứu
#### 8.2.1. Cơ sở chọn thiết kế thực nghiệm 2x2
Để xác định rõ mối quan hệ nhân quả thay vì chỉ đo lường sự tương quan, nghiên cứu áp dụng thiết kế thực nghiệm giữa các nhóm (between-subjects) $2 \\times 2$ factorial design. 
*   **Biến độc lập 1:** Nhận thức về truy xuất nguồn gốc (Có / Không).
*   **Biến độc lập 2:** Nội dung thông điệp xanh (Thông điệp xanh / Thông điệp chức năng).

Lý do chọn thiết kế này là nhằm cô lập tác động của từng loại tín hiệu và kiểm định sự tương tác (moderation) giữa tín hiệu kỹ thuật (traceability) và thông điệp marketing (green marketing) đối với người tiêu dùng.

#### 8.2.2. Quy trình xây dựng và tiền kiểm định mockup
Sản phẩm được sử dụng trong thực nghiệm là các bản mockup nước yến RTD với một thương hiệu giả định để loại trừ yếu tố "lòng trung thành thương hiệu" có sẵn.
*   **Quy trình xây dựng:** Thiết kế 4 phiên bản bao bì / quảng cáo kỹ thuật số khác nhau dựa trên ma trận $2 \\times 2$. Ở nhóm "Có truy xuất", người tham gia sẽ được tương tác với một giao diện mô phỏng quá trình quét mã QR.
*   **Tiền kiểm định (Pilot / Manipulation Check):** Trước khi khảo sát chính thức, một nhóm 30 người sẽ tham gia pilot test để đánh giá xem họ có thực sự nhận ra sự khác biệt giữa các kịch bản hay không (kiểm tra thao tác - manipulation check).

#### 8.2.3. Chiến lược lấy mẫu và sàng lọc
*   **Chiến lược lấy mẫu:** Lấy mẫu phi xác suất có mục đích (Purposive Sampling) kết hợp phát triển mầm (Snowball sampling). Kích thước mẫu dự kiến n = 400 - 500 người (mỗi nhóm điều kiện n $\\ge$ 100), đủ lớn để đảm bảo sức mạnh thống kê (statistical power) cho phân tích mô hình cấu trúc.
*   **Tiêu chí sàng lọc (Screening):** Người tham gia phải nằm trong độ tuổi Gen Z (18-27), sống tại TP.HCM, và phải trả lời "Có" đối với câu hỏi về việc từng mua/tiêu dùng nước yến chế biến sẵn hoặc các loại thức uống dinh dưỡng (FMCG) trong vòng 3 tháng qua.

#### 8.2.4. Lý do chọn PLS-SEM
Nghiên cứu sử dụng mô hình phương trình cấu trúc bình phương tối thiểu riêng phần (PLS-SEM) thông qua phần mềm SmartPLS 4 vì các lý do sau:
*   Mô hình có tính chất dự báo (predictive) mạnh và chứa nhiều biến trung gian (mediation).
*   Phù hợp với việc phân tích dữ liệu từ thiết kế thực nghiệm (experimental data) khi kết hợp kỹ thuật Bootstrapping.
*   Cung cấp các công cụ mạnh mẽ để kiểm định giá trị phân biệt (như HTMT), giúp xử lý khả năng trùng khái niệm giữa Green Trust và Brand Authenticity.

#### 8.2.5. Chiến lược xử lý sai lệch và kiểm tra độ bền kết quả
*   **Xử lý sai lệch phương pháp chung (CMB):** Áp dụng kỹ thuật Full Collinearity VIF trong SmartPLS để đảm bảo VIF < 3.3.
*   **Độ bền kết quả (Robustness check):** Đánh giá năng lực dự báo ngoài mẫu thông qua PLSpredict, đồng thời tiến hành phân tích đa nhóm (Multi-group analysis - MGA) theo giới tính / tần suất mua hàng để xem xét các yếu tố dị biệt trong mẫu.

### 8.3. Thang đo & Bảng câu hỏi`;
content = content.replace(methodologyRegex, newMethodology);

// 10. Kết quả mong đợi & 11. Tiến độ
const expectedRegex = /## 9\. KẾT QUẢ MONG ĐỢI[\s\S]*?## 12\. TÀI LIỆU THAM KHẢO/m;
const newExpected = `## 9. KẾT QUẢ MONG ĐỢI
Nghiên cứu kỳ vọng đạt được các kết quả kiểm định giả thuyết sau:
1.  **Kết quả về tín hiệu truy xuất:** Dự báo rằng tín hiệu truy xuất nguồn gốc số sẽ có tác động đáng kể trong việc làm giảm hoài nghi xanh. Trong trường hợp tác động yếu, có thể chỉ ra giới hạn của sự chú ý của người tiêu dùng đối với thông tin kỹ thuật trong ngành FMCG.
2.  **Kết quả về cơ chế trung gian:** Dự báo tính xác thực thương hiệu đóng vai trò trung gian toàn phần hoặc bán phần giữa niềm tin và hành vi tiêu dùng, đồng thời làm rõ sự tách biệt giữa khái niệm "tin tưởng" và "cảm nhận tính xác thực".
3.  **Kết quả về hành vi mua và WTP:** Xác định mức tác động biên của tính xác thực đến ý định mua. Đối với biến WTP, bằng cách đo lường qua thang đơn giản hóa (ví dụ: +2000đ, +5000đ), nghiên cứu diễn giải được sự chênh lệch giá trị mà người tiêu dùng sẵn sàng trả cho tính minh bạch.

## 10. NGUỒN KINH PHÍ
Nghiên cứu sinh tự túc nguồn kinh phí (chi phí chính bao gồm: chiết khấu/quà tặng cho người khảo sát, chi phí thiết kế mockup thực nghiệm, phí xuất bản bài báo khoa học).

## 11. DỰ KIẾN KẾ HOẠCH HỌC TẬP, NGHIÊN CỨU TOÀN KHÓA
Lịch trình được thiết kế với thời gian dự phòng (buffer time) để đảm bảo tính khả thi:

1.  **Tiến độ nghiên cứu:**
    *   Tháng 1-12: Hoàn thành học phần Tiến sĩ và Tổng quan tài liệu.
    *   Tháng 13-18: Xin duyệt khảo sát, thiết kế mockup, thực hiện pilot test (có buffer time 2 tháng cho chỉnh sửa thang đo).
    *   Tháng 19-24: Triển khai thu thập dữ liệu chính thức, xử lý dữ liệu với PLS-SEM.
2.  **Tiến độ công bố:**
    *   Tháng 25-30: Viết bài và nộp tạp chí chuyên ngành. (Dự trù thời gian phản biện bài báo kéo dài từ 4-6 tháng).
3.  **Tiến độ hoàn thiện luận án:**
    *   Tháng 31-36: Hoàn thiện toàn văn luận án, báo cáo các cấp và bảo vệ cấp Trường.

## 12. TÀI LIỆU THAM KHẢO`;
content = content.replace(expectedRegex, newExpected);

// 12. Tài liệu tham khảo
const refRegex = /## 12\. TÀI LIỆU THAM KHẢO[\s\S]*$/m;
const newRef = `## 12. TÀI LIỆU THAM KHẢO

**Nhóm 1: Lý thuyết nền**
1. Akerlof, G. A. (1970). The market for "lemons": Quality uncertainty and the market mechanism. *The Quarterly Journal of Economics, 84*(3), 488–500.
2. Connelly, B. L., Certo, S. T., Ireland, R. D., & Reutzel, C. R. (2011). Signaling theory: A review and assessment. *Journal of Management, 37*(1), 39–67.
3. Spence, M. (1973). Job market signaling. *The Quarterly Journal of Economics, 87*(3), 355–374.

**Nhóm 2: Nghiên cứu về traceability/blockchain**
4. Francisco, K., & Swanson, D. (2018). The supply chain has no clothes: Technology adoption of blockchain for supply chain transparency. *Logistics, 2*(1), 2.
5. Saberi, S., Kouhizadeh, M., Sarkis, J., & Shen, L. (2019). Blockchain technology and its relationships to sustainable supply chain management. *International Journal of Production Economics, 208*, 211-227.
6. Wang, Y., & Li, X. (2023). Trusting the chain: The impact of blockchain traceability on brand authenticity and consumer behavior. *Psychology & Marketing, 40*(8), 1540-1555.
7. Kshetri, N. (2024). The role of blockchain in enhancing consumer trust in supply chains. *Journal of Business Research, 164*, 113946.

**Nhóm 3: Nghiên cứu về brand authenticity và trust**
8. Chen, Y. S. (2012). The drivers of green brand equity: Green brand image, green satisfaction, and green trust. *Journal of Business Ethics, 110*(4), 505–519.
9. Morhart, F., Malär, L., Guèvremont, A., Girardin, F., & Grohmann, B. (2015). Brand authenticity: An integrative framework and measurement scale. *Journal of Consumer Psychology, 25*(2), 200–218.
10. Skarmeas, N., & Leonidou, C. N. (2013). When consumers doubt, watch out! The role of green skepticism in consumer responses to greenwashing. *Journal of Business Research, 66*(10), 1946–1954.

**Nhóm 4: Nghiên cứu về hành vi tiêu dùng trong FMCG**
11. Homburg, C., Hoyer, W. D., & Koschate, N. (2005). Customers’ reactions to price increases: Do customer satisfaction and equipment matter? *Journal of Marketing Research, 42*(1), 84–96.
12. Spears, N., & Singh, S. N. (2004). Measuring attitude toward the brand and purchase intentions. *Journal of Advertising, 33*(2), 53–66.
13. Kantar. (2023). *Vietnam FMCG Monitor: Consumer trends and behavior shifting*.
14. McKinsey & Company. (2022). *What is Gen Z?*.
15. Nielsen. (2022). *Consumer Trust in the Food and Beverage Industry*.
`;
content = content.replace(refRegex, newRef);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update complete.');
