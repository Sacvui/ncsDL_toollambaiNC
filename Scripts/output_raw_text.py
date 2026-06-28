import os
import re
import quopri
from html.parser import HTMLParser

class MLStripper(HTMLParser):
    def __init__(self):
        super().__init__()
        self.reset()
        self.strict = False
        self.convert_charrefs = True
        self.text = []
    def handle_data(self, d):
        self.text.append(d)
    def get_data(self):
        return ''.join(self.text)

def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()

def extract_mhtml_text(doc_path):
    with open(doc_path, 'rb') as f:
        mht_content = f.read()
        
    # Find boundary
    boundary = None
    first_line = mht_content.split(b'\n')[0].strip()
    if b'boundary=' in first_line:
        boundary = first_line.split(b'boundary=')[1].replace(b'"', b'')
    else:
        match = re.search(b'boundary="([^"]+)"', mht_content)
        if match:
            boundary = match.group(1)
            
    if not boundary:
        match = re.search(b'boundary=([^\\s;\n]+)', mht_content)
        if match:
            boundary = match.group(1)
            
    if not boundary:
        raise ValueError("Boundary not found.")
        
    parts = mht_content.split(b'--' + boundary)
    html_part = None
    for part in parts:
        if b'Content-Type: text/html' in part:
            html_part = part
            break
    if not html_part:
        for part in parts:
            if b'<html' in part or b'<HTML' in part:
                html_part = part
                break
                
    header_body = html_part.split(b'\r\n\r\n', 1)
    if len(header_body) < 2:
        header_body = html_part.split(b'\n\n', 1)
        
    body = header_body[1] if len(header_body) >= 2 else html_part
    if b'Content-Transfer-Encoding: quoted-printable' in html_part:
        body = quopri.decodestring(body)
        
    html_text = body.decode('utf-8', errors='ignore')
    text = strip_tags(html_text)
    return text.strip()

def main():
    doc_path = r"c:\ncsDL\Proposal_HAILP_TDT\Bai_final.doc"
    text = extract_mhtml_text(doc_path)
    
    # Save the raw text to a text file so we can view it
    out_path = r"c:\ncsDL\extracted_raw_text.txt"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(text)
    print("Done")

if __name__ == '__main__':
    main()
