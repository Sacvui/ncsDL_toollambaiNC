const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\ncsDL';
const scriptsDir = path.join(baseDir, 'Scripts');
const thinhDir = path.join(baseDir, 'Proposal_CuongThinh');
const haiDir = path.join(baseDir, 'Proposal_LePhucHai');

// Create folders
if (!fs.existsSync(scriptsDir)) fs.mkdirSync(scriptsDir);
if (!fs.existsSync(thinhDir)) fs.mkdirSync(thinhDir);

// 1. Move root scripts to Scripts/
const rootFiles = fs.readdirSync(baseDir);
rootFiles.forEach(file => {
    const fullPath = path.join(baseDir, file);
    if (fs.statSync(fullPath).isFile()) {
        const ext = path.extname(file).toLowerCase();
        if ((ext === '.js' || ext === '.py') && file !== 'manage.js' && file !== 'clean.js') {
            fs.renameSync(fullPath, path.join(scriptsDir, file));
            console.log(`Moved script: ${file}`);
        }
    }
});

// 2. Clean LePhucHai folder
if (fs.existsSync(haiDir)) {
    const haiFiles = fs.readdirSync(haiDir);
    haiFiles.forEach(file => {
        const fullPath = path.join(haiDir, file);
        if (fs.statSync(fullPath).isFile()) {
            const ext = path.extname(file).toLowerCase();
            // Move py scripts
            if (ext === '.py') {
                fs.renameSync(fullPath, path.join(scriptsDir, file));
                console.log(`Moved py from Hai: ${file}`);
            }
            // Move Thinh proposals
            if (file.toLowerCase().includes('thinh')) {
                fs.renameSync(fullPath, path.join(thinhDir, file));
                console.log(`Moved Thinh file: ${file}`);
            }
        }
    });
}

// 3. Optional: Move old PhD_Dashboard.html and other junk HTML if needed
// We'll leave them for now but we will recompile cleanly.
console.log('Cleanup completed successfully!');
