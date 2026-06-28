const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('c:\\ncsDL\\Proposal_HAILP_TDT\\PhD_TDT_HAILP.md', 'utf8');
const sections = content.split('\n## ');

const fileNames = [
  '00_BiaThongTin.md',
  '01_TinhCapThiet.md',
  '02_TinhHinhNghienCuu.md',
  '03_MucDichNghienCuu.md',
  '04_DoiTuongPhamVi.md',
  '05_PhuongPhap.md',
  '06_KeHoach.md',
  '07_MucTieu.md',
  '08_LyDo.md',
  '09_KinhNghiem.md',
  '10_DuKien.md',
  '11_NguoiHuongDan.md',
  '12_TaiLieuThamKhao.md',
  '13_PhuLuc.md'
];

fs.writeFileSync(path.join('c:\\ncsDL\\Proposal_HAILP_TDT', fileNames[0]), sections[0]);

for (let i = 1; i < sections.length; i++) {
  const match = sections[i].match(/^(\d+)\./);
  if (match) {
    const num = parseInt(match[1]);
    if (num >= 1 && num <= 13) {
      fs.writeFileSync(path.join('c:\\ncsDL\\Proposal_HAILP_TDT', fileNames[num]), '## ' + sections[i]);
    }
  } else {
      // Append to the last created file or just 12 if no match
      const target = fileNames[12];
      try {
          const currentContent = fs.readFileSync(path.join('c:\\ncsDL\\Proposal_HAILP_TDT', target), 'utf8');
          fs.writeFileSync(path.join('c:\\ncsDL\\Proposal_HAILP_TDT', target), currentContent + '\n## ' + sections[i]);
      } catch (e) {
          // Ignore
      }
  }
}
console.log("Restoration complete");
