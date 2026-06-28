const fs = require('fs');

const filePath = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';

const newContent = `# ĐỀ CƯƠNG NGHIÊN CỨU LUẬN ÁN TIẾN SĨ

**Tên đề tài:** Ảnh hưởng của truy xuất nguồn gốc số đến ý định mua sản phẩm nước yến chế biến sẵn: Vai trò trung gian của tính xác thực thương hiệu.
**Chuyên ngành đào tạo:** Quản trị Kinh doanh  
**Mã chuyên ngành:** 9340101  
**Nghiên cứu sinh:** Lê Phúc Hải  
**Cơ sở đào tạo:** Trường Đại học Nha Trang

---

## 1. LÝ DO CHỌN ĐỀ TÀI CỦA LUẬN ÁN
### 1.1. Bất cân xứng thông tin trong hàng hóa khó kiểm chứng (Nước yến RTD)
Các sản phẩm nước yến chế biến sẵn (RTD) được phân loại là hàng hóa dựa trên niềm tin (credence goods), nơi người tiêu dùng gần như không thể tự kiểm chứng được chất lượng thực tế (như tỷ lệ yến, nguồn gốc nguyên liệu) ngay cả sau khi sử dụng (Akerlof, 1970). Sự bất cân xứng thông tin này tạo ra rủi ro cảm nhận cao, dẫn đến tình trạng người tiêu dùng luôn mang tâm lý e ngại trước các sản phẩm mang mác "nguyên chất". Vì vậy, niềm tin và sự xác thực trở thành biến số quyết định sự sống còn của thương hiệu trong ngành hàng này.

### 1.2. Truy xuất nguồn gốc số như một tín hiệu minh bạch
Trong bối cảnh người tiêu dùng ngày càng nghi ngờ các lời cam kết truyền thông truyền thống hay các loại giấy chứng nhận tĩnh dễ bị làm giả, truy xuất nguồn gốc số (Digital Traceability) được kỳ vọng đóng vai trò là một "tín hiệu minh bạch" khách quan. Tuy nhiên, vấn đề cốt lõi không nằm ở việc kiến trúc công nghệ có ưu việt hay không, mà nằm ở việc người tiêu dùng tiếp nhận và diễn giải tín hiệu công nghệ này như thế nào trong tâm trí của họ.

### 1.3. Khoảng trống nghiên cứu
Hiện nay, phần lớn các nghiên cứu về truy xuất nguồn gốc số tập trung vào khía cạnh chuỗi cung ứng (supply chain) thay vì khía cạnh nhận thức hành vi (consumer behavior). Đề tài này được thực hiện nhằm trả lời câu hỏi: Khi tiếp xúc với giao diện truy xuất nguồn gốc số, liệu người tiêu dùng có nâng cao được nhận thức về chất lượng thông tin, từ đó hình thành cảm nhận về "tính xác thực thương hiệu" và thúc đẩy ý định mua hay không?

## 2. TÌNH HÌNH NGHIÊN CỨU TRONG VÀ NGOÀI NƯỚC
### 2.1. Nước yến RTD là hàng hóa dựa trên niềm tin (Credence Goods)
Nghiên cứu của Akerlof (1970) và các ứng dụng hành vi tiêu dùng gần đây chỉ ra rằng hàng hóa khó kiểm chứng tạo ra sự bất cân xứng thông tin sâu sắc. Nhu cầu xác thực thông tin trong ngành thực phẩm chức năng / yến sào là cực kỳ lớn, vì người mua phải hoàn toàn phụ thuộc vào các tín hiệu bên ngoài để định giá chất lượng sản phẩm.

### 2.2. Truy xuất nguồn gốc số như một tín hiệu nhận thức
Các nghiên cứu trước đây (Wang & Li, 2023) đã bắt đầu xem xét truy xuất nguồn gốc số như một công cụ xây dựng niềm tin. Tuy nhiên, khoảng trống lớn là các nghiên cứu thường mô tả blockchain ở cấp độ kỹ thuật chuỗi cung ứng, thay vì đo lường nó như một "tín hiệu nhận thức" (cognitive signal) mà người tiêu dùng bình thường có thể đọc và diễn giải. Việc cô lập tác động của tín hiệu này trong bối cảnh FMCG là vô cùng cần thiết.

### 2.3. Tính xác thực thương hiệu (Brand Authenticity) như cơ chế trung gian
Tính xác thực (Authenticity) là yếu tố quyết định lòng trung thành và ý định mua (Morhart et al., 2015). Trong thị trường đầy rẫy sự sao chép và các cam kết phóng đại, tính xác thực đóng vai trò cầu nối. Nghiên cứu này thiết lập lập luận rằng: Tín hiệu minh bạch từ công nghệ không trực tiếp tạo ra hành vi mua, mà nó phải được chuyển hóa thành "tính xác thực thương hiệu" trong tâm trí khách hàng.

#### Sơ đồ Mô hình Nghiên cứu (S-O-R Integrated Framework)
\`\`\`mermaid
graph LR
    TR["Perceived Traceability (PT)"]
    PIQ["Perceived Info Quality (PIQ)"]
    BA["Brand Authenticity (BA)"]
    PI["Purchase Intention (PI)"]
    WTP["Willingness to Pay (WTP - Phụ trợ)"]

    TR -- "H1 (+)" --> PIQ
    TR -- "H2 (+)" --> BA
    PIQ -- "H3 (+)" --> BA
    
    BA -- "H4 (+)" --> PI
    BA -- "H5 (+)" --> WTP

    style TR fill:#e0f2fe,stroke:#0284c7
    style PIQ fill:#dcfce7,stroke:#16a34a
    style BA fill:#dcfce7,stroke:#16a34a
    style PI fill:#ffedd5,stroke:#ea580c
    style WTP fill:#f1f5f9,stroke:#475569
\`\`\`
*Hình 1. Mô hình nghiên cứu đề xuất.*

## 3. MỤC TIÊU NGHIÊN CỨU CỦA LUẬN ÁN
### 3.1. Mục tiêu tổng quát
Kiểm định cơ chế tác động của nhận thức về truy xuất nguồn gốc số đến ý định mua sản phẩm nước yến chế biến sẵn, thông qua vai trò trung gian của tính xác thực thương hiệu.

### 3.2. Mục tiêu cụ thể
1.  **Kiểm định tác động của truy xuất nguồn gốc số:** Xác định sự ảnh hưởng của tín hiệu truy xuất nguồn gốc (Perceived Traceability) đến chất lượng thông tin cảm nhận (PIQ).
2.  **Kiểm định cơ chế trung gian:** Làm rõ vai trò của PIQ và Tính xác thực thương hiệu (Brand Authenticity) như những biến trung gian kết nối tín hiệu công nghệ với ý định hành vi.
3.  **Kiểm định tác động đến hành vi:** Đánh giá tác động của tính xác thực thương hiệu lên ý định mua hàng (kết quả chính) và mức sẵn lòng chi trả thêm (hệ quả phụ trợ).

### 3.3. Câu hỏi nghiên cứu
1.  Nhận thức về truy xuất nguồn gốc số có tác động như thế nào đến chất lượng thông tin cảm nhận và tính xác thực thương hiệu?
2.  Tính xác thực thương hiệu đóng vai trò trung gian như thế nào trong việc thúc đẩy ý định mua và định giá sản phẩm của người tiêu dùng đối với nước yến RTD?

## 4. NỘI DUNG NGHIÊN CỨU
1.  **Xây dựng khung lý thuyết:** Hệ thống hóa cơ sở lý luận về Lý thuyết Tín hiệu (Signaling Theory) và hàng hóa khó kiểm chứng.
2.  **Phát triển thang đo và kịch bản (Nghiên cứu định tính):** Thiết kế kịch bản thực nghiệm (mockup sản phẩm có/không có giao diện truy xuất) và phỏng vấn chuyên gia.
3.  **Kiểm định thực nghiệm (Nghiên cứu định lượng):** Thu thập dữ liệu qua khảo sát thực nghiệm tại TP.HCM đối với nhóm Gen Z, phân tích bằng mô hình cấu trúc PLS-SEM.
4.  **Phân tích kết quả:** Thảo luận kết quả dưới góc độ lý thuyết hành vi tiêu dùng.

## 5. Ý NGHĨA KHOA HỌC VÀ THỰC TIỄN CỦA ĐỀ TÀI
### 5.1. Đóng góp cấp lý thuyết
*   Nghiên cứu kiểm định vai trò của truy xuất nguồn gốc số như một "tín hiệu nhận thức" (cognitive signal) trong bối cảnh hàng hóa khó kiểm chứng, mở rộng ứng dụng của Lý thuyết Tín hiệu vào môi trường tiêu dùng số.
*   Nghiên cứu làm rõ cơ chế trung gian của tính xác thực thương hiệu (Brand Authenticity), chứng minh cách một công cụ kỹ thuật khách quan được chuyển hóa thành sự gắn kết tâm lý sâu sắc trong ngành nước yến RTD.
*   Nghiên cứu cung cấp bằng chứng thực nghiệm từ thị trường Việt Nam ở một bối cảnh (Gen Z và sản phẩm yến chế biến sẵn) còn ít được khám phá.

### 5.2. Đóng góp cấp thực tiễn
*   Hỗ trợ các doanh nghiệp sản xuất nước yến có cơ sở khoa học để quyết định đầu tư vào hệ thống minh bạch dữ liệu thay vì chỉ dựa vào quảng cáo truyền thống.
*   Cung cấp dữ liệu hành vi của nhóm Gen Z giúp định hình chiến lược bao bì và trải nghiệm khách hàng.

## 6. PHẠM VI NGHIÊN CỨU CỦA ĐỀ TÀI
1.  **Không gian:** Nghiên cứu được thực hiện tại **TP.HCM**.
2.  **Thời gian:** Dữ liệu dự kiến được thu thập từ quý 3/2026 đến quý 1/2027.
3.  **Bối cảnh và đối tượng hành vi:** Chỉ tập trung vào duy nhất sản phẩm **nước yến chế biến sẵn (RTD)**. Đề tài đánh giá khía cạnh nhận thức phía cầu (hành vi người tiêu dùng phản ứng với tín hiệu), hoàn toàn không đánh giá kiến trúc kỹ thuật hay độ an toàn dữ liệu của hệ thống công nghệ thông tin.

## 7. ĐỐI TƯỢNG NGHIÊN CỨU CỦA ĐỀ TÀI
*   **Đối tượng nghiên cứu:** Cơ chế tác động của tín hiệu truy xuất nguồn gốc số đến tính xác thực thương hiệu và ý định mua.
*   **Khách thể nghiên cứu:** Người tiêu dùng Gen Z (18–27 tuổi) sinh sống tại TP.HCM, từng sử dụng thực phẩm chức năng / nước giải khát dinh dưỡng.

## 8. PHƯƠNG PHÁP NGHIÊN CỨU
### 8.1. Mô hình nghiên cứu và Giả thuyết
#### 8.1.1. Logic xây dựng mô hình (Model Logic)
Mô hình nghiên cứu được xây dựng dựa trên sự tối giản và tập trung cao độ vào chuỗi nhân quả: **Tín hiệu truy xuất (TR) $\\rightarrow$ Nhận thức chất lượng (PIQ) $\\rightarrow$ Tính xác thực (BA) $\\rightarrow$ Hành vi mua (PI/WTP)**.
Lý do siết chặt mô hình: Loại bỏ các biến số gần nghĩa nhằm tránh hiện tượng trùng lắp khái niệm, làm nổi bật vai trò duy nhất của Brand Authenticity như một chiếc cầu nối giữa "bằng chứng kỹ thuật" và "quyết định mua sắm".

#### 8.1.2. Giả thuyết nghiên cứu (Hypotheses Development)
*   **H1 (+):** Nhận thức về khả năng truy xuất (TR) tác động tích cực đến Chất lượng thông tin cảm nhận (PIQ).
*   **H2 (+):** Nhận thức về khả năng truy xuất (TR) tác động tích cực đến Tính xác thực thương hiệu (BA).
*   **H3 (+):** Chất lượng thông tin cảm nhận (PIQ) tác động tích cực đến Tính xác thực thương hiệu (BA).
*   **H4 (+):** Tính xác thực thương hiệu (BA) tác động tích cực đến Ý định mua hàng (PI - Kết quả chính).
*   **H5 (+):** Tính xác thực thương hiệu (BA) tác động tích cực đến Mức sẵn lòng chi trả thêm (WTP - Kết quả phụ trợ).

### 8.2. Thiết kế và quy trình nghiên cứu
#### 8.2.1. Cơ sở chọn thiết kế thực nghiệm 
Nghiên cứu áp dụng thiết kế thực nghiệm giữa các nhóm (between-subjects design) với thao tác cốt lõi:
*   **Traceability Stimulus (TR_STIM):** Nhóm Thực nghiệm (Có giao diện truy xuất vòng đời sản phẩm) vs. Nhóm Đối chứng (Không có giao diện truy xuất).
Việc đo lường Perceived Traceability (PT) bằng thang Likert được đưa vào mô hình PLS-SEM để đóng vai trò vừa là biến khởi nguồn (Stimulus perception) vừa là công cụ kiểm tra thao tác (Manipulation check).

#### 8.2.2. Quy trình xây dựng và tiền kiểm định mockup
Sản phẩm là bản mockup nước yến RTD với thương hiệu giả định để loại trừ yếu tố thiên lệch do "lòng trung thành thương hiệu" có sẵn.
*   **Tiền kiểm định (Manipulation Check):** Pilot test (n=30) sẽ chạy T-test để xác nhận nhóm xem mockup có truy xuất thực sự ghi nhận mức điểm PT cao hơn nhóm đối chứng một cách có ý nghĩa thống kê.

#### 8.2.3. Chiến lược lấy mẫu và sàng lọc
*   **Chiến lược lấy mẫu:** Lấy mẫu phi xác suất có mục đích (Purposive Sampling). Kích thước mẫu dự kiến n = 300 - 400.
*   **Tiêu chí sàng lọc (Screening):** Người tham gia phải nằm trong độ tuổi Gen Z (18-27), sống tại TP.HCM, và từng sử dụng nước yến/FMCG dinh dưỡng trong vòng 3 tháng qua.

#### 8.2.4. Lý do chọn PLS-SEM
Sử dụng mô hình PLS-SEM (SmartPLS 4) vì:
*   Mô hình tập trung mạnh vào năng lực dự báo hành vi (Predictive capability).
*   Hỗ trợ xuất sắc cho dữ liệu từ thiết kế thực nghiệm (Experimental data).
*   Sử dụng chỉ số HTMT để đánh giá khắt khe độ giá trị phân biệt giữa các cấu trúc nhận thức (TR, PIQ, BA).

### 8.3. Thang đo & Bảng câu hỏi (Measurement Model)
#### 8.3.1. Cấu trúc bảng hỏi (Rút gọn và Siết chặt)
**1. Perceived Traceability (PT)**
*   PT1: Tôi có thể dễ dàng truy xuất nguồn gốc của sản phẩm này.
*   PT2: Thông tin về vòng đời sản phẩm được trình bày rõ ràng.
*   PT3: Tôi có thể kiểm tra được quy trình sản xuất của sản phẩm.

**2. Perceived Information Quality (PIQ)**
*   PIQ1: Thông tin cung cấp là chính xác.
*   PIQ2: Thông tin cung cấp là đáng tin cậy.
*   PIQ3: Thông tin đầy đủ và dễ hiểu.

**3. Brand Authenticity (BA)**
*   BA1: Thương hiệu này mang lại cảm giác "thật".
*   BA2: Thương hiệu này rất chân thành.
*   BA3: Thương hiệu này không giả tạo.

**4. Purchase Intention (PI)**
*   PI1: Tôi có khả năng sẽ mua sản phẩm này.
*   PI2: Tôi sẽ cân nhắc mua sản phẩm này.
*   PI3: Tôi sẵn sàng chọn sản phẩm này khi mua.

**5. Willingness to Pay Premium (WTP - Biến phụ trợ)**
*   Đo lường bằng câu hỏi định giá trực tiếp: *"Giả sử một lốc nước yến thông thường có giá 40.000 VNĐ. Bạn sẵn sàng trả tối đa bao nhiêu tiền cho lốc nước yến có hệ thống truy xuất này?"* (Người tham gia tự điền số tiền cụ thể).

## 9. KẾT QUẢ MONG ĐỢI
Nghiên cứu kỳ vọng đạt được:
1.  Xác nhận vai trò trung gian cốt lõi của Tính xác thực thương hiệu (BA) trong việc kết nối tín hiệu truy xuất với ý định mua hàng.
2.  Chứng minh định lượng việc truy xuất nguồn gốc số ảnh hưởng trực tiếp đến giá trị kinh tế (thông qua WTP) của sản phẩm yến sào.

## 10. NGUỒN KINH PHÍ
Nghiên cứu sinh tự túc nguồn kinh phí (chi phí khảo sát, thiết kế mockup, xuất bản).

## 11. DỰ KIẾN KẾ HOẠCH HỌC TẬP, NGHIÊN CỨU TOÀN KHÓA
*   **Tháng 1-12:** Hoàn thành học phần Tiến sĩ và Tổng quan tài liệu.
*   **Tháng 13-18:** Xin duyệt khảo sát, thiết kế mockup, thực hiện pilot test.
*   **Tháng 19-24:** Thu thập dữ liệu chính thức, xử lý dữ liệu với PLS-SEM.
*   **Tháng 25-30:** Viết bài và nộp tạp chí chuyên ngành.
*   **Tháng 31-36:** Hoàn thiện toàn văn luận án và bảo vệ.

## 12. TÀI LIỆU THAM KHẢO
1. Akerlof, G. A. (1970). The market for "lemons": Quality uncertainty and the market mechanism. *The Quarterly Journal of Economics, 84*(3), 488–500.
2. Morhart, F., Malär, L., Guèvremont, A., Girardin, F., & Grohmann, B. (2015). Brand authenticity: An integrative framework and measurement scale. *Journal of Consumer Psychology, 25*(2), 200–218.
3. Wang, Y., & Li, X. (2023). Trusting the chain: The impact of blockchain traceability on brand authenticity and consumer behavior. *Psychology & Marketing, 40*(8), 1540-1555.
4. Kantar. (2023). *Vietnam FMCG Monitor: Consumer trends and behavior shifting*.
`;

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Update fix_reviewer_final_6 complete.');
