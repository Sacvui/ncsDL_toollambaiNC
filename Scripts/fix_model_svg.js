const fs = require('fs');
let content = fs.readFileSync('Proposal_HAILP_TDT/05_PhuongPhap.md', 'utf8');

const svgBlock = `#### Sơ đồ mô hình nghiên cứu tích hợp

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 480" width="100%" font-family="Arial,sans-serif" font-size="12">
  <rect width="920" height="480" fill="#fff"/>
  <text x="60" y="20" font-size="11" font-weight="bold" text-anchor="middle">TIỀN ĐỀ</text>
  <text x="300" y="20" font-size="11" font-weight="bold" text-anchor="middle">TRUNG TÂM</text>
  <text x="530" y="20" font-size="11" font-weight="bold" text-anchor="middle">TRUNG GIAN</text>
  <text x="770" y="20" font-size="11" font-weight="bold" text-anchor="middle">KẾT QUẢ</text>
  <rect x="10" y="30" width="100" height="40" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="60" y="47" text-anchor="middle" font-weight="bold">CE</text>
  <text x="60" y="61" text-anchor="middle" font-size="10">Kỳ vọng KH</text>
  <rect x="10" y="202" width="100" height="40" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="60" y="219" text-anchor="middle" font-weight="bold">PQ</text>
  <text x="60" y="233" text-anchor="middle" font-size="10">Chất lượng CN</text>
  <rect x="10" y="374" width="100" height="40" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="60" y="391" text-anchor="middle" font-weight="bold">PV</text>
  <text x="60" y="405" text-anchor="middle" font-size="10">Giá trị CN</text>
  <rect x="240" y="195" width="120" height="54" rx="3" fill="#f2f2f2" stroke="#000" stroke-width="2"/>
  <text x="300" y="218" text-anchor="middle" font-weight="bold" font-size="14">CSI</text>
  <text x="300" y="236" text-anchor="middle" font-size="10">Chỉ số Hài lòng</text>
  <text x="300" y="248" text-anchor="middle" font-size="10">Khách hàng</text>
  <rect x="470" y="110" width="120" height="50" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="530" y="131" text-anchor="middle" font-weight="bold">CL</text>
  <text x="530" y="145" text-anchor="middle" font-size="10">Lòng trung thành</text>
  <text x="530" y="157" text-anchor="middle" font-size="10">thương hiệu</text>
  <rect x="470" y="300" width="120" height="50" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="530" y="321" text-anchor="middle" font-weight="bold">eWOM</text>
  <text x="530" y="335" text-anchor="middle" font-size="10">Truyền miệng</text>
  <text x="530" y="347" text-anchor="middle" font-size="10">điện tử</text>
  <rect x="700" y="110" width="140" height="50" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="770" y="131" text-anchor="middle" font-weight="bold">FP1</text>
  <text x="770" y="145" text-anchor="middle" font-size="10">Hiệu quả tài chính</text>
  <text x="770" y="157" text-anchor="middle" font-size="10">ROA · ROE · Revenue</text>
  <rect x="700" y="300" width="140" height="50" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="770" y="321" text-anchor="middle" font-weight="bold">FP2</text>
  <text x="770" y="335" text-anchor="middle" font-size="10">Hiệu quả phi TC</text>
  <text x="770" y="347" text-anchor="middle" font-size="10">Thị phần · Online Rating</text>
  <line x1="110" y1="50" x2="238" y2="210" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="155" y="115" font-size="10" font-weight="bold">H1(+)</text>
  <line x1="110" y1="222" x2="238" y2="222" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="140" y="215" font-size="10" font-weight="bold">H2(+)</text>
  <line x1="110" y1="394" x2="238" y2="238" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="148" y="338" font-size="10" font-weight="bold">H3(+)</text>
  <line x1="360" y1="208" x2="468" y2="145" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="387" y="165" font-size="10" font-weight="bold">H4(+)</text>
  <line x1="360" y1="235" x2="468" y2="318" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="387" y="290" font-size="10" font-weight="bold">H5(+)</text>
  <line x1="590" y1="135" x2="698" y2="135" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="620" y="126" font-size="10" font-weight="bold">H6(+)</text>
  <line x1="590" y1="155" x2="698" y2="308" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="615" y="248" font-size="10" font-weight="bold">H7(+)</text>
  <line x1="590" y1="312" x2="698" y2="152" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="628" y="225" font-size="10" font-weight="bold">H8(+)</text>
  <line x1="590" y1="325" x2="698" y2="325" stroke="#000" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="620" y="316" font-size="10" font-weight="bold">H9(+)</text>
  <rect x="185" y="430" width="140" height="38" rx="3" fill="#fafafa" stroke="#777" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="255" y="446" text-anchor="middle" font-size="10" font-weight="bold">W2: Quy mô DN</text>
  <text x="255" y="460" text-anchor="middle" font-size="9" fill="#555">Nhỏ / Vừa / Lớn</text>
  <rect x="370" y="430" width="160" height="38" rx="3" fill="#fafafa" stroke="#777" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="450" y="446" text-anchor="middle" font-size="10" font-weight="bold">W1: Kênh mua sắm</text>
  <text x="450" y="460" text-anchor="middle" font-size="9" fill="#555">Offline / Online</text>
  <line x1="450" y1="430" x2="530" y2="352" stroke="#777" stroke-width="1.2" stroke-dasharray="5,3" marker-end="url(#ag)"/>
  <text x="490" y="402" font-size="9" fill="#555">H10a(+)</text>
  <line x1="430" y1="430" x2="515" y2="162" stroke="#777" stroke-width="1.2" stroke-dasharray="5,3" marker-end="url(#ag)"/>
  <text x="435" y="385" font-size="9" fill="#555">H10b(-)</text>
  <line x1="255" y1="430" x2="490" y2="162" stroke="#777" stroke-width="1.2" stroke-dasharray="5,3" marker-end="url(#ag)"/>
  <text x="285" y="388" font-size="9" fill="#555">H12(+)</text>
  <defs>
    <marker id="a" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#000"/></marker>
    <marker id="ag" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#777"/></marker>
  </defs>
</svg>

*Hình 1. Mô hình nghiên cứu tích hợp CSI -- CL -- eWOM -- Firm Performance, ngành FMCG Việt Nam.*
*(Nguồn: Tác giả đề xuất, 2026)*

**Chú giải:**
- Mũi tên liền đen: tác động nhân quả trực tiếp (H1--H9)
- Mũi tên đứt xám: tác động điều tiết (H10a, H10b, H12)
- H10a (+): kênh online tăng cường CSI -- eWOM
- H10b (-): kênh online làm yếu CSI -- CL do platform loyalty
- H12 (+): quy mô doanh nghiệp lớn tăng cường CSI -- CL`;

const regex = /#### Sơ đồ mô hình nghiên cứu tích hợp[\s\S]*?H12 \(\+\): quy mô doanh nghiệp lớn tăng cường CSI -- CL/;
if (regex.test(content)) {
  content = content.replace(regex, svgBlock);
  fs.writeFileSync('Proposal_HAILP_TDT/05_PhuongPhap.md', content, 'utf8');
  console.log('Done, saved:', content.length, 'chars');
} else {
  console.log('Pattern not found');
}
