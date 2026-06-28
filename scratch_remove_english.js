const fs = require('fs');
const path = require('path');

const dir = 'c:\\ncsDL\\Proposal_HAILP_TDT';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f.match(/^\d{2}_/));

// Terms to remove specifically
const termsToRemove = [
    / \(emerging market\)/g,
    / \(Script-based Behavior Theory\)/g,
    / \(Expectancy-Disconfirmation Theory\)/g,
    / \(Commitment-Trust Theory\)/g,
    / \(eWOM Diffusion\)/g,
    / \(self-reinforcing mechanism\)/g,
    / \(Cognitive Dissonance\)/g,
    / \(Theory Building\)/g,
    / \(Micro-level Performance\)/g,
    / \(Cross-country comparison\)/g,
    / \(Ecological Fallacy\)/g,
    / \(repurchase\)/g,
    / \(Multi-study design\)/g,
    / \(Longitudinal Survey\)/g,
    / \(Two-wave Longitudinal Design\)/g,
    / \(Common Method Bias - CMB\)/g,
    / \(Marker Variable\)/g,
    / \(consistency motif\)/g,
    / \(attrition rate\)/g,
    / \(systematic bias\)/g,
    / \(Scenario-based Experiment\)/g,
    / \(Between-subjects Experiment\)/g,
    / \(Control Group, n = 100\)/g,
    / \(Treatment Group, n = 100\)/g,
    / \(Price Sensitivity - PS\)/g,
    / \(causal inference\)/g,
    / \(semi-structured in-depth interviews\)/g,
    / \(Brand Manager, Customer Experience Manager, Sales Director\)/g,
    / \(Latent constructs\)/g,
    / \(ratio-scale continuous variable\)/g,
    / \(Temporal Separation\)/g,
    / \(conservative estimate\)/g,
    / \(Measurement Model\)/g,
    / \(Structural Model\)/g,
    / \(Interaction Term\)/g,
    / \(Multi-Group Analysis - MGA\)/g,
    / \(median split\)/g,
    / \(Specific Indirect Effects\)/g,
    / \(Between-subjects Design\)/g,
    / \(Manipulation\)/g,
    / \(Psychological Mediator\)/g,
    / \(Manipulation Check\)/g,
    / \(reviewer comments\)/g,
    / \(Top-tier journals\)/g,
    / \(Customer Loyalty\)/g,
    / \(Electronic Word-of-Mouth\)/g,
    / \(Algorithmic Recommendation Dependence\)/g,
    / \(Customer Performance Outcomes\)/g,
    / \(Willingness to Pay a Premium\)/g,
    / \(Willingness to Pay Premium\)/g,
    / \(Expected Share of Wallet\)/g,
    / \(Share of Wallet\)/g,
    / \(Frequency Allocation Scale\)/g,
    / \(Content Validity Index\)/g,
    / \(Nomological Validity\)/g,
    / \(Mediation-within-Experiment\)/g,
    / \(Customer Experience Management\)/g,
    / \(CXM\)/g,
    / \(Cross-country comparison\)/g,
    / \(aggregate rating\)/g,
    / \(AI-personalization\)/g,
    / \(Consumer Behavior\)/g,
    / \(Psychometrics\)/g
];

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    termsToRemove.forEach(term => {
        content = content.replace(term, "");
    });
    
    // Clean up standalone variables that might have been left weird
    content = content.replace(/Lý thuyết Cam kết - Tin tưởng của/g, 'Lý thuyết Cam kết – Tin tưởng của');
    content = content.replace(/Mâu thuẫn đơn vị phân tích/g, 'Ngụy biện sinh thái (mâu thuẫn cấp độ phân tích)');
    
    // Some manual fixes for eSOW/WTPP definition without brackets
    content = content.replace(/Ý định chi trả giá cao và Tỷ trọng chi tiêu dự kiến/g, 'Ý định chi trả giá cao (WTPP) và Tỷ trọng chi tiêu dự kiến (eSOW)');
    content = content.replace(/chi trả giá cao ngay cả khi/g, 'chi trả giá cao (WTPP) ngay cả khi');
    content = content.replace(/Tỷ trọng chi tiêu là thước đo/g, 'Tỷ trọng chi tiêu (eSOW) là thước đo');

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

// Create Glossary File
const glossaryContent = `## DANH MỤC TỪ VIẾT TẮT VÀ THUẬT NGỮ

Trong đề cương này, các thuật ngữ khoa học và biến số nghiên cứu được sử dụng nhất quán bằng tiếng Việt. Bảng dưới đây đối chiếu các thuật ngữ này với nguyên bản tiếng Anh nhằm đảm bảo tính chính xác về mặt học thuật.

**1. Các biến số trong mô hình nghiên cứu**
- **CSI (Customer Satisfaction Index):** Chỉ số Hài lòng Khách hàng
- **CPO (Customer Performance Outcomes):** Hiệu quả Hành vi Khách hàng
- **WTPP (Willingness to Pay Premium):** Ý định chi trả giá cao (Sự sẵn lòng trả phụ phí)
- **eSOW (Expected Share of Wallet):** Tỷ trọng chi tiêu dự kiến
- **CL (Customer Loyalty):** Lòng trung thành thương hiệu
- **eWOM (Electronic Word-of-Mouth):** Truyền miệng điện tử
- **ARD (Algorithmic Recommendation Dependence):** Sự phụ thuộc vào Thuật toán Đề xuất
- **PS (Price Sensitivity):** Tính nhạy cảm về giá
- **HB (Habit):** Thói quen tiêu dùng
- **PQ (Perceived Quality):** Chất lượng cảm nhận
- **PV (Perceived Value):** Giá trị cảm nhận

**2. Các thuật ngữ phương pháp luận**
- **Multi-study Design:** Thiết kế đa nghiên cứu
- **Longitudinal Survey:** Khảo sát dọc
- **Scenario-based Experiment:** Thực nghiệm kịch bản
- **CMB (Common Method Bias):** Rủi ro phương pháp chung
- **Non-response Bias:** Thiên lệch do không phản hồi
- **Ecological Fallacy:** Ngụy biện sinh thái (Sai lầm khi dùng dữ liệu vĩ mô để suy luận hành vi vi mô)
- **PLS-SEM (Partial Least Squares Structural Equation Modeling):** Mô hình cấu trúc tuyến tính bình phương tối thiểu riêng phần
- **MGA (Multi-Group Analysis):** Phân tích đa nhóm
`;
fs.writeFileSync(path.join(dir, '00b_DanhMucTuKhoa.md'), glossaryContent, 'utf8');

// Also update manage.js to include 00b_DanhMucTuKhoa.md in the compilation list
let manageContent = fs.readFileSync(path.join(dir, '..', 'manage.js'), 'utf8');
manageContent = manageContent.replace(
    /'00_BiaThongTin\.md',/,
    "'00_BiaThongTin.md',\n        '00b_DanhMucTuKhoa.md',"
);
fs.writeFileSync(path.join(dir, '..', 'manage.js'), manageContent, 'utf8');

console.log("Done removing English terms and adding Glossary!");
