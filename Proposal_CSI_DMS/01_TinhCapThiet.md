## 1. TÍNH CẤP THIẾT VÀ BỐI CẢNH NHẬN THỨC CỦA ĐỀ TÀI

### 1.1. Bối cảnh thực tiễn và Bài toán Trách nhiệm giải trình Tiếp thị (Marketing Accountability)
Trong bối cảnh kỷ nguyên số và sự cạnh tranh khốc liệt tại thị trường Việt Nam, các doanh nghiệp hàng tiêu dùng nhanh (FMCG) và bán lẻ lớn (như Vinamilk, Masan, Sabeco, Thế Giới Di Động, FPT Retail, PNJ) đang đầu tư hàng triệu USD để phát triển hệ thống phân phối trực tiếp đến người tiêu dùng (Direct-to-Consumer - D2C) thông qua các nền tảng thương mại điện tử, ứng dụng chính hãng (App) và hệ thống quản trị dữ liệu khách hàng (CRM/CDP). Mục tiêu của chiến lược này là tạo ra trải nghiệm mua sắm trực tiếp, bỏ qua trung gian và cá nhân hóa tương tác với người tiêu dùng.

Tuy nhiên, các khoản đầu tư công nghệ và chuyển đổi số này đang đối mặt với áp lực lớn từ Hội đồng quản trị và các giám đốc tài chính (CFO) về **Trách nhiệm giải trình Tiếp thị (Marketing Accountability)**. Doanh nghiệp cần câu trả lời rõ ràng: *Liệu việc đổ ngân sách lớn vào số hóa D2C có thực sự chuyển hóa thành giá trị tài chính thực tế, lợi nhuận kế toán (ROA) và giá trị thị trường của doanh nghiệp (chỉ số Tobin's Q) hay không?*

Về mặt lý thuyết, giao diện Tiếp thị - Tài chính (Marketing-Finance Interface) lập luận rằng các khoản đầu tư tiếp thị số hóa sẽ tạo ra các tài sản thị trường vô hình (Market-based Intangible Assets) – cụ thể là **Sự hài lòng khách hàng (CSI)** và **Tài sản thương hiệu (Brand Equity)**. Các tài sản này sau đó hoạt động như những biến truyền dẫn giúp giảm thiểu rủi ro dòng tiền, tăng doanh số và cuối cùng tối ưu hóa giá trị cổ đông dài hạn (Rust et al., 2004). 

Mặc dù vậy, tại một thị trường mới nổi với độ bất định cao và hành vi khách hàng thay đổi nhanh chóng như Việt Nam, cơ chế truyền dẫn từ "Đầu tư số hóa D2C" $\rightarrow$ "Tài sản khách hàng vô hình" $\rightarrow$ "Giá trị doanh nghiệp trên thị trường chứng khoán" vẫn là một hộp đen (black box) chưa được khai phá trọn vẹn bằng thực chứng định lượng.

---

### 1.2. Khoảng trống nghiên cứu của luận án (Research Gaps)
Luận án Tiến sĩ này tập trung giải quyết bốn khoảng trống lý thuyết và phương pháp luận cốt lõi sau:

1.  **Khoảng trống lý thuyết về Giao diện Tiếp thị - Tài chính (Marketing-Finance Interface):** Phần lớn nghiên cứu tiếp thị truyền thống (ở cấp độ luận văn Thạc sĩ) chỉ dừng lại ở việc đo lường CSI ở cấp độ vi mô (người tiêu dùng cá nhân) mà không chứng minh được giá trị kinh tế vĩ mô của nó đối với tổ chức. Luận án này lấp đầy khoảng trống bằng cách liên kết trực tiếp dữ liệu cảm nhận người dùng với kết quả tài chính trên Báo cáo tài chính doanh nghiệp.
2.  **Khoảng trống cơ chế truyền dẫn trực tiếp và gián tiếp của D2C:** Y văn chưa làm rõ liệu số hóa D2C tác động đến giá trị doanh nghiệp chủ yếu qua con đường trực tiếp (tiết giảm chi phí giao dịch, tăng biên lợi nhuận) hay con đường gián tiếp (tích lũy tài sản thương hiệu và sự hài lòng khách hàng).
3.  **Sự thiếu hụt thiết kế đa nguồn dữ liệu tích hợp (Multi-Source Triangulation):** Hầu hết các nghiên cứu tài chính chỉ dùng dữ liệu thứ cấp, còn các nghiên cứu marketing chỉ dùng dữ liệu khảo sát sơ cấp. Việc thiếu vắng một nghiên cứu tích hợp đa nguồn (Phỏng vấn sâu chuyên gia + Dữ liệu bảng tài chính niêm yết + Khảo sát người tiêu dùng tổng hợp) làm giảm tính thuyết phục và độ tin cậy của các kết luận.
4.  **Vấn đề sai lệch nội sinh (Endogeneity Bias) trong quản trị kênh:** Các nghiên cứu về mối quan hệ tiếp thị - hiệu quả tài chính thường bị đe dọa bởi tính nội sinh (do các yếu tố không quan sát được tác động đồng thời đến cả chi phí tiếp thị và lợi nhuận, hoặc do quan hệ nhân quả ngược). Luận án này giải quyết triệt để vấn đề này bằng cách áp dụng mô hình hồi quy dữ liệu bảng Fixed Effects kết hợp kiểm soát nội sinh bằng thuật toán Gaussian Copula (không cần biến công cụ) và các mô hình Hybrid (Between-Within) / Hausman-Taylor để xử lý các biến bất biến.

---

### 1.3. Lĩnh vực nghiên cứu và Đối tượng nghiên cứu
*   **Lĩnh vực:** Quản trị Kinh doanh, chuyên sâu vào **Quản trị Tiếp thị chiến lược** (Strategic Marketing Management), **Giao diện Tiếp thị - Tài chính** (Marketing-Finance Interface) và **Quản trị Kênh phân phối số hóa** (Digital Channel Management).
*   **Đối tượng nghiên cứu:** Mối quan hệ tương tác giữa đầu tư số hóa D2C, tài sản thương hiệu vô hình (CSI, Brand Equity) và hiệu quả tài chính doanh nghiệp (ROA, Tobin's Q) của các doanh nghiệp FMCG và Bán lẻ (bao gồm cả niêm yết, FDI và chưa niêm yết lớn) tại Việt Nam.
