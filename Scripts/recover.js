const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\c97451ee-7177-4b80-a7c7-a76c14ff455e\\.system_generated\\logs\\overview.txt';
const lines = fs.readFileSync(logPath, 'utf8').split('\n');

let bestContent = "";

for (let line of lines) {
    if (!line.trim()) continue;
    try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
            for (let tc of obj.tool_calls) {
                if (tc.name === 'write_to_file' || tc.name === 'replace_file_content' || tc.name === 'multi_replace_file_content') {
                    const args = tc.args || {};
                    const target = args.TargetFile || args.AbsolutePath || "";
                    if (target.includes('Writing_Style_Guide.md')) {
                        if (args.CodeContent) bestContent = args.CodeContent;
                        if (args.ReplacementContent) bestContent = args.ReplacementContent;
                    }
                }
            }
        }
        if (obj.type === 'TOOL_RESPONSE' && obj.content && obj.content.includes('Writing_Style_Guide.md')) {
            // view_file output
            if (obj.content.includes('Total Bytes: 13') || obj.content.length > 5000) {
               if (obj.content.includes('dấu (.)')) bestContent = obj.content;
            }
        }
    } catch (e) {}
}

if (bestContent) {
    fs.writeFileSync('c:\\ncsDL\\recovered_guide.txt', bestContent);
    console.log('Successfully recovered guide of length ' + bestContent.length);
} else {
    // try brute force regex for anything looking like the markdown
    const fullText = fs.readFileSync(logPath, 'utf8');
    const match = fullText.match(/(?:# Hướng Dẫn|# HƯỚNG DẪN)[\s\S]*?(?=\\n",|"}$)/);
    if (match) {
        fs.writeFileSync('c:\\ncsDL\\recovered_guide.txt', match[0]);
        console.log('Brute force recovered length: ' + match[0].length);
    } else {
        console.log('Failed to find');
    }
}
