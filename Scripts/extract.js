const officeparser = require('officeparser');
const pdf = require('pdf-parse');
const fs = require('fs');
const path = require('path');

function flattenContent(obj) {
    if (!obj) return '';
    let text = '';
    
    if (typeof obj.text === 'string' && obj.text) {
        text += obj.text;
    }

    const children = obj.content || obj.children;
    if (children && Array.isArray(children)) {
        children.forEach(item => {
            text += flattenContent(item);
        });
    }

    if (obj.type && (obj.type === 'paragraph' || obj.type === 'list' || obj.type === 'heading' || obj.type === 'docx') && !text.endsWith('\n')) {
        text += '\n';
    }

    return text;
}

async function extractText(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    
    try {
        if (ext === '.pdf') {
            const dataBuffer = fs.readFileSync(filePath);
            const data = await pdf(dataBuffer);
            return data.text;
        } else if (ext === '.docx' || ext === '.doc') {
            let data = await officeparser.parseOffice(filePath);
            if (typeof data === 'object' && data !== null) {
                return flattenContent(data);
            }
            return data;
        }
    } catch (err) {
        throw new Error(`Extraction failed for ${filePath}: ${err.message}`);
    }
    return null;
}

async function main() {
    const files = fs.readdirSync(__dirname);
    const targetFiles = files.filter(f => {
        const ext = path.extname(f).toLowerCase();
        return (ext === '.pdf' || ext === '.docx') && !f.includes('.txt');
    });

    console.log(`Found ${targetFiles.length} files to process.`);

    for (const file of targetFiles) {
        const fullPath = path.join(__dirname, file);
        const outputPath = fullPath + '.txt';

        console.log(`\n--- Processing: ${file} ---`);
        try {
            const text = await extractText(fullPath);
            if (text && text.trim().length > 0) {
                fs.writeFileSync(outputPath, text, 'utf8');
                console.log(`✅ Success: Extracted ${text.length} characters to ${path.basename(outputPath)}`);
            } else {
                console.warn(`⚠️ Warning: No text extracted from ${file}`);
            }
        } catch (err) {
            console.error(`❌ Error: ${err.message}`);
        }
    }
    console.log('\n--- Finished processing all files ---');
}

main();
