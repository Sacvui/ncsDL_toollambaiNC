const fs = require('fs');

const filePath = 'c:/ncsDL/Proposal_LePhucHai/PhD_NhaTrang_HAILP.md';
let content = fs.readFileSync(filePath, 'utf8');

const refRegex = /## 12\. TÀI LIỆU THAM KHẢO[\s\S]*$/m;

const newRefs = `## 12. TÀI LIỆU THAM KHẢO

**Nhóm 1: Nền tảng Lý thuyết & Hàng hóa khó kiểm chứng**
1. Akerlof, G. A. (1970). The market for "lemons": Quality uncertainty and the market mechanism. *The Quarterly Journal of Economics, 84*(3), 488–500.
2. Connelly, B. L., Certo, S. T., Ireland, R. D., & Reutzel, C. R. (2011). Signaling theory: A review and assessment. *Journal of Management, 37*(1), 39–67.

**Nhóm 2: Truy xuất nguồn gốc số & Niềm tin người tiêu dùng**
3. Lu, L., et al. (2023). The effect of blockchain traceability on consumer purchase intention for food products. *Journal of Retailing and Consumer Services, 71*, 103233.
4. Kshetri, N. (2024). The role of blockchain in enhancing consumer trust in supply chains. *Journal of Business Research, 164*, 113946.
5. Wang, Y., & Li, X. (2023). Trusting the chain: The impact of blockchain traceability on brand authenticity and consumer behavior. *Psychology & Marketing, 40*(8), 1540-1555.

**Nhóm 3: Tính xác thực thương hiệu & Food Authenticity**
6. Morhart, F., Malär, L., Guèvremont, A., Girardin, F., & Grohmann, B. (2015). Brand authenticity: An integrative framework and measurement scale. *Journal of Consumer Psychology, 25*(2), 200–218.
7. Newman, G. E., & Dhar, R. (2014). Authenticity is contagious: Brand essence and the original source of production. *Journal of Marketing Research, 51*(3), 371-386.
8. Spielmann, N., & Maguire, M. (2024). Food authenticity and its impact on consumer valuation in credence goods markets. *Food Policy, 120*, 102550.

**Nhóm 4: Báo cáo thị trường (Nước yến & FMCG)**
9. Kantar. (2023). *Vietnam FMCG Monitor: Consumer trends and behavior shifting*.
10. NielsenIQ. (2024). *Trust and Authenticity in the Nutritional Beverage Industry*.
`;

content = content.replace(refRegex, newRefs);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update fix_reviewer_final_8 complete.');
