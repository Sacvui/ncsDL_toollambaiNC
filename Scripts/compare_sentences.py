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
        raise ValueError("Boundary not found in MHTML headers.")
        
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
                
    if not html_part:
        raise ValueError("text/html part not found in MHTML archive.")
        
    header_body = html_part.split(b'\r\n\r\n', 1)
    if len(header_body) < 2:
        header_body = html_part.split(b'\n\n', 1)
        
    body = header_body[1] if len(header_body) >= 2 else html_part
    
    if b'Content-Transfer-Encoding: quoted-printable' in html_part:
        body = quopri.decodestring(body)
        
    html_text = body.decode('utf-8', errors='ignore')
    text = strip_tags(html_text)
    return text.strip()

def split_into_sentences(text):
    # Strip some common noise
    text = re.sub(r'\s+', ' ', text)
    # Split by sentence boundaries: . or ? or ! followed by space and Capital letter
    sentences = re.split(r'(?<=[.!?])\s+', text)
    result = []
    for s in sentences:
        s = s.strip()
        # Ignore empty or too short sentences (like section numbers)
        if len(s) > 15:
            result.append(s)
    return result

def clean_sentence(s):
    # Lowercase, keep only alphanumeric
    s = s.lower()
    s = re.sub(r'[^\w\s]', '', s)
    s = re.sub(r'\s+', '', s) # compact all spaces
    return s

def main():
    doc_path = r"c:\ncsDL\Proposal_HAILP_TDT\Bai_final.doc"
    compiled_path = r"c:\ncsDL\Proposal_HAILP_TDT\PhD_HAILP_TDT.md"
    
    if not os.path.exists(doc_path) or not os.path.exists(compiled_path):
        print("Required files not found.")
        return
        
    doc_text = extract_mhtml_text(doc_path)
    with open(compiled_path, 'r', encoding='utf-8') as f:
        compiled_text = f.read()
        
    doc_sentences = split_into_sentences(doc_text)
    compiled_sentences = split_into_sentences(compiled_text)
    
    cleaned_compiled_set = {clean_sentence(s) for s in compiled_sentences}
    # Add full compiled cleaned string for substring checking too
    cleaned_compiled_full = clean_sentence(compiled_text)
    
    print(f"Total sentences in Word doc: {len(doc_sentences)}")
    print(f"Total sentences in Compiled doc: {len(compiled_sentences)}")
    
    missing_sentences = []
    for idx, s in enumerate(doc_sentences):
        # Ignore metadata and headers
        if any(w in s.lower() for w in ["tên đề tài dự kiến", "nghiên cứu sinh", "đại học tôn đức thắng", "mã chuyên ngành", "chuyên ngành đào tạo", "chương trình đào tạo"]):
            continue
        if "lehai.edu.vn" in s.lower() or "harvard managementor" in s.lower():
            continue
            
        cleaned_s = clean_sentence(s)
        if cleaned_s not in cleaned_compiled_set:
            # Try to see if it's a substring of the compiled text (handles minor split differences)
            if cleaned_s not in cleaned_compiled_full:
                # Check if first 30 chars of cleaned sentence is in compiled text to be sure
                portion = cleaned_s[:30]
                if portion not in cleaned_compiled_full:
                    missing_sentences.append(s)
                    
    print(f"Number of missing sentences: {len(missing_sentences)}")
    
    with open(r"c:\ncsDL\sentence_sync_report.txt", "w", encoding="utf-8") as f:
        f.write("=== BAN BAO CAO DONG BO HOA THEO CAU ===\n")
        f.write(f"So luong cau khac biet: {len(missing_sentences)}\n\n")
        for num, s in enumerate(missing_sentences):
            f.write(f"[{num+1}] {s}\n\n")
            
    print("Report written to sentence_sync_report.txt successfully.")

if __name__ == '__main__':
    main()
