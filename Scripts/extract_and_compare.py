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
        # Fallback to search boundary in headers
        match = re.search(b'boundary="([^"]+)"', mht_content)
        if match:
            boundary = match.group(1)
            
    if not boundary:
        # Fallback search without quotes
        match = re.search(b'boundary=([^\\s;\n]+)', mht_content)
        if match:
            boundary = match.group(1)
            
    if not boundary:
        raise ValueError("Boundary not found in MHTML headers.")
        
    parts = mht_content.split(b'--' + boundary)
    html_part = None
    for part in parts:
        if b'Content-Type: text/html' in part:
            html_part = part
            break
            
    if not html_part:
        # Try finding part with HTML content anyway
        for part in parts:
            if b'<html' in part or b'<HTML' in part:
                html_part = part
                break
                
    if not html_part:
        raise ValueError("text/html part not found in MHTML archive.")
        
    # Split headers and body
    header_body = html_part.split(b'\r\n\r\n', 1)
    if len(header_body) < 2:
        header_body = html_part.split(b'\n\n', 1)
        
    body = header_body[1] if len(header_body) >= 2 else html_part
    
    # Check Transfer Encoding
    if b'Content-Transfer-Encoding: quoted-printable' in html_part:
        body = quopri.decodestring(body)
        
    html_text = body.decode('utf-8', errors='ignore')
    
    # Clean text using built-in stripper
    text = strip_tags(html_text)
    # Normalize whitespaces
    text = re.sub(r'[ \t\r\f\v]+', ' ', text)
    # Compact empty lines
    text = re.sub(r'\n\s*\n', '\n\n', text)
    return text.strip()

def main():
    doc_path = r"c:\ncsDL\Proposal_HAILP_TDT\Bai_final.doc"
    compiled_path = r"c:\ncsDL\Proposal_HAILP_TDT\PhD_HAILP_TDT.md"
    
    if not os.path.exists(doc_path) or not os.path.exists(compiled_path):
        print("Required files not found.")
        return
        
    print("Extracting text from Bai_final.doc...")
    doc_text = extract_mhtml_text(doc_path)
    
    print("Reading compiled PhD_HAILP_TDT.md...")
    with open(compiled_path, 'r', encoding='utf-8') as f:
        compiled_text = f.read()
        
    # Normalize texts for comparison
    def clean_text(t):
        t = re.sub(r'\s+', ' ', t)
        t = re.sub(r'[^\w\s]', '', t)
        return t.strip().lower()
        
    # Let's compare paragraph by paragraph from doc_text to see if they are in compiled_text
    paragraphs = [p.strip() for p in doc_text.split('\n\n') if len(p.strip()) > 30]
    
    print(f"Total significant paragraphs in Word doc: {len(paragraphs)}")
    missing = []
    
    cleaned_compiled = clean_text(compiled_text)
    
    for idx, p in enumerate(paragraphs):
        # Ignore some headers or meta lines
        if "tên đề tài dự kiến" in p.lower() or "nghiên cứu sinh" in p.lower() or "đại học tôn đức thắng" in p.lower():
            continue
        if "tài liệu tham khảo" in p.lower() or "trình bày theo chuẩn apa" in p.lower():
            continue
            
        cleaned_p = clean_text(p)
        # Check if the cleaned paragraph is a substring of the cleaned compiled text
        if cleaned_p not in cleaned_compiled:
            # Let's try matching a portion of the paragraph (first 60 characters)
            portion = cleaned_p[:60]
            if portion not in cleaned_compiled:
                missing.append((idx, p))
                
    print(f"Analysis complete. Found {len(missing)} paragraphs that might be missing or substantially different:")
    with open(r"c:\ncsDL\sync_report.txt", "w", encoding="utf-8") as rf:
        rf.write(f"=== BAN BAO CAO DONG BO HOA ===\n")
        rf.write(f"So luong doan van khac biet/chua tim thay: {len(missing)}\n\n")
        for num, (idx, p) in enumerate(missing):
            rf.write(f"[{num+1}] Doan van thu {idx} trong file Word:\n{p}\n\n")
            
    print("Report written to sync_report.txt successfully.")

if __name__ == '__main__':
    main()
