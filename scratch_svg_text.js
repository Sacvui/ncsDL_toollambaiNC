const fs = require('fs');
const path = require('path');

const file = 'c:\\ncsDL\\Proposal_HAILP_TDT\\05_PhuongPhap.md';
let content = fs.readFileSync(file, 'utf8');

// H1: move up and left from line
content = content.replace(/<text x="155" y="115" font-size="10" font-weight="bold">H1<\/text>/, '<text x="145" y="105" font-size="10" font-weight="bold">H1</text>');
// H2: move up from line
content = content.replace(/<text x="155" y="215" font-size="10" font-weight="bold">H2<\/text>/, '<text x="155" y="200" font-size="10" font-weight="bold">H2</text>');
// H3: move up and left
content = content.replace(/<text x="155" y="338" font-size="10" font-weight="bold">H3<\/text>/, '<text x="145" y="325" font-size="10" font-weight="bold">H3</text>');
// H4: fine, just move up slightly
content = content.replace(/<text x="395" y="163" font-size="10" font-weight="bold">H4<\/text>/, '<text x="390" y="155" font-size="10" font-weight="bold">H4</text>');
// H5: fine, just move up slightly
content = content.replace(/<text x="395" y="292" font-size="10" font-weight="bold">H5<\/text>/, '<text x="390" y="280" font-size="10" font-weight="bold">H5</text>');
// H6: horizontal line, move up
content = content.replace(/<text x="630" y="122" font-size="10" font-weight="bold">H6<\/text>/, '<text x="630" y="115" font-size="10" font-weight="bold">H6</text>');
// H7: diagonal down, move closer to origin (CL)
content = content.replace(/<text x="615" y="245" font-size="10" font-weight="bold">H7<\/text>/, '<text x="575" y="185" font-size="10" font-weight="bold">H7</text>');
// H8: diagonal up, move closer to origin (eWOM)
content = content.replace(/<text x="628" y="225" font-size="10" font-weight="bold">H8<\/text>/, '<text x="575" y="240" font-size="10" font-weight="bold">H8</text>');
// H9: horizontal line, move up
content = content.replace(/<text x="630" y="317" font-size="10" font-weight="bold">H9<\/text>/, '<text x="630" y="310" font-size="10" font-weight="bold">H9</text>');

fs.writeFileSync(file, content, 'utf8');

console.log("Adjusted SVG text coordinates!");
