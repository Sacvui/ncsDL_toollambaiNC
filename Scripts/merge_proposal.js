const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'Proposal_LePhucHai');
const dataJsonPath = path.join(__dirname, 'dashboard_data.json');

function processFiles() {
    const allFiles = fs.readdirSync(inputDir).filter(f => f.endsWith('.md'));
    
    let chapters = [];
    let standalones = [];
    let others = [];

    allFiles.forEach(file => {
        const filePath = path.join(inputDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const chars = content.length;
        const pages = (chars / 1800).toFixed(1);
        
        const titleMatch = content.match(/^#+ (.*)/m);
        const title = titleMatch ? titleMatch[1].trim() : file;

        const data = { title, file, chars, pages, content };

        if (/^\d+/.test(file)) {
            chapters.push(data);
        } else if (file === 'PhD_NhaTrang_HAILP.md' || file === 'PhD_DaLat_HAILP.md' || file === 'PhD_NhaTrang_CuongThinh.md') {
            standalones.push(data);
        } else {
            others.push(data);
            console.log(`- Identified extra document: ${file} (${title})`);
        }
    });

    // Sắp xếp
    chapters.sort((a, b) => a.file.localeCompare(b.file, undefined, {numeric: true, sensitivity: 'base'}));
    standalones.sort((a, b) => a.title.localeCompare(b.title));
    others.sort((a, b) => a.title.localeCompare(b.title));

    const result = { 
        chapters, 
        standalones, 
        others,
        lastUpdated: new Date().toLocaleString('vi-VN')
    };
    fs.writeFileSync(dataJsonPath, JSON.stringify(result, null, 2), 'utf8');
    
    console.log(`Updated dashboard_data.json: ${chapters.length} chapters, ${standalones.length} standalones, and ${others.length} others found.`);
}

processFiles();
