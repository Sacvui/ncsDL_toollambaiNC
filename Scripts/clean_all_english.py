import re
import os
import glob

folder_path = r'c:\ncsDL\Proposal_LePhucHai'
md_files = glob.glob(os.path.join(folder_path, '*.md'))

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

words_to_remove = [
    r'\s*\(Immutability\)', r'\s*\(Transparency\)', r'\s*\(Attribute\)',
    r'\s*\(Trust\)', r'\s*\(Authenticity\)', r'\s*\(Traceability\)'
]

for filepath in md_files:
    if "Writing_Style_Guide" in filepath or "Local_Journal" in filepath:
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Xóa cụm Tiếng Anh trong ngoặc (dài 2 từ trở lên)
    content = re.sub(r'\s*\([A-Za-z\-]+ [A-Za-z\s\-]+\)', '', content)

    # Xóa các cụm lẻ tẻ
    for w in words_to_remove:
        content = re.sub(w, '', content, flags=re.IGNORECASE)

    # Làm mềm văn phong (hedging)
    for old, new in replacements.items():
        content = re.sub(r'\b' + old + r'\b', new, content, flags=re.IGNORECASE)

    # Chống lặp từ "Trong bối cảnh"
    if content.count("Trong bối cảnh") > 3:
        content = content.replace("Trong bối cảnh", "Dựa trên thực trạng", 1)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Use ascii print to avoid cp1252 crash
print("Cleaned all markdown files successfully.")
