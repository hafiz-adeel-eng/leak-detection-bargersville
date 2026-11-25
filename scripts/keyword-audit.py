"""On-page keyword audit: checks each indexable page's target keyword (src/data/keywords.json)
in the URL, title, meta description, H1, an H2, the start of the first paragraph, and the
first image's file name and alt text. Run after `npm run build`: python3 scripts/keyword-audit.py"""
import json, re, sys, html
from bs4 import BeautifulSoup

STOP = {'in', 'the', 'a', 'an', 'of', 'for', 'to', 'and', 'at', 'on', 'your', 'my'}
DOMAIN = 'leak detection bargersville'

def toks(s):
    s = html.unescape(s).lower().replace('&', ' and ').replace('’', "'")
    out = []
    for w in re.findall(r"[a-z0-9']+", s):
        w = w.replace("'", '')
        if w in STOP or not w: continue
        if len(w) > 3 and w.endswith('s') and not w.endswith('ss'): w = w[:-1]
        out.append(w)
    return out

def has(text, kw):
    t, k = toks(text), toks(kw)
    return any(t[i:i + len(k)] == k for i in range(len(t) - len(k) + 1))

def main():
    kws = json.load(open('src/data/keywords.json'))
    cols = ['url', 'title', 'desc', 'h1', 'h2', 'para', 'img', 'alt']
    fails = {c: 0 for c in cols}
    rows = []
    for path, v in kws.items():
        kw = v['kw']
        soup = BeautifulSoup(open(f'dist{path}index.html').read(), 'html.parser')
        main_ = soup.find('main')
        title = soup.title.get_text()
        desc = soup.find('meta', attrs={'name': 'description'})['content']
        h1 = main_.find('h1').get_text(' ')
        h2s = [h.get_text(' ') for h in main_.find_all('h2')]
        para = next((p.get_text(' ') for p in main_.find_all('p') if len(p.get_text(' ').split()) >= 8), '')
        first = ' '.join(para.split()[:20])
        img = soup.find('img')  # first image anywhere on the page, header included
        src = img['src'].split('?')[0].rsplit('/', 1)[-1].rsplit('.', 1)[0] if img else ''
        alt = img.get('alt', '') if img else ''
        url_t = set(toks(DOMAIN + ' ' + path.replace('-', ' ').replace('/', ' ')))
        r = {
            'url': set(toks(kw)) <= url_t,
            'title': has(title, kw), 'desc': has(desc, kw), 'h1': has(h1, kw),
            'h2': any(has(h, kw) for h in h2s), 'para': has(first, kw),
            'img': toks(src.replace('-', ' ')) == toks(kw), 'alt': has(alt, kw),
        }
        for c in cols: fails[c] += not r[c]
        rows.append((path, kw, r, src))
    for path, kw, r, src in rows:
        bad = [c for c in cols if not r[c]]
        if bad or '-v' in sys.argv: print(f'{path} [{kw}] missing: {",".join(bad) or "-"}')
    print(f'\n{len(rows)} pages. Missing per check:', ', '.join(f'{c}={fails[c]}' for c in cols))
    return sum(fails.values())

if __name__ == '__main__':
    sys.exit(1 if main() else 0)
