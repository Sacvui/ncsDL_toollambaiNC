import io

path = r'c:\ncsDL\Proposal_LePhucHai\01_DatVanDe.md'
with io.open(path, 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if line.startswith('- **Phạm vi không gian:**'):
        new_lines.append('- **Phạm vi không gian:** Về mặt dữ liệu, thông số chuỗi khối (Smart contracts, minh bạch vùng trồng và quy trình chiết rót) dựa trên chuỗi giá trị trà Atiso RTD (Ready-To-Drink) tại Lâm Đồng. Về mặt thị trường tiêu thụ, nghiên cứu giới hạn ở **Dòng đồ uống xanh đóng chai tiện lợi (Green RTD Beverages)** và đo lường sự thay đổi hành vi của Gen Z tại TP.HCM. Sự kết hợp hai không gian này (sản xuất tại Lâm Đồng, tiêu dùng tại TP.HCM) nhằm phản ánh đúng dòng chảy thương mại thực tế "từ nông trại đến bàn ăn" (farm to table), trong đó TP.HCM là thị trường trọng điểm tiêu thụ các sản phẩm nông sản đặc sản của Lâm Đồng, đảm bảo tính hợp lý và đại diện của bối cảnh nghiên cứu.\n')
    else:
        new_lines.append(line)

with io.open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
print('Fixed 01_DatVanDe.md')
