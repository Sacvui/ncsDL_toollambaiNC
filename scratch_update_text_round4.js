const fs = require('fs');
const path = require('path');

const dir = 'c:\\ncsDL\\Proposal_HAILP_TDT';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f.match(/^\d{2}_/));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // 1. Nominalization & Phrasing (Make Vietnamese sound natural, chunking)
    content = content.replace(
        /Sự khuyết thiếu các nghiên cứu định lượng giải phẫu sâu vào cơ chế tâm lý này tại thị trường Việt Nam tạo ra một khoảng trống lớn\./g,
        "Hiện nay, giới học thuật Việt Nam vẫn còn thiếu các nghiên cứu định lượng đi sâu vào cơ chế tâm lý này, từ đó để lại một khoảng trống lớn."
    );
    
    content = content.replace(
        /Việc áp dụng máy móc mô hình ACSI của Mỹ vốn đề cao biến "Kỳ vọng khách hàng" không còn phù hợp với đặc thù mua lặp lại theo thói quen của FMCG\. Do đó, một nghiên cứu đột phá, cấu trúc lại tiền đề của sự hài lòng \(dựa trên thói quen thay vì kỳ vọng\) và liên kết nó với hiệu quả hành vi thực tế \(WTPP, eSOW\) thay vì lợi nhuận chung chung, là cực kỳ cấp thiết\./g,
        "Việc rập khuôn mô hình ACSI (vốn đề cao biến Kỳ vọng) không còn phù hợp với đặc thù mua lặp lại theo thói quen của ngành FMCG. Do đó, một nghiên cứu cấu trúc lại tiền đề của sự hài lòng và liên kết nó với hiệu quả hành vi thực tế là rất cần thiết."
    );

    content = content.replace(
        /Khoảng trống này vừa có ý nghĩa lý luận, bổ sung bằng chứng từ thị trường mới nổi \(emerging market\) vào dòng lý thuyết quốc tế, vừa có giá trị thực tiễn trực tiếp đối với các nhà quản trị trong kỷ nguyên số\./g,
        "Việc lấp đầy khoảng trống này không chỉ mang lại ý nghĩa lý luận sâu sắc, mà còn cung cấp giá trị thực tiễn trực tiếp đối với các nhà quản trị trong kỷ nguyên số."
    );

    content = content.replace(
        /Lý thuyết Hành vi Lập trình bổ khuyết cho hạn chế trên khi lập luận rằng đối với các sản phẩm FMCG có rủi ro thấp và mua thường xuyên, người tiêu dùng phát triển các "kịch bản" hành vi tự động để giảm thiểu nỗ lực nhận thức\./g,
        "Lý thuyết Hành vi Lập trình đã bổ khuyết cho hạn chế trên. Khare & Inman (2006) lập luận rằng đối với các sản phẩm FMCG, rủi ro mua sắm thấp và tần suất mua lặp lại cao. Do đó, người tiêu dùng thường hình thành các \"kịch bản\" hành vi tự động nhằm giảm thiểu nỗ lực nhận thức."
    );

    content = content.replace(
        /nỗ lực nối trực tiếp biến sơ cấp \(cảm nhận của một nhóm khách hàng\) với biến thứ cấp tài chính vĩ mô \(lợi nhuận của cả tập đoàn\) là quá khiên cưỡng/g,
        "việc cố gắng nối trực tiếp dữ liệu sơ cấp (cảm nhận của một nhóm khách hàng) với dữ liệu tài chính thứ cấp (lợi nhuận của cả tập đoàn) mang tính khiên cưỡng"
    );

    // 2. Dash rules (En-dash)
    content = content.replace(/CSI-CL-eWOM-CPO/g, 'CSI–CL–eWOM–CPO');
    content = content.replace(/CSI-CPO/g, 'CSI–CPO');
    content = content.replace(/CSI-eWOM/g, 'CSI–eWOM');
    content = content.replace(/CSI-CL/g, 'CSI–CL');
    content = content.replace(/CSI - eWOM - Customer Performance Outcomes/g, 'CSI–eWOM–CPO');
    content = content.replace(/CSI - eWOM/g, 'CSI–eWOM');
    content = content.replace(/CSI - CL/g, 'CSI–CL');

    // Number ranges with en-dash (hyphen surrounded by digits in specific patterns)
    const rangesToReplace = [
        '18-24', '25-34', '35-44', '45-54', '10-15', '15-20', '1-3', '20-38', 
        '53-66', '125-143', '99-120', '7-18', '115-130', '38-52', '84-96', 
        '217-245', '74-83', '361-384', '567-575', '1-18', '201-209', '114-121', 
        '879-903', '19-24', '25-30', '31-36'
    ];
    rangesToReplace.forEach(range => {
        const regex = new RegExp(`\\b${range}\\b`, 'g');
        content = content.replace(regex, range.replace('-', '–'));
    });
    
    // Hardcoded special numbers
    content = content.replace(/\b2\.500-3\.000\b/g, '2.500–3.000');
    content = content.replace(/\b1\.200-1\.300\b/g, '1.200–1.300');
    content = content.replace(/\b30-40%\b/g, '30–40%');
    content = content.replace(/\b70-75%\b/g, '70–75%');
    content = content.replace(/\b5-10%\b/g, '5–10%');
    content = content.replace(/\b20\.000-50\.000\b/g, '20.000–50.000');

    // 3. Scare Quotes cleanup
    content = content.replace(/biến "Kỳ vọng khách hàng"/g, 'biến Kỳ vọng khách hàng');
    content = content.replace(/biến "Kỳ vọng"/g, 'biến Kỳ vọng');
    content = content.replace(/biến "Thói quen tiêu dùng"/g, 'biến Thói quen tiêu dùng');
    content = content.replace(/biến "Thói quen"/g, 'biến Thói quen');
    content = content.replace(/"Sự hài lòng"/g, 'sự hài lòng');
    content = content.replace(/"Lòng trung thành"/g, 'lòng trung thành');
    content = content.replace(/biến "Ý định mua lại"/g, 'biến Ý định mua lại');
    content = content.replace(/"Ý định chi trả giá cao" \(WTPP\)/g, 'Ý định chi trả giá cao (WTPP)');
    content = content.replace(/"Tỷ trọng chi tiêu dự kiến" \(eSOW\)/g, 'Tỷ trọng chi tiêu dự kiến (eSOW)');
    content = content.replace(/"Tỷ trọng chi tiêu" \(SOW\)/g, 'Tỷ trọng chi tiêu (SOW)');

    // 4. Remove redundant English terms from Chapter 3 onwards
    const chapterNum = parseInt(file.substring(0, 2), 10);
    if (chapterNum >= 3) {
        content = content.replace(/Hiệu quả Hành vi Khách hàng \(Customer Performance Outcomes(?: - CPO)?\)/g, 'Hiệu quả Hành vi Khách hàng (CPO)');
        content = content.replace(/Ý định chi trả giá cao \(Willingness to Pay Premium - WTPP\)/g, 'Ý định chi trả giá cao (WTPP)');
        content = content.replace(/Ý định trả giá cao \(Willingness to Pay a Premium - WTPP\)/g, 'Ý định chi trả giá cao (WTPP)');
        content = content.replace(/Tỷ trọng chi tiêu dự kiến \(Expected Share of Wallet - eSOW\)/g, 'Tỷ trọng chi tiêu dự kiến (eSOW)');
        content = content.replace(/Tỷ trọng chi tiêu \(Share of Wallet\)/g, 'Tỷ trọng chi tiêu (eSOW)');
        content = content.replace(/lòng trung thành thương hiệu \(Customer Loyalty\)/g, 'lòng trung thành thương hiệu (CL)');
        content = content.replace(/truyền miệng điện tử \(eWOM\)/g, 'truyền miệng điện tử (eWOM)');
        content = content.replace(/Sự phụ thuộc vào Thuật toán Đề xuất \(Algorithmic Recommendation Dependence - ARD\)/g, 'Sự phụ thuộc vào Thuật toán Đề xuất (ARD)');
        content = content.replace(/Sự phụ thuộc vào Thuật toán Đề xuất \(Algorithmic Recommendation Dependence\)/g, 'Sự phụ thuộc vào Thuật toán Đề xuất (ARD)');
        content = content.replace(/truyền miệng điện tử \(Electronic Word-of-Mouth - eWOM\)/g, 'truyền miệng điện tử (eWOM)');
        
        // Remove PR words
        content = content.replace(/một cách tuyệt đối /g, "");
    }
    
    // General PR word removal
    content = content.replace(/cực kỳ vững chắc/g, "rất vững chắc");
    content = content.replace(/xuất sắc/g, "tốt");

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log("Done text replacements!");
