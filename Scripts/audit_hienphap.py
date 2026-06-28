import re
import os

filepath = r'c:\ncsDL\Proposal_LePhucHai\PhD_NhaTrang_HAILP.md'

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

report = []
report.append("BÁO CÁO KIỂM TOÁN HỌC THUẬT - PhD_NhaTrang_HAILP.md")
report.append("="*60)

# 1. Kiểm tra Tiếng Anh trong ngoặc (Trụ cột 5)
english_parens = re.findall(r'\s\([A-Za-z\s]+\)', text)
if english_parens:
    report.append(f"[CẢNH BÁO] Trụ cột 5 - Còn sót {len(english_parens)} cụm tiếng Anh trong ngoặc. Ví dụ: {', '.join(english_parens[:3])}")
else:
    report.append("[OK] Trụ cột 5 - Không còn tiếng Anh chêm trong ngoặc sai quy định.")

# 2. Kiểm tra câu văn tuyệt đối, siêu cấp (Trụ cột 1)
absolute_words = ['vô cùng cấp thiết', 'giải pháp hoàn hảo', 'rõ ràng là', 'hiển nhiên', 'dễ thấy', 'chắc chắn']
found_abs = []
for word in absolute_words:
    count = len(re.findall(r'\b' + word + r'\b', text, re.IGNORECASE))
    if count > 0:
        found_abs.append(f"'{word}': {count}")
if found_abs:
    report.append(f"[CẢNH BÁO] Trụ cột 1 - Còn sót từ ngữ tuyệt đối hóa: {', '.join(found_abs)}")
else:
    report.append("[OK] Trụ cột 1 - Đã sạch các từ ngữ tuyệt đối hóa/siêu cấp.")

# 3. Kiểm tra công thức AI (Trụ cột 1 & 7)
ai_formulas = ['Trong bối cảnh', 'Bên cạnh đó', 'Do đó, có thể thấy rằng', 'Thứ nhất', 'Thứ hai', 'Thứ ba']
found_formulas = []
for formula in ai_formulas:
    count = len(re.findall(r'\b' + formula + r'\b', text, re.IGNORECASE))
    if count > 3:
        found_formulas.append(f"'{formula}': {count} lần")
if found_formulas:
    report.append(f"[CẢNH BÁO] Trụ cột 7 - Lặp công thức AI quá nhiều (>3 lần): {', '.join(found_formulas)}")
else:
    report.append("[OK] Trụ cột 7 - Không lạm dụng công thức kết nối AI sáo rỗng.")

# 4. Kiểm tra độ dài đoạn văn (Trụ cột 6)
paragraphs = text.split('\n\n')
long_paragraphs = 0
for p in paragraphs:
    # Bỏ qua các list markdown, bảng biểu, code
    if p.strip().startswith('|') or p.strip().startswith('*') or p.strip().startswith('#') or '```' in p:
        continue
    # Tính số câu dựa trên dấu chấm
    sentences = re.split(r'(?<=[.!?]) +', p)
    if len(sentences) > 5 and len(p.split(' ')) > 50:
        long_paragraphs += 1

if long_paragraphs > 0:
    report.append(f"[CẢNH BÁO] Trụ cột 6 - Phát hiện {long_paragraphs} đoạn văn vi phạm quy tắc độ dài (vượt quá 5 câu/đoạn).")
else:
    report.append("[OK] Trụ cột 6 - Độ dài đoạn văn chuẩn mực (3-5 câu).")

# Ghi báo cáo ra file
report_path = r'c:\ncsDL\audit_report.txt'
with open(report_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(report))

print("Audit complete! Report saved to audit_report.txt.")
