const fs = require('fs');

const content = `## 2. Tình hình nghiên cứu

### 2.1. Lý thuyết nền tảng

Ba lý thuyết sau đây tạo thành khung lý thuyết tích hợp cho đề tài, mỗi lý thuyết giải thích một mắt xích khác nhau trong chuỗi nhân quả từ thói quen tiêu dùng, sự hài lòng đến hiệu quả hành vi khách hàng.

**Lý thuyết xác nhận kỳ vọng (Expectancy-Disconfirmation Theory)** do Oliver (1980) đề xuất giải thích cơ chế hình thành sự hài lòng cốt lõi: khách hàng so sánh cảm nhận thực tế sau tiêu dùng với kỳ vọng đã hình thành trước đó. Tuy nhiên, trong bối cảnh FMCG (hàng tiêu dùng nhanh) có tính lặp lại cao, lý thuyết này bộc lộ những hạn chế nhất định vì người tiêu dùng không phải lúc nào cũng mang theo những kỳ vọng lý trí rõ ràng trước mỗi lần mua hàng.

**Lý thuyết Hành vi Lập trình (Script-based Behavior Theory)** bổ khuyết cho hạn chế trên. Khare & Inman (2006) lập luận rằng đối với các sản phẩm FMCG có rủi ro thấp và mua thường xuyên, người tiêu dùng phát triển các "kịch bản" (scripts) hành vi tự động để giảm thiểu nỗ lực nhận thức. Lúc này, "Thói quen" và "Sự thân thuộc" lấn át "Kỳ vọng" trong việc định hình trải nghiệm. Khách hàng hài lòng vì sản phẩm mang lại sự an tâm tự động mà không đòi hỏi họ phải suy nghĩ. Việc kết hợp lý thuyết này cho phép nghiên cứu thay thế cấu trúc "Kỳ vọng khách hàng" truyền thống bằng "Thói quen tiêu dùng" - một bước tiến quan trọng về mặt lý thuyết để phản ánh đúng bản chất tâm lý học hành vi trong FMCG.

**Lý thuyết Cam kết - Tin tưởng (Commitment-Trust Theory)** của Morgan & Hunt (1994) và **Lý thuyết Truyền miệng Điện tử (eWOM Diffusion)** cung cấp cơ sở cho mắt xích kết quả: tại sao khách hàng hài lòng lại sẵn sàng trả giá cao (Willingness to Pay Premium) và dồn ngân sách (Share of Wallet) cho thương hiệu. Trong kỷ nguyên số, eWOM không chỉ là kết quả mà còn là một cơ chế tự củng cố (self-reinforcing mechanism). Khi khách hàng công khai bảo vệ hoặc khen ngợi thương hiệu trực tuyến, họ gia tăng mức độ cam kết tâm lý của chính mình, từ đó kích hoạt hành vi chi trả giá cao để duy trì sự nhất quán nội tâm (Cognitive Dissonance).

### 2.2. Phê phán mô hình ACSI và Cấu trúc đo lường CSI trong FMCG

Mô hình Chỉ số Hài lòng Khách hàng Mỹ (ACSI) do Fornell et al. (1996) xây dựng là khung đo lường CSI được chấp nhận rộng rãi nhất. ACSI định nghĩa CSI là một hàm của ba tiền đề: Kỳ vọng khách hàng, Chất lượng cảm nhận, và Giá trị cảm nhận. Tuy nhiên, việc áp dụng nguyên xi mô hình ACSI vào ngành FMCG là một sự rập khuôn máy móc và tiềm ẩn sai lầm lý thuyết.

Kang et al. (2014) chỉ ra rằng trong ngành FMCG, biến "Kỳ vọng" (Customer Expectations - CE) hầu như không có tác động hoặc có tác động rất yếu đến sự hài lòng vì khách hàng đã quá quen thuộc với sản phẩm do mua lặp lại nhiều lần. Đã biết rõ đặc thù này, việc tiếp tục cố chấp đo lường "Kỳ vọng" sẽ tạo ra một mô hình thiếu bản lĩnh lý thuyết. Thay vì lảng tránh, nghiên cứu này chủ động loại bỏ biến CE và thay thế bằng **Thói quen tiêu dùng (Habit - HB)**, tạo ra một cấu trúc tiền đề mới: Thói quen - Chất lượng - Giá trị. Đây là đóng góp lý thuyết (Theory Building) cốt lõi của luận án, giúp mô hình bám rễ sâu vào thực tiễn ngành tiêu dùng nhanh thay vì chỉ là một "bản cập nhật bối cảnh".

Về mặt kết quả, ACSI gốc liên kết sự hài lòng với Lòng trung thành và sau đó là Tỷ suất lợi nhuận (ROA). Tuy nhiên, nỗ lực nối trực tiếp biến sơ cấp (cảm nhận của một nhóm khách hàng) với biến thứ cấp tài chính vĩ mô (lợi nhuận của cả tập đoàn) là quá khiên cưỡng và vấp phải nghịch lý "Mâu thuẫn đơn vị phân tích" (Ecological Fallacy). Để giải quyết triệt để, nghiên cứu này điều hướng kết quả về các biến hiệu quả vi mô cấp độ khách hàng (Customer Performance Outcomes) bao gồm Ý định chi trả giá cao và Tỷ trọng chi tiêu dự kiến.

### 2.3. Nghiên cứu về CSI và hiệu quả cấp độ khách hàng trên thế giới

Anderson & Sullivan (1993) là những người tiên phong chỉ ra rằng sự hài lòng dẫn đến ý định mua lại. Tuy nhiên, mua lại (repurchase) không đồng nghĩa với trung thành thực sự. Zeithaml et al. (1996) đề xuất một thang đo toàn diện hơn về hiệu quả hành vi khách hàng, nhấn mạnh rằng khách hàng trung thành thực sự là những người sẵn sàng **chi trả giá cao (Willingness to Pay Premium)** ngay cả khi đối thủ cạnh tranh tung ra các đợt khuyến mãi. 

Trong bối cảnh trực tuyến, Seiders et al. (2005) chỉ ra rằng sự hài lòng chỉ chuyển hóa thành hành vi mua lặp lại khi đồng thời có yếu tố thuận tiện về kênh phân phối. Gần đây, Dawes et al. (2023) xác định lòng trung thành trong ngành hàng tiêu dùng nhanh đang bị xói mòn nghiêm trọng bởi các thuật toán thương mại điện tử, vốn liên tục gợi ý sản phẩm thay thế giá rẻ. Điều này đặt ra giả thuyết quan trọng về việc Kênh mua sắm (Online vs Offline) sẽ điều tiết tiêu cực mối quan hệ giữa Sự hài lòng và Lòng trung thành thương hiệu truyền thống.

Keiningham et al. (2007) chỉ trích việc chỉ dùng Lòng trung thành để dự báo doanh thu. Nhóm tác giả đề xuất biến **Tỷ trọng chi tiêu (Share of Wallet - SOW)** là thước đo thực tế nhất về mức độ chiếm lĩnh tâm trí và túi tiền của khách hàng. Khách hàng có thể "rất hài lòng" với Coca-Cola, nhưng nếu ngân sách giải khát của họ vẫn chia đều cho Pepsi, thì sự hài lòng đó chưa tạo ra lợi thế cạnh tranh tuyệt đối. 

### 2.4. Nghiên cứu liên quan tại Việt Nam

Tại Việt Nam, phần lớn nghiên cứu CSI tập trung vào lĩnh vực dịch vụ (ngân hàng, bảo hiểm, viễn thông) hoặc bán lẻ. Nguyen et al. (2018) ứng dụng ACSI trong ngành bảo hiểm, xác nhận vai trò của chất lượng dịch vụ. Tran (2020) nghiên cứu chuỗi chất lượng - hài lòng - trung thành trong siêu thị.

Trong ngành hàng tiêu dùng nhanh tại Việt Nam, các nghiên cứu hiện tại chủ yếu khám phá trải nghiệm thương hiệu hoặc dùng mô hình TAM (Technology Acceptance Model) để đo lường ý định mua sắm trực tuyến. Hầu như chưa có nghiên cứu nào dám phá vỡ cấu trúc ACSI truyền thống để đưa yếu tố "Thói quen" vào làm tiền đề cho sự hài lòng. Đồng thời, các nghiên cứu cũng thường dừng lại ở biến "Ý định mua lại" chung chung thay vì đo lường sức mạnh định giá của thương hiệu thông qua "Ý định chi trả giá cao" (WTPP) hay "Tỷ trọng chi tiêu" (SOW).

### 2.5. Khoảng trống nghiên cứu

Từ việc lược khảo tài liệu trên hệ thống Scopus và Web of Science, nghiên cứu xác định ba khoảng trống trọng tâm:

**Khoảng trống 1, Sáng tạo cấu trúc đo lường (Theory Building):** Chưa có nghiên cứu nào tại Việt Nam thách thức và thay đổi mô hình ACSI trong ngành FMCG bằng cách loại bỏ biến "Kỳ vọng" và tích hợp Lý thuyết Hành vi Lập trình (Script-based Behavior Theory) với biến "Thói quen tiêu dùng" làm tiền đề cốt lõi tạo ra sự hài lòng.

**Khoảng trống 2, Hiệu quả hành vi vi mô (Micro-level Performance):** Các nghiên cứu hiện hành hoặc vướng lỗi Ecological Fallacy khi cố nối khảo sát vào ROA, hoặc quá hời hợt khi dừng ở "Ý định mua lại". Khoảng trống ở đây là chưa có nghiên cứu đo lường sức mạnh thương hiệu qua "Ý định chi trả giá cao" (WTPP) và "Tỷ trọng chi tiêu dự kiến" (eSOW) dựa trên chỉ số CSI trong ngành tiêu dùng nhanh.

**Khoảng trống 3, Cơ chế eWOM và Điều tiết Kênh trong Kỷ nguyên số:** Chưa kiểm định đồng thời vai trò của Kênh mua sắm trực tuyến trong việc đóng vai trò là "con dao hai lưỡi": vừa thúc đẩy truyền miệng điện tử (eWOM), nhưng lại vừa bào mòn lòng trung thành thương hiệu truyền thống do thuật toán đề xuất thay thế của các sàn thương mại điện tử.
`;

fs.writeFileSync('c:\\ncsDL\\Proposal_HAILP_TDT\\02_TinhHinhNghienCuu.md', content, 'utf8');
console.log('Done overhauling 02_TinhHinhNghienCuu.md');
