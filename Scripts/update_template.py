import os

filepath = r"c:\ncsDL\dashboard_template.html"

new_html = """<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>PhD Research Dashboard - NCS Lê Phúc Hải</title>
    <script src="https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js"></script>
    <script>
        mermaid.initialize({
            startOnLoad: false,
            securityLevel: 'loose',
            theme: 'base',
            themeVariables: { primaryColor: '#f8fafc', primaryTextColor: '#1e293b', primaryBorderColor: '#334155', lineColor: '#334155', secondaryColor: '#dcfce7', tertiaryColor: '#f1f5f9' }
        });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        :root { --primary: #1e293b; --secondary: #10b981; --bg: #f8fafc; }
        body { font-family: 'Inter', sans-serif; margin: 0; display: flex; height: 100vh; background: var(--bg); }
        .sidebar { width: 300px; background: var(--primary); color: #fff; padding: 1.5rem; display: flex; flex-direction: column; flex-shrink: 0; box-shadow: 2px 0 10px rgba(0,0,0,0.1); z-index: 10; }
        .nav-item { padding: 12px; margin: 5px 0; background: rgba(255,255,255,0.05); border-radius: 6px; cursor: pointer; font-size: 13px; transition: 0.2s; border-left: 3px solid transparent; }
        .nav-item:hover { background: rgba(255,255,255,0.1); border-left-color: var(--secondary); }
        .nav-item.active { background: var(--secondary); font-weight: 600; }
        .main { flex-grow: 1; padding: 2rem; overflow-y: auto; }
        .card { background: #fff; padding: 3rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); position: relative; min-height: 80vh; }
        #title { color: var(--primary); border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 0; }
        
        /* Chức năng Thống kê */
        #doc-stats { font-size: 12.5px; color: #475569; margin-bottom: 25px; padding: 15px; background: #f8fafc; border-radius: 8px; border-left: 4px solid var(--secondary); display: flex; gap: 25px; flex-wrap: wrap; }
        .stat-item span { font-weight: 700; color: var(--primary); font-size: 15px; margin-left: 5px;}
        
        /* Báo lỗi Cú pháp */
        .error-box { color: #b91c1c; border: 1px solid #fca5a5; padding: 15px; background: #fef2f2; border-radius: 8px; margin: 15px 0; }
        
        #content { font-family: 'Times New Roman', serif; font-size: 14pt; line-height: 1.7; color: #334155; text-align: justify; }
        #content h1, #content h2, #content h3, #content h4, #content h5, #content h6 { font-weight: bold; color: #000; margin-top: 18pt; margin-bottom: 6pt; page-break-after: avoid; }
        #content h1 { font-size: 16pt; text-transform: uppercase; text-align: center; }
        #content h2 { font-size: 14pt; text-transform: uppercase; }
        #content h3, #content h4, #content h5 { font-size: 14pt; }
        #content h6 { font-size: 14pt; font-style: italic; font-weight: normal; }
        #content table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
        #content th, #content td { border: 1px solid #cbd5e1; padding: 10px; font-size: 13pt; }
        #content th { background-color: #f1f5f9; }
        #content p { margin-bottom: 12px; }
        .mermaid-box { margin: 30px 0; background: #fff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 10px; display: flex; justify-content: center; overflow-x: auto; }
        
        .btn-group { position: absolute; top: 2rem; right: 2rem; display: flex; gap: 10px; }
        button { padding: 10px 15px; border-radius: 6px; border: none; cursor: pointer; font-weight: 600; font-size: 0.85rem; transition: 0.2s; color: white; }
        button:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        
        .export-title { text-align: center; font-size: 20pt; font-weight: bold; margin-bottom: 40px; }
        .export-chapter { margin-bottom: 50px; }
        .page-break { page-break-after: always; }
        
        /* Fix lỗi PDF / Print */
        @media print { 
            @page { size: A4; margin-top: 2.5cm; margin-bottom: 2.5cm; margin-left: 3.5cm; margin-right: 2cm; }
            body * { visibility: hidden; }
            #print-container, #print-container * { visibility: visible; }
            #print-container { position: absolute; left: 0; top: 0; width: 100%; background: white; padding: 0; }
            #print-container h1, #print-container h2 { text-transform: uppercase; }
            #print-container .mermaid-box, #print-container .mermaid { page-break-inside: avoid; border: none; text-align: center; }
            #print-container img { max-width: 100% !important; height: auto !important; page-break-inside: avoid; display: block; margin: 0 auto; }
            #print-container { font-family: 'Times New Roman', serif; font-size: 14pt; color: #000; line-height: 1.5; text-align: justify; }
            #print-container p, #print-container li { margin-top: 0pt; margin-bottom: 0pt; text-indent: 1cm; line-height: 1.5; }
            #print-container table { page-break-inside: avoid; border-collapse: collapse; width: 100%; }
            #print-container th, #print-container td { border: 1px solid black; padding: 8px; }
        }
    </style>
</head>
<body>
    <div class="sidebar">
        <h2 style="color:var(--secondary);margin-bottom:5px">PhD PORTAL</h2>
        <p style="font-size:12px; opacity:0.7; margin-top:0">NCS: {{NCS_NAME}}<br>Tiến độ: {{PROGRESS}} Trang<br><span id="update-time" style="font-style:italic; font-size:10px"></span></p>
        <div id="nav" style="overflow-y:auto; flex-grow:1"></div>
        <div style="font-size:10px; opacity:0.5; border-top:1px solid #444; padding-top:10px">Powered by Antigravity AI</div>
    </div>
    <div class="main">
        <div class="card">
            <div class="btn-group">
                <button onclick="exportWord(false)" style="background:#6366f1">Xuất Word (Chương này)</button>
                <button onclick="exportWord(true)" style="background:#2563eb">Xuất Word (Toàn văn)</button>
                <button onclick="exportPDF()" style="background:#dc2626">Xuất PDF</button>
            </div>
            <h2 id="title">Loading...</h2>
            
            <div id="doc-stats">
                <div class="stat-item">Số từ: <span id="stat-words">0</span></div>
                <div class="stat-item">Số trang (ước tính APA): <span id="stat-pages">0</span></div>
                <div class="stat-item">Hình ảnh/Sơ đồ: <span id="stat-images">0</span></div>
            </div>

            <div id="content">Đang chuẩn bị nội dung...</div>
        </div>
    </div>
    <script>
        const data = {{DATA}};
        window.onerror = function(msg, url, line, col, error) { console.error(error); return false; };

        const nav = document.getElementById('nav');
        const content = document.getElementById('content');
        const title = document.getElementById('title');

        let currentSelected = null;

        function show(item, type) {
            currentSelected = { item, type };
            document.querySelectorAll('.nav-item').forEach(e => e.classList.remove('active'));
            const id = type + '-' + (item.file || item.title).replace(/\s/g, '_');
            const navEl = document.getElementById(id);
            if (navEl) navEl.classList.add('active');
            
            title.innerText = item.title;
            
            let mdContent = item.content || '';
            let mermaidBlocks = [];
            let mathBlocks = [];
            
            mdContent = mdContent.replace(/```mermaid([\s\S]*?)```/g, function(match, code) {
                mermaidBlocks.push(code.trim());
                return `%%MERMAID_BLOCK_${mermaidBlocks.length - 1}%%`;
            });

            mdContent = mdContent.replace(/\$\$([\s\S]*?)\$\$/g, function(match) { mathBlocks.push(match); return `%%MATH_BLOCK_${mathBlocks.length - 1}%%`; });
            mdContent = mdContent.replace(/\$([^\$]+?)\$/g, function(match) { mathBlocks.push(match); return `%%MATH_BLOCK_${mathBlocks.length - 1}%%`; });
            
            let htmlContent = marked.parse(mdContent);
            
            mermaidBlocks.forEach((code, idx) => {
                htmlContent = htmlContent.replace(`%%MERMAID_BLOCK_${idx}%%`, '<div class="mermaid-box"><div class="mermaid">' + code + '</div></div>');
            });
            mathBlocks.forEach((code, idx) => { htmlContent = htmlContent.replace(`%%MATH_BLOCK_${idx}%%`, code); });
            
            content.innerHTML = htmlContent;
            document.querySelector('.main').scrollTop = 0;
            
            // Tính toán dung lượng
            setTimeout(() => {
                let textContent = content.innerText || content.textContent;
                let wordCount = textContent.trim().split(/\s+/).length;
                let pages = (wordCount / 350).toFixed(1);
                let images = content.querySelectorAll('img, .mermaid-box').length;
                document.getElementById('stat-words').innerText = wordCount;
                document.getElementById('stat-pages').innerText = pages;
                document.getElementById('stat-images').innerText = images;
            }, 100);

            setTimeout(async () => {
                try {
                    renderMathInElement(content, { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}], throwOnError: false });
                    await mermaid.run({ querySelector: '.mermaid' });
                } catch(e) { 
                    console.error("Rendering error:", e);
                    // Báo lỗi Cú pháp thông minh
                    document.querySelectorAll('.mermaid').forEach(el => {
                        if(el.innerHTML.includes('Syntax error') || !el.querySelector('svg')) {
                            el.innerHTML = `<div class="error-box">
                                <strong>⚠️ Lỗi Cú pháp Sơ đồ (Mermaid)</strong><br>
                                Sơ đồ này có lỗi logic hoặc sai dấu ngoặc trong file Markdown.<br>
                                <i>Vui lòng nhấn F12 để xem chi tiết lỗi trong Console.</i>
                            </div>`;
                        }
                    });
                }
            }, 100);
        }

        function addHeader(text) {
            const h = document.createElement('div');
            h.style = "font-size: 11px; color: var(--secondary); font-weight: bold; margin: 20px 0 10px 5px; letter-spacing: 1px; opacity: 0.8";
            h.innerText = text;
            nav.appendChild(h);
        }

        function addItem(item, type) {
            const div = document.createElement('div');
            div.id = type + '-' + (item.file || item.title).replace(/\s/g, '_');
            div.className = 'nav-item';
            div.innerText = item.title + (item.file ? ` [${item.file}]` : '');
            div.onclick = () => show(item, type);
            nav.appendChild(div);
        }

        if (data.chapters) { addHeader("CÁC CHƯƠNG CHI TIẾT"); data.chapters.forEach(ch => addItem(ch, 'ch')); }
        if (data.standalones) { addHeader("CÁC BẢN ĐỀ CƯƠNG ĐẦY ĐỦ"); data.standalones.forEach(st => addItem(st, 'st')); }
        if (data.others) { addHeader("TÀI LIỆU HƯỚNG DẪN & KHÁC"); data.others.forEach(ot => addItem(ot, 'ot')); }
        if (data.lastUpdated) { document.getElementById('update-time').innerText = "Cập nhật: " + data.lastUpdated; }
        
        mermaid.initialize({startOnLoad: false, theme: 'neutral'});
        
        if (data.chapters && data.chapters.length > 0) show(data.chapters[0], 'ch');
        else if (data.standalones && data.standalones.length > 0) show(data.standalones[0], 'st');

        function getExportHTML(isFull) {
            let html = '';
            let targetItems = [];
            let mainTitle = "ĐỀ CƯƠNG TIẾN SĨ - LÊ PHÚC HẢI";

            if (!isFull && currentSelected) {
                targetItems = [currentSelected.item];
                mainTitle = currentSelected.item.title;
            } else {
                targetItems = data.chapters || [];
                if(targetItems.length === 0) targetItems = data.standalones || [];
            }

            html += `<h1 class="export-title">${mainTitle}</h1>`;
            
            targetItems.forEach(ch => {
                let mdContent = ch.content || '';
                let mermaidBlocks = [];
                let mathBlocks = [];
                
                mdContent = mdContent.replace(/```mermaid([\s\S]*?)```/g, function(match, code) {
                    mermaidBlocks.push(code.trim()); return `%%MERMAID_BLOCK_${mermaidBlocks.length - 1}%%`;
                });
                
                mdContent = mdContent.replace(/\$\$([\s\S]*?)\$\$/g, function(match) { mathBlocks.push(match); return `%%MATH_BLOCK_${mathBlocks.length - 1}%%`; });
                mdContent = mdContent.replace(/\$([^\$]+?)\$/g, function(match) { mathBlocks.push(match); return `%%MATH_BLOCK_${mathBlocks.length - 1}%%`; });
                
                let parsedContent = marked.parse(mdContent);
                
                mermaidBlocks.forEach((code, idx) => { parsedContent = parsedContent.replace(`%%MERMAID_BLOCK_${idx}%%`, '<div class="mermaid">' + code + '</div>'); });
                mathBlocks.forEach((code, idx) => { parsedContent = parsedContent.replace(`%%MATH_BLOCK_${idx}%%`, code); });

                html += `<div class="export-chapter">${parsedContent}</div>`;
                if(isFull) html += '<div class="page-break"></div>';
            });
            return html;
        }

        async function processExportContainer(container) {
            try {
                if (typeof renderMathInElement !== 'undefined') {
                    renderMathInElement(container, { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}], throwOnError: false, output: 'mathml' });
                }
            } catch (e) { console.warn(e); }
            
            try { await mermaid.run({ nodes: container.querySelectorAll('.mermaid') }); } catch (e) { console.warn(e); }
            
            await new Promise(r => setTimeout(r, 1000));

            // Convert SVG to Base64 Image
            const svgs = container.querySelectorAll('.mermaid svg');
            for (let svg of svgs) {
                try {
                    const svgData = new XMLSerializer().serializeToString(svg);
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const img = new Image();
                    
                    let w = svg.viewBox && svg.viewBox.baseVal ? svg.viewBox.baseVal.width : svg.getBoundingClientRect().width || 800;
                    let h = svg.viewBox && svg.viewBox.baseVal ? svg.viewBox.baseVal.height : svg.getBoundingClientRect().height || 400;
                    if(w===0) w=800; if(h===0) h=400;
                    
                    // High resolution canvas for sharp images
                    canvas.width = w * 2; canvas.height = h * 2;

                    await new Promise((resolve) => {
                        img.onload = () => {
                            ctx.fillStyle = "white"; ctx.fillRect(0, 0, canvas.width, canvas.height);
                            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                            const newImg = document.createElement('img');
                            newImg.setAttribute('src', canvas.toDataURL("image/png"));
                            newImg.style.width = "100%";
                            newImg.style.maxWidth = w + "px";
                            newImg.style.height = "auto";
                            newImg.style.display = "block";
                            newImg.style.margin = "0 auto";
                            svg.parentNode.replaceChild(newImg, svg);
                            resolve();
                        };
                        img.onerror = () => resolve();
                        img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
                    });
                } catch (err) { console.warn("SVG error", err); }
            }

            container.querySelectorAll('table').forEach(tbl => {
                tbl.setAttribute('border', '1');
                tbl.setAttribute('cellspacing', '0');
                tbl.setAttribute('cellpadding', '8');
                tbl.style.borderCollapse = 'collapse';
                tbl.style.width = '100%';
                tbl.style.marginBottom = '20px';
                tbl.querySelectorAll('th, td').forEach(c => { c.style.border = '1px solid black'; c.style.padding = '8px'; });
            });
        }

        async function exportWord(isFull) {
            const btn = event.target;
            const originalText = btn.innerText;
            btn.innerText = "Đang xử lý...";

            const tempDiv = document.createElement('div');
            tempDiv.id = "word-export-container";
            tempDiv.innerHTML = getExportHTML(isFull);
            document.body.appendChild(tempDiv);
            
            tempDiv.style.position = 'absolute';
            tempDiv.style.left = '-10000px';
            tempDiv.style.width = '800px';

            try {
                await processExportContainer(tempDiv);

                const wordStyles = `
                    <style>
                        @page WordSection1 { size: A4; margin: 2.5cm 2.0cm 2.5cm 3.5cm; mso-header-margin: 1.25cm; mso-footer-margin: 1.25cm; mso-paper-source: 0; }
                        div.WordSection1 { page: WordSection1; }
                        table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }
                        th, td { border: 1px solid black; padding: 8px; text-align: left; }
                        th { background-color: #f2f2f2; }
                        h1, h2, h3, h4 { font-family: 'Times New Roman', serif; color: black; margin-top: 12pt; margin-bottom: 6pt; }
                        p, li { font-family: 'Times New Roman', serif; font-size: 14pt; line-height: 1.5; text-align: justify; margin-top: 0pt; margin-bottom: 0pt; text-indent: 1cm; }
                        img { max-width: 100%; height: auto; display: block; margin: 0 auto; }
                        .export-title { text-align: center; font-size: 16pt; font-weight: bold; margin-bottom: 30px; text-transform: uppercase; }
                    </style>
                `;

                const htmlContent = `\\ufeff<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
                <head><meta charset='utf-8'><title>Export Word</title>${wordStyles}</head>
                <body style="font-family:'Times New Roman'"><div class="WordSection1">${tempDiv.innerHTML}</div></body></html>`;

                const blob = new Blob([htmlContent], { type: 'application/msword;charset=utf-8' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                
                let exportTitle = isFull ? "ToanVan" : (currentSelected ? currentSelected.item.title : "Doc");
                let safeTitle = exportTitle.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30);
                link.download = `DeCuong_${safeTitle}.doc`;
                link.click();
            } catch (e) { 
                alert("Lỗi xuất Word: " + e.message); 
            } finally {
                document.body.removeChild(tempDiv);
                btn.innerText = originalText;
            }
        }

        async function exportPDF() {
            const btn = event.target;
            const originalText = btn.innerText;
            btn.innerText = "Chuẩn bị PDF...";

            const tempDiv = document.createElement('div');
            tempDiv.id = "print-container";
            // Luôn in toàn văn khi xuất PDF cho an toàn, hoặc có thể làm Selective PDF sau.
            tempDiv.innerHTML = getExportHTML(true); 
            document.body.appendChild(tempDiv);
            
            tempDiv.style.width = '210mm'; 
            tempDiv.style.position = 'absolute';
            tempDiv.style.left = '-10000px';

            try {
                // Xử lý tất cả Mermaid thành ảnh Base64 chống lỗi mất khúc/tràn viền khi in
                await processExportContainer(tempDiv);
                
                tempDiv.style.left = '0';
                window.print();
                
            } catch (e) {
                console.error(e);
                alert("Lỗi xuất PDF: " + e.message);
            } finally {
                document.body.removeChild(tempDiv);
                btn.innerText = originalText;
            }
        }
    </script>
</body>
</html>"""

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_html)

print("Dashboard template updated successfully.")
