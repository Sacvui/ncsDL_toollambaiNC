import os
import re

base_dir = r"c:\ncsDL\Proposal_LePhucHai"
files_to_fix = ["PhD_NhaTrang_HAILP.md", "02_TongQuan.md", "03_MucTieuNoiDung.md"]

for filename in files_to_fix:
    filepath = os.path.join(base_dir, filename)
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Fix Core Path
    content = content.replace("TR → PIQ → BA → TT → PI / WTP", "TR → PIQ / SK → TT → BA → PI / WTP")
    
    # 2. Fix H7 Text
    content = content.replace(
        "H7 (+):** Tính xác thực thương hiệu (BA) tác động tích cực đến Niềm tin (TT).",
        "H7 (+):** Niềm tin (TT) tác động tích cực đến Tính xác thực thương hiệu (BA)."
    )
    
    # 3. Fix Experimental Design Node (Add SK)
    content = content.replace(
        "Khảo sát Đo lường (PIQ, Trust, BA, PI, WTP)",
        "Khảo sát Đo lường (PIQ, SK, Trust, BA, PI, WTP)"
    )

    # 4. Fix Mermaid H7 Path (in 02_TongQuan where it was backwards)
    content = content.replace('BA -- "H7 (+)" --> TT', 'TT -- "H7 (+)" --> BA')
    
    # 5. Fix Moderation Node H6 in Mermaid Graph LR
    mermaid_moderation_old = 'TR -. "H6 (+)" .-> TT'
    mermaid_moderation_new = 'TRxNC["TR x NC"] -. "H6 (+)" .-> TT\n    style TRxNC fill:#f1f5f9,stroke:#475569,stroke-dasharray: 5 5'
    content = content.replace(mermaid_moderation_old, mermaid_moderation_new)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Đã hoàn thành sửa lỗi logic nhân quả trong các file.")
