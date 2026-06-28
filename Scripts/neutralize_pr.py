import os
import glob

folder_path = r'c:\ncsDL\Proposal_LePhucHai'
md_files = glob.glob(os.path.join(folder_path, '*.md'))

replacements = {
    'bài toán "niềm tin"': 'vấn đề suy giảm niềm tin',
    'bài toán niềm tin': 'vấn đề suy giảm niềm tin',
    'vẫn là một mảnh đất trống cần được khai phá sâu sắc': 'vẫn là một khoảng trống nghiên cứu cần được làm rõ',
    'mảnh đất trống cần được khai phá': 'khoảng trống nghiên cứu cần được làm rõ',
    'giá trị kinh tế khổng lồ': 'quy mô kinh tế lớn',
    'xoa dịu hoài nghi': 'giảm thiểu sự hoài nghi',
    'nâng cao nhận thức, xoa dịu hoài nghi và củng cố niềm tin vững chắc': 'tác động tích cực đến nhận thức, giảm thiểu sự hoài nghi và hỗ trợ xây dựng niềm tin'
}

for filepath in md_files:
    if "Writing_Style_Guide" in filepath or "README" in filepath:
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    for old, new in replacements.items():
        content = content.replace(old, new)

    if original != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

print("Hoan tat ha nhiet PR!")
