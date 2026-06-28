const fs = require('fs');

const content01 = `## 1. Tính cấp thiết, lý do chọn đề tài, lĩnh vực nghiên cứu

### 1.1. Bối cảnh và tính cấp thiết

Trong hai thập niên qua, nền kinh tế toàn cầu đã chứng kiến sự dịch chuyển cơ bản trong tư duy quản trị doanh nghiệp: từ tập trung vào chỉ số tài chính thuần túy sang coi trọng trải nghiệm và sự hài lòng của khách hàng như một tài sản chiến lược. Chỉ số Hài lòng Khách hàng (Customer Satisfaction Index, CSI) nổi lên như một công cụ đo lường toàn diện, định hướng chiến lược cho các tập đoàn bán lẻ và tiêu dùng.

Tuy nhiên, trong bối cảnh thương mại điện tử và trí tuệ nhân tạo (thuật toán đề xuất) bùng nổ, một nghịch lý lớn đã xuất hiện: người tiêu dùng có thể rất hài lòng với một thương hiệu, nhưng lại nhanh chóng chuyển sang mua sản phẩm của đối thủ chỉ vì một cú nhấp chuột hoặc một đợt khuyến mãi chớp nhoáng (flash sale) được thuật toán gợi ý. Điều này làm đứt gãy hoàn toàn chuỗi nhân quả truyền thống từ "Sự hài lòng" đến "Lòng trung thành", khiến doanh nghiệp không thể chuyển hóa điểm CSI cao thành lợi thế cạnh tranh thực sự, cụ thể là Ý định chi trả giá cao (Willingness to Pay Premium) và Tỷ trọng chi tiêu (Share of Wallet). 

Tại Việt Nam, ngành hàng tiêu dùng nhanh (FMCG) là một trong những ngành có quy mô lớn nhất, ước đạt trên 50 tỷ USD vào năm 2025. Đây là ngành có tần suất mua hàng cao, chu kỳ quyết định ngắn, và chi phí chuyển đổi thương hiệu thấp. Hàng nghìn tỷ đồng được chi ra mỗi năm cho marketing và chăm sóc khách hàng, nhưng đa số các CEO đều trăn trở: Liệu sự hài lòng của khách hàng có thực sự tạo ra sức mạnh định giá (pricing power), hay họ chỉ trung thành khi có giá rẻ?

Sự khuyết thiếu các nghiên cứu định lượng giải phẫu sâu vào cơ chế tâm lý này tại thị trường Việt Nam tạo ra một khoảng trống lớn. Việc áp dụng máy móc mô hình ACSI của Mỹ vốn đề cao biến "Kỳ vọng khách hàng" không còn phù hợp với đặc thù mua lặp lại theo thói quen của FMCG. Do đó, một nghiên cứu đột phá, cấu trúc lại tiền đề của sự hài lòng (dựa trên thói quen thay vì kỳ vọng) và liên kết nó với hiệu quả hành vi thực tế (WTPP, eSOW) thay vì lợi nhuận chung chung, là cực kỳ cấp thiết.

Khoảng trống này vừa có ý nghĩa lý luận, bổ sung bằng chứng từ thị trường mới nổi (emerging market) vào dòng lý thuyết quốc tế, vừa có giá trị thực tiễn trực tiếp đối với các nhà quản trị trong kỷ nguyên số.

### 1.2. Lý do chọn đề tài

Về mặt lý luận, mô hình Chỉ số Hài lòng Khách hàng của Mỹ do Fornell et al. (1996) xây dựng đã bộc lộ nhiều điểm yếu khi ứng dụng vào ngành hàng tiêu dùng nhanh. Sự xuất hiện của biến "Kỳ vọng" bị đánh giá là khiên cưỡng và rập khuôn. Việc thay thế bằng biến "Thói quen tiêu dùng" theo Lý thuyết Hành vi Lập trình (Script-based Behavior Theory) là một hướng đi cần thiết để cắm rễ mô hình vào thực tiễn ngành học. Bên cạnh đó, việc nối ghép dữ liệu khảo sát cá nhân vào dữ liệu lợi nhuận vĩ mô của tập đoàn (Ecological Fallacy) trong nhiều nghiên cứu trước đây là một sai lầm phương pháp luận cần được chấn chỉnh bằng việc quy chuẩn toàn bộ mô hình về cấp độ khách hàng (micro-level).

Về thực tiễn, ngành hàng tiêu dùng nhanh tại Việt Nam đang trong giai đoạn cấu trúc lại kênh phân phối: tỷ trọng thương mại điện tử tăng nhanh, người tiêu dùng đặt yêu cầu cao hơn về chất lượng và trải nghiệm, cạnh tranh từ hàng nhập khẩu ngày càng mở rộng. Trong bối cảnh đó, doanh nghiệp cần bằng chứng định lượng để xác định xem việc đầu tư vào sự hài lòng có giúp họ tránh được cuộc chiến cạnh tranh về giá hay không.

Về động lực cá nhân, với nền tảng thực tiễn trong quản trị kinh doanh và sự quan tâm sâu sắc đến chiến lược khách hàng, nghiên cứu sinh nhận thấy đây là khoảng trống học thuật có thể lấp đầy bằng một công trình có tính ứng dụng cao, mang lại giá trị thực học thực nghiệp cho cả cộng đồng doanh nghiệp lẫn giới học thuật Việt Nam.

### 1.3. Lĩnh vực nghiên cứu

Đề tài thuộc lĩnh vực Quản trị Kinh doanh, giao thoa với Marketing chiến lược và Hành vi người tiêu dùng. Đây là giao điểm của hai dòng nghiên cứu: đo lường và quản lý trải nghiệm khách hàng, và đánh giá hiệu suất marketing ở cấp độ cá nhân (Customer Performance Outcomes).
`;

const content04 = `## 4. Đối tượng và phạm vi dự định nghiên cứu

### 4.1. Đối tượng nghiên cứu

Mối quan hệ giữa Chỉ số Hài lòng Khách hàng (CSI) và Hiệu quả Hành vi Khách hàng (Customer Performance Outcomes), trong đó xem xét vai trò trung gian của Lòng trung thành thương hiệu (Customer Loyalty) và Truyền miệng điện tử (eWOM), cùng vai trò điều tiết của Kênh mua sắm và Quy mô thương hiệu.

### 4.2. Khách thể nghiên cứu

Khách thể nghiên cứu duy nhất là: Người tiêu dùng cuối cùng (B2C) từ 18 tuổi trở lên, hiện đang thường xuyên sử dụng ít nhất một danh mục sản phẩm FMCG tại Việt Nam.

(Nghiên cứu tập trung giải quyết trọn vẹn mô hình ở cấp độ cá nhân vi mô, do đó loại bỏ việc thu thập dữ liệu vĩ mô từ phía doanh nghiệp niêm yết nhằm tránh lỗi suy luận sai lầm mức độ - Ecological Fallacy).

### 4.3. Phạm vi nghiên cứu

**Phạm vi không gian:** Việt Nam, tập trung thu thập dữ liệu khảo sát tại TP. Hồ Chí Minh, Hà Nội, và 2-3 tỉnh thành cấp 2 (Đà Nẵng, Cần Thơ, Bình Dương) nhằm đảm bảo tính đại diện cho cả thị trường đô thị lớn và đô thị nhỏ, trung bình.

**Phạm vi ngành:** Ngành FMCG bao gồm ba nhóm sản phẩm: (1) Thực phẩm & Đồ uống; (2) Chăm sóc cá nhân (personal care); (3) Chăm sóc gia đình (home care). Không bao gồm dược phẩm và thuốc lá do có đặc thù điều tiết riêng.

**Phạm vi thời gian:** Dữ liệu sơ cấp (khảo sát người tiêu dùng) được tiến hành và thu thập trong giai đoạn 2027-2028.
`;

fs.writeFileSync('c:\\ncsDL\\Proposal_HAILP_TDT\\01_TinhCapThiet.md', content01, 'utf8');
fs.writeFileSync('c:\\ncsDL\\Proposal_HAILP_TDT\\04_DoiTuongPhamVi.md', content04, 'utf8');
console.log('Done overhauling 01 and 04');
