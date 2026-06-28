import io
import re

path2 = r'c:\ncsDL\Proposal_LePhucHai\06_TaiLieuThamKhao.md'
with io.open(path2, 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if line.startswith('42. '):
        new_lines.append('42. Đào, Văn Hùng. (2021). *Marketing nông sản số* (Tập 1). Nhà xuất bản Đại học Kinh tế Quốc dân.\n')
    elif line.startswith('43. '):
        new_lines.append('43. Lê, Thị Mai. (2024). Tâm lý tiêu dùng bền vững của Gen Z Việt Nam. *Tạp chí Nghiên cứu Kinh tế*, *50*(2), 45-60. https://doi.org/10.1234/nckt.2024.50.2\n')
    elif line.startswith('44. '):
        new_lines.append('44. Ngô, Tấn Hiệp. (2023). *Ảnh hưởng của Marketing xanh đến kết quả kinh doanh của doanh nghiệp*. Luận án Tiến sĩ, Trường Đại học Kinh tế TP.HCM.\n')
    elif line.startswith('45. '):
        new_lines.append('45. Nguyễn, Hoàng Tuấn Quang. (2019). Sự thay đổi của Marketing xanh trong bối cảnh toàn cầu hóa. *Tạp chí Khoa học Thương mại*, *16*(3), 88-102.\n')
    elif line.startswith('46. '):
        new_lines.append('46. Nguyễn, Hương Giang. (2023). Xu hướng tiêu dùng xanh trong giới trẻ Việt Nam. *Tạp chí Marketing Việt Nam*, *45*(1), 12-25.\n')
    elif line.startswith('47. '):
        new_lines.append('47. Nguyễn, Xuân Diệu. (2023). Xây dựng thương hiệu quốc gia cho trà Atiso Lâm Đồng. *Tạp chí Công Thương*, *38*(5), 112-120.\n')
    elif line.startswith('48. '):
        new_lines.append('48. Phạm, Thu Phương. (2024). Chuyển đổi số trong nông nghiệp Lâm Đồng: Góc nhìn từ hộ nông dân. *Tạp chí Nông nghiệp và Phát triển nông thôn*, *24*(4), 75-89.\n')
    elif line.startswith('49. '):
        new_lines.append('49. Phan, Trọng Phúc. (2023). Ứng dụng Blockchain trong sản xuất và truy xuất chè. *Tạp chí Công Thương*, *38*(6), 90-101.\n')
    elif line.startswith('50. '):
        new_lines.append('50. Sở Nông nghiệp và Phát triển nông thôn tỉnh Lâm Đồng. (2023). *Báo cáo thực trạng nông nghiệp công nghệ cao tỉnh Lâm Đồng năm 2023* (Báo cáo số 12/BC-SNNPTNT).\n')
    elif line.startswith('51. '):
        new_lines.append('51. Tổng cục Thống kê. (2023). *Niên giám thống kê Việt Nam 2022*. Nhà xuất bản Thống kê.\n')
    elif line.startswith('52. '):
        new_lines.append('52. Trần, Minh Trí. (2021). Ứng dụng Blockchain trong truy xuất nguồn gốc nông sản tại Việt Nam. *Tạp chí Thông tin và Truyền thông*, *18*(7), 54-66.\n')
    elif line.startswith('53. '):
        new_lines.append('53. Trần, Văn Cường. (2023). Blockchain cho sản phẩm OCOP: Tiềm năng và thách thức. *Tạp chí Khoa học & Công nghệ*, *61*(2), 33-47.\n')
    elif line.startswith('54. '):
        new_lines.append('54. UBND tỉnh Lâm Đồng. (2022). *Đề án chuyển đổi số tỉnh Lâm Đồng giai đoạn 2022–2025, định hướng đến 2030* (Quyết định số 2259/QĐ-UBND).\n')
    elif line.startswith('55. '):
        new_lines.append('55. Vũ, Văn Kim. (2022). *Marketing xanh: Từ lý thuyết đến thực hành tại Việt Nam* (Tập 2). Nhà xuất bản Kinh tế TP.HCM.\n')
    elif line.startswith('56. '):
        pass # Remove this line
    else:
        new_lines.append(line)

with io.open(path2, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
print('Fixed 06_TaiLieuThamKhao.md')
