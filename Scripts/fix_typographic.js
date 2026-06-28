const fs = require('fs');
const file = process.argv[2] || 'Proposal_HAILP_TDT/PhD_TDT_HAILP.md';
let content = fs.readFileSync(file, 'utf8');

const orig = content;

// Count before
const countBefore = (str, pattern) => (str.match(pattern) || []).length;
console.log('=== BEFORE ===');
console.log('Em dash (—):', countBefore(content, /—/g));
console.log('Smart quote open (\u201c):', countBefore(content, /\u201c/g));
console.log('Smart quote close (\u201d):', countBefore(content, /\u201d/g));
console.log('Ellipsis (\u2026):', countBefore(content, /\u2026/g));
console.log('En dash (\u2013):', countBefore(content, /\u2013/g));

// --- FIXES ---

// 1. Smart/curly double quotes => straight quotes "
content = content.replace(/\u201c/g, '"');
content = content.replace(/\u201d/g, '"');

// 2. Smart/curly single quotes => straight apostrophe '
content = content.replace(/\u2018/g, "'");
content = content.replace(/\u2019/g, "'");

// 3. Ellipsis character => three dots
content = content.replace(/\u2026/g, '...');

// 4. En dash (–) => hyphen or comma depending on context
content = content.replace(/\u2013/g, '-');

// 5. Em dash (—) replacements — context-aware
// Pattern A: "word — word" in middle of sentence (parenthetical) => use comma or colon
// Pattern B: "X — ba đặc điểm" type => replace with ": "
// Pattern C: "— nơi/vốn/không phải..." (relative clause) => use dấu phẩy

// Replace em dash used as colon/explanation: "X — Y" where Y explains X
// "X — ba đặc điểm" type
content = content.replace(/\s—\s(ba |hai |một |bốn |năm |sáu |bảy |tám |chín |mười )/g, ': $1');

// "— nơi/vốn/không phải" relative clause style => comma
content = content.replace(/\s—\s(nơi |vốn |không phải |một |đây )/g, ', $1');

// "X — bổ sung/phân biệt/gợi ý" parenthetical phrase => change to comma+space
content = content.replace(/\s—\s(bổ sung |phân biệt |gợi ý |một bên liên quan|cần kiểm định)/g, ', $1');

// Remaining em dashes: "word — word" => "word, word" or just remove the dash
// Catch remaining with space on both sides
content = content.replace(/(\S)\s—\s(\S)/g, '$1, $2');

// 6. Any remaining em dash with no space (edge cases)
content = content.replace(/—/g, '-');

// Count after
console.log('\n=== AFTER ===');
console.log('Em dash (—):', countBefore(content, /—/g));
console.log('Smart quote open (\u201c):', countBefore(content, /\u201c/g));
console.log('Smart quote close (\u201d):', countBefore(content, /\u201d/g));
console.log('Ellipsis (\u2026):', countBefore(content, /\u2026/g));
console.log('En dash (\u2013):', countBefore(content, /\u2013/g));

if (content !== orig) {
  fs.writeFileSync(file, content, 'utf8');
  console.log('\n✓ File updated:', file);
} else {
  console.log('\n(No changes made)');
}
