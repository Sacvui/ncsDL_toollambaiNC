const fs = require('fs');

const content05 = `## 5. Phương pháp nghiên cứu sẽ được sử dụng

### 5.1. Thiết kế nghiên cứu tổng thể

Nghiên cứu sử dụng **thiết kế đa nghiên cứu (Multi-study Design)** nhằm đạt chuẩn công bố tại các tạp chí quốc tế hạng Q1/Q2, bao gồm:

**Study 1 - Khảo sát dọc (Longitudinal Survey):**
Thiết kế khảo sát 2 đợt (Two-wave Longitudinal Design) trên mẫu N = 900 người tiêu dùng FMCG nhằm kiểm định toàn bộ mô hình cấu trúc CSI-CL-eWOM-CPO. Mục đích tách biệt thời điểm đo lường biến độc lập và biến phụ thuộc để kiểm soát triệt để rủi ro phương pháp chung (Common Method Bias - CMB).

- **Wave 1 (T1):** Đo lường Thói quen tiêu dùng (HB), Chất lượng cảm nhận (PQ), Giá trị cảm nhận (PV), và Chỉ số Hài lòng tổng thể (CSI). Đồng thời thu thập Biến đánh dấu (Marker Variable) không liên quan về mặt lý thuyết.
- **Wave 2 (T2, cách T1 ba tuần):** Đo lường Lòng trung thành thương hiệu (CL), Truyền miệng điện tử (eWOM), Ý định chi trả giá cao (WTPP), Tỷ trọng chi tiêu dự kiến (eSOW), và Sự phụ thuộc vào Thuật toán Đề xuất (ARD).

Khoảng cách 3 tuần giữa hai đợt đủ dài để phá vỡ hiệu ứng nhất quán cảm xúc (consistency motif) nhưng đủ ngắn để giảm thiểu tỷ lệ hao hụt mẫu (attrition rate). Dự kiến tỷ lệ phản hồi Wave 2 đạt 70-75%, do đó cần phát ra 1.200-1.300 bảng hỏi ở Wave 1 để thu về ít nhất 900 cặp dữ liệu hợp lệ.

**Study 2 - Thực nghiệm kịch bản (Scenario-based Experiment):**
Thiết kế thực nghiệm giữa các nhóm (Between-subjects Experiment) trên mẫu N = 200 người tiêu dùng, chia thành hai nhóm:

- **Nhóm Kiểm soát (Control Group, n = 100):** Trải nghiệm kịch bản mua sắm trực tuyến truyền thống, không có gợi ý sản phẩm thay thế từ thuật toán.
- **Nhóm Xử lý (Treatment Group, n = 100):** Trải nghiệm kịch bản mua sắm trực tuyến có thuật toán AI chủ động gợi ý sản phẩm đối thủ giá rẻ hơn, hiển thị flash sale, và so sánh giá tự động.

Sau khi tiếp xúc với kịch bản, cả hai nhóm được đo lường Lòng trung thành (CL), Ý định chi trả giá cao (WTPP), và Tỷ trọng chi tiêu (eSOW). Study 2 nhằm chứng minh quan hệ nhân quả (causal inference) một cách tuyệt đối cho giả thuyết về sự can thiệp của thuật toán lên lòng trung thành, bổ khuyết cho Study 1 vốn chỉ xác lập quan hệ tương quan.

**Giai đoạn Định tính bổ trợ:**
Trước cả hai Study, thực hiện phỏng vấn sâu bán cấu trúc (semi-structured in-depth interviews) với hai nhóm:
- 10-15 nhà quản lý cấp trung và cấp cao tại các doanh nghiệp FMCG (Brand Manager, Customer Experience Manager, Sales Director).
- 15-20 người tiêu dùng FMCG đại diện theo giới tính, độ tuổi, và khu vực địa lý.

Mục đích: khám phá các chiều kích đặc thù của sự hài lòng và lòng trung thành trong bối cảnh FMCG Việt Nam chưa được mô hình ACSI gốc phản ánh đầy đủ; điều chỉnh và bổ sung thang đo cho phù hợp.

### 5.2. Mô hình nghiên cứu đề xuất (Study 1)

Mô hình nghiên cứu được xây dựng theo cấu trúc tích hợp gồm ba tầng, phản ánh hai kênh truyền dẫn song song từ CSI đến hiệu quả hành vi khách hàng.

Tầng tiền đề gồm ba biến hình thành CSI: thói quen tiêu dùng (đại diện cho sự thân thuộc và hành vi mua lặp lại phi lý trí), chất lượng cảm nhận, và giá trị cảm nhận. Tầng trung gian gồm hai biến song song: lòng trung thành thương hiệu (CL) và truyền miệng điện tử (eWOM). Hai biến trung gian này đại diện cho hai cơ chế chuyển hóa: CL phản ánh sự gắn kết thái độ, trong khi eWOM phản ánh hành vi ủng hộ công khai. Tầng kết quả đo lường Hiệu quả Hành vi Khách hàng (Customer Performance Outcomes - CPO) bao gồm: Ý định trả giá cao (Willingness to Pay a Premium - WTPP) và Tỷ trọng chi tiêu dự kiến (Expected Share of Wallet - eSOW). Biến điều tiết gồm: Sự phụ thuộc vào Thuật toán Đề xuất (Algorithmic Recommendation Dependence - ARD) và Quy mô thương hiệu (cảm nhận).

#### Sơ đồ mô hình nghiên cứu tích hợp

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 450" width="100%" font-family="Arial,sans-serif" font-size="12">
  <rect width="920" height="450" fill="#fff"/>
  <text x="60" y="20" font-size="11" font-weight="bold" text-anchor="middle">TIỀN ĐỀ</text>
  <text x="300" y="20" font-size="11" font-weight="bold" text-anchor="middle">BIẾN PHỤ THUỘC</text>
  <text x="530" y="20" font-size="11" font-weight="bold" text-anchor="middle">TRUNG GIAN</text>
  <text x="770" y="20" font-size="11" font-weight="bold" text-anchor="middle">KẾT QUẢ CẤP KHÁCH HÀNG</text>
  <rect x="10" y="30" width="100" height="40" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="60" y="47" text-anchor="middle" font-weight="bold">HB</text>
  <text x="60" y="61" text-anchor="middle" font-size="10">Thói quen TD</text>
  <rect x="10" y="202" width="100" height="40" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="60" y="219" text-anchor="middle" font-weight="bold">PQ</text>
  <text x="60" y="233" text-anchor="middle" font-size="10">Chất lượng CN</text>
  <rect x="10" y="374" width="100" height="40" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="60" y="391" text-anchor="middle" font-weight="bold">PV</text>
  <text x="60" y="405" text-anchor="middle" font-size="10">Giá trị CN</text>
  <rect x="240" y="195" width="120" height="54" rx="3" fill="#f2f2f2" stroke="#000" stroke-width="2"/>
  <text x="300" y="218" text-anchor="middle" font-weight="bold" font-size="14">CSI</text>
  <text x="300" y="236" text-anchor="middle" font-size="10">Chỉ số Hài lòng</text>
  <text x="300" y="248" text-anchor="middle" font-size="10">Khách hàng</text>
  <rect x="470" y="110" width="120" height="50" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="530" y="131" text-anchor="middle" font-weight="bold">CL</text>
  <text x="530" y="145" text-anchor="middle" font-size="10">Lòng trung thành</text>
  <text x="530" y="157" text-anchor="middle" font-size="10">thương hiệu</text>
  <rect x="470" y="300" width="120" height="50" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="530" y="321" text-anchor="middle" font-weight="bold">eWOM</text>
  <text x="530" y="335" text-anchor="middle" font-size="10">Truyền miệng</text>
  <text x="530" y="347" text-anchor="middle" font-size="10">điện tử</text>
  <rect x="700" y="110" width="140" height="50" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="770" y="131" text-anchor="middle" font-weight="bold">CPO1 (WTPP)</text>
  <text x="770" y="145" text-anchor="middle" font-size="10">Ý định chi trả</text>
  <text x="770" y="157" text-anchor="middle" font-size="10">giá cao (Premium)</text>
  <rect x="700" y="300" width="140" height="50" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="770" y="321" text-anchor="middle" font-weight="bold">CPO2 (eSOW)</text>
  <text x="770" y="335" text-anchor="middle" font-size="10">Tỷ trọng chi tiêu</text>
  <text x="770" y="347" text-anchor="middle" font-size="10">dự kiến (%)</text>
  <line x1="110" y1="50" x2="238" y2="210" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="155" y="115" font-size="10" font-weight="bold">H1</text>
  <line x1="110" y1="222" x2="238" y2="222" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="140" y="215" font-size="10" font-weight="bold">H2</text>
  <line x1="110" y1="394" x2="238" y2="238" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="148" y="338" font-size="10" font-weight="bold">H3</text>
  <line x1="360" y1="208" x2="468" y2="145" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="387" y="165" font-size="10" font-weight="bold">H4</text>
  <line x1="360" y1="235" x2="468" y2="318" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="387" y="290" font-size="10" font-weight="bold">H5</text>
  <line x1="590" y1="135" x2="698" y2="135" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="620" y="126" font-size="10" font-weight="bold">H6</text>
  <line x1="590" y1="155" x2="698" y2="308" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="615" y="248" font-size="10" font-weight="bold">H7</text>
  <line x1="590" y1="312" x2="698" y2="152" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="628" y="225" font-size="10" font-weight="bold">H8</text>
  <line x1="590" y1="325" x2="698" y2="325" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="620" y="316" font-size="10" font-weight="bold">H9</text>
  <rect x="250" y="400" width="160" height="38" rx="3" fill="#fafafa" stroke="#777" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="330" y="416" text-anchor="middle" font-size="10" font-weight="bold">W1: Phụ thuộc Thuật toán</text>
  <text x="330" y="430" text-anchor="middle" font-size="9" fill="#555">ARD (Likert 5 điểm)</text>
  <rect x="470" y="400" width="160" height="38" rx="3" fill="#fafafa" stroke="#777" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="550" y="416" text-anchor="middle" font-size="10" font-weight="bold">W2: Quy mô TH</text>
  <text x="550" y="430" text-anchor="middle" font-size="9" fill="#555">Nhỏ / Vừa / Lớn</text>
  <line x1="330" y1="400" x2="420" y2="280" stroke="#777" stroke-width="1.2" stroke-dasharray="5,3" marker-end="url(#ag)"/>
  <text x="350" y="340" font-size="9" fill="#555">H10a</text>
  <line x1="330" y1="400" x2="420" y2="175" stroke="#777" stroke-width="1.2" stroke-dasharray="5,3" marker-end="url(#ag)"/>
  <text x="380" y="300" font-size="9" fill="#555">H10b</text>
  <line x1="550" y1="400" x2="420" y2="175" stroke="#777" stroke-width="1.2" stroke-dasharray="5,3" marker-end="url(#ag)"/>
  <text x="490" y="300" font-size="9" fill="#555">H11</text>
  <defs>
    <marker id="a" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#000"/></marker>
    <marker id="ag" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#777"/></marker>
  </defs>
</svg>

*Hình 1. Mô hình nghiên cứu tích hợp CSI-CL-eWOM và Hiệu quả Hành vi Khách hàng (Study 1).*
*(Nguồn: Tác giả đề xuất, 2026)*

**Chú giải:**
- Mũi tên liền đen: tác động nhân quả trực tiếp (H1-H9)
- Mũi tên đứt xám: tác động điều tiết (H10a, H10b, H11)
- H10a: Sự phụ thuộc vào thuật toán (ARD) điều tiết mối quan hệ CSI - truyền miệng điện tử
- H10b: Sự phụ thuộc vào thuật toán (ARD) điều tiết mối quan hệ CSI - lòng trung thành thương hiệu
- H11: Quy mô thương hiệu (cảm nhận) điều tiết mối quan hệ CSI - lòng trung thành thương hiệu

#### Bảng tổng hợp biến và thang đo (Study 1)

| Ký hiệu | Tên biến | Vai trò | Biến quan sát | Nguồn thang đo | Đợt |
|---------|----------|---------|--------------|----------------|-----|
| HB | Thói quen tiêu dùng | Tiền đề CSI | 3 items (Likert 5) | Verplanken & Orbell (2003); Khare & Inman (2006) | Wave 1 |
| PQ | Chất lượng cảm nhận | Tiền đề CSI | 4 items (Likert 5) | Fornell et al. (1996); Zeithaml et al. (1996) | Wave 1 |
| PV | Giá trị cảm nhận | Tiền đề CSI | 3 items (Likert 5) | Fornell et al. (1996) | Wave 1 |
| CSI | Chỉ số hài lòng tổng thể | Biến phụ thuộc (cấp 1) | 3 items (Likert 5) | ACSI model; Oliver (1980) | Wave 1 |
| MV | Biến đánh dấu (Marker Variable) | Kiểm soát CMB | 2 items (Likert 5) | Lindell & Whitney (2001) | Wave 1 |
| CL | Lòng trung thành thương hiệu | Biến trung gian | 4 items (Likert 5) | Zeithaml et al. (1996); Dawes et al. (2015) | Wave 2 |
| eWOM | Truyền miệng điện tử | Biến trung gian | 4 items (Likert 5) | Hennig-Thurau et al. (2004) | Wave 2 |
| CPO1 | Ý định chi trả giá cao (WTPP) | Biến kết quả | 3 items (Likert 5) | Homburg et al. (2005) | Wave 2 |
| CPO2 | Tỷ trọng chi tiêu dự kiến (eSOW) | Biến kết quả | Constant-sum (%) | Keiningham et al. (2007) | Wave 2 |
| ARD | Sự phụ thuộc vào Thuật toán Đề xuất | Biến điều tiết | 4 items (Likert 5) | Tự phát triển (dựa trên định tính) | Wave 2 |
| W2 | Quy mô thương hiệu | Biến điều tiết | Phân loại (nhỏ/vừa/lớn) | Tự khai báo (cảm nhận quy mô) | Wave 2 |

**Tổng Study 1: 10 construct, 30+ items (chưa kể câu hỏi nhân khẩu học)**

#### Bảng chi tiết nhân tố quan sát theo từng construct

**HB: Thói quen tiêu dùng** *(3 items, kế thừa Verplanken & Orbell, 2003)* — Wave 1

| Mã | Nội dung nhân tố quan sát |
|---|---|
| HB1 | Tôi mua sản phẩm [TH] một cách tự động mà không cần suy nghĩ nhiều. |
| HB2 | Việc chọn mua [TH] là một phần tự nhiên trong thói quen mua sắm của tôi. |
| HB3 | Tôi cảm thấy quen thuộc và an tâm khi chọn [TH] thay vì tìm hiểu sản phẩm mới. |

**PQ: Chất lượng cảm nhận** *(4 items, kế thừa Fornell et al., 1996; Zeithaml et al., 1996)* — Wave 1

| Mã | Nội dung nhân tố quan sát |
|---|---|
| PQ1 | Sản phẩm [TH] có chất lượng tổng thể đáp ứng được mong đợi của tôi. |
| PQ2 | Sản phẩm [TH] có chất lượng ổn định qua các lần mua. |
| PQ3 | Sản phẩm [TH] đáp ứng đúng với những gì được công bố hoặc quảng cáo. |
| PQ4 | Dịch vụ hỗ trợ và sau mua của [TH] đáp ứng tốt nhu cầu của tôi. |

**PV: Giá trị cảm nhận** *(3 items, kế thừa Fornell et al., 1996)* — Wave 1

| Mã | Nội dung nhân tố quan sát |
|---|---|
| PV1 | Chất lượng sản phẩm [TH] tương xứng với giá tôi phải trả. |
| PV2 | Với mức giá hiện tại, [TH] mang lại giá trị tốt hơn so với các thương hiệu khác. |
| PV3 | Tôi cảm thấy chi phí bỏ ra để mua [TH] là hợp lý. |

**CSI: Chỉ số hài lòng tổng thể** *(3 items, kế thừa ACSI; Oliver, 1980)* — Wave 1

| Mã | Nội dung nhân tố quan sát |
|---|---|
| CSI1 | Nhìn chung, tôi hài lòng với sản phẩm [TH]. |
| CSI2 | [TH] mang lại trải nghiệm tích cực trong quá trình sử dụng. |
| CSI3 | Nếu hình dung sản phẩm FMCG lý tưởng, [TH] gần với hình ảnh đó đến mức nào? |

**MV: Biến đánh dấu (Marker Variable)** *(2 items, không liên quan lý thuyết)* — Wave 1

| Mã | Nội dung nhân tố quan sát |
|---|---|
| MV1 | Tôi thích đọc tin tức về thời tiết mỗi ngày. |
| MV2 | Tôi thường xuyên theo dõi các giải thể thao trực tiếp. |

*Ghi chú: Hai câu hỏi trên hoàn toàn không liên quan đến hành vi mua sắm FMCG, được đặt xen giữa các thang đo để phục vụ kỹ thuật kiểm soát CMB theo phương pháp Lindell & Whitney (2001).*

**CL: Lòng trung thành thương hiệu** *(4 items, kế thừa Zeithaml et al., 1996; Dawes et al., 2015)* — Wave 2

| Mã | Nội dung nhân tố quan sát |
|---|---|
| CL1 | Tôi có ý định tiếp tục mua sản phẩm [TH] trong tương lai. |
| CL2 | [TH] là lựa chọn đầu tiên của tôi khi mua sản phẩm trong danh mục này. |
| CL3 | Tôi cảm thấy gắn kết thực sự với [TH]. |
| CL4 | Tôi ưu tiên [TH] ngay cả khi có sản phẩm khuyến mãi từ thương hiệu khác. |

**eWOM: Truyền miệng điện tử** *(4 items, kế thừa Hennig-Thurau et al., 2004)* — Wave 2

| Mã | Nội dung nhân tố quan sát |
|---|---|
| eWOM1 | Tôi đã hoặc sẽ viết đánh giá tích cực về [TH] trên các nền tảng trực tuyến. |
| eWOM2 | Tôi chia sẻ thông tin về [TH] với người khác qua mạng xã hội hoặc nhóm chat. |
| eWOM3 | Khi ai đó hỏi về sản phẩm tương tự, tôi sẽ giới thiệu [TH] trên không gian mạng. |
| eWOM4 | Tôi chủ động bảo vệ [TH] khi đọc được những bình luận tiêu cực trực tuyến. |

**CPO1: Ý định chi trả giá cao (WTPP)** *(3 items, kế thừa Homburg et al., 2005)* — Wave 2

| Mã | Nội dung nhân tố quan sát |
|---|---|
| WTPP1 | Tôi sẵn sàng trả giá cao hơn một chút cho [TH] so với các sản phẩm cạnh tranh. |
| WTPP2 | Tôi vẫn tiếp tục mua [TH] ngay cả khi giá của nó tăng nhẹ (ví dụ: tăng 5-10%). |
| WTPP3 | Việc mua [TH] xứng đáng với một mức giá premium (phụ phí) vì sự an tâm nó mang lại. |

**CPO2: Tỷ trọng chi tiêu dự kiến (eSOW)** *(Thang đo tổng hằng số - Constant-sum Scale, kế thừa Keiningham et al., 2007)* — Wave 2

| Mã | Nội dung câu hỏi |
|---|---|
| eSOW | Xin hãy phân bổ 100% ngân sách dự kiến cho loại sản phẩm này trong tháng tới giữa các thương hiệu mà bạn sử dụng. *(Ví dụ: [TH] = ___%, Thương hiệu B = ___%, Thương hiệu C = ___%, Thương hiệu khác = ___%. Tổng = 100%)* |

*Ghi chú: eSOW được đo bằng tỷ lệ phần trăm (0-100%) thay vì Likert. Đây là biến liên tục tỷ lệ (ratio continuous variable), phù hợp với chuẩn quốc tế (Keiningham et al., 2007) và đảm bảo độ chính xác cao cho phân tích PLS-SEM. Tỷ trọng dành cho [TH] sẽ được sử dụng trực tiếp làm giá trị đầu vào cho biến eSOW trong mô hình.*

**ARD: Sự phụ thuộc vào Thuật toán Đề xuất** *(4 items, tự phát triển dựa trên nghiên cứu định tính)* — Wave 2

| Mã | Nội dung nhân tố quan sát |
|---|---|
| ARD1 | Khi mua sắm online, tôi thường xuyên nhấp vào các sản phẩm do thuật toán gợi ý ("Bạn có thể thích", "Sản phẩm tương tự"). |
| ARD2 | Tôi dễ bị thu hút bởi các chương trình flash sale hoặc mã giảm giá xuất hiện đột ngột trên sàn thương mại điện tử. |
| ARD3 | Khi thấy một sản phẩm thay thế được gợi ý với giá rẻ hơn, tôi thường cân nhắc chuyển đổi thương hiệu. |
| ARD4 | Các đề xuất cá nhân hóa của ứng dụng mua sắm (Shopee, TikTok Shop, Lazada) ảnh hưởng đáng kể đến quyết định mua hàng của tôi. |

*Ghi chú: Thang đo ARD được phát triển mới theo quy trình chuẩn (DeVellis & Thorpe, 2022): (1) Tạo item pool từ phỏng vấn định tính, (2) Đánh giá nội dung bởi panel chuyên gia, (3) Kiểm định sơ bộ qua Pilot Study (n=80), (4) Tinh chỉnh và xác nhận trong Study 1.*

**Phần G - Thông tin phân loại** — Wave 1

| Mã | Nội dung câu hỏi | Phương án trả lời |
|---|---|---|
| G1 | Tần suất mua [TH] trong 6 tháng qua | Ít hơn 1 lần/tháng / 1-3 lần/tháng / Hơn 3 lần/tháng |
| G2 | Giới tính | Nam / Nữ / Khác |
| G3 | Độ tuổi | 18-24 / 25-34 / 35-44 / 45-54 / 55+ |
| G4 | Khu vực sinh sống | TP.HCM / Hà Nội / Đà Nẵng / Cần Thơ / Bình Dương / Khác |

#### Hệ thống giả thuyết nghiên cứu

Mười một giả thuyết được phát triển theo ba tuyến nhân quả, loại bỏ các liên kết vĩ mô để đảm bảo tính nhất quán của cấp độ phân tích (micro-level):

* **Tuyến 1 - Hình thành CSI (H1-H3):** Thói quen (H1), chất lượng cảm nhận (H2) và giá trị cảm nhận (H3) đều tác động dương đến CSI.
* **Tuyến 2 - Hai kênh truyền dẫn song song (H4-H9):** CSI tác động dương đến lòng trung thành thương hiệu (H4) và eWOM (H5). CL và eWOM tiếp tục thúc đẩy người tiêu dùng sẵn sàng trả giá cao (WTPP) và gia tăng tỷ trọng chi tiêu (eSOW).
* **Tuyến 3 - Điều tiết theo thuật toán và quy mô (H10a, H10b, H11):**

**Nhóm 1 - Các nhân tố tác động đến CSI (H1-H3)**

Việc áp dụng máy móc mô hình ACSI (với biến "Kỳ vọng khách hàng" - CE) vào ngành FMCG bộc lộ nhiều điểm yếu do tính chất mua lặp lại và sự thân thuộc. Theo Lý thuyết Hành vi Lập trình (Script-based Behavior Theory), khách hàng FMCG hiếm khi hình thành một "kỳ vọng" lý trí trước mỗi lần mua; thay vào đó, thói quen và sự thân thuộc lấn át nhận thức (Khare & Inman, 2006). Vì vậy, nghiên cứu loại bỏ biến CE và thay thế bằng biến **Thói quen tiêu dùng (HB)**. Sự thân thuộc và thói quen làm giảm chi phí nhận thức, tạo ra sự thoải mái tâm lý, từ đó gia tăng chỉ số hài lòng.

- **H1:** Thói quen tiêu dùng có tác động tích cực đến CSI.
- **H2:** Chất lượng cảm nhận có tác động tích cực đến CSI.
- **H3:** Giá trị cảm nhận có tác động tích cực đến CSI.

**Nhóm 2 - Ảnh hưởng của CSI đến các biến trung gian (H4-H5)**

- **H4:** CSI có tác động tích cực đến lòng trung thành thương hiệu.
- **H5:** CSI có tác động tích cực đến truyền miệng điện tử.

**Nhóm 3 - Ảnh hưởng của các biến trung gian đến Hiệu quả Hành vi (H6-H9)**

Để khắc phục nghịch lý Ecological Fallacy khi nối dữ liệu cá nhân vào dữ liệu doanh nghiệp vĩ mô, nghiên cứu chuyển hướng sử dụng biến đầu ra cấp độ khách hàng (Customer Performance Outcomes). Lòng trung thành thái độ (CL) là động lực cốt lõi khiến khách hàng chấp nhận rủi ro giá cả và giới hạn lựa chọn, từ đó sẵn sàng trả giá cao (WTPP) và dồn ngân sách (eSOW) cho thương hiệu (Zeithaml et al., 1996). Tương tự, hành vi eWOM, thông qua việc bảo vệ thương hiệu công khai, tạo ra cam kết tâm lý vững chắc hơn, củng cố ý định chi tiêu thực tế.

- **H6:** Lòng trung thành thương hiệu có tác động tích cực đến Ý định chi trả giá cao (WTPP).
- **H7:** Lòng trung thành thương hiệu có tác động tích cực đến Tỷ trọng chi tiêu dự kiến (eSOW).
- **H8:** Truyền miệng điện tử có tác động tích cực đến Ý định chi trả giá cao (WTPP).
- **H9:** Truyền miệng điện tử có tác động tích cực đến Tỷ trọng chi tiêu dự kiến (eSOW).

**Nhóm 4 - Vai trò điều tiết (H10a, H10b, H11)**

Thay vì sử dụng biến phân loại thô sơ "Kênh mua sắm (Offline/Online)", nghiên cứu nâng cấp lên cấu trúc định lượng đo lường **Sự phụ thuộc vào Thuật toán Đề xuất (ARD)**. Lập luận: trong kỷ nguyên số, thuật toán AI của các sàn thương mại điện tử (Shopee, TikTok Shop, Lazada) liên tục gợi ý sản phẩm thay thế, flash sale, và so sánh giá. Khách hàng có độ nhạy cảm cao với các tác nhân này sẽ dễ bị "bào mòn" lòng trung thành thương hiệu, nhưng ngược lại, sự tiếp xúc thường xuyên với nền tảng số cũng khuyến khích hành vi eWOM chủ động hơn.

- **H10a:** Sự phụ thuộc vào thuật toán đề xuất (ARD) điều tiết tích cực mối quan hệ giữa CSI và truyền miệng điện tử (những người phụ thuộc thuật toán nhiều hơn có xu hướng eWOM mạnh hơn khi hài lòng).
- **H10b:** Sự phụ thuộc vào thuật toán đề xuất (ARD) điều tiết tiêu cực mối quan hệ giữa CSI và lòng trung thành thương hiệu (thuật toán bào mòn lòng trung thành ngay cả khi khách hàng hài lòng).
- **H11:** Quy mô thương hiệu (cảm nhận) điều tiết tích cực mối quan hệ giữa CSI và lòng trung thành thương hiệu (thương hiệu lớn có lợi thế bảo vệ lòng trung thành trước sự bào mòn của thuật toán).

### 5.3. Thu thập và Phân tích dữ liệu

#### Study 1: Khảo sát dọc (Longitudinal Survey)

**Dữ liệu sơ cấp:** Bảng khảo sát với cỡ mẫu dự kiến n = 900 cặp dữ liệu hợp lệ (từ 2 đợt), tập trung vào các thương hiệu FMCG lớn thuộc nhóm Thực phẩm & Đồ uống tại Việt Nam. Mỗi người trả lời được yêu cầu đánh giá về một thương hiệu FMCG cụ thể mà họ thường xuyên sử dụng nhất trong 6 tháng qua. Thang đo Likert 5 điểm (trừ eSOW dùng Constant-sum). Biến eSOW sử dụng thang đo tổng hằng số (Constant-sum Scale) yêu cầu người trả lời phân bổ 100% ngân sách dự kiến cho các thương hiệu cạnh tranh, tạo ra biến liên tục tỷ lệ (ratio-scale continuous variable) có độ chính xác cao hơn đáng kể so với Likert.

**Kiểm soát Common Method Bias (CMB):**

Nghiên cứu áp dụng ba tầng kiểm soát CMB theo khuyến nghị của Podsakoff et al. (2003):

1. **Tách biệt thời điểm đo lường (Temporal Separation):** Biến nguyên nhân (HB, PQ, PV, CSI) được đo ở Wave 1 (T1), biến kết quả (CL, eWOM, WTPP, eSOW) được đo ở Wave 2 (T2, cách 3 tuần). Thiết kế này phá vỡ hiệu ứng nhất quán cảm xúc, giảm thiểu xu hướng trả lời theo quán tính.
2. **Biến đánh dấu (Marker Variable):** Hai câu hỏi về chủ đề không liên quan (thời tiết, thể thao) được chèn vào Wave 1. Tương quan giữa biến đánh dấu và các biến chính sẽ được sử dụng làm ước lượng thận trọng (conservative estimate) cho mức độ CMB theo phương pháp Lindell & Whitney (2001).
3. **Kiểm định Harman's Single Factor:** Thực hiện Phân tích Nhân tố Khám phá (EFA) trên tất cả items. Nếu một nhân tố duy nhất giải thích dưới 50% tổng phương sai, kết luận CMB không phải là mối đe dọa nghiêm trọng.

**Phân tích:**
- Đánh giá mô hình đo lường (Measurement Model): Kiểm định độ tin cậy nhất quán nội bộ (Cronbach's Alpha, Composite Reliability), giá trị hội tụ (AVE), và giá trị phân biệt (HTMT ratio) sử dụng SmartPLS 4.
- Đánh giá mô hình cấu trúc (Structural Model): Sử dụng thuật toán PLS-SEM và Bootstrapping (5.000 lần lặp) để kiểm định các giả thuyết nhân quả (H1-H9) và đánh giá sức mạnh giải thích (R-square, f-square).
- Phân tích điều tiết: Sử dụng kỹ thuật Biến tương tác (Interaction Term) trong PLS-SEM để kiểm định H10a, H10b (ARD điều tiết) và H11 (Quy mô thương hiệu điều tiết). Bổ sung Phân tích Đa nhóm (Multi-Group Analysis - MGA) dựa trên điểm cắt trung vị (median split) của ARD.
- Phân tích trung gian: Sử dụng phương pháp Specific Indirect Effects (Bootstrapping) để đánh giá sức mạnh của từng tuyến trung gian (CSI -> CL -> CPO vs. CSI -> eWOM -> CPO).

#### Study 2: Thực nghiệm kịch bản (Scenario-based Experiment)

**Thiết kế:** Thực nghiệm giữa các nhóm (Between-subjects Design), 2 điều kiện (Có thuật toán gợi ý vs. Không có thuật toán gợi ý), N = 200.
**Biến thao tác (Manipulation):** Tạo hai kịch bản mua sắm trực tuyến giả lập. Nhóm Treatment xem giao diện có AI chủ động hiển thị sản phẩm đối thủ giá rẻ, flash sale, và so sánh giá. Nhóm Control xem giao diện mua sắm thông thường không có gợi ý.
**Biến đo lường (sau kịch bản):** CL, WTPP, eSOW.
**Kiểm tra thao tác (Manipulation Check):** Sử dụng 2 items kiểm tra xem người tham gia có nhận thức được sự hiện diện của thuật toán gợi ý không.
**Phân tích:** So sánh trung bình giữa hai nhóm bằng Independent Samples t-test (hoặc Mann-Whitney U nếu vi phạm giả định phân phối chuẩn) và phân tích ANCOVA với các biến kiểm soát (giới tính, độ tuổi, tần suất mua sắm online).
`;

fs.writeFileSync('c:\\ncsDL\\Proposal_HAILP_TDT\\05_PhuongPhap.md', content05, 'utf8');
console.log('Done overhauling 05_PhuongPhap.md for Multi-study design!');
