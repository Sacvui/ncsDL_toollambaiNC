const fs = require('fs');

let content = fs.readFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', 'utf8');

// Replace specific packaging limit with broader academic FMCG term
content = content.replace(/nước yến đóng lon/g, 'nước yến chế biến sẵn');
content = content.replace(/Nước yến đóng lon/g, 'Nước yến chế biến sẵn');
// Also update RTD descriptions if any are specific to 'lon'
content = content.replace(/lon yến/g, 'sản phẩm yến sào');

fs.writeFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', content, 'utf8');
console.log("Updated 'đóng lon' to 'chế biến sẵn'.");
