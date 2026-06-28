import re
import os

filepath = r'c:\ncsDL\Proposal_LePhucHai\PhD_NhaTrang_HAILP.md'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Xóa các cụm tiếng Anh trong ngoặc (chứa ít nhất 1 dấu cách và chữ thường)
# VD: (Brand Authenticity), (perceived risk), (Information Asymmetry)
content = re.sub(r'\s*\([A-Za-z\-]+ [A-Za-z\s\-]+\)', '', content)

# Các cụm 1 từ lẻ tẻ thường gặp
words_to_remove = [
    r'\s*\(Immutability\)', 
    r'\s*\(Transparency\)',
    r'\s*\(Attribute\)',
    r'\s*\(Trust\)',
    r'\s*\(Authenticity\)',
    r'\s*\(Traceability\)'
]
for w in words_to_remove:
    content = re.sub(w, '', content, flags=re.IGNORECASE)

# 2. Thay thế các từ siêu cấp, khẳng định tuyệt đối (Trụ cột 1)
replacements = {
    "vô cùng cấp thiết": "là một yêu cầu cần thiết",
    "rất quan trọng": "đóng vai trò đáng chú ý",
    "giải pháp hoàn hảo": "giải pháp tiềm năng",
    "chắc chắn làm tăng": "có xu hướng làm tăng",
    "chắc chắn sẽ": "có khả năng",
    "hiển nhiên": "có thể thấy",
    "không thể phủ nhận": "được ghi nhận rộng rãi",
    "tuyệt vời": "tích cực",
    "đột phá": "đáng kể",
    "rất hiệu quả": "có hiệu quả nhất định"
}

for old, new in replacements.items():
    # Sử dụng case-insensitive replacement an toàn
    content = re.sub(r'\b' + old + r'\b', new, content, flags=re.IGNORECASE)

# 3. Chống lạm dụng công thức (Trụ cột 7)
# Thay bớt "Trong bối cảnh" bằng các cụm khác nếu nó xuất hiện quá nhiều
context_count = content.count("Trong bối cảnh")
if context_count > 5:
    content = content.replace("Trong bối cảnh", "Dựa trên thực trạng", 2)
    content = content.replace("Trong bối cảnh", "Quan sát từ thị trường", 1)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Đã làm sạch file PhD_NhaTrang_HAILP.md thành công!")
