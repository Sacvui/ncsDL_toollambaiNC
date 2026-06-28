const fs = require('fs');
const path = require('path');

const dir = 'c:\\ncsDL\\Proposal_HAILP_TDT';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f.match(/^\d{2}_/));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Remove redundant English in parentheses
    content = content.replace(/ \(scripts\)/g, '');
    content = content.replace(/ \(Customer Expectations - CE\)/g, ' (CE)');
    content = content.replace(/ \(Habit - HB\)/g, ' (HB)');
    content = content.replace(/ \(Online vs Offline\)/g, ' (trực tuyến và ngoại tuyến)');
    content = content.replace(/ \(Share of Wallet - SOW\)/g, ' (SOW)');
    content = content.replace(/ \(Technology Acceptance Model\)/g, '');
    content = content.replace(/ \(flash sale\)/g, '');
    content = content.replace(/ \(pricing power\)/g, '');
    content = content.replace(/ \(micro-level\)/g, '');
    content = content.replace(/ \(Constant-sum\)/g, '');
    content = content.replace(/ \(Pilot Study, n = 80\)/g, ' (n = 80)');
    content = content.replace(/ \(reliability, validity\)/g, '');
    content = content.replace(/ \(mediation\)/g, '');
    content = content.replace(/ \(moderation\)/g, '');
    content = content.replace(/ \(ratio continuous variable\)/g, '');
    content = content.replace(/ \(cognitive load\)/g, '');
    content = content.replace(/ \(Price Sensitivity\)/g, ' (PS)');
    content = content.replace(/ \(Premium\)/g, '');
    
    // Some that might have a trailing colon or comma issue if they were removed
    // Actually, regex / \(word\)/g handles the leading space nicely.
    
    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log("Applied final English parenthesis removal!");
