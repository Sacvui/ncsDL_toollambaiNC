const fs = require('fs');
const path = require('path');

const historyDir = 'C:\\Users\\ADMIN\\AppData\\Roaming\\Code\\User\\History';
let found = false;
let largestContent = "";

function searchHistory(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (let f of files) {
        const full = path.join(dir, f);
        if (fs.statSync(full).isDirectory()) {
            searchHistory(full);
        } else {
            try {
                const content = fs.readFileSync(full, 'utf8');
                if (content.includes('# Hướng Dẫn Văn Phong Ký Thuật Học Thuật') || content.includes('Writing Style Guide')) {
                    if (content.length > largestContent.length) {
                        largestContent = content;
                        console.log('Found larger version in history:', full, 'Size:', content.length);
                    }
                }
            } catch (e) {}
        }
    }
}

console.log("Searching VS Code History...");
searchHistory(historyDir);

if (largestContent.length > 5000) {
    fs.writeFileSync('c:\\ncsDL\\Global_Writing_Style_Guide.md', largestContent);
    console.log('Successfully recovered the largest version!');
} else {
    console.log('Could not find the 13KB version. Max found size: ' + largestContent.length);
}
