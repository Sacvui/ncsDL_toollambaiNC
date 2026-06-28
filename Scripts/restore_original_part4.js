const fs = require('fs');
const f = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';
const p = `
#### 8.2.3. Vật liệu thực nghiệm (Stimulus Development)
Vật liệu thực nghiệm được phát triển dưới dạng Mockup sản phẩm:
*   Bao bì sản phẩm với một **thương hiệu giả định** (fictitious brand) nhằm loại bỏ nhiễu ngoại lai từ Lòng trung thành thương hiệu.
*   QR code giả lập có khả năng tương tác.
*   Giao diện truy xuất nguồn gốc hiển thị chi tiết vòng đời sản phẩm.

#### 8.2.4. Đối tượng và Phương pháp thu thập dữ liệu
*   **Đối tượng:** Người tiêu dùng Gen Z (18–27 tuổi) tại TP.HCM.
*   **Phương pháp lấy mẫu:** Lấy mẫu phi xác suất có mục đích (Purposive Sampling) kết hợp Snowball sampling. Bộ lọc sàng lọc gắt gao: có hành vi tiêu thụ nước yến/FMCG dinh dưỡng và quan tâm đến sức khỏe.
*   **Kích thước mẫu dự kiến:** n = 400 – 500.

#### 8.2.5. Thang đo và Xây dựng bảng hỏi
Toàn bộ biến tiềm ẩn được đo lường bằng thang đo **Likert 7 điểm**. Thang đo 7 điểm cung cấp độ nhạy cao hơn cho mô hình PLS-SEM (Hair et al., 2022).
*   **Quy trình chuẩn hóa:** Dịch xuôi - dịch ngược (translation - back-translation).
*   **Pilot test:** n ≈ 30 trước khi khảo sát diện rộng.

#### 8.2.6. Phân tích dữ liệu (Data Analysis)
Phương pháp phân tích cốt lõi là **PLS-SEM** (SmartPLS 4). Quy trình 4 bước:
1.  **Mô hình đo lường:** Cronbach's Alpha, ρ_A, Composite Reliability (CR), AVE ≥ 0.5.
2.  **Giá trị phân biệt:** Fornell-Larcker criterion và HTMT.
3.  **Mô hình cấu trúc:** Path coefficients β, R², f², PLSpredict (Q² predict).
4.  **Kiểm định trung gian nối tiếp (Serial Mediation) và Phân tích đa nhóm (MGA):** Bootstrapping 5.000 mẫu lặp. Phân tích đa nhóm theo giới tính / kinh nghiệm mua yến.

#### 8.2.7. Kiểm soát sai lệch (Bias Control)
1.  **Common Method Bias (CMB):** Hoán đổi thứ tự câu hỏi, biến đánh dấu (Marker variable), Full collinearity VIF < 3.3.
2.  **Manipulation Check:** Câu hỏi kiểm tra thao tác thực nghiệm.
3.  **Data Cleaning:** Loại bỏ "Speeders" và "Straight-liners".

#### 8.2.8. Đạo đức nghiên cứu (Research Ethics)
*   Sự tham gia hoàn toàn tự nguyện.
*   Dữ liệu ẩn danh hoàn toàn.
*   Tuân thủ quy định của Hội đồng Đạo đức (IRB) Đại học Nha Trang.

---

### 8.3. Thang đo & Bảng câu hỏi (Measurement Model & Questionnaire)
#### 8.3.1. Nguyên tắc xây dựng thang đo
*   Sử dụng thang đo Likert 7 điểm.
*   Kế thừa từ các nghiên cứu đã kiểm định (validated scales).
*   Dịch thuật ngược (Back-translation: Anh ↔ Việt).
*   Pilot test (n ≈ 30).

#### 8.3.2. Cấu trúc bảng hỏi
**PHẦN A – KỊCH BẢN (Stimulus Exposure)**
Người tham gia xem 1 trong 4 mockup sản phẩm (phân bổ ngẫu nhiên).

**PHẦN B – THANG ĐO CÁC BIẾN NGHIÊN CỨU**

**1. Nhận thức về truy xuất nguồn gốc (TR)** *(Adapted from traceability literature)*
*   TR1: Tôi có thể dễ dàng truy xuất nguồn gốc của sản phẩm này.
*   TR2: Thông tin về nguồn gốc sản phẩm được trình bày rõ ràng.
*   TR3: Tôi tin rằng thông tin truy xuất là minh bạch.
*   TR4: Tôi có thể kiểm tra được quy trình sản xuất của sản phẩm.
*   TR5: Hệ thống truy xuất giúp tôi hiểu rõ sản phẩm hơn.

**2. Perceived Information Quality (PIQ)** *(Adapted from Nelson et al., 2005)*
*   PIQ1: Thông tin về sản phẩm là chính xác.
*   PIQ2: Thông tin được cung cấp là đáng tin cậy.
*   PIQ3: Thông tin là đầy đủ.
*   PIQ4: Thông tin được trình bày rõ ràng và dễ hiểu.

**3. Skepticism (SK)** *(Adapted from Skarmeas & Leonidou, 2013)*
*   SK1: Tôi nghi ngờ các tuyên bố "tự nhiên" của sản phẩm này.
*   SK2: Tôi cho rằng thông điệp "nguyên chất" thường bị phóng đại.
*   SK3: Tôi không hoàn toàn tin các cam kết về thành phần.
*   SK4: Tôi nghĩ rằng nhiều sản phẩm "tự nhiên" chỉ là marketing.
*   SK5: Tôi hoài nghi về tính trung thực của các tuyên bố này.

**4. Trust (TT)** *(Adapted from Chen, 2012)*
*   TT1: Sản phẩm này đáng tin cậy.
*   TT2: Tôi cảm thấy an toàn khi sử dụng sản phẩm này.
*   TT3: Sản phẩm này có thể tin được.

**5. Brand Authenticity (BA)** *(Adapted from Morhart et al., 2015)*
*   BA1: Thương hiệu này mang lại cảm giác "thật".
*   BA2: Thương hiệu này rất chân thành.
*   BA3: Thương hiệu này không giả tạo.
*   BA4: Thương hiệu này đúng với những gì họ nói.

**6. Purchase Intention (PI)** *(Adapted from Spears & Singh, 2004)*
*   PI1: Tôi có khả năng sẽ mua sản phẩm này.
*   PI2: Tôi sẽ cân nhắc mua sản phẩm này.
*   PI3: Tôi có ý định thử sản phẩm này.
*   PI4: Tôi sẵn sàng chọn sản phẩm này khi mua.

**7. Willingness to Pay Premium (WTP)** *(Gabor-Granger đã đơn giản hóa)*
*   **Câu hỏi:** "Nếu sản phẩm này có giá cao hơn sản phẩm thông thường, bạn sẵn sàng trả thêm tối đa bao nhiêu?"
    - [ ] Không trả thêm
    - [ ] +2.000 VNĐ
    - [ ] +5.000 VNĐ
    - [ ] +8.000 VNĐ
    - [ ] +10.000 VNĐ

#### 8.3.3. Biến kiểm tra thao tác (Manipulation Check)
*   MC_TR1: Sản phẩm này có cung cấp thông tin truy xuất nguồn gốc.
*   MC_TR2: Tôi có thể kiểm tra thông tin sản phẩm.
*   MC_NC1: Sản phẩm này nhấn mạnh yếu tố "tự nhiên".
*   MC_NC2: Nội dung marketing tập trung vào sức khỏe.

#### 8.3.4. Biến kiểm soát (Control Variables)
*   Giới tính, Độ tuổi, Tần suất sử dụng nước giải khát.
*   Mức độ quan tâm đến sức khỏe (1–7 điểm).
*   Mức độ quan tâm đến môi trường (1–7 điểm).

#### 8.3.5. Kiểm định thang đo (Measurement Validation Plan)
*   Cronbach's Alpha ≥ 0.7; CR ≥ 0.7.
*   AVE ≥ 0.5.
*   HTMT < 0.85.

---

## 9. KẾT QUẢ MONG ĐỢI
### 9.1. Kết quả khoa học kỳ vọng
*   **Sức mạnh của tín hiệu kỹ thuật:** Dự đoán tín hiệu truy xuất có sức mạnh làm giảm hoài nghi. Nếu tác động yếu, nghiên cứu sẽ phân tích các rào cản nhận thức.
*   **Nút thắt của tính xác thực:** Kỳ vọng chứng minh Tính xác thực thương hiệu (BA) là cơ chế trung gian cốt lõi chuyển hóa niềm tin thành mức sẵn lòng chi trả thêm (WTP).

### 9.2. Lộ trình công bố

| Giai đoạn | Hoạt động | Đầu ra |
|---|---|---|
| Tháng 6-7/2027 | Hội thảo khoa học quốc gia/quốc tế | Kỷ yếu hội thảo ISBN |
| Tháng 10/2027 | Báo cáo trung gian ĐHQG Nha Trang | Báo cáo tiến độ |
| Tháng 3/2028 | Nộp bài tạp chí HĐGS | 02-03 bài báo |
| Tháng 12/2028 | Bảo vệ luận án Tiến sĩ | Luận án hoàn chỉnh |

## 10. NGUỒN KINH PHÍ
Nghiên cứu sinh tự túc nguồn kinh phí (bao gồm chi phí khảo sát, xây dựng mockup, và công bố bài báo).

## 11. DỰ KIẾN KẾ HOẠCH HỌC TẬP, NGHIÊN CỨU TOÀN KHÓA
Kế hoạch học tập và nghiên cứu toàn khóa được thiết kế trong thời gian chuẩn 3 năm (36 tháng):

| STT | Nội dung / Nhiệm vụ | Thời gian | Kết quả dự kiến | Nơi thực hiện |
|---|---|---|---|---|
| 1 | Học kỳ 1: Học phần trình độ TS | Tháng 1 - Tháng 6 | 8 Tín chỉ | ĐH Nha Trang |
| 2 | Học kỳ 2: Tiểu luận tổng quan | Tháng 7 - Tháng 12 | 4 Tín chỉ | ĐH Nha Trang |
| 3 | Học kỳ 3: Chuyên đề TS 1 & 2 | Tháng 13 - Tháng 18 | 8 Tín chỉ chuyên đề | ĐH Nha Trang / TP.HCM |
| 4 | Học kỳ 4: Nghiên cứu định lượng | Tháng 19 - Tháng 24 | Báo cáo kết quả | TP.HCM |
| 5 | Học kỳ 5: Viết báo khoa học | Tháng 25 - Tháng 30 | ≥ 02 bài tạp chí HĐGS | Các Tạp chí |
| 6 | Học kỳ 6: Hoàn thiện & Bảo vệ | Tháng 31 - Tháng 36 | Đạt học vị Tiến sĩ | ĐH Nha Trang |

## 12. TÀI LIỆU THAM KHẢO
1. Akerlof, G. A. (1970). The market for "lemons": Quality uncertainty and the market mechanism. *The Quarterly Journal of Economics, 84*(3), 488–500.
2. Chen, Y. S. (2012). The drivers of green brand equity: Green brand image, green satisfaction, and green trust. *Journal of Business Ethics, 110*(4), 505–519.
3. Connelly, B. L., Certo, S. T., Ireland, R. D., & Reutzel, C. R. (2011). Signaling theory: A review and assessment. *Journal of Management, 37*(1), 39–67.
4. Francisco, K., & Swanson, D. (2018). The supply chain has no clothes: Technology adoption of blockchain for supply chain transparency. *Logistics, 2*(1), 2.
5. Homburg, C., Hoyer, W. D., & Koschate, N. (2005). Customers' reactions to price increases. *Journal of Marketing Research, 42*(1), 84–96.
6. Mehrabian, A., & Russell, J. A. (1974). *An approach to environmental psychology*. MIT Press.
7. Morhart, F., Malär, L., Guèvremont, A., Girardin, F., & Grohmann, B. (2015). Brand authenticity: An integrative framework and measurement scale. *Journal of Consumer Psychology, 25*(2), 200–218.
8. Nelson, R. R., Todd, P. A., & Wixom, B. H. (2005). Antecedents of information and system quality. *Journal of Management Information Systems, 21*(4), 199–235.
9. Newman, G. E., & Dhar, R. (2014). Authenticity is contagious: Brand essence and the original source of production. *Journal of Marketing Research, 51*(3), 371-386.
10. Saberi, S., Kouhizadeh, M., Sarkis, J., & Shen, L. (2019). Blockchain technology and its relationships to sustainable supply chain management. *International Journal of Production Economics, 208*, 211-227.
11. Skarmeas, N., & Leonidou, C. N. (2013). When consumers doubt, watch out! The role of CSR skepticism. *Journal of Business Research, 66*(10), 1946–1954.
12. Spears, N., & Singh, S. N. (2004). Measuring attitude toward the brand and purchase intentions. *Journal of Advertising, 33*(2), 53–66.
13. Spence, M. (1973). Job market signaling. *The Quarterly Journal of Economics, 87*(3), 355–374.
14. Wang, Y., & Li, X. (2023). Trusting the chain: The impact of blockchain traceability on brand authenticity and consumer behavior. *Psychology & Marketing, 40*(8), 1540-1555.
15. Kshetri, N. (2024). The role of blockchain in enhancing consumer trust in supply chains. *Journal of Business Research, 164*, 113946.
16. Lu, L., et al. (2023). The effect of blockchain traceability on consumer purchase intention for food products. *Journal of Retailing and Consumer Services, 71*, 103233.
17. Spielmann, N., & Maguire, M. (2024). Food authenticity and its impact on consumer valuation in credence goods markets. *Food Policy, 120*, 102550.
18. Kantar. (2023). *Vietnam FMCG Monitor: Consumer trends and behavior shifting*.
19. McKinsey & Company. (2022). *What is Gen Z?*.
20. Nielsen. (2022). *Consumer Trust in the Food and Beverage Industry*.
`;
fs.appendFileSync(f, p, 'utf8');
console.log('Part 4 done.');
