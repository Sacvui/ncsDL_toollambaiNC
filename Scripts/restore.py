import os
import glob

base_dir = r"c:\ncsDL\Proposal_LePhucHai"
file3 = os.path.join(base_dir, "03_MucTieuNoiDung.md")

with open(file3, 'r', encoding='utf-8') as f:
    content = f.read()

# Restore Hinh 2 in 03_MucTieuNoiDung.md
hinh2_code = '''
```mermaid
graph TD
    A["1. Tổng quan Tài liệu & Đề xuất Mô hình"] --> B["2. Nghiên cứu Định tính (Phỏng vấn n=15)"]
    B --> C["3. Hiệu chỉnh Thang đo & Kịch bản"]
    C --> D["4. Khảo sát Sơ bộ (Pilot Test)"]
    D --> E["5. Nghiên cứu Định lượng (Thực nghiệm 2x2, n=400-500)"]
    E --> F["6. Phân tích Dữ liệu (PLS-SEM)"]
    F --> G["7. Kết luận & Hàm ý Quản trị"]
    style A fill:#f8fafc,stroke:#334155
    style B fill:#e0f2fe,stroke:#0284c7
    style C fill:#e0f2fe,stroke:#0284c7
    style D fill:#fef08a,stroke:#ca8a04
    style E fill:#dcfce7,stroke:#16a34a
    style F fill:#dcfce7,stroke:#16a34a
    style G fill:#f8fafc,stroke:#334155
```
*Hình 2. Sơ đồ Quy trình Nghiên cứu (Research Methodology Flowchart).*

'''

target_string = "*   **Khảo sát:** Đo lường các biến tâm lý và hành vi thông qua mô hình cấu trúc (SEM)."

if "*Hình 2." not in content:
    content = content.replace(target_string, target_string + "\n" + hinh2_code)
    with open(file3, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Hinh 2 restored in 03_MucTieuNoiDung.md")

# Recreate PhD_NhaTrang_HAILP.md
modular_files = sorted(glob.glob(os.path.join(base_dir, "[0-1][0-9]_*.md")))
modular_content = ""
for file in modular_files:
    with open(file, 'r', encoding='utf-8') as f:
        modular_content += f.read().strip() + "\n\n---\n\n"

# Remove the trailing "\n\n---\n\n"
if modular_content.endswith("\n\n---\n\n"):
    modular_content = modular_content[:-7]

phd_file = os.path.join(base_dir, "PhD_NhaTrang_HAILP.md")
with open(phd_file, 'w', encoding='utf-8') as f:
    f.write(modular_content)

print("PhD_NhaTrang_HAILP.md has been rebuilt perfectly.")
