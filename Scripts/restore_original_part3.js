const fs = require('fs');
const f = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';
const p = `
## 5. Ý NGHĨA KHOA HỌC VÀ THỰC TIỄN CỦA ĐỀ TÀI
### 5.1. Đóng góp học thuật
*   **Cung cấp bằng chứng thực nghiệm cho Lý thuyết Tín hiệu:** Nghiên cứu cung cấp dữ liệu thực chứng để giải thích cách thức các đặc tính bất biến của dữ liệu được giải mã thành giá trị tự thân của thương hiệu trong bối cảnh sản phẩm credence goods.
*   **Kiểm định điều kiện biên:** Luận án xác định các điều kiện giới hạn của lý thuyết truyền thông truyền thống, chứng minh rằng khi rủi ro cảm nhận quá cao, các tín hiệu marketing sẽ mất tác dụng nếu không có sự can thiệp của tín hiệu xác thực kỹ thuật.
*   **Xác lập vai trò trung gian cấp cao của Brand Authenticity:** Chứng minh rằng trong thị trường hàng hóa dựa trên niềm tin, chỉ có sự chân thật (Brand Authenticity) mới là cơ sở vững chắc nhất để kết nối lý trí và cảm xúc, từ đó thúc đẩy hành vi mua.
*   **Bổ sung bằng chứng thực nghiệm tại thị trường mới nổi:** Cung cấp dữ liệu thực chứng từ Việt Nam, đặc biệt là nhóm Gen Z đối với ngành hàng nước yến RTD.

### 5.2. Đóng góp thực tiễn
*   Gợi ý cho doanh nghiệp nước yến RTD về vai trò của thông tin truy xuất nguồn gốc trong việc nâng cao nhận thức và niềm tin của người tiêu dùng.
*   Cung cấp cơ sở tham khảo cho việc thiết kế giao diện truy xuất phù hợp với hành vi người tiêu dùng trẻ.

---

## 6. PHẠM VI NGHIÊN CỨU CỦA ĐỀ TÀI
1.  **Phạm vi không gian:** Nghiên cứu và thu thập dữ liệu được thực hiện tại **TP.HCM**, thị trường đô thị lớn với độ tiếp cận công nghệ cao.
2.  **Phạm vi thời gian:** Dữ liệu dự kiến được thu thập từ quý 3/2026 đến quý 1/2027.
3.  **Phạm vi bối cảnh/Nội dung:** Đề tài giới hạn trong sản phẩm **nước yến chế biến sẵn (RTD)**. Nghiên cứu chỉ tập trung vào phía cầu (hành vi người tiêu dùng), không đánh giá năng lực công nghệ phía cung.

## 7. ĐỐI TƯỢNG NGHIÊN CỨU CỦA ĐỀ TÀI
*   **Đối tượng nghiên cứu (Object of study):** Cơ chế tác động tâm lý và hành vi của người tiêu dùng trong việc phản ứng với các tín hiệu nhận thức về truy xuất nguồn gốc thông qua công nghệ số.
*   **Khách thể nghiên cứu (Subject of study):** Người tiêu dùng thế hệ Gen Z (18-27 tuổi) đang sinh sống tại khu vực đô thị (TP.HCM).

## 8. PHƯƠNG PHÁP NGHIÊN CỨU
### 8.1. Mô hình nghiên cứu và Giả thuyết
#### 8.1.1. Logic xây dựng mô hình (Model Logic)
Mô hình nghiên cứu được xây dựng dựa trên sự tích hợp giữa:
* **Stimulus – Organism – Response (S-O-R) framework**
* **Signaling Theory**

Trong đó:
* **Stimulus (S):** Nhận thức về truy xuất nguồn gốc (TR), Thông điệp tiếp thị (NC)
* **Organism (O):** Perceived Information Quality (PIQ), Skepticism (SK), Trust (TT), Brand Authenticity (BA)
* **Response (R):** Purchase Intention (PI), Willingness to Pay Premium (WTP)

**Tính tinh gọn của mô hình (Model Parsimony):** Mặc dù "Rủi ro cảm nhận" (Perceived Risk) là tiền đề nội tại, nghiên cứu không vẽ nó thành một biến riêng biệt. Thay vào đó, sự suy giảm rủi ro cảm nhận được bao hàm (proxy) thông qua sự suy giảm của Hoài nghi (SK) và sự gia tăng của Niềm tin (TT).

#### 8.1.2. Mô hình nghiên cứu đề xuất (Proposed Model)
**Cấu trúc tuyến chính (Core Path):**
* TR → PIQ → TT → BA → PI / WTP
* TR → SK → TT
* NC → TT

**Tương tác (Moderation):**
* TR × NC → TT

#### 8.1.3. Giả thuyết nghiên cứu (Hypotheses Development)
Nghiên cứu đề xuất 9 giả thuyết (xem Hình 1):

*   **Tuyến hình thành Nhận thức:**
    *   **H1 (+):** Nhận thức về truy xuất nguồn gốc (TR) tác động tích cực đến Chất lượng thông tin cảm nhận (PIQ).
    *   **H2 (-):** Nhận thức về truy xuất nguồn gốc (TR) tác động tiêu cực (làm giảm) Hoài nghi (SK).
*   **Tuyến hình thành Niềm tin:**
    *   **H3 (+):** Thông điệp tiếp thị (NC) tác động tích cực đến Niềm tin (TT).
    *   **H4 (+):** Chất lượng thông tin cảm nhận (PIQ) tác động tích cực đến Niềm tin (TT).
    *   **H5 (-):** Hoài nghi (SK) tác động tiêu cực đến Niềm tin (TT).
    *   **H6 (+):** Tín hiệu truy xuất (TR) đóng vai trò điều tiết (Moderation), làm khuếch đại tác động tích cực của thông điệp tiếp thị (NC) lên Niềm tin (TT).
*   **Tuyến chuyển hóa Giá trị và Hành vi:**
    *   **H7 (+):** Niềm tin (TT) tác động tích cực đến Tính xác thực thương hiệu (BA).
    *   **H8 (+):** Tính xác thực thương hiệu (BA) tác động tích cực đến Ý định mua hàng (PI).
    *   **H9 (+):** Tính xác thực thương hiệu (BA) tác động tích cực đến Mức sẵn lòng chi trả thêm (WTP).

#### 8.1.4. Định vị khoa học (Positioning)
Định vị cốt lõi: *"Nghiên cứu này không đánh giá công nghệ dưới góc độ kỹ thuật lõi, mà xem xét cách thức nhận thức về truy xuất nguồn gốc đóng vai trò như một tín hiệu niềm tin giúp định hình nhận thức, tính xác thực và ý định hành vi của người tiêu dùng."*

---

### 8.2. Thiết kế và quy trình nghiên cứu
#### 8.2.1. Cách tiếp cận nghiên cứu (Research Approach)
Nghiên cứu được thiết kế theo phương pháp **hỗn hợp (Mixed-methods)**, thực hiện qua hai giai đoạn:

* **Giai đoạn 1: Nghiên cứu định tính (Qualitative Phase)**
    *   **Phương pháp:** Phỏng vấn sâu (In-depth interview) với hội đồng chuyên gia.
    *   **Mẫu chuyên gia (n = 15):** Nhóm 1 (08 người) quản lý phân phối ngành FMCG; Nhóm 2 (07 người) chuyên gia CNTT về truy xuất nguồn gốc.
    *   **Kết quả đầu ra:** Hiệu chỉnh thang đo và thẩm định tính thực tế của kịch bản thực nghiệm.

* **Giai đoạn 2: Nghiên cứu thực nghiệm định lượng (Quantitative Phase)**
    *   **Thực nghiệm:** Sử dụng thiết kế kịch bản (scenario-based) để kiểm soát tác động của các tín hiệu.
    *   **Khảo sát:** Đo lường các biến tâm lý và hành vi thông qua mô hình cấu trúc (SEM).

\`\`\`mermaid
graph TD
    A["1. Tổng quan Tài liệu & Đề xuất Mô hình"] --> B["2. Nghiên cứu Định tính (Phỏng vấn n=15)"]
    B --> C["3. Hiệu chỉnh Thang đo & Kịch bản"]
    C --> D["4. Khảo sát Sơ bộ (Pilot Test)"]
    D --> E["5. Nghiên cứu Định lượng (Thực nghiệm 2x2, n=400-500)"]
    E --> F["6. Phân tích Dữ liệu (PLS-SEM)"]
    F --> G["7. Kết luận & Hàm ý Quản trị"]
    style A fill:#f8fafc,stroke:#334155
    style B fill:#e0f2fe,stroke:#0284c7
    style C fill:#e0f2fe,stroke:#0284c7
    style D fill:#fef08a,stroke:#ca8a04
    style E fill:#dcfce7,stroke:#16a34a
    style F fill:#dcfce7,stroke:#16a34a
    style G fill:#f8fafc,stroke:#334155
\`\`\`
*Hình 2. Sơ đồ Quy trình Nghiên cứu (Research Methodology Flowchart).*

#### 8.2.2. Thiết kế nghiên cứu (Research Design)
Nghiên cứu áp dụng thiết kế thực nghiệm 2 × 2 factorial design.

| Yếu tố | Mức 1 | Mức 2 |
|---|---|---|
| **Traceability (TR)** | Có truy xuất | Không truy xuất |
| **Thông điệp (NC)** | Thông điệp tự nhiên | Thông điệp chức năng |

Tổng cộng có 4 nhóm kịch bản thực nghiệm. Người tham gia sẽ được phân bổ ngẫu nhiên vào 1 trong 4 nhóm.

\`\`\`mermaid
graph TD
    A["Tổng mẫu Khảo sát (n = 400 - 500)"] -- "Phân bổ Ngẫu nhiên" --> B{"Thiết kế Thực nghiệm 2x2"}
    B --> C["Nhóm 1: Có Truy xuất + T.điệp Tự nhiên"]
    B --> D["Nhóm 2: Có Truy xuất + T.điệp Chức năng"]
    B --> E["Nhóm 3: Không Truy xuất + T.điệp Tự nhiên"]
    B --> F["Nhóm 4: Không Truy xuất + T.điệp Chức năng"]
    C --> G["Khảo sát Đo lường (PIQ, Trust, BA, PI, WTP)"]
    D --> G
    E --> G
    F --> G
    style A fill:#f8fafc,stroke:#334155,stroke-width:2px
    style B fill:#e0f2fe,stroke:#0284c7,stroke-width:2px
    style C fill:#dcfce7,stroke:#16a34a
    style D fill:#fef08a,stroke:#ca8a04
    style E fill:#ffedd5,stroke:#ea580c
    style F fill:#f1f5f9,stroke:#475569
    style G fill:#f8fafc,stroke:#334155,stroke-width:2px,stroke-dasharray: 5 5
\`\`\`
*Hình 3. Sơ đồ Thiết kế Thực nghiệm (Experimental Design Flowchart).*

**Lưu ý về ranh giới nghiên cứu:** Nghiên cứu này không đánh giá hiệu năng của hệ thống công nghệ thực tế, mà tập trung đo lường "nhận thức về truy xuất nguồn gốc" (perceived traceability) của người tiêu dùng.
`;
fs.appendFileSync(f, p, 'utf8');
console.log('Part 3 done.');
