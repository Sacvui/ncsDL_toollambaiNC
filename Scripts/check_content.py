import os
import re
import glob

base_dir = r"c:\ncsDL\Proposal_LePhucHai"
monolithic_file = os.path.join(base_dir, "PhD_NhaTrang_HAILP.md")

with open(monolithic_file, 'r', encoding='utf-8') as f:
    monolithic_content = f.read()

# Get all 00-10 files
modular_files = sorted(glob.glob(os.path.join(base_dir, "[0-1][0-9]_*.md")))
modular_content = ""
for file in modular_files:
    with open(file, 'r', encoding='utf-8') as f:
         modular_content += f"\n" + f.read()

# Normalize spaces and compare length
mono_clean = re.sub(r'\s+', ' ', monolithic_content).strip()
mod_clean = re.sub(r'\s+', ' ', modular_content).strip()

out_lines = []
out_lines.append(f"Monolithic clean length: {len(mono_clean)}")
out_lines.append(f"Modular clean length: {len(mod_clean)}")

if mono_clean == mod_clean:
    out_lines.append("Content MATCHES exactly between modular and monolithic files (ignoring whitespace).")
else:
    out_lines.append("Content DIFFERS.")
    # Find where they differ
    for i in range(min(len(mono_clean), len(mod_clean))):
        if mono_clean[i] != mod_clean[i]:
            out_lines.append(f"Differ at character {i}:")
            out_lines.append(f"Mono: ...{mono_clean[max(0, i-50):i+50]}...")
            out_lines.append(f"Mod:  ...{mod_clean[max(0, i-50):i+50]}...")
            break

# Check style guide violations
forbidden_terms = [
    "đột phá", "chìa khóa vàng", "cẩm nang", "lỗ hổng đáng kể", 
    "phần hồn", "bản địa số", "hộ chiếu số", "vô cùng ưu việt", 
    "chưa có ai", "hoàn toàn mới", "AMOS", "CB-SEM", "lavaan", "LISREL",
    "mình thấy là", "đây là đóng góp", "VBM", "System-based trust", "Algorithmic trust"
]

violations = []
for term in forbidden_terms:
    if re.search(r'\b' + term + r'\b', monolithic_content, re.IGNORECASE):
        violations.append(f"Monolithic contains: {term}")
    if re.search(r'\b' + term + r'\b', modular_content, re.IGNORECASE):
        violations.append(f"Modular contains: {term}")

if violations:
    out_lines.append("\nStyle Guide Violations Found:")
    for v in violations:
        out_lines.append(v)
else:
    out_lines.append("\nNo direct Style Guide keyword violations found.")

with open('check_output.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out_lines))
