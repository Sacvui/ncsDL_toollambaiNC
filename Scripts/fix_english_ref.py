import io
import re

path = r'c:\ncsDL\Proposal_LePhucHai\06_TaiLieuThamKhao.md'
with io.open(path, 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    new_lines.append(line)
    if "Connelly, B. L." in line:
        new_lines.append("6. Darby, M. R., & Karni, E. (1973). Free competition and the optimal amount of fraud. *The Journal of Law and Economics*, *16*(1), 67-88. https://doi.org/10.1086/466756\n")
    if "Delmas, M. A., & Burbano, V. C." in line:
        new_lines.append("8. Dietvorst, B. J., & Logg, J. M. (2017). Algorithm aversion: People erroneously avoid algorithms after seeing them err. *Journal of Experimental Psychology: General*, *144*(1), 114-126. https://doi.org/10.1037/xge0000033\n")

# Renumber the English references correctly since we inserted items
english_start = False
count = 1
final_lines = []
for line in new_lines:
    if "### 6.1. Tài liệu tiếng Anh" in line:
        final_lines.append(line)
        english_start = True
    elif "### 6.2. Tài liệu tiếng Việt" in line:
        final_lines.append(line)
        english_start = False
    else:
        if english_start and re.match(r'^\d+\.\s', line):
            final_lines.append(re.sub(r'^\d+\.\s', f"{count}. ", line))
            count += 1
        elif not english_start and re.match(r'^\d+\.\s', line):
            final_lines.append(re.sub(r'^\d+\.\s', f"{count}. ", line))
            count += 1
        else:
            final_lines.append(line)

with io.open(path, 'w', encoding='utf-8') as f:
    f.writelines(final_lines)

print('Fixed 06_TaiLieuThamKhao.md')
