const fs = require('fs');
const path = require('path');
const express = require('express');
const HTMLToDOCX = require('html-to-docx');

const command = process.argv[2];
const slug = process.argv[3];
const title = process.argv[4];

const baseDir = __dirname;

function getProjectDirectories() {
    return fs.readdirSync(baseDir).filter(file => {
        const fullPath = path.join(baseDir, file);
        return fs.statSync(fullPath).isDirectory() && file.startsWith('Proposal_');
    });
}

function printHelp() {
    console.log(`
==================================================================
        🚀 DOCTORAL RESEARCH WORKSPACE COMPILATION SUITE
==================================================================
Sử dụng các lệnh sau để quản lý các đề tài nghiên cứu:

1. Liệt kê các đề tài hiện có:
   node manage.js list

2. Tạo đề tài nghiên cứu mới:
   node manage.js create <project_slug> "<project_title>"

3. Biên dịch đề tài (chạy 1 lần):
   node manage.js compile <project_slug>

4. Chế độ THEO DÕI (Live-Reload) & XUẤT DOCX CAO CẤP:
   node manage.js watch <project_slug>
==================================================================
`);
}

function compileProject(targetSlug, quiet = false) {
    const targetDirName = `Proposal_${targetSlug}`;
    const targetPath = path.join(baseDir, targetDirName);

    if (!fs.existsSync(targetPath)) {
        if (!quiet) console.error(`❌ Lỗi: Thư mục ${targetDirName} không tồn tại.`);
        return false;
    }

    if (!quiet) console.log(`\n⚡ Đang biên dịch đề tài: "${targetSlug}"...`);

    const allFiles = fs.readdirSync(targetPath).filter(f => f.endsWith('.md'));
    const chapters = [];
    const standalones = [];
    const others = [];

    let combinedContent = "";
    const sortedFiles = allFiles.slice().sort((a, b) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}));
    const monolithicFileName = `PhD_${targetSlug}.md`;

    sortedFiles.forEach(file => {
        if (file === monolithicFileName) return;
        const filePath = path.join(targetPath, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const chars = content.length;
        const pages = (chars / 1800).toFixed(1);
        
        const titleMatch = content.match(/^#+ (.*)/m);
        const fileTitle = titleMatch ? titleMatch[1].trim() : file;

        const fileData = { title: fileTitle, file, chars, pages, content };

        if (/^\d+/.test(file)) {
            chapters.push(fileData);
            combinedContent += content.trim() + "\n\n---\n\n";
        } else if (file.startsWith('PhD_')) {
            standalones.push(fileData);
        } else {
            others.push(fileData);
        }
    });

    if (combinedContent.endsWith("\n\n---\n\n")) {
        combinedContent = combinedContent.slice(0, -7);
    }

    const monolithicFilePath = path.join(targetPath, monolithicFileName);
    fs.writeFileSync(monolithicFilePath, combinedContent, 'utf8');
    if (!quiet) console.log(`   ✓ Đã tạo tệp đề cương toàn văn: ${monolithicFileName}`);

    if (combinedContent.trim().length > 0) {
        const standaloneData = {
            title: "ĐỀ CƯƠNG TOÀN VĂN (FULL PROPOSAL)",
            file: monolithicFileName,
            chars: combinedContent.length,
            pages: (combinedContent.length / 1800).toFixed(1),
            content: combinedContent
        };
        standalones.unshift(standaloneData);
    }

    const resultData = {
        chapters,
        standalones,
        others,
        lastUpdated: new Date().toLocaleString('vi-VN')
    };

    try {
        const templatePath = path.join(baseDir, 'dashboard_template.html');
        if (!fs.existsSync(templatePath)) {
            throw new Error('Không tìm thấy tệp dashboard_template.html ở thư mục gốc.');
        }

        const templateStr = fs.readFileSync(templatePath, 'utf8');
        const totalPages = chapters.reduce((sum, ch) => sum + parseFloat(ch.pages || 0), 0).toFixed(1);
        
        const safeDataStr = JSON.stringify(resultData).replace(/</g, '\\u003c').replace(/>/g, '\\u003e');
        let finalHtml = templateStr.replace('{{DATA}}', () => safeDataStr);
        finalHtml = finalHtml.replace('{{PROGRESS}}', () => totalPages);

        let ncsName = "Lê Phúc Hải"; // default
        try {
            const coverContent = fs.readFileSync(path.join(targetPath, '00_MucLuc.md'), 'utf8');
            const ncsMatch = coverContent.match(/\*\*Nghiên cứu sinh:\*\*\s*(.*)/i);
            if (ncsMatch) {
                ncsName = ncsMatch[1].replace(/\[|\]/g, '').trim();
            }
        } catch (e) {}

        finalHtml = finalHtml.replace('{{NCS_NAME}}', () => ncsName);

        let pageTitle = targetSlug;
        try {
            const firstTitle = chapters[0] ? chapters[0].title : targetSlug;
            pageTitle = firstTitle;
        } catch (e) {}

        finalHtml = finalHtml.replace(/<title>.*?<\/title>/, `<title>PhD Workspace - ${pageTitle}</title>`);

        const dashboardFileName = `Dashboard_${targetSlug}.html`;
        const dashboardFilePath = path.join(baseDir, dashboardFileName);
        fs.writeFileSync(dashboardFilePath, finalHtml, 'utf8');

        if (!quiet) console.log(`   ✓ Đã xây dựng Dashboard tương tác: ${dashboardFileName}`);
        return true;
    } catch (e) {
        if (!quiet) console.error('❌ Lỗi tạo Dashboard:', e.message);
        return false;
    }
}

if (!command) {
    printHelp();
    process.exit(0);
}

if (command === 'list') {
    const projects = getProjectDirectories();
    console.log(`\n📂 Tìm thấy ${projects.length} đề tài nghiên cứu trong hệ thống:\n`);
    
    projects.forEach((proj, idx) => {
        const projPath = path.join(baseDir, proj);
        const mdFiles = fs.readdirSync(projPath).filter(f => f.endsWith('.md') && /^\d+/.test(f));
        let totalChars = 0;
        mdFiles.forEach(f => {
            totalChars += fs.readFileSync(path.join(projPath, f), 'utf8').length;
        });
        const totalPages = (totalChars / 1800).toFixed(1);
        
        // Lấy tên đề tài từ 00_MucLuc.md hoặc file khác
        let projTitle = proj.replace('Proposal_', '');
        try {
            const coverContent = fs.readFileSync(path.join(projPath, '00_MucLuc.md'), 'utf8');
            const titleMatch = coverContent.match(/^#+ (.*)/m);
            if (titleMatch) projTitle = titleMatch[1].trim();
        } catch (e) {}

        console.log(`  [${idx + 1}] Thư mục: ${proj}`);
        console.log(`      Đề tài : ${projTitle}`);
        console.log(`      Tệp tin: ${mdFiles.length} chương chuyên mục`);
        console.log(`      Quy mô : ${totalChars.toLocaleString()} ký tự (~${totalPages} trang A4)`);
        console.log(`      Đầu ra : Dashboard_${proj.replace('Proposal_', '')}.html\n`);
    });
} 

else if (command === 'create') {
    if (!slug || !title) {
        console.error('❌ Lỗi: Thiếu tham số project_slug hoặc project_title.');
        console.log('Cú pháp: node manage.js create <project_slug> "<project_title>"');
        process.exit(1);
    }

    const targetDirName = `Proposal_${slug}`;
    const targetPath = path.join(baseDir, targetDirName);

    if (fs.existsSync(targetPath)) {
        console.error(`❌ Lỗi: Thư mục ${targetDirName} đã tồn tại trong hệ thống.`);
        process.exit(1);
    }

    console.log(`\n⚡ Đang tạo đề tài nghiên cứu mới: "${title}"...`);
    fs.mkdirSync(targetPath);

    // Copy Local Journal Requirements Template làm tài liệu quy định riêng biệt cho dự án
    try {
        const sourceGuide = path.join(baseDir, 'Local_Journal_Requirements_Template.md');
        if (fs.existsSync(sourceGuide)) {
            fs.copyFileSync(sourceGuide, path.join(targetPath, 'Local_Journal_Requirements.md'));
            console.log(`   ✓ Đã tạo file Yêu cầu riêng biệt kế thừa từ Hiến pháp chung (Local_Journal_Requirements.md)`);
        }
    } catch (e) {
        console.warn('   ⚠️ Không thể sao chép Local_Journal_Requirements_Template.md.');
    }

    // 00_MucLuc.md
    const mucLucContent = `# ĐỀ CƯƠNG NGHIÊN CỨU LUẬN ÁN TIẾN SĨ
## ĐỀ TÀI: ${title.toUpperCase()}

**Nghiên cứu sinh:** [Họ và tên Nghiên cứu sinh]
**Chuyên ngành:** Quản trị Kinh doanh / Tâm lý học Tổ chức
**Cơ quan đào tạo:** Trường Đại học Nha Trang / Đại học Đà Lạt

---

### MỤC LỤC CHI TIẾT
1. ĐẶT VẤN ĐỀ
2. TỔNG QUAN TÀI LIỆU VÀ CƠ SỞ LÝ THUYẾT
3. MỤC TIÊU VÀ NỘI DUNG NGHIÊN CỨU
4. TIẾN ĐỘ THỰC HIỆN DỰ KIẾN
5. Ý NGHĨA KHOA HỌC VÀ THỰC TIỄN
6. TÀI LIỆU THAM KHẢO
7. THÔNG TIN CÁN BỘ HƯỚNG DẪN DỰ KIẾN
`;

    // 01_DatVanDe.md (Upgraded premium scholarly prose version of user's concept!)
    const datVanDeContent = `# 1. ĐẶT VẤN ĐỀ
## 1.1. Lý do chọn đề tài

Trong quản trị tổ chức đương đại, các cuộc họp (meetings) được xem là công cụ cộng tác, phối hợp hành động và ra quyết định cốt lõi. Tuy nhiên, sự gia tăng quá mức về tần suất và thời lượng họp đang tạo ra hiện tượng "quá tải họp hành" (meeting overload), làm suy giảm đáng kể quỹ thời gian tập trung cá nhân, gia tăng trạng thái kiệt quệ nhận thức (cognitive exhaustion) và trực tiếp ảnh hưởng tiêu cực đến hiệu năng công việc tổng thể của người lao động. Các nghiên cứu thực chứng gần đây chỉ ra rằng cuộc họp đóng vai trò lưỡng cực: một mặt thúc đẩy sự gắn kết và luồng thông tin thông suốt, mặt khác lại là nguồn gây nhiễu loạn và suy kiệt tài nguyên nhận thức cá nhân nếu không được thiết kế và điều hành một cách tối ưu.

Đứng từ lăng kính tâm lý học tổ chức và Lý thuyết Bảo tồn Nguồn lực (Conservation of Resources Theory - COR), tác động của cuộc họp không đơn thuần nằm ở khía cạnh định lượng như tần suất vật lý ("số lượng cuộc họp"), mà sâu sắc hơn, nằm ở cơ chế chuyển hóa nhận thức từ các hoạt động cộng tác sang khả năng duy trì tập trung sâu (deep work), mức độ áp lực công việc cảm nhận (perceived workload pressure), năng lượng làm việc nội tại (work energy), và chất lượng đầu ra của các nhiệm vụ chuyên môn. Do đó, việc giải mã toàn diện các mối quan hệ nhân quả và các điều kiện biên của hiện tượng này có ý nghĩa khoa học và thực tiễn vô cùng cấp thiết, hỗ trợ đắc lực cho các doanh nghiệp trong việc tái thiết lập trạng thái cân bằng động giữa nhu cầu phối hợp cộng tác và hiệu suất làm việc độc lập của cá nhân.

## 1.2. Tính cấp thiết của đề tài
[Tác giả tiếp tục bổ sung bối cảnh thực tiễn của các doanh nghiệp trong kỷ nguyên chuyển đổi số và làm việc linh hoạt (hybrid work)...]
`;

    // 02_TongQuan.md
    const tongQuanContent = `# 2. TỔNG QUAN TÀI LIỆU VÀ CƠ SỞ LÝ THUYẾT
## 2.1. Lý thuyết Bảo tồn Nguồn lực (Conservation of Resources Theory - COR)
Lý thuyết COR (Hobfoll, 1989) được sử dụng làm nền tảng lý thuyết cốt lõi để giải thích cách thức các cuộc họp tiêu tốn tài nguyên cá nhân (thời gian, năng lượng nhận thức) và cách người lao động phản ứng để bảo vệ nguồn lực còn lại của mình.

## 2.2. Khái niệm và Hệ quả của Quá tải họp hành (Meeting Overload)
Tổng hợp các nghiên cứu về định nghĩa, đo lường và tác động của việc họp quá nhiều đến sức khỏe tinh thần và hiệu năng công tác.

## 2.3. Khoảng trống nghiên cứu (Research Gaps)
**Gap 1 - Thiếu vắng các nghiên cứu thực chứng tại các nền kinh tế mới nổi:** Phần lớn nghiên cứu được thực hiện tại các quốc gia phát triển phương Tây, nơi có văn hóa họp hành và cấu trúc tổ chức khác biệt với Đông Á.

**Gap 2 - Chưa làm rõ vai trò của các biến điều tiết cá nhân:** Chưa có nhiều nghiên cứu kiểm định xem các đặc tính tính cách cá nhân (như hướng nội/hướng ngoại) hay kỹ năng quản lý thời gian có thể làm giảm bớt tác động tiêu cực của họp hành hay không.
`;

    // 03_MucTieuNoiDung.md
    const mucTieuContent = `# 3. MỤC TIÊU VÀ NỘI DUNG NGHIÊN CỨU
## 3.1. Mục tiêu nghiên cứu
1.  **Hệ thống hóa cơ sở lý luận** về quá tải họp hành và cơ chế tác động của nó đối với tâm lý và hiệu suất người lao động.
2.  **Xây dựng và kiểm định mô hình** tác động của cuộc họp đến khả năng tập trung, áp lực cảm nhận và năng lượng làm việc.
3.  **Đánh giá điều kiện biên** (vai trò điều tiết của kỹ năng quản lý thời gian).
4.  **Đề xuất giải pháp thực tiễn** giúp tối ưu hóa cấu trúc cuộc họp tại doanh nghiệp.

## 3.2. Mô hình nghiên cứu dự kiến
\`\`\`mermaid
graph LR
    MH["Họp quá nhiều (Meeting Overload)"] -->|H1 -| TT["Khả năng tập trung (Deep Work)"]
    MH -->|H2 +| AL["Áp lực công việc (Workload Pressure)"]
    MH -->|H3 -| NL["Năng lượng làm việc (Work Energy)"]
    TT -->|H4 +| CQ["Chất lượng nhiệm vụ (Task Quality)"]
    AL -->|H5 -| CQ
    NL -->|H6 +| CQ
    style MH fill:#f8fafc,stroke:#334155
    style TT fill:#e0f2fe,stroke:#0284c7
    style AL fill:#fee2e2,stroke:#ef4444
    style NL fill:#dcfce7,stroke:#16a34a
    style CQ fill:#f8fafc,stroke:#334155
\`\`\`
*Hình 1. Mô hình lý thuyết đề xuất về tác động của họp hành.*
`;

    // 04_TienDo.md
    const tienDoContent = `# 4. TIẾN ĐỘ THỰC HIỆN DỰ KIẾN
Tiến độ thực hiện nghiên cứu dự kiến kéo dài 36 tháng, được trình bày chi tiết tại Bảng 1.

**Bảng 1: Tiến độ triển khai đề tài**
| Giai đoạn | Thời gian | Nội dung công việc chính | Đầu ra dự kiến |
|---|---|---|---|
| Giai đoạn 1 | Tháng 1-6 | Tổng quan tài liệu, viết đề cương chi tiết | Đề cương được thông qua |
| Giai đoạn 2 | Tháng 7-12 | Thiết kế bảng hỏi, khảo sát sơ bộ (Pilot Test) | Thang đo hoàn chỉnh |
| Giai đoạn 3 | Tháng 13-24 | Khảo sát chính thức, phân tích dữ liệu PLS-SEM | Bài báo khoa học quốc tế |
| Giai đoạn 4 | Tháng 25-36 | Viết bản thảo luận án, bảo vệ các cấp | Luận án Tiến sĩ hoàn chỉnh |
`;

    // 05_KetQuaDuKien.md
    const ketQuaContent = `# 5. Ý NGHĨA KHOA HỌC VÀ THỰC TIỄN
### 5.1. Đóng góp về mặt học thuật
**Bổ sung bằng chứng thực nghiệm cho Lý thuyết COR:** Nghiên cứu cung cấp dữ liệu thực tế chứng minh quá trình suy kiệt nguồn lực do hoạt động họp hành quá mức gây ra.

**Làm rõ vai trò trung gian của năng lượng làm việc:** Khẳng định tầm quan trọng của yếu tố tâm lý/năng lượng trong việc chuyển hóa áp lực thành kết quả công việc cụ thể.

### 5.2. Đóng góp về mặt thực tiễn
Cung cấp bộ khung chỉ dẫn (framework) giúp các doanh nghiệp thiết kế cuộc họp tinh gọn, nâng cao chất lượng hiệu suất làm việc cá nhân của nhân viên.
`;

    // 06_TaiLieuThamKhao.md
    const taiLieuContent = `# 6. TÀI LIỆU THAM KHẢO
1. Hobfoll, S. E. (1989). Conservation of resources: A new attempt at conceptualizing stress. *American Psychologist, 44*(3), 513–524.
2. Rogelberg, S. G., et al. (2006). Not another meeting: Are meetings making us irritable, tired, and unmotivated? *Group Dynamics: Theory, Research, and Practice, 10*(4), 269–277.
`;

    // 07_CanBoHuongDan.md
    const canBoContent = `# 7. THÔNG TIN CÁN BỘ HƯỚNG DẪN DỰ KIẾN
1. **Người hướng dẫn khoa học 1:** [Họ và tên, Học hàm, Học vị, Cơ quan công tác]
2. **Người hướng dẫn khoa học 2 (nếu có):** [Họ và tên, Học hàm, Học vị, Cơ quan công tác]
`;

    fs.writeFileSync(path.join(targetPath, '00_MucLuc.md'), mucLucContent, 'utf8');
    fs.writeFileSync(path.join(targetPath, '01_DatVanDe.md'), datVanDeContent, 'utf8');
    fs.writeFileSync(path.join(targetPath, '02_TongQuan.md'), tongQuanContent, 'utf8');
    fs.writeFileSync(path.join(targetPath, '03_MucTieuNoiDung.md'), mucTieuContent, 'utf8');
    fs.writeFileSync(path.join(targetPath, '04_TienDo.md'), tienDoContent, 'utf8');
    fs.writeFileSync(path.join(targetPath, '05_KetQuaDuKien.md'), ketQuaContent, 'utf8');
    fs.writeFileSync(path.join(targetPath, '06_TaiLieuThamKhao.md'), taiLieuContent, 'utf8');
    fs.writeFileSync(path.join(targetPath, '07_CanBoHuongDan.md'), canBoContent, 'utf8');

    console.log(`   ✓ Khởi tạo thành công 8 chương chuyên đề cốt lõi.`);
    console.log(`🎉 Đề tài "${slug}" đã được tạo thành công tại: Proposal_${slug}`);
    console.log(`👉 Hãy soạn thảo nội dung các chương và gõ lệnh sau để biên dịch:`);
    console.log(`   node manage.js compile ${slug}`);
} 

else if (command === 'compile') {
    if (!slug) {
        console.error('❌ Lỗi: Thiếu tham số project_slug.');
        console.log('Cú pháp: node manage.js compile <project_slug>');
        process.exit(1);
    }
    compileProject(slug);
    console.log(`\n🎉 QUÁ TRÌNH BIÊN DỊCH HOÀN TẤT THÀNH CÔNG!`);
    console.log(`==================================================================`);
    console.log(`🖥️  Đường dẫn mở   : file:///${path.join(baseDir, 'Dashboard_'+slug+'.html').replace(/\\/g, '/')}`);
    console.log(`==================================================================\n`);
} 

else if (command === 'watch') {
    if (!slug) {
        console.error('❌ Lỗi: Thiếu tham số project_slug.');
        console.log('Cú pháp: node manage.js watch <project_slug>');
        process.exit(1);
    }
    
    // Biên dịch lần đầu
    if (!compileProject(slug)) {
        process.exit(1);
    }

    const app = express();
    const port = 3000;

    app.use(express.static(baseDir));
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb', extended: true }));

    let clients = [];
    app.get('/events', (req, res) => {
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        clients.push(res);
        req.on('close', () => { clients = clients.filter(client => client !== res); });
    });

    app.post('/api/export-docx', async (req, res) => {
        try {
            const htmlContent = req.body.html;
            if (!htmlContent) return res.status(400).send('Thiếu nội dung HTML');
            
            console.log('⚡ Đang xử lý xuất file Word Native...');
            const fullHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="font-family:'Times New Roman', serif;">${htmlContent}</body></html>`;
            
            const docxBuffer = await HTMLToDOCX(fullHtml, null, {
                table: { row: { cantSplit: true } },
                footer: true,
                pageNumber: true
            });
            
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
            res.setHeader('Content-Disposition', `attachment; filename="Export_${slug}.docx"`);
            res.send(docxBuffer);
            console.log('   ✓ Đã trả về file DOCX Native cho trình duyệt.');
        } catch (error) {
            console.error('❌ Lỗi khi xuất DOCX:', error);
            res.status(500).send('Lỗi hệ thống khi tạo DOCX');
        }
    });

    let timeout = null;
    const targetDirName = `Proposal_${slug}`;
    const targetPath = path.join(baseDir, targetDirName);
    
    fs.watch(targetPath, (eventType, filename) => {
        if (filename && filename.endsWith('.md') && !filename.startsWith('PhD_')) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                console.log(`\n📝 Phát hiện thay đổi trong ${filename}, đang biên dịch lại...`);
                if (compileProject(slug, true)) {
                    clients.forEach(client => client.write('data: reload\n\n'));
                    console.log('   ✓ Đã yêu cầu trình duyệt làm mới (Live-Reload).');
                }
            }, 300);
        }
    });

    app.listen(port, () => {
        console.log(`\n🚀 Chế độ THEO DÕI (Live-Reload) đang chạy!`);
        console.log(`👉 Hãy mở trình duyệt tại: http://localhost:${port}`);
        console.log(`ℹ️ Mọi thay đổi trong Proposal_${slug} sẽ tự động làm mới trang.`);
        console.log(`ℹ️ Tính năng Xuất DOCX Native đã được kích hoạt thành công qua cổng này.`);
        console.log(`Bấm Ctrl+C để dừng.\n`);
    });
}

else {
    console.error(`❌ Lỗi: Lệnh "${command}" không hợp lệ.`);
    printHelp();
}
