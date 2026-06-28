const fs = require('fs');

const content03 = `## 3. Mục đích nghiên cứu

### 3.1. Mục đích tổng quát

Nghiên cứu nhằm xây dựng và kiểm định mô hình lý thuyết về tác động của Chỉ số Hài lòng Khách hàng (CSI) đến Hiệu quả Hành vi Khách hàng (Customer Performance Outcomes) trong ngành FMCG tại Việt Nam, trong đó phân tích hai cơ chế truyền dẫn song song: thông qua lòng trung thành thương hiệu (Customer Loyalty) và thông qua truyền miệng điện tử (eWOM). Đặc biệt, nghiên cứu đánh giá cách thức sự phụ thuộc vào thuật toán số đang bào mòn lòng trung thành như thế nào. Từ đó, nghiên cứu đề xuất hàm ý quản trị có tính ứng dụng cao cho doanh nghiệp FMCG và gợi ý chính sách cho cơ quan quản lý nhà nước.

### 3.2. Mục tiêu cụ thể

Nghiên cứu hướng đến sáu mục tiêu cụ thể theo thứ tự logic từ đo lường đến phân tích đến ứng dụng, thông qua một thiết kế đa nghiên cứu (Multi-study design) kết hợp khảo sát dọc và thực nghiệm kịch bản. Trước tiên, xây dựng và kiểm định thang đo CSI và eWOM phù hợp với đặc thù ngành hàng tiêu dùng nhanh. Tiếp theo, đánh giá thực trạng mức độ hài lòng người tiêu dùng FMCG theo các chiều kích thói quen tiêu dùng, chất lượng cảm nhận, giá trị cảm nhận. Thứ ba, phân tích tác động của CSI đến hiệu quả hành vi cấp độ vi mô, cụ thể là Ý định chi trả giá cao (WTPP) và Tỷ trọng chi tiêu dự kiến (eSOW). Thứ tư, kiểm định vai trò trung gian đồng thời của lòng trung thành thương hiệu và eWOM trong chuỗi CSI-CPO. Thứ năm, kiểm định vai trò điều tiết của sự phụ thuộc vào thuật toán đề xuất (Algorithmic Recommendation Dependence) và quy mô doanh nghiệp. Cuối cùng, đề xuất hàm ý quản trị cho doanh nghiệp FMCG để chuyển hóa sự hài lòng thành giá trị vòng đời khách hàng trong kỷ nguyên AI.

### 3.3. Câu hỏi nghiên cứu

- **Q1:** Các cấu phần nào của CSI (thói quen tiêu dùng, chất lượng cảm nhận, giá trị cảm nhận) có trọng số tác động lớn nhất đến sự hài lòng tổng thể của người tiêu dùng FMCG tại Việt Nam?
- **Q2:** CSI tác động như thế nào đến ý định chi trả giá cao (WTPP) và tỷ trọng chi tiêu dự kiến (eSOW) của khách hàng FMCG tại Việt Nam?
- **Q3:** Lòng trung thành thương hiệu và eWOM có đóng vai trò trung gian trong mối quan hệ CSI-CPO (Customer Performance Outcomes) không?
- **Q4:** Mức độ phụ thuộc vào thuật toán đề xuất (ARD) điều tiết hai tuyến trung gian này như thế nào - cụ thể là thuật toán có làm mạnh tuyến CSI-eWOM-CPO và làm suy yếu tuyến CSI-CL-CPO không?
- **Q5:** Hàm ý quản trị nào phù hợp cho doanh nghiệp FMCG Việt Nam khi phân bổ ngân sách giữa xây dựng lòng trung thành và kích hoạt eWOM nhằm tối đa hóa giá trị vòng đời khách hàng?
`;

const content07 = `## 7. Mục tiêu và mong muốn đạt được khi đăng ký tuyển sinh đào tạo trình độ tiến sĩ

Quyết định đăng ký dự tuyển chương trình đào tạo tiến sĩ tại Đại học Tôn Đức Thắng xuất phát từ bốn mục tiêu cụ thể và có liên kết với nhau.

Về năng lực học thuật, nghiên cứu sinh mong muốn xây dựng năng lực nghiên cứu độc lập ở trình độ có thể công bố quốc tế (Top-tier journals), cụ thể là khả năng thiết kế và thực hiện nghiên cứu đa phương pháp (Multi-study design) kết hợp Khảo sát Dọc (Longitudinal Survey) và Thực nghiệm kịch bản (Scenario-based Experiment), ứng dụng Mô hình cấu trúc tuyến tính (PLS-SEM) và Phân tích Đa nhóm (MGA) trên phần mềm SmartPLS. Mục tiêu đầu ra là ít nhất 02 bài báo trong danh mục ISI/Scopus Q1/Q2 trong suốt thời gian đào tạo.

Về đóng góp thực tiễn, kết quả nghiên cứu được kỳ vọng chuyển hóa thành bộ công cụ đo lường CSI có thể triển khai cho các doanh nghiệp hàng tiêu dùng nhanh Việt Nam, giúp nhà quản trị có cơ sở định lượng để phân bổ nguồn lực vào các hoạt động nâng cao trải nghiệm khách hàng thay vì dựa vào kinh nghiệm chủ quan.

Về định hướng nghề nghiệp, bằng tiến sĩ là nền tảng để chuyển sang vai trò giảng dạy bậc đại học và sau đại học, đồng thời nâng cao năng lực tư vấn chiến lược về quản lý trải nghiệm khách hàng, lĩnh vực có nhu cầu ngày càng tăng nhưng thiếu chuyên gia có nền tảng học thuật vững tại Việt Nam.

Về đóng góp phát triển ngành, giai đoạn hiện tại của nền kinh tế Việt Nam đang chứng kiến sự dịch chuyển từ cạnh tranh giá sang cạnh tranh giá trị và trải nghiệm. Bằng chứng thực nghiệm về tác động bào mòn của thuật toán AI lên lòng trung thành và mối quan hệ giữa CSI và hiệu quả hành vi khách hàng (WTPP, eSOW) có thể đóng góp vào cơ sở bằng chứng cần thiết cho sự dịch chuyển chiến lược Marketing của các doanh nghiệp FMCG.
`;

fs.writeFileSync('c:\\ncsDL\\Proposal_HAILP_TDT\\03_MucDichNghienCuu.md', content03, 'utf8');
fs.writeFileSync('c:\\ncsDL\\Proposal_HAILP_TDT\\07_MucTieu.md', content07, 'utf8');
console.log('Done overhauling 03 and 07 for Multi-study');
