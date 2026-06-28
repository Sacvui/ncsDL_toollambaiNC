const fs = require('fs');

const filePath = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Thay đổi thuật ngữ "Green" thành "Naturalness" để sát với nước yến RTD
content = content.replace(/Green Marketing \(GM\)/g, 'Naturalness Claim (NC)');
content = content.replace(/Green Skepticism \(GS\)/g, 'Naturalness Skepticism (NS)');
content = content.replace(/Green Trust \(GT\)/g, 'Naturalness Trust (NT)');
content = content.replace(/GM/g, 'NC');
content = content.replace(/GS/g, 'NS');
content = content.replace(/GT/g, 'NT');

// Sửa các biến thể tiếng Việt
content = content.replace(/Thông điệp Marketing xanh/g, 'Thông điệp tự nhiên (Naturalness Claim)');
content = content.replace(/thông điệp marketing xanh/g, 'thông điệp tiếp thị tính tự nhiên');
content = content.replace(/thông điệp xanh/g, 'thông điệp tự nhiên');
content = content.replace(/Hoài nghi xanh/g, 'Hoài nghi về tính tự nhiên');
content = content.replace(/hoài nghi xanh/g, 'hoài nghi về tính tự nhiên');
content = content.replace(/Niềm tin xanh/g, 'Niềm tin vào tính tự nhiên');
content = content.replace(/niềm tin xanh/g, 'niềm tin vào tính tự nhiên');
content = content.replace(/Niềm tin tự nhiên/g, 'Niềm tin vào tính tự nhiên');
content = content.replace(/Green\/Natural Skepticism/g, 'Naturalness Skepticism');
content = content.replace(/tính tự nhiên\/xanh/g, 'tính tự nhiên');
content = content.replace(/greenwashing/g, 'lạm dụng cam kết tự nhiên (greenwashing/claim washing)');

// 2. Siết lại Blockchain và FMCG
content = content.replace(/truy xuất nguồn gốc số \(như Blockchain\)/g, 'truy xuất nguồn gốc số (Digital Traceability)');
content = content.replace(/truy xuất nguồn gốc số \(Blockchain\)/g, 'truy xuất nguồn gốc số');
content = content.replace(/công nghệ Blockchain/gi, 'truy xuất nguồn gốc số');
content = content.replace(/ngành hàng tiêu dùng nhanh \(FMCG\)/g, 'ngành hàng nước yến chế biến sẵn (RTD)');
content = content.replace(/thị trường FMCG/g, 'thị trường nước yến RTD');

// Đảm bảo không mô tả quá sâu về công nghệ lõi
content = content.replace(/khía cạnh nhận thức phía cầu \(người tiêu dùng\), không đánh giá năng lực kỹ thuật của hệ thống blockchain phía cung./g, 'khía cạnh nhận thức phía cầu (hành vi người tiêu dùng phản ứng với tín hiệu truy xuất), hoàn toàn không đánh giá kiến trúc kỹ thuật hay độ an toàn dữ liệu của hệ thống thông tin phía cung.');

// 3. Xử lý WTP: Định vị lại là kết quả phụ / hệ quả kinh tế học
content = content.replace(/Đánh giá tác động của tính xác thực thương hiệu lên ý định mua hàng và mức sẵn lòng chi trả thêm \(WTP\)\./g, 'Đánh giá tác động của tính xác thực thương hiệu lên ý định mua hàng (kết quả hành vi chính) và mức sẵn lòng chi trả thêm (hệ quả kinh tế học mở rộng).');

const logicWTPRegex = /Từ Xác thực đến Hành vi:\*\* Brand Authenticity dẫn dắt đến ý định mua \(PI\) và mức sẵn lòng chi trả \(WTP\)\./g;
content = content.replace(logicWTPRegex, 'Từ Xác thực đến Hành vi:** Brand Authenticity dẫn dắt trực tiếp đến ý định mua (PI - biến kết quả trung tâm). WTP được đưa vào như một hệ quả kinh tế học phụ trợ nhằm khẳng định giá trị gia tăng của tính xác thực, không phải là mục tiêu định giá sản phẩm.');

const wtpMeasureRegex = /\*\*7\. Sẵn lòng chi trả thêm \(Willingness to Pay Premium - WTP\)\*\*[\s\S]*?#### 8\.3\.3\. Biến kiểm tra thao tác/m;
const newWtpMeasure = `**7. Sẵn lòng chi trả thêm (Willingness to Pay Premium - WTP)** *(Biến phụ trợ)*
Được đo lường thông qua câu hỏi định giá trực tiếp (Direct elicitation) để tránh thiên lệch neo điểm cuối (end-point bias) của thang đo thanh trượt.
*   **Câu hỏi:** "Giả sử một lốc nước yến thông thường có giá 40.000 VNĐ. Bạn sẵn sàng trả tối đa bao nhiêu tiền cho lốc nước yến có cùng dung tích nhưng đến từ thương hiệu có hệ thống truy xuất nguồn gốc minh bạch này?"
*   [Người tham gia tự điền số tiền cụ thể] - Dữ liệu thu được là biến định lượng liên tục, đóng vai trò là hệ quả kinh tế mở rộng của Brand Authenticity.

#### 8.3.3. Biến kiểm tra thao tác`;
content = content.replace(wtpMeasureRegex, newWtpMeasure);

// Sửa lại đoạn Sơ đồ mô hình (Mermaid) để phản ánh các biến mới (NC thay vì GM, NS thay vì GS, NT thay vì GT)
const mermaidRegex = /GM\["Green Marketing \(GM\)"\][\s\S]*?style WTP fill:#ffedd5,stroke:#ea580c/m;
const newMermaid = `NC["Naturalness Claim (NC)"]
    PIQ["Perceived Info Quality (PIQ)"]
    NS["Naturalness Skepticism (NS)"]
    NT["Naturalness Trust (NT)"]
    BA["Brand Authenticity (BA)"]
    PI["Purchase Intention (PI)"]
    WTP["Willingness to Pay (WTP - Phụ trợ)"]

    TR -- "H1 (+)" --> PIQ
    TR -- "H2 (-)" --> NS
    NC -- "H3 (+)" --> NT
    TR -. "H6 (+)" .-> NT
    
    PIQ -- "H4 (+)" --> NT
    NS -- "H5 (-)" --> NT
    NT -- "H7 (+)" --> BA
    
    BA -- "H8 (+)" --> PI
    BA -- "H9 (+)" --> WTP

    style TR fill:#e0f2fe,stroke:#0284c7
    style NC fill:#e0f2fe,stroke:#0284c7
    style PIQ fill:#dcfce7,stroke:#16a34a
    style NS fill:#dcfce7,stroke:#16a34a
    style NT fill:#dcfce7,stroke:#16a34a
    style BA fill:#dcfce7,stroke:#16a34a
    style PI fill:#ffedd5,stroke:#ea580c
    style WTP fill:#f1f5f9,stroke:#475569`;
content = content.replace(mermaidRegex, newMermaid);

// Ensure that other mentions of GM, GS, GT are caught if they were missed.
content = content.replace(/GM/g, 'NC');
// Be careful with replacing GS and GT, they might appear in other words. 
// We already replaced "GM ", "GS ", "GT " above. 

// Update in 8.2.1
content = content.replace(/Green Marketing Stimulus/g, 'Naturalness Claim Stimulus');
content = content.replace(/Thông điệp xanh/g, 'Thông điệp tự nhiên');
content = content.replace(/thông điệp xanh/g, 'thông điệp tự nhiên');
content = content.replace(/T\.điệp Xanh/g, 'T.điệp Tự nhiên');

// Justify Naturalness conceptually in 1.2
content = content.replace(/Sự lạm dụng các tuyên bố "xanh" và "sạch"/g, 'Sự lạm dụng các tuyên bố "tự nhiên 100%" và "nguyên chất"');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update fix_reviewer_final_5 complete.');
