const fs = require('fs');

let content = fs.readFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', 'utf8');

// 1. Terminology: Blockchain
// The first occurrence of Blockchain is usually early. Let's just do a manual replace of the first one, then change "công nghệ Blockchain" to "Blockchain".
content = content.replace('công nghệ Blockchain được kỳ vọng', 'Blockchain (chuỗi khối) được kỳ vọng');
content = content.replace(/công nghệ Blockchain/g, 'Blockchain');

// 2. Terminology: RTD
content = content.replace(/Nước yến đóng lon \(RTD Bird's Nest\)/g, "nước yến đóng lon (RTD)");
content = content.replace(/nước yến đóng lon \(RTD Bird's Nest\)/g, "nước yến đóng lon (RTD)");
content = content.replace(/nước yến đóng lon \(RTD\)/g, "nước yến đóng lon (RTD)"); // keep first one
// replace other instances of "nước yến đóng lon" with "sản phẩm RTD" if needed, but the user said "chỉ cần gọi là sản phẩm RTD hoặc nước yến". We can just leave "nước yến" or change "nước yến đóng lon" to "sản phẩm RTD".
content = content.replace(/dòng sản phẩm Nước yến đóng lon/g, "dòng sản phẩm nước yến đóng lon (RTD)");
content = content.replace(/nước yến đóng chai công nghiệp/g, "sản phẩm RTD công nghiệp");
content = content.replace(/nước yến đóng chai/g, "sản phẩm RTD");

// 3. Greenwashing
content = content.replace(/\"Tẩy xanh\" \(Greenwashing\)/g, "greenwashing");
content = content.replace(/\"Tẩy xanh\"/g, "greenwashing");
content = content.replace(/Greenwashing/g, "greenwashing");

// 4. Credence goods
content = content.replace(/nhóm credence goods/g, "nhóm hàng hóa dựa trên niềm tin (credence goods)");
content = content.replace(/nhóm \*credence good\*/g, "nhóm hàng hóa dựa trên niềm tin (credence goods)");

// 5. Costly signals
content = content.replace(/costly signal/g, "tín hiệu tốn kém (costly signals)");

// 6. TR and WTP
content = content.replace(/Perceived Traceability \(TR\)/g, "Nhận thức về truy xuất nguồn gốc (Perceived Traceability - TR)");
content = content.replace(/Perceived Traceability/g, "TR");
// Re-fix the first one if we messed it up
content = content.replace(/Nhận thức về truy xuất nguồn gốc \(Nhận thức về truy xuất nguồn gốc \(Perceived Traceability - TR\) - TR\)/g, "Nhận thức về truy xuất nguồn gốc (Perceived Traceability - TR)");
content = content.replace(/nhận thức về truy xuất nguồn gốc \(TR - TR\)/g, "Nhận thức về truy xuất nguồn gốc (Perceived Traceability - TR)");

content = content.replace(/Willingness to Pay Premium \(WTP\)/g, "Sẵn lòng chi trả thêm (Willingness to Pay Premium - WTP)");
content = content.replace(/Willingness to Pay \(WTP\)/g, "Sẵn lòng chi trả (Willingness to Pay - WTP)");

// 7. List formatting
content = content.replace(/1, /g, "1. ");
content = content.replace(/2, /g, "2. ");
content = content.replace(/3, /g, "3. ");
content = content.replace(/\- /g, "* "); // standard list
// Let's manually fix the dot at the end of lists if missing? Too risky with regex.

// 8. Mermaid
let old_mermaid = `    subgraph STIMULUS [S - Tác nhân kích thích]
        BC["Blockchain Transparency (H1, H3)"]
        GM["Green Marketing Content (H2, H7)"]
    end`;
let new_mermaid = `    subgraph STIMULUS [S - Tác nhân kích thích]
        TR["Traceability (H1, H3)"]
        GM["Green Marketing Content (H2, H7)"]
    end`;
content = content.replace(old_mermaid, new_mermaid);

// Fix the bottom of mermaid
let old_mermaid_bottom = `    BC -->|"H1 (+)"| PIQ
    BC -->|"H3 (-)"| GS
    GM -->|"H2 (+)"| GT
    PIQ -->|"H4a (+)"| GT
    GS -->|"H4b (-)"| GT
    GT -->|"H5 (+)"| BA
    BA --> PI
    BA --> WTP
    BC -.->|"H7 (Synergy)"| GM
    TR -.->|"H7 (Synergy)"| GM`;
let new_mermaid_bottom = `    TR -->|"H1 (+)"| PIQ
    TR -->|"H3 (-)"| GS
    GM -->|"H2 (+)"| GT
    PIQ -->|"H4a (+)"| GT
    GS -->|"H4b (-)"| GT
    GT -->|"H5 (+)"| BA
    BA --> PI
    BA --> WTP
    TR -.->|"H7 (Synergy)"| GM`;
content = content.replace(old_mermaid_bottom, new_mermaid_bottom);

// Fix placeholders
content = content.replace(/\[ \]/g, "☐");
// "..."
content = content.replace(/\.\.\./g, ".");

fs.writeFileSync('c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md', content, 'utf8');
console.log("Done");
