const fs = require('fs');
const filePath = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';

const part1 = `# ĐỀ CƯƠNG NGHIÊN CỨU LUẬN ÁN TIẾN SĨ

**Tên đề tài:** Ảnh hưởng của truy xuất nguồn gốc số đến ý định mua sản phẩm nước yến chế biến sẵn: Vai trò trung gian của tính xác thực thương hiệu.
**Chuyên ngành đào tạo:** Quản trị Kinh doanh  
**Mã chuyên ngành:** 9340101  
**Nghiên cứu sinh:** Lê Phúc Hải  
**Cơ sở đào tạo:** Trường Đại học Nha Trang

---

## 1. LÝ DO CHỌN ĐỀ TÀI CỦA LUẬN ÁN
### 1.1. Bất cân xứng thông tin và Khủng hoảng niềm tin trong ngành hàng thực phẩm chức năng
1.  **Đặc tính hàng hóa và Bất cân xứng thông tin:** Các sản phẩm thực phẩm chức năng, đặc biệt là nhóm nước yến chế biến sẵn (RTD), được phân loại vào nhóm hàng hóa dựa trên niềm tin (credence goods). Theo Akerlof (1970), đây là nhóm sản phẩm mà người tiêu dùng không thể đánh giá chính xác chất lượng thực tế ngay cả sau khi đã sử dụng. Điều này dẫn đến sự bất cân xứng thông tin sâu sắc giữa nhà sản xuất và người mua.
2.  **Rủi ro cảm nhận và Khủng hoảng niềm tin:** Ngành hàng sản phẩm RTD đang đối mặt với thử thách nghiêm trọng về niềm tin (Nielsen, 2022). Người tiêu dùng hiện đại, đặc biệt là thế hệ Gen Z, có sự quan tâm lớn đến sức khỏe (Kantar, 2023). Theo các báo cáo xu hướng tiêu dùng FMCG gần đây, nhóm nhân khẩu học này đang có sự dịch chuyển mạnh mẽ sang các thức uống dinh dưỡng tiện lợi (như nước yến chế biến sẵn - RTD) (McKinsey, 2022). Tuy nhiên, họ lại đối mặt với rủi ro cảm nhận (perceived risk) cao đối với các sản phẩm công nghiệp này do tình trạng bất cân xứng thông tin. Sự mập mờ trong các thông điệp truyền thống khiến niềm tin đối với các cam kết "tự nhiên" có xu hướng giảm sút (Skarmeas & Leonidou, 2013).
3.  **Sự cấp thiết của một cơ chế xác thực minh bạch:** Việc giải quyết khủng hoảng niềm tin không thể chỉ dựa vào các nỗ lực truyền thông truyền thống hay các chứng nhận tĩnh bằng giấy vốn dễ bị làm giả. Trong bối cảnh này, truy xuất nguồn gốc số được kỳ vọng mang lại tiềm năng nâng cao đáng kể tính minh bạch chuỗi cung ứng (Francisco & Swanson, 2018; Saberi et al., 2019). Tuy nhiên, thay vì tiếp cận công nghệ truy xuất như một hạ tầng kỹ thuật thuần túy, việc hiểu rõ cách thức công nghệ này chuyển hóa thành "tín hiệu niềm tin" để làm giảm rủi ro cảm nhận của người tiêu dùng là một vấn đề cấp thiết cả về mặt lý luận lẫn thực tiễn (Wang & Li, 2023).
4.  **Tính cấp thiết đối với nền kinh tế địa phương (Đặc thù Yến sào Khánh Hòa):** Việc lựa chọn ngành hàng yến sào, đặc biệt gắn với bối cảnh địa phương Khánh Hòa, mang lại giá trị thực tiễn to lớn. Ngành yến sào đóng góp tỷ trọng lớn vào GRDP của tỉnh và tạo ra hàng chục ngàn sinh kế bền vững cho người dân địa phương. Đặc biệt, "Yến sào Khánh Hòa" đã được nhà nước công nhận là Chỉ dẫn địa lý (Geographical Indication) mang tầm quốc gia. Tuy nhiên, chính giá trị kinh tế này đã biến các sản phẩm yến (nhất là dòng yến chế biến sẵn) thành mục tiêu bị làm giả và gian lận thương mại. Do đó, việc nghiên cứu truy xuất nguồn gốc số nhằm giải quyết bài toán "niềm tin" có giá trị chiến lược trong việc bảo vệ Chỉ dẫn địa lý và tạo động lực phát triển bền vững cho nền kinh tế Khánh Hòa.

### 1.2. Giới hạn của marketing truyền thống và nhu cầu minh bạch số
Vấn đề nghiên cứu trọng tâm xuất phát từ sự thất bại của các phương thức truyền thông truyền thống trong việc thuyết phục người tiêu dùng về tính xác thực của sản phẩm:
1.  **Bất cân xứng thông tin (Information Asymmetry):** Áp dụng lý thuyết của Akerlof (1970), dòng sản phẩm nước yến chế biến sẵn (RTD) được xếp vào nhóm hàng hóa dựa trên niềm tin (credence goods). Người tiêu dùng gần như không thể phân biệt được tỷ lệ yến thật, nguồn gốc nguyên liệu hay chất lượng quy trình tiệt trùng chỉ bằng quan sát thông thường hay nếm thử.
2.  **Hoài nghi đối với cam kết "tự nhiên":** Khi mọi doanh nghiệp đều tuyên bố sản phẩm của mình là "tự nhiên 100%" mà không có bằng chứng kiểm chứng độc lập, người tiêu dùng rơi vào trạng thái hoài nghi. Các nghiên cứu của Skarmeas & Leonidou (2013) chỉ ra rằng khi các thông điệp bị lạm dụng, mức độ hoài nghi tăng đáng kể, dẫn đến sự phản kháng của người tiêu dùng đối với cả những thương hiệu làm thật.
3.  **Sự vô hiệu của các chứng nhận tĩnh:** Các tem nhãn hay giấy chứng nhận bằng giấy truyền thống dễ dàng bị làm giả hoặc sao chép, không còn đủ sức nặng để đóng vai trò là "tín hiệu tin cậy" trong kỷ nguyên số.

### 1.3. Truy xuất nguồn gốc số như một tín hiệu niềm tin
Để giải quyết căn bản vấn đề niềm tin, nghiên cứu đề xuất cách tiếp cận: Chuyển dịch từ Marketing dựa trên lời hứa sang Marketing dựa trên tín hiệu minh bạch số:
1.  **Truy xuất nguồn gốc số như hạ tầng tin cậy:** Hệ thống truy xuất nguồn gốc số cung cấp các đặc tính: *Bất biến (Immutability), Minh bạch (Transparency) và Truy xuất thời gian thực (Real-time Traceability)*.
2.  **Lý thuyết Tín hiệu (Signaling Theory):** Theo Spence (1973), một tín hiệu hiệu quả phải có chi phí cao hoặc khó giả mạo. Hệ thống truy xuất nguồn gốc đóng vai trò là một "tín hiệu tốn kém" (Costly Signal). Chỉ những doanh nghiệp có quy trình minh bạch thật sự mới dám công khai dữ liệu, từ đó giúp người tiêu dùng tách biệt sản phẩm chất lượng và sản phẩm gian lận trên thị trường.
3.  **Tính xác thực thương hiệu (Brand Authenticity):** Trong tâm lý học hành vi, tính xác thực là nhân tố cốt lõi dẫn đến lòng trung thành và mức sẵn lòng chi trả cao (WTP). Tuy nhiên, làm thế nào để chuyển hóa một công cụ kỹ thuật thành một trải nghiệm xác thực (Brand Authenticity) trong tâm trí khách hàng vẫn là một câu hỏi cần được làm rõ bằng thực chứng.

### 1.4. Vấn đề nghiên cứu (Problem Statement)
Mặc dù công nghệ truy xuất nguồn gốc số được kỳ vọng nâng cao tính minh bạch, mức độ ứng dụng thực tế tại Việt Nam, đặc biệt trong ngành yến sào, vẫn còn rất hạn chế và chưa hình thành các bằng chứng thực nghiệm rõ ràng. Vấn đề cốt lõi mà nghiên cứu này cần giải quyết là sự thiếu vắng nền tảng học thuật về cách thức người tiêu dùng diễn giải và phản ứng với các tín hiệu công nghệ này.

Điều này đặt ra một khoảng trống lớn về tri thức và thực tiễn, được cụ thể hóa qua các câu hỏi nghiên cứu sau:
1.  Làm thế nào tín hiệu truy xuất nguồn gốc số có thể tác động đến các biến tâm lý như hoài nghi và niềm tin của người tiêu dùng?
2.  Liệu việc người tiêu dùng nhận thức được tín hiệu này có thực sự giúp nâng cao Tính xác thực thương hiệu (Brand Authenticity) và từ đó thúc đẩy Ý định mua hàng (PI) cũng như Mức sẵn lòng chi trả thêm (WTP) hay không?
3.  Cơ chế tác động tương tác giữa nội dung thông điệp tiếp thị (thông điệp cảm xúc) và xác thực số (bằng chứng kỹ thuật) diễn ra như thế nào?

Nghiên cứu này được thực hiện nhằm giải quyết các câu hỏi trên, cung cấp nền tảng khoa học vững chắc để các doanh nghiệp (đặc biệt là ngành yến sào Khánh Hòa) tự tin đầu tư vào hệ thống truy xuất số dựa trên bằng chứng về hành vi người tiêu dùng.
`;

fs.writeFileSync(filePath, part1, 'utf8');
console.log('Part 1 written successfully.');
