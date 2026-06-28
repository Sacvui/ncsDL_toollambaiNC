# ĐỀ CƯƠNG NGHIÊN CỨU LĨNH VỰC TÀI CHÍNH - MARKETING
**(Dự tuyển Nghiên cứu sinh Đại học Tôn Đức Thắng)**

**Tên đề tài dự kiến:** Tác động của Truyền miệng điện tử (eWOM) và Sự hài lòng khách hàng đến Hiệu quả Tài chính Doanh nghiệp: Phương pháp tiếp cận Big Data trong ngành FMCG tại Việt Nam.
*(The Impact of eWOM and Customer Satisfaction on Firm Performance: A Big Data Approach in the Vietnamese FMCG Industry)*

**Họ và tên thí sinh:** Lê Phúc Hải
**Lĩnh vực/Ngành nghiên cứu:** Quản trị Kinh doanh / Tài chính Doanh nghiệp
**Định hướng nghiên cứu:** Marketing-Finance Interface (Giao thoa Marketing và Tài chính)

---

## MỤC LỤC
1. Tính cấp thiết, lý do chọn đề tài, lĩnh vực nghiên cứu
2. Tình hình nghiên cứu (Tổng quan tài liệu)
3. Mục đích và Câu hỏi nghiên cứu
4. Đối tượng và phạm vi dự định nghiên cứu
5. Phương pháp nghiên cứu sẽ được sử dụng (Tiếp cận Big Data)
6. Ý nghĩa khoa học và thực tiễn (Đóng góp mới)
7. Kế hoạch nghiên cứu (cụ thể mỗi 06 tháng)
8. Lý do lựa chọn cơ sở đào tạo (Đại học Tôn Đức Thắng)
9. Dự kiến việc làm và nghiên cứu tiếp theo
10. Đề xuất người hướng dẫn

---

## 1. Tính cấp thiết, lý do chọn đề tài, lĩnh vực nghiên cứu
**1.1. Tính cấp thiết của đề tài**
- Trong kỷ nguyên số hóa, Truyền miệng điện tử (eWOM) trên mạng xã hội và các nền tảng thương mại điện tử đã trở thành tài sản vô hình quan trọng bậc nhất của các doanh nghiệp Hàng tiêu dùng nhanh (FMCG). Một cuộc khủng hoảng eWOM có thể thổi bay hàng tỷ đồng vốn hóa thị trường chỉ trong vài ngày.
- Tuy nhiên, việc đo lường tác động của sự hài lòng khách hàng (Customer Satisfaction - CS) lên hiệu quả tài chính ở cấp độ vĩ mô tại các thị trường mới nổi như Việt Nam gặp rào cản lớn do thiếu vắng một bộ cơ sở dữ liệu quốc gia về chỉ số hài lòng (như ACSI của Mỹ).
- Việc sử dụng khảo sát truyền thống bị giới hạn bởi không gian, thời gian và chi phí, đồng thời không thể cung cấp dữ liệu chuỗi thời gian (time-series) lịch sử để đối chiếu với báo cáo tài chính kế toán.

**1.2. Lý do chọn đề tài**
- Đề tài ứng dụng kỹ thuật Khoa học dữ liệu (Data Science) - cụ thể là Khai phá dữ liệu văn bản (Text Mining) và Phân tích cảm xúc (Sentiment Analysis) - để lượng hóa các bình luận trên mạng thành **Chỉ số Hài lòng Khách hàng (CSI Proxy)** cho từng năm. 
- Nghiên cứu lấp đầy khoảng trống bằng cách kết nối trực tiếp dữ liệu phi cấu trúc từ người tiêu dùng (Micro-level) với dữ liệu sổ sách tài chính của doanh nghiệp (Macro-level), giải quyết triệt để lỗi mâu thuẫn đơn vị phân tích (Ecological Fallacy).

**1.3. Lĩnh vực nghiên cứu**
- Giao thoa giữa Marketing (Hành vi người tiêu dùng), Tài chính doanh nghiệp và Công nghệ phân tích dữ liệu (Business Analytics).

## 2. Tình hình nghiên cứu (Tổng quan tài liệu)
- **Lý thuyết nền tảng:** Lý thuyết Tín hiệu (Signaling Theory) và Lý thuyết Nguồn lực (Resource-Based View - RBV). Sự hài lòng của khách hàng được xem là một nguồn lực chiến lược vô hình giúp doanh nghiệp tạo lợi thế cạnh tranh và giảm chi phí vốn.
- **Sự hài lòng và Hiệu quả tài chính:** Các nghiên cứu kinh điển (Fornell et al., 2006, 2016) sử dụng dữ liệu ACSI tại Mỹ đã chứng minh sự hài lòng cao của khách hàng mang lại tỷ suất sinh lời vượt trội trên thị trường chứng khoán (Tobin's Q, ROA).
- **Khoảng trống nghiên cứu (Research Gap):**
  - **Gap 1 (Dữ liệu):** Rất ít nghiên cứu tại Việt Nam kiểm định mối quan hệ này bằng dữ liệu Panel Data do thiếu hệ thống chấm điểm CSI hàng năm.
  - **Gap 2 (Phương pháp):** Đa phần các nghiên cứu chỉ dừng ở mức khảo sát ý định mua hàng (Purchase Intention) thay vì đo lường dòng tiền và biên lợi nhuận thực tế (Firm Performance). Việc ứng dụng Trí tuệ nhân tạo (NLP) để kiến tạo dữ liệu lịch sử về Customer Satisfaction tại thị trường Việt Nam vẫn còn rất hạn chế.

## 3. Mục đích và Câu hỏi nghiên cứu
**3.1. Mục đích nghiên cứu**
- Ứng dụng kỹ thuật Phân tích cảm xúc bằng AI (Sentiment Analysis) để xây dựng bộ dữ liệu thứ cấp về Chỉ số Hài lòng Khách hàng đối với các doanh nghiệp FMCG từ dữ liệu eWOM trên Internet.
- Phân tích tác động của Chỉ số Hài lòng và Khối lượng eWOM đến hiệu quả tài chính (ROA, ROE) và giá trị thị trường (Tobin's Q).

**3.2. Câu hỏi nghiên cứu**
- Làm thế nào để lượng hóa dữ liệu eWOM phi cấu trúc thành Chỉ số Hài lòng Khách hàng đại diện cho cấp độ doanh nghiệp (Firm-level CSI)?
- Tác động của Sự hài lòng khách hàng (đo bằng Big Data) đến hiệu quả tài chính (ROA, ROE) của doanh nghiệp FMCG có ý nghĩa thống kê hay không?
- Tác động này có độ trễ (Temporal Lag) như thế nào trong ngành tiêu dùng nhanh?

## 4. Đối tượng và phạm vi dự định nghiên cứu
- **Đối tượng nghiên cứu:** Tác động của eWOM và Hài lòng khách hàng lên Hiệu quả tài chính.
- **Khách thể nghiên cứu:** Khoảng 20–30 doanh nghiệp (bao gồm cả niêm yết trên HOSE/HNX và các công ty đại chúng trên UPCoM) thuộc ngành FMCG và Bán lẻ thực phẩm tại Việt Nam. Việc mở rộng sang UPCoM giúp tăng tính đại diện của mẫu (Generalizability).
- **Phạm vi thời gian:** Dữ liệu Panel Data từ năm 2016 đến 2024.

## 5. Phương pháp nghiên cứu sẽ được sử dụng (Điểm nhấn của Đề cương)
Nghiên cứu sử dụng phương pháp hỗn hợp (Kết hợp Data Science và Econometrics), chia làm 2 giai đoạn:

**Giai đoạn 1: Khai phá dữ liệu và Xây dựng Biến (Data Engineering)**
- **Kỹ thuật Web Scraping:** Sử dụng Python/Selenium để thu thập hàng trăm ngàn bình luận, bài đăng và đánh giá của người tiêu dùng liên quan đến các thương hiệu mục tiêu trên Fanpage Facebook chính thức và các trang thương mại điện tử (2016–2024).
- **Phân tích cảm xúc bằng AI (Sentiment Analysis):** Áp dụng mô hình học sâu chuyên biệt cho tiếng Việt (như PhoBERT) để phân loại các bình luận thành ba sắc thái: Tích cực, Tiêu cực và Trung tính.
- **Cấu trúc lại biến số:** Chỉ số Hài lòng Khách hàng ước lượng (CSI Proxy) được tính toán dựa trên tỷ lệ bình luận tích cực ròng (Net Sentiment Rate) và khối lượng eWOM hàng năm của mỗi công ty.

**Giai đoạn 2: Phân tích Kinh tế lượng (Econometric Modeling)**
- **Mô hình nghiên cứu:**
  `Firm Performance (i,t) = α + β1*CSI_Proxy (i, t-1) + β2*eWOM_Volume (i, t-1) + β3*Controls (i, t) + ε`
  *(Sử dụng biến trễ `t-1` để giải quyết vấn đề nhân quả ngược - Reverse Causality).*
- **Biến kiểm soát (Controls):** Quy mô doanh nghiệp (Firm Size), Đòn bẩy (Leverage), Tuổi doanh nghiệp (Age), Tốc độ tăng trưởng doanh thu (Sales Growth). Dữ liệu này trích xuất từ nền tảng FiinPro.
- **Phương pháp ước lượng:** Sử dụng mô hình System-GMM (Arellano-Bond) để xử lý nội sinh. Đặc biệt, để giải quyết vấn đề tăng sinh biến công cụ (Instrument Proliferation) ở mẫu nhỏ, nghiên cứu sẽ áp dụng kỹ thuật gộp biến công cụ (Collapse Instruments) hoặc kiểm chứng chéo bằng mô hình LSDVC (Kiviet bias-corrected FE).

## 6. Ý nghĩa khoa học và thực tiễn (Đóng góp mới)
- **Về mặt Lý thuyết:** Nghiên cứu cung cấp một cơ chế giải quyết triệt để lỗi “Mâu thuẫn đơn vị phân tích” (Ecological Fallacy) trong các nghiên cứu hành vi lai tài chính. Dữ liệu từ hàng vạn cá nhân được tổng hợp (aggregate) logic để hồi quy với dữ liệu cấp doanh nghiệp.
- **Về mặt Phương pháp:** Lần đầu tiên đưa một công cụ mạnh mẽ của Big Data (PhoBERT Sentiment Analysis) vào việc kiến tạo biến số cho mô hình kinh tế lượng tài chính tại Việt Nam, mở ra hướng đi mới thay thế cho phương pháp khảo sát truyền thống đầy giới hạn.
- **Về mặt Thực tiễn:** Chứng minh cho các CEO ngành FMCG thấy rằng, các khoản đầu tư vào việc chăm sóc và cải thiện trải nghiệm khách hàng trên không gian mạng không phải là “chi phí chìm”, mà là các tài sản sinh lời có tác động trực tiếp đến ROE và định giá công ty trên thị trường chứng khoán.

## 7. Kế hoạch nghiên cứu (cụ thể mỗi 06 tháng)
- **Tháng 1 - Tháng 6:** Học các học phần Tiến sĩ; Tổng quan tài liệu về Marketing-Finance interface; Xây dựng thuật toán Web Scraping.
- **Tháng 7 - Tháng 12:** Thu thập dữ liệu chữ (Text Data); Huấn luyện và chạy mô hình NLP phân tích cảm xúc; Thu thập dữ liệu tài chính từ FiinPro; Viết bài báo hội thảo đầu tiên.
- **Tháng 13 - Tháng 18:** Ghép nối bộ dữ liệu Panel Data; Thực hiện phân tích kinh tế lượng (System-GMM/LSDVC); Viết bài báo quốc tế (Scopus/ISI) số 1.
- **Tháng 19 - Tháng 24:** Hoàn thiện giải quyết các vấn đề nội sinh; Gửi đăng bài báo quốc tế số 2; Báo cáo chuyên đề tiến sĩ 1 & 2.
- **Tháng 25 - Tháng 30:** Chỉnh sửa các bài báo theo phản biện (Review); Viết bản thảo luận án; Báo cáo chuyên đề tiến sĩ 3.
- **Tháng 31 - Tháng 36:** Hoàn thiện bản thảo luận án; Bảo vệ luận án cấp cơ sở; Bảo vệ luận án cấp ĐHQG/Trường.

## 8. Lý do lựa chọn cơ sở đào tạo (Đại học Tôn Đức Thắng)
- Đại học Tôn Đức Thắng (TDTU) là đơn vị đi tiên phong trong việc khuyến khích các nghiên cứu liên ngành (Interdisciplinary Research) và ứng dụng công nghệ (Data Science) vào quản trị kinh doanh.
- TDTU sở hữu cơ sở dữ liệu mạnh và nguồn tài nguyên điện toán đủ tốt để hỗ trợ NCS thực hiện các phân tích dữ liệu lớn.

## 9. Dự kiến việc làm và nghiên cứu tiếp theo
- **Nghiên cứu tiếp theo:** Ứng dụng kỹ thuật Text Mining để phân tích tác động của eWOM đến giá cổ phiếu theo thời gian thực (Real-time Stock Return Volatility), hoặc phân tích báo cáo thường niên (Textual Analysis of Annual Reports) để đo lường độ minh bạch thông tin.

## 10. Đề xuất người hướng dẫn
- **Hướng dẫn 1:** PGS. TS. [Tên Thầy/Cô phù hợp tại TDTU] (Nêu lý do: vì Thầy/Cô có chuyên môn sâu về Tài chính doanh nghiệp hoặc Phân tích dữ liệu kinh doanh).
- **Hướng dẫn 2 (nếu có):** TS. [Tên Thầy/Cô] (Chuyên gia về Trí tuệ nhân tạo hoặc Marketing).

---
*(Lưu ý: Bổ sung thêm Danh mục Tài liệu Tham khảo (APA) gồm các bài báo về Text Mining, eWOM và Firm Performance để hoàn thiện).*
