const fs = require('fs');

const content = `# ĐỀ CƯƠNG DỰ TUYỂN TRÌNH ĐỘ TIẾN SĨ

**Tên đề tài dự kiến:** Tác động của tương tác AI Chatbot đến hành vi mua sắm thiết bị điện tử của người tiêu dùng thế hệ Z: Phân tích cơ chế tác động kép giữa Niềm tin thuật toán và Sự kháng cự tâm lý
**Định hướng nghiên cứu:** Ứng dụng Trí tuệ nhân tạo (AI) trong Hành vi Người tiêu dùng
**Chuyên ngành:** Quản trị Kinh doanh
**Mã số:** 9340101
**Tên người dự tuyển:** Nguyễn Cường Thịnh
**Cơ quan công tác:** ...

---

## 1. LÝ DO CHỌN ĐỀ TÀI VÀ SỰ CẤP THIẾT CỦA NGHIÊN CỨU
### 1.1. Bối cảnh thực tiễn tại thị trường bán lẻ thiết bị điện tử Việt Nam
Thị trường bán lẻ thiết bị điện tử tại Việt Nam đang trải qua một quá trình chuyển đổi số toàn diện. Cùng với sự chuyển dịch đó, sự thay đổi sâu sắc về cơ cấu nhân khẩu học đã định hình lại luật chơi của thị trường. Hiện nay, Thế hệ Z (Gen Z - những người sinh từ 1997 đến 2012) đang nổi lên như một lực lượng tiêu dùng mang tính quyết định, định hình lại toàn bộ hệ sinh thái thương mại điện tử (Dimock, 2019). Khác với các thế hệ trước, Gen Z được mệnh danh là những "bản địa số" (Digital Natives) thực thụ, lớn lên cùng Internet và các thiết bị di động thông minh (Prensky, 2001; Turner, 2015). Họ không chỉ khao khát tốc độ phản hồi tức thì mà còn đòi hỏi mức độ cá nhân hóa (Personalization) cực kỳ cao trong mọi điểm chạm trải nghiệm khách hàng (Awad & Krishnan, 2006).

Nhằm đáp ứng những tiêu chuẩn khắt khe này, các chuỗi bán lẻ điện máy hàng đầu (như Thế Giới Di Động, FPT Shop, CellphoneS) và các nền tảng thương mại điện tử đang chạy đua vũ trang trong việc tích hợp Trí tuệ nhân tạo đàm thoại (Conversational AI) và AI Chatbot được trợ lực bởi các Mô hình ngôn ngữ lớn (LLM). Đối với những sản phẩm mang tính liên kết cao (high-involvement) và đòi hỏi rủi ro tài chính lớn như Laptop hay Máy tính bảng, vai trò tư vấn cấu hình kỹ thuật, phân tích nhu cầu và so sánh hiệu năng của AI Chatbot trở thành một lợi thế cạnh tranh cốt lõi (Chung et al., 2020; McLean & Osei-Frimpong, 2019).

### 1.2. Khoảng trống lý thuyết (Theoretical Gaps)
Dù AI Chatbot mang lại những giá trị to lớn về mặt tối ưu hóa vận hành, việc ứng dụng công nghệ này trong tư vấn bán hàng lại làm nảy sinh một nghịch lý tâm lý học sâu sắc đối với người tiêu dùng. 

Một mặt, các đặc tính như tính cá nhân hóa (Perceived Personalization) và tính nhân hóa (Perceived Anthropomorphism) của AI giúp xây dựng Niềm tin thuật toán (Algorithmic Trust) (Waytz et al., 2014; Castelo et al., 2019). Khách hàng có xu hướng tin tưởng rằng các quyết định của AI là hoàn toàn dựa trên dữ liệu khách quan, phân tích định lượng chính xác mà không bị chi phối bởi các yếu tố thiên vị, hoa hồng doanh số như nhân viên tư vấn con người. Hiện tượng này được các học giả đương đại định nghĩa là "Sự đánh giá cao thuật toán" (Algorithm Appreciation) (Logg et al., 2019).

Tuy nhiên, "Mặt tối" (The Dark Side) của AI đang dần hiện rã. Khi AI khai thác quá sâu dữ liệu lịch sử duyệt web để cá nhân hóa, hoặc đưa ra những đề xuất mang tính ép buộc (ví dụ: liên tục hiển thị bộ đếm lùi ép buộc mua một dòng máy cụ thể do các thuật toán định tuyến lợi nhuận), nó vô tình vượt qua lằn ranh mỏng manh của quyền riêng tư. Theo Lý thuyết Kháng cự tâm lý (Psychological Reactance Theory - PRT) của Brehm (1966), khi con người cảm thấy không gian tự do lựa chọn (freedom of choice) bị thu hẹp hoặc bị đe dọa bởi một thế lực ngoại sinh, họ sẽ nảy sinh một trạng thái căng thẳng tâm lý sâu sắc. Phản ứng tức thì là việc hình thành trạng thái "Sự kháng cự tâm lý" (Psychological Reactance) - thúc đẩy họ thực hiện các hành vi chống đối, né tránh lời khuyên, tẩy chay sản phẩm hoặc có thái độ thù địch với hệ thống (Clee & Wicklund, 1980; Dillard & Shen, 2005).

Sự giằng xé giữa "Niềm tin thuật toán" (một trạng thái hướng tới công nghệ) và "Sự kháng cự tâm lý" (một bản năng bảo vệ tự do cá nhân) tạo ra một vùng trũng lý thuyết khổng lồ. Hầu hết các mô hình nghiên cứu truyền thống như TAM (Davis, 1989) hay UTAUT (Venkatesh et al., 2003) chỉ tiếp cận theo hướng "Công nghệ là hữu ích" (Technology Positivism) mà bỏ qua hoàn toàn cơ chế phản kháng phòng vệ tự nhiên của con người khi tương tác với những cỗ máy có trí tuệ quá sắc bén (Gefen et al., 2003; Luo et al., 2019). 

### 1.3. Tính cấp thiết của đề tài
Từ những phân tích trên, nghiên cứu với chủ đề *"Tác động của tương tác AI Chatbot đến hành vi mua sắm thiết bị điện tử của người tiêu dùng thế hệ Z: Phân tích cơ chế tác động kép giữa Niềm tin thuật toán và Sự kháng cự tâm lý"* được đề xuất thực hiện. Đề tài không chỉ lấp đầy khoảng trống lý luận về tác động hai chiều của AI đàm thoại, mà còn mang tính ứng dụng sống còn, cung cấp cơ sở để các doanh nghiệp bán lẻ tinh chỉnh "mức độ thông minh" và "sự can thiệp" của thuật toán để tối ưu hóa quyết định mua hàng của Gen Z.

---

## 2. TỔNG QUAN TÌNH HÌNH NGHIÊN CỨU VÀ CƠ SỞ LÝ LUẬN
### 2.1. Tổng quan các luồng nghiên cứu trước đây
#### 2.1.1. Luồng nghiên cứu về Chấp nhận công nghệ AI và Tính nhân hóa
Trong hơn một thập kỷ qua, khi AI bắt đầu thâm nhập vào đời sống, giới học thuật đã tiến hành hàng loạt nghiên cứu để giải thích tại sao con người chấp nhận hoặc từ chối tương tác với máy móc. Nền tảng của các nghiên cứu này là sự vận dụng các đặc điểm như Tính nhân hóa (Anthropomorphism). Nghiên cứu định hình của Waytz et al. (2014) và sau đó là Pelau et al. (2021) khẳng định rằng: khi một thực thể phi nhân loại (như chatbot, robot) được thiết kế có tên gọi, giọng điệu tự nhiên, biết cách dùng biểu tượng cảm xúc (emoji) và thể hiện sự đồng cảm, nó sẽ kích hoạt vùng não xã hội của con người. Điều này làm giảm đáng kể các rào cản phòng vệ tâm lý ban đầu và gia tăng chất lượng dịch vụ cảm nhận (Service Quality Perception) (Chung et al., 2020; Moriuchi, 2019).

Tuy nhiên, giới hạn lớn nhất của luồng nghiên cứu này là cái nhìn quá lạc quan về AI. Các tác giả thường mặc định sử dụng Mô hình TAM (Technology Acceptance Model), xem AI như một "công cụ thụ động" chờ người dùng sử dụng, thay vì nhìn nhận nó như một "tác nhân chủ động" (Active Agent) có khả năng thao túng tâm lý. 

**Bảng 2.1: Ma trận tổng hợp các nghiên cứu trọng điểm và Khoảng trống nghiên cứu**

| Tác giả (Năm) | Khung lý thuyết / Phương pháp | Bối cảnh | Phát hiện chính | Hạn chế / Khoảng trống |
|---|---|---|---|---|
| **Awad & Krishnan (2006)** | Privacy Paradox | Thương mại điện tử (Web tĩnh) | Tìm ra nghịch lý giữa nhu cầu cá nhân hóa và nỗi sợ mất quyền riêng tư. | Chỉ nghiên cứu trên nền tảng web tĩnh, chưa xét đến AI Chatbot hội thoại thời gian thực. |
| **Logg et al. (2019)** | Algorithm Appreciation (Thực nghiệm) | Quyết định đầu tư & định lượng | Con người thích tin vào lời khuyên của thuật toán hơn là chuyên gia khi cần xử lý số liệu. | Thiếu vắng biến số về "Sự kháng cự" khi thuật toán ép buộc người dùng. |
| **Luo et al. (2019)** | Field Experiment | Bán hàng qua điện thoại (AI Voice) | Phát hiện "Sự kiện lộ tẩy" (Machine disclosure) làm giảm sâu tỷ lệ chốt sales. | Nghiên cứu chủ yếu về Voice AI, chưa xây dựng được mô hình cơ chế tâm lý song song. |
| **Pelau et al. (2021)** | PLS-SEM | Dịch vụ khách hàng (Chung) | Anthropomorphism làm tăng mức độ tương tác và sự hài lòng của người dùng. | Bỏ qua các tác động tiêu cực của tính nhân hóa (ví dụ: Uncanny Valley, Cảm giác bị thao túng). |

#### 2.1.2. Sự dịch chuyển từ Algorithm Aversion sang Algorithm Appreciation
Dietvorst et al. (2015) từng giới thiệu khái niệm "Ác cảm thuật toán" (Algorithm Aversion), chỉ ra rằng con người thường đánh mất niềm tin vào máy tính nhanh hơn con người mỗi khi máy tính mắc lỗi. Tuy nhiên, sự tiến hóa của Deep Learning đã làm đảo lộn quy luật này. Theo Logg et al. (2019), đối với các ngành hàng đòi hỏi khả năng đối chiếu hàng ngàn thông số cấu hình như thiết bị điện tử, con người hiện đại có xu hướng hình thành "Niềm tin thuật toán" mạnh mẽ (Castelo et al., 2019). Thuật toán được xem là biểu tượng của sự khách quan tuyệt đối. Dù vậy, cơ chế hình thành niềm tin này trong bối cảnh mua sắm tự do (Voluntary purchasing environment) tại các nước đang phát triển như Việt Nam vẫn chưa được kiểm chứng đầy đủ.

#### 2.1.3. Sự trỗi dậy của Lý thuyết Kháng cự tâm lý (PRT) trong môi trường số
Được Brehm đề xuất từ năm 1966 để giải thích phản ứng của con người trước các hình phạt hay quảng cáo nhồi nhét, PRT gần đây đã hồi sinh mạnh mẽ để giải mã "Nghịch lý cá nhân hóa - quyền riêng tư" (Privacy Paradox) (Barth & de Jong, 2017). Trong hệ sinh thái AI, khi hệ thống đưa ra các khuyến nghị quá chính xác và dồn dập (ví dụ: "Anh Thịnh ơi, mẫu Laptop Gaming này chỉ còn 1 chiếc, anh chốt ngay nhé!"), nó kích hoạt "Sự xâm nhập cảm nhận" (Perceived Intrusiveness). Sự thông minh quá mức này vô tình đánh thức bản năng phòng vệ của con người. Người dùng cảm thấy quyền tự quyết của họ bị xâm phạm, dẫn đến trạng thái Kháng cự tâm lý (Psychological Reactance). Hệ quả là họ có thể cố tình chọn một sản phẩm khác, hoặc rời bỏ nền tảng ngay lập tức (Clee & Wicklund, 1980; Dillard & Shen, 2005; Tucker, 2014).

### 2.2. Khung phân tích lý thuyết tích hợp (Theoretical Framework)
#### 2.2.1. Khung S-O-R (Stimulus - Organism - Response)
Mô hình S-O-R của Mehrabian & Russell (1974) cung cấp lăng kính chủ đạo để hiểu quá trình tâm lý của khách hàng. Nó phá vỡ mô hình hộp đen của Chủ nghĩa hành vi (Behaviorism), cho thấy:
*   **Stimulus (Kích thích - S):** Là các điểm chạm giao tiếp của AI Chatbot, bao gồm mức độ Nhân hóa (Anthropomorphism), Cá nhân hóa (Personalization), và Tính xâm nhập (Intrusiveness).
*   **Organism (Tổ chức nội tại - O):** Là hệ thống xử lý thông tin phức tạp bên trong não bộ người tiêu dùng. Tại đây, hai luồng phản ứng diễn ra đồng thời: Sự ngưỡng mộ (hình thành Niềm tin thuật toán) và Sự sợ hãi/đe dọa (hình thành Kháng cự tâm lý).
*   **Response (Phản hồi - R):** Là quyết định cuối cùng, bao gồm việc có chấp nhận lời khuyên của AI (Recommendation Adoption) và tiến tới hành vi thanh toán (Purchase Intention) hay không.

#### 2.2.2. Tích hợp S-O-R và PRT tạo nên cơ chế tác động kép
Việc lồng ghép PRT vào bên trong thành tố (O) của mô hình S-O-R chính là đột phá học thuật của luận án. Nghiên cứu giải thích cơ chế "Con dao hai lưỡi": cùng một kích thích "Cá nhân hóa" (Personalization) có thể đồng thời là nguồn gốc của sự hài lòng (tăng Trust) nhưng nếu vượt ngưỡng, nó lại trở thành mồi lửa kích hoạt sự kháng cự (tăng Reactance) (White et al., 2008). 

---

## 3. MỤC TIÊU VÀ CÂU HỎI NGHIÊN CỨU
### 3.1. Mục tiêu tổng quát
Xây dựng và kiểm định mô hình tác động kép nhằm giải thích cách thức các đặc điểm tương tác của AI Chatbot ảnh hưởng đến ý định mua sắm thiết bị điện tử của người tiêu dùng Gen Z thông qua hai cơ chế tâm lý đối lập: Niềm tin thuật toán (Algorithmic Trust) và Sự kháng cự tâm lý (Psychological Reactance).

### 3.2. Mục tiêu cụ thể
1.  **Mục tiêu 1:** Nhận diện và đo lường tác động của các đặc tính kích thích (Tính cá nhân hóa, Tính nhân hóa, Sự xâm nhập cảm nhận) từ AI Chatbot đến trạng thái tâm lý người tiêu dùng.
2.  **Mục tiêu 2:** Kiểm định vai trò trung gian tích cực của "Niềm tin thuật toán" và vai trò trung gian tiêu cực của "Sự kháng cự tâm lý" đối với hành vi chấp nhận lời khuyên (Recommendation Adoption) và ý định mua sắm (Purchase Intention).
3.  **Mục tiêu 3:** Đánh giá tính chất hai mặt (Dual-effect) của yếu tố "Tính cá nhân hóa" khi nó vừa tác động dương lên Niềm tin, vừa tác động dương lên Sự kháng cự tâm lý.
4.  **Mục tiêu 4:** Đề xuất các hàm ý quản trị giúp các nhà bán lẻ điện máy thiết kế và tối ưu hóa hệ thống AI Chatbot, nhằm tối đa hóa doanh thu mà không vi phạm ranh giới tâm lý của khách hàng.

### 3.3. Câu hỏi nghiên cứu
1. Các đặc tính giao tiếp của AI Chatbot (Nhân hóa, Cá nhân hóa, Tính xâm nhập) có tác động như thế nào đến sự hình thành Niềm tin thuật toán và Sự kháng cự tâm lý ở đối tượng Gen Z?
2. Có tồn tại hay không một cơ chế trung gian kép (Dual-mediation) nơi Niềm tin thuật toán thúc đẩy, còn Sự kháng cự tâm lý kìm hãm việc chấp nhận lời khuyên của AI?
3. Tính cá nhân hóa (Personalization) của AI ảnh hưởng thế nào đến sự giằng xé nội tâm của người dùng?

---

## 4. PHẠM VI VÀ ĐỐI TƯỢNG NGHIÊN CỨU
*   **Về không gian:** Khảo sát thực địa và trực tuyến tại khu vực TP. Hồ Chí Minh (Trung tâm kinh tế lớn, nơi tập trung tệp khách hàng Gen Z có khả năng chi trả cao và mức độ sẵn sàng công nghệ lớn nhất cả nước).
*   **Về thời gian:** Dữ liệu nghiên cứu định tính và định lượng được thu thập từ năm 2026 đến năm 2027.
*   **Về nội dung:** Tập trung vào môi trường tương tác dựa trên văn bản tự nhiên (Text-based / LLM-based AI Chatbot) trong ngành hàng bán lẻ thiết bị điện tử cá nhân (Laptop, Máy tính bảng).
*   **Khách thể nghiên cứu:** Người tiêu dùng thuộc thế hệ Z (sinh năm 1997 - 2012), sinh sống tại TP.HCM, đã từng có trải nghiệm hoặc có nhu cầu nhận tư vấn thiết bị điện tử.

---

## 5. PHƯƠNG PHÁP VÀ THIẾT KẾ NGHIÊN CỨU
### 5.1. Mô hình nghiên cứu đề xuất và Giả thuyết
**Sơ đồ Mô hình nghiên cứu tác động kép (Dual-path Framework):**
\`\`\`mermaid
graph LR
    subgraph STIMULUS [Kích thích từ AI Chatbot]
        PP["Tính cá nhân hóa (Perceived Personalization)"]
        PA["Tính nhân hóa (Perceived Anthropomorphism)"]
        PI["Sự xâm nhập cảm nhận (Perceived Intrusiveness)"]
    end

    subgraph ORGANISM [Hộp đen Tâm lý - Dual Path]
        AT["Niềm tin Thuật toán (Algorithmic Trust)"]
        AR["Sự kháng cự tâm lý (Psychological Reactance)"]
    end

    subgraph RESPONSE [Phản hồi Hành vi]
        RA["Chấp nhận lời khuyên (Recommendation Adoption)"]
        PUR["Ý định mua sắm (Purchase Intention)"]
    end

    PP -->|"+ (H1a)"| AT
    PA -->|"+ (H1b)"| AT
    
    PP -->|"+ (H2a)"| AR
    PI -->|"+ (H2b)"| AR

    AT -->|"+ (H3)"| RA
    AR -->|"- (H4)"| RA
    
    RA -->|"+ (H5)"| PUR
\`\`\`
*Hình 1. Mô hình nghiên cứu tích hợp lý thuyết S-O-R và PRT.*

**Phát triển Giả thuyết Nghiên cứu:**
*   **H1:** Theo lý thuyết về sự đánh giá cao thuật toán (Logg et al., 2019), các tín hiệu giúp thu hẹp khoảng cách tâm lý sẽ làm tăng niềm tin. Do đó, Tính cá nhân hóa (**H1a**) và Tính nhân hóa (**H1b**) tác động cùng chiều (+) đến Niềm tin thuật toán (AT).
*   **H2:** Dựa trên PRT (Brehm, 1966), khi cảm nhận không gian tự do bị đe dọa, con người sẽ phản kháng. Tính cá nhân hóa quá mức (**H2a**) và Sự xâm nhập cảm nhận (**H2b**) tác động cùng chiều (+) làm gia tăng Sự kháng cự tâm lý (AR). Giả thuyết H2a chính là điểm nhấn phản ánh tính chất hai mặt của AI.
*   **H3 & H4:** Về mặt kết quả hành vi, Niềm tin thuật toán tác động cùng chiều (+) (**H3**) trong khi Sự kháng cự tâm lý tác động ngược chiều (-) (**H4**) đến hành vi Chấp nhận lời khuyên (RA) (Gefen et al., 2003; Dillard & Shen, 2005).
*   **H5:** Việc khách hàng chấp nhận lời khuyên của AI có tác động cùng chiều (+) và trực tiếp đến Ý định mua sắm thiết bị điện tử (PUR).

### 5.2. Cách tiếp cận và Thiết kế nghiên cứu
Nghiên cứu áp dụng phương pháp **Hỗn hợp (Mixed-methods)** theo một quy trình đa bước chặt chẽ, nhằm đảm bảo tối đa độ tin cậy nội sinh và ngoại sinh.

#### Bước 1: Nghiên cứu định tính (Thẩm định lý thuyết và Kịch bản)
Thực hiện phỏng vấn sâu (In-depth interviews) với một hội đồng chuyên gia (n = 12).
*   **Nhóm chuyên gia thực tiễn (n=6):** Các Giám đốc kinh doanh vùng, Quản lý cấp cao tại các chuỗi FPT Shop, Thế Giới Di Động. Họ giúp thẩm định mức độ phản ánh đúng thực tế của hệ thống AI tư vấn đang vận hành.
*   **Nhóm chuyên gia học thuật (n=6):** Tiến sĩ trong lĩnh vực Data Science và Tâm lý học tiêu dùng. Mục tiêu để hiệu chỉnh từ ngữ của thang đo dịch từ tiếng Anh sang tiếng Việt, và phê duyệt kịch bản mockup AI.

#### Bước 2: Thiết kế Thực nghiệm 2 × 2 Factorial Design
Nhằm loại bỏ nhiễu (noise) từ thương hiệu có sẵn hoặc trải nghiệm quá khứ, nghiên cứu sử dụng phương pháp **Thực nghiệm dựa trên kịch bản (Scenario-based experiment)**. 

| Yếu tố AI Chatbot | Mức 1 (Mức độ Cao) | Mức 2 (Mức độ Thấp) |
|---|---|---|
| **Cá nhân hóa & Nhân hóa (PP & PA)** | AI xưng "Em", gọi tên khách, phân tích sâu dữ liệu lịch sử tìm kiếm. | AI trả lời cứng nhắc như một từ điển số, xưng hô "Hệ thống". |
| **Tính xâm nhập / Ép buộc (PI)** | AI đếm ngược thời gian, liên tục hiển thị Pop-up ép chốt đơn một mã hàng cụ thể. | AI liệt kê 3 mẫu laptop để khách hàng tự do suy nghĩ và lựa chọn. |

Tham dự viên sẽ được phân ngẫu nhiên vào 1 trong 4 kịch bản (Mockup giao diện Chat của một nền tảng giả định "TechZone"). Sau khi tương tác (đọc kịch bản chat mô phỏng), họ tiến hành trả lời bảng khảo sát đánh giá trạng thái tâm lý.

#### Bước 3: Thu thập và Lấy mẫu dữ liệu định lượng
*   **Lấy mẫu:** Phi xác suất có mục đích (Purposive Sampling). Đáp viên phải vượt qua câu hỏi sàng lọc: Thuộc Gen Z, sống tại TP.HCM, có nhu cầu sử dụng Laptop cho công việc/học tập.
*   **Kích thước mẫu (n):** Dự kiến thu thập 400 - 500 phiếu hợp lệ. Mức mẫu này vượt trội so với yêu cầu ngưỡng tối thiểu của mô hình SEM, cho phép thực hiện phân tích đa nhóm (Multi-group analysis) sau này (Hair et al., 2022).

#### Bước 4: Phương pháp Phân tích Dữ liệu (PLS-SEM)
Sử dụng phần mềm **SmartPLS 4**. Lý do chọn cấu trúc PLS (Partial Least Squares) vì mô hình nghiên cứu tập trung vào dự báo hành vi (prediction-oriented) và chứa các biến trung gian phức tạp (Hair et al., 2022). Quy trình đánh giá:
1.  **Mô hình đo lường (Outer Model):** Kiểm tra độ tin cậy (Cronbach’s Alpha, CR), giá trị hội tụ (AVE > 0.5), và giá trị phân biệt (Fornell-Larcker, HTMT < 0.85).
2.  **Mô hình cấu trúc (Inner Model):** Kiểm định hệ số Path coefficient (β), hệ số R², f², và chỉ số dự báo ngoài mẫu Q² predict.
3.  **Kiểm soát sai lệch (Bias Check):** Sử dụng hệ số VIF (đảm bảo < 3.3) để loại trừ phương sai phương pháp chung (Common Method Bias - CMB) (Kock, 2015).

### 5.3. Thang đo và Bảng hỏi (Measurement Items)
Tất cả các biến được đo lường bằng thang đo Likert 7 mức độ.
*   **Tính cá nhân hóa (PP):** 3 quan sát (Awad & Krishnan, 2006). *(VD: AI Chatbot thiết kế cấu hình laptop dựa chính xác trên thông tin cá nhân của tôi).*
*   **Tính nhân hóa (PA):** 3 quan sát (Waytz et al., 2014). *(VD: Tôi cảm giác như đang trò chuyện với một con người thực sự).*
*   **Sự xâm nhập cảm nhận (PI):** 3 quan sát (Barth & de Jong, 2017). *(VD: AI Chatbot theo dõi hành vi của tôi một cách phiền phức và khó chịu).*
*   **Niềm tin thuật toán (AT):** 4 quan sát (Logg et al., 2019). *(VD: Tôi tin tưởng thuật toán phân tích kỹ thuật của AI hơn là lời khuyên của nhân viên bán hàng).*
*   **Sự kháng cự tâm lý (AR):** 4 quan sát (Hong & Faedda, 1996; Dillard & Shen, 2005). *(VD: Sự ép buộc mua hàng của AI làm tôi bực tức và muốn làm điều ngược lại).*
*   **Chấp nhận lời khuyên (RA):** 3 quan sát (Gefen et al., 2003). *(VD: Tôi sẽ làm theo các đề xuất mua Laptop của hệ thống này).*
*   **Ý định mua sắm (PUR):** 3 quan sát (Venkatesh et al., 2003). *(VD: Khả năng rất cao tôi sẽ thanh toán đơn hàng thiết bị này).*

---

## 6. DỰ KIẾN KẾT QUẢ VÀ ĐÓNG GÓP CỦA ĐỀ TÀI
### 6.1. Đóng góp về mặt Học thuật
Nghiên cứu tạo ra bước đột phá bằng cách không coi sự phát triển của AI là một con đường trải đầy hoa hồng cho doanh nghiệp. Việc chứng minh sự tồn tại của **"Tính chất hai mặt của Cá nhân hóa"** (Dual-effect of Personalization) giúp mở rộng lý thuyết PRT trong thời đại Trí tuệ nhân tạo. Luận án cung cấp dữ liệu thực chứng khẳng định: Sự thông minh quá mức của máy móc, nếu thiếu sự điều tiết tế nhị, sẽ châm ngòi cho sự kháng cự phòng vệ mạnh mẽ từ Gen Z. Điều này vượt ra khỏi các khuôn khổ lý thuyết cũ như TAM.

### 6.2. Đóng góp về mặt Thực tiễn
Cung cấp các khuyến nghị quản trị "vàng" (Managerial implications) cho các nhà phát triển hệ thống (UX/UI Designers) và giám đốc bán lẻ. Cụ thể, các nền tảng thương mại điện tử cần thiết lập "Giới hạn xâm nhập" (Intrusiveness threshold) cho AI. Không nên lập trình AI hối thúc mua hàng một cách bạo lực, mà nên thiết kế AI theo hướng "trao quyền" (empowerment) để người tiêu dùng duy trì ảo giác về sự kiểm soát tự do.

---

## 7. KẾ HOẠCH HỌC TẬP VÀ NGHIÊN CỨU TOÀN KHÓA
Chương trình đào tạo chuẩn trong 36 tháng được phân bổ khoa học nhằm đảm bảo tiến độ bảo vệ:

| Học kỳ | Thời gian | Nhiệm vụ / Tiến độ nghiên cứu | Đầu ra dự kiến |
|---|---|---|---|
| **Kỳ 1** | Tháng 1 - 6 | Hoàn thành học phần phương pháp nghiên cứu, tổng quan lý thuyết chuyên sâu. | Tích lũy đủ tín chỉ học phần bắt buộc. |
| **Kỳ 2** | Tháng 7 - 12 | Viết và Bảo vệ Tiểu luận tổng quan trước Hội đồng. | Tiểu luận tổng quan đạt yêu cầu. |
| **Kỳ 3** | Tháng 13 - 18 | Thực hiện nghiên cứu định tính, chạy Pilot test, hoàn thiện kịch bản Mockup. | Bảng hỏi chuẩn hóa, hoàn thành chuyên đề 1 & 2. |
| **Kỳ 4** | Tháng 19 - 24 | Khảo sát thực địa, phân tích dữ liệu lượng lớn bằng SmartPLS. Viết bản thảo. | Báo cáo kết quả phân tích dữ liệu hoàn thiện. |
| **Kỳ 5** | Tháng 25 - 30 | Nộp bài báo công bố khoa học. Thuyết trình Seminar tại Khoa. | Ít nhất 02 bài báo được chấp nhận đăng trên tạp chí HĐGSNN / Scopus. |
| **Kỳ 6** | Tháng 31 - 36 | Chỉnh sửa toàn văn, bảo vệ cấp Cơ sở và Cấp Trường. | Đạt học vị Tiến sĩ. |

---

## 8. DANH MỤC TÀI LIỆU THAM KHẢO

1. Awad, N. F., & Krishnan, M. S. (2006). The personalization privacy paradox: An empirical evaluation of information transparency and the willingness to be profiled online for personalization. *MIS Quarterly, 30*(1), 13-28.
2. Barth, S., & de Jong, M. D. (2017). The privacy paradox – Investigating discrepancies between expressed privacy concerns and actual online behavior. *Telematics and Informatics, 34*(7), 1038-1058.
3. Brehm, J. W. (1966). *A theory of psychological reactance*. Academic Press.
4. Castelo, N., Bos, M. W., & Lehmann, D. R. (2019). Task-dependent algorithm aversion. *Journal of Marketing Research, 56*(5), 809-825.
5. Chung, M., Ko, E., Joung, H., & Kim, S. J. (2020). Chatbot e-service and customer satisfaction regarding luxury brands. *Journal of Business Research, 117*, 587-595.
6. Clee, M. A., & Wicklund, R. A. (1980). Consumer behavior and psychological reactance. *Journal of Consumer Research, 6*(4), 389-405.
7. Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. *MIS quarterly, 13*(3), 319-340.
8. Dietvorst, B. J., Simmons, J. P., & Massey, C. (2015). Algorithm aversion: People erroneously avoid algorithms after seeing them err. *Journal of Experimental Psychology: General, 144*(1), 114-126.
9. Dillard, J. P., & Shen, L. (2005). On the nature of reactance and its role in persuasive health communication. *Communication Monographs, 72*(2), 144-168.
10. Dimock, M. (2019). Defining generations: Where Millennials end and Generation Z begins. *Pew Research Center, 17*(1), 1-7.
11. Gefen, D., Karahanna, E., & Straub, D. W. (2003). Trust and TAM in online shopping: An integrated model. *MIS quarterly, 27*(1), 51-90.
12. Hair, J. F., Hult, G. T. M., Ringle, C. M., & Sarstedt, M. (2022). *A primer on partial least squares structural equation modeling (PLS-SEM)* (3rd ed.). Sage publications.
13. Henseler, J., Ringle, C. M., & Sarstedt, M. (2015). A new criterion for assessing discriminant validity in variance-based structural equation modeling. *Journal of the Academy of Marketing Science, 43*(1), 115-135.
14. Hong, S. M., & Faedda, S. (1996). Refinement of the Hong psychological reactance scale. *Educational and Psychological Measurement, 56*(1), 173-182.
15. Kock, N. (2015). Common method bias in PLS-SEM: A full collinearity assessment approach. *International Journal of e-Collaboration, 11*(4), 1-10.
16. Logg, J. M., Minson, J. A., & Moore, D. A. (2019). Algorithm appreciation: People prefer algorithmic to human judgment. *Organizational Behavior and Human Decision Processes, 151*, 90-103.
17. Luo, X., Tong, S., Fang, Z., & Qu, Z. (2019). Frontiers: Machines vs. humans: The impact of artificial intelligence chatbot disclosure on customer purchases. *Marketing Science, 38*(6), 937-947.
18. McLean, G., & Osei-Frimpong, K. (2019). Chat now... Examining the variables influencing the use of online live chat. *Technological Forecasting and Social Change, 146*, 55-67.
19. Mehrabian, A., & Russell, J. A. (1974). *An approach to environmental psychology*. MIT Press.
20. Moriuchi, E. (2019). Okay, Google!: An empirical study on voice assistants on consumer engagement and loyalty. *Psychology & Marketing, 36*(5), 489-501.
21. Pelau, C., Dabija, D. C., & Ene, I. (2021). What makes an AI device human-like? The role of interaction quality, empathy and perceived psychological anthropomorphic characteristics in the acceptance of artificial intelligence. *Computers in Human Behavior, 122*, 106855.
22. Prensky, M. (2001). Digital natives, digital immigrants part 1. *On the horizon, 9*(5), 1-6.
23. Ringle, C. M., Wende, S., & Becker, J.-M. (2015). *SmartPLS 3*. Boenningstedt: SmartPLS GmbH.
24. Steinhoff, L., Aris, Y., Lemon, K. N., & Palmatier, R. W. (2019). Customer engagement and loyalty dynamics. *Journal of the Academy of Marketing Science, 47*(1), 120-133.
25. Tucker, C. E. (2014). Social networks, personalized advertising, and privacy controls. *Journal of Marketing Research, 51*(5), 546-562.
26. Turner, A. (2015). Generation Z: Technology and social interest. *The journal of individual psychology, 71*(2), 103-113.
27. Venkatesh, V., Morris, M. G., Davis, G. B., & Davis, F. D. (2003). User acceptance of information technology: Toward a unified view. *MIS quarterly, 27*(3), 425-478.
28. Waytz, A., Heafner, J., & Epley, N. (2014). The mind in the machine: Anthropomorphism increases trust in an autonomous vehicle. *Journal of Experimental Social Psychology, 52*, 113-122.
29. White, T. B., Zahay, D. L., Thorbjørnsen, H., & Shavitt, S. (2008). Getting too personal: Reactance to highly personalized email solicitations. *Marketing Letters, 19*(1), 39-50.
30. Zhang, H., Lu, Y., Gupta, S., & Zhao, L. (2014). What motivates customers to participate in social commerce? The impact of technological environments and virtual customer experiences. *Information & Management, 51*(8), 1017-1030.
`;

fs.writeFileSync('c:\\ncsDL\\Proposal_LePhucHai\\PhD_NhaTrang_CuongThinh.md', content, 'utf8');
console.log('Successfully expanded Cuong Thinh proposal.');
