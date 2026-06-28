const fs = require('fs');
const path = require('path');
const dir = 'c:\\ncsDL\\Proposal_HAILP_TDT';
const files = fs.readdirSync(dir).filter(f => f.match(/^\d{2}_.*\.md$/));
files.forEach(f => {
    const fp = path.join(dir, f);
    let c = fs.readFileSync(fp, 'utf8');
    let changed = false;
    
    // Replace: **VAR — Tên biến** -> **VAR: Tên biến**
    const varRegex = /\*\*([A-Za-z0-9]+)\s+—\s+(.*?)\*\*/g;
    if (varRegex.test(c)) {
        c = c.replace(varRegex, '**$1: $2**');
        changed = true;
    }

    // Replace all other ` — ` with ` - `
    if (c.includes(' — ')) {
        c = c.replace(/ — /g, ' - ');
        changed = true;
    }

    // Replace em-dash without spaces `—` with hyphen `-`
    if (c.includes('—')) {
        c = c.replace(/—/g, '-');
        changed = true;
    }

    // Remove excessive bolding in sentences (keep if it's H1, Q1, etc)
    // Only target bolding that spans more than 5 words that isn't a heading
    const boldSentenceRegex = /(?<!#\s)\*\*([^\*]{30,})\*\*/g;
    if (boldSentenceRegex.test(c)) {
        // We will carefully replace it only if it looks like a full sentence being bolded unnecessarily
        // Wait, it's safer to just fix the em-dashes for now to not break intentional bolding
    }

    if (changed) {
        fs.writeFileSync(fp, c, 'utf8');
        console.log('Updated:', f);
    }
});
