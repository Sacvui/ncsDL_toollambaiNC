import os
import re

base_dir = r"c:\ncsDL\Proposal_LePhucHai"
files = ["PhD_NhaTrang_HAILP.md", "03_MucTieuNoiDung.md"]

new_mermaid = '''```mermaid
graph TD
    A["Tổng mẫu Khảo sát (n=400-500)"] -->|"Phân bổ ngẫu nhiên<br>(Random Assignment)"| B(("Thực nghiệm 2x2"))
    
    B -->|"Factor 1: Có Truy xuất"| C1["..."]
    B -->|"Factor 1: Không Truy xuất"| C2["..."]
    
    C1 -->|"Factor 2: T.điệp Tự nhiên"| G1["Nhóm 1:<br>Có TR + Tự nhiên"]
    C1 -->|"Factor 2: T.điệp Chức năng"| G2["Nhóm 2:<br>Có TR + Chức năng"]
    
    C2 -->|"Factor 2: T.điệp Tự nhiên"| G3["Nhóm 3:<br>Không TR + Tự nhiên"]
    C2 -->|"Factor 2: T.điệp Chức năng"| G4["Nhóm 4:<br>Không TR + Chức năng"]
    
    G1 -.-> M["Khảo sát Đo lường<br>(PIQ, SK, Trust, BA, PI, WTP)"]
    G2 -.-> M
    G3 -.-> M
    G4 -.-> M
    
    style A fill:#f8fafc,stroke:#334155,stroke-width:2px
    style B fill:#e0f2fe,stroke:#0284c7,stroke-width:2px
    style C1 fill:#f8fafc,stroke:#334155,stroke-dasharray: 5 5
    style C2 fill:#f8fafc,stroke:#334155,stroke-dasharray: 5 5
    style G1 fill:#dcfce7,stroke:#16a34a
    style G2 fill:#fef08a,stroke:#ca8a04
    style G3 fill:#ffedd5,stroke:#ea580c
    style G4 fill:#f1f5f9,stroke:#475569
    style M fill:#f8fafc,stroke:#334155,stroke-dasharray: 5 5
```'''

pattern = re.compile(r'```mermaid[\s\S]*?```(?=\s*\*Hình 3\. Sơ đồ Thiết kế Thực nghiệm)')

for filename in files:
    filepath = os.path.join(base_dir, filename)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content, count = pattern.subn(new_mermaid, content)
        
        if count > 0:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
        else:
            print(f"Pattern not found in {filename}")
