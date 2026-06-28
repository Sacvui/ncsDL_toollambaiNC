const fs = require('fs');
const path = require('path');

const dir = 'c:\\ncsDL\\Proposal_HAILP_TDT';

// Update 05_PhuongPhap.md for eSOW and ARD
let file5 = path.join(dir, '05_PhuongPhap.md');
let content5 = fs.readFileSync(file5, 'utf8');

// eSOW Scale update
let oldEsowTable = `| eSOW | Giả sử trong **10 lần mua** sản phẩm [danh mục] tiếp theo, bạn dự kiến sẽ mua [TH] bao nhiêu lần? Mua thương hiệu khác bao nhiêu lần? *(Ví dụ: [TH] = ___ lần, Thương hiệu B = ___ lần, Thương hiệu C = ___ lần, Thương hiệu khác = ___ lần. Tổng = 10 lần)* |`;
let newEsowTable = `| eSOW1 | Giả sử trong **10 lần mua** sản phẩm [danh mục] tiếp theo, bạn dự kiến sẽ mua [TH] bao nhiêu lần? *(Ghi số từ 0-10)* |\n| eSOW2 | Ước tính trong 6 tháng tới, phần trăm tổng chi tiêu của bạn dành cho [TH] (share of category spending) so với toàn bộ ngành hàng sẽ rơi vào khoảng nào? *(1: Dưới 20%, 2: 20-40%, 3: 40-60%, 4: 60-80%, 5: Trên 80%)* |`;
content5 = content5.replace(oldEsowTable, newEsowTable);

let oldEsowNote = `*Ghi chú: eSOW được đo bằng phân bổ tần suất (Frequency Allocation) thay vì phân bổ tỷ lệ % ngân sách. Cách hỏi "số lần mua trong 10 lần tiếp theo" giúp giảm rào cản nhận thức đáng kể cho người tiêu dùng FMCG vốn mua sản phẩm giá trị nhỏ, so với việc bắt họ tính nhẩm % ngân sách. Tỷ trọng dành cho [TH] (ví dụ: 7/10 = 70%) sẽ được quy đổi thành biến liên tục tỷ lệ làm giá trị đầu vào cho mô hình PLS-SEM.*`;
let newEsowNote = `*Ghi chú: eSOW được đo lường kết hợp 2 phương pháp để tăng độ tin cậy: eSOW1 dùng Phân bổ tần suất (dễ mường tượng cho hàng FMCG mua lặp lại), và eSOW2 dùng Tự báo cáo % chi tiêu theo khoảng (Share of category spending) để làm biến phụ trợ đối chiếu chéo.*`;
content5 = content5.replace(oldEsowNote, newEsowNote);

// ARD update in 05_PhuongPhap.md
let ardDescOld = `- **H10a:** Sự phụ thuộc vào thuật toán đề xuất (ARD) điều tiết tiêu cực mối quan hệ giữa CSI và truyền miệng điện tử.`;
let ardDescNew = `- **H10a:** Sự phụ thuộc vào thuật toán đề xuất (ARD) điều tiết tiêu cực mối quan hệ giữa CSI và truyền miệng điện tử. Khác với Mô hình Chấp nhận Công nghệ (TAM) vốn chỉ đánh giá tính dễ sử dụng, ARD đo lường sự "phó thác tâm lý" của khách hàng cho hệ thống AI. Khi khách hàng phó thác quyền lựa chọn cho máy móc, sự gắn kết chủ động với một thương hiệu cụ thể bị làm lu mờ.`;
content5 = content5.replace(ardDescOld, ardDescNew);

fs.writeFileSync(file5, content5, 'utf8');

// Update 02_TinhHinhNghienCuu.md for ARD
let file2 = path.join(dir, '02_TinhHinhNghienCuu.md');
let content2 = fs.readFileSync(file2, 'utf8');
let ardGapOld = `**Khoảng trống 2, Khám phá vai trò điều tiết của công nghệ:**`;
let ardGapNew = `**Khoảng trống 2, Khám phá vai trò điều tiết của công nghệ (Sự phó thác thuật toán):** Trong khi phần lớn các nghiên cứu tiêu dùng số hiện nay sử dụng Mô hình Chấp nhận Công nghệ (TAM) để đo lường ý định sử dụng hệ thống, họ đã bỏ qua một khía cạnh hành vi sâu sắc hơn: Sự phụ thuộc vào thuật toán đề xuất (Algorithm Reliance Degree - ARD). ARD không phải là việc "chấp nhận" công cụ, mà là trạng thái tâm lý "phó thác" quyền ra quyết định cho AI. Nghiên cứu này định vị ARD như một rào cản mới có khả năng làm suy yếu chuỗi lòng trung thành truyền thống. `;
content2 = content2.replace(ardGapOld, ardGapNew);

fs.writeFileSync(file2, content2, 'utf8');

console.log("Updated eSOW scale and ARD concepts");
