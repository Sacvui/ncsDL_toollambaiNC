import re
import os
import glob

folder_path = r'c:\ncsDL\Proposal_LePhucHai'
md_files = glob.glob(os.path.join(folder_path, '*.md'))

transitions = [
    "Nhìn từ thực tiễn",
    "Quan sát từ thị trường",
    "Từ góc độ quản trị",
    "Dựa trên hiện trạng",
    "Xét trên bình diện rộng",
    "Thực tế cho thấy",
    "Theo xu hướng hiện nay",
    "Đứng trước thực trạng này",
    "Về mặt tổng thể"
]

for filepath in md_files:
    if "Writing_Style_Guide" in filepath or "Local_Journal" in filepath or "README" in filepath:
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Clean English words in parentheses that don't contain numbers (citations)
    content = re.sub(r'\s\([A-Za-z\-]{2,}\)', '', content)
    content = re.sub(r'\s\([A-Za-z\-]+\s[A-Za-z\s\-]+\)', '', content)

    # 2. Fix "Trong bối cảnh" repetition
    parts = content.split("Trong bối cảnh")
    if len(parts) > 2:
        new_content = parts[0]
        for i in range(1, len(parts)):
            trans = transitions[(i - 1) % len(transitions)]
            # Giữ lại 1 cụm gốc để tạo sự đa dạng
            if i == len(parts) // 2:
                trans = "Trong bối cảnh"
            new_content += trans + parts[i]
        content = new_content

    # 3. Fix long paragraphs (> 5 sentences)
    paragraphs = content.split('\n\n')
    new_paragraphs = []
    for p in paragraphs:
        # Bỏ qua bảng, tiêu đề, danh sách
        if p.strip().startswith('|') or p.strip().startswith('*') or p.strip().startswith('#') or p.strip().startswith('-') or '```' in p:
            new_paragraphs.append(p)
            continue
            
        sentences = re.split(r'(?<=[.!?]) +', p)
        if len(sentences) > 5 and len(p.split(' ')) > 50:
            mid = len(sentences) // 2
            p1 = ' '.join(sentences[:mid])
            p2 = ' '.join(sentences[mid:])
            new_paragraphs.append(p1)
            new_paragraphs.append(p2)
        else:
            new_paragraphs.append(p)
            
    content = '\n\n'.join(new_paragraphs)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Hoan thien tat ca file thanh cong!")
