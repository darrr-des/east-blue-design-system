"""Export a component's Cover Image and Usage Guideline Samples from its
"[FOR EXPORT] <component>" section in the 2026 Working File.

  python3 scripts/update/guidelines-export.py <slug> <section-node-id>

Writes public/assets/covers/<slug>.png and public/assets/guidelines/<slug>-<n>-do|dont.png
(PNG, 2x), and prints each card's #description next to the site's text so wording can be
compared. Reads FIGMA_ACCESS_TOKEN from astro-site/.env.
"""
import json, os, re, sys, urllib.request, urllib.parse

FILE = 'pbxY8a2xcIfVZKxwnud9Xe'
slug, section = sys.argv[1], sys.argv[2]
for line in open('.env'):
    if line.startswith('FIGMA_ACCESS_TOKEN='):
        os.environ.setdefault('FIGMA_ACCESS_TOKEN', line.split('=', 1)[1].strip())
H = {'X-Figma-Token': os.environ['FIGMA_ACCESS_TOKEN']}
get = lambda u: json.load(urllib.request.urlopen(urllib.request.Request(u, headers=H)))

def find(n, pred):
    if pred(n): return n
    for c in n.get('children', []):
        r = find(c, pred)
        if r: return r

def find_all(n, pred, out):
    if pred(n): out.append(n); return out
    for c in n.get('children', []): find_all(c, pred, out)
    return out

sec = get(f'https://api.figma.com/v1/files/{FILE}/nodes?ids={section}')['nodes'][section]['document']
cover = find(sec, lambda n: n['type'] == 'FRAME' and n['name'].startswith('Cover Image'))
cards = find_all(sec, lambda n: n['type'] == 'INSTANCE' and n['name'] == 'Dos and Dont' and n.get('visible', True), [])
cards.sort(key=lambda n: (round(n['absoluteBoundingBox']['y']), n['absoluteBoundingBox']['x']))

targets = {}
if cover: targets[cover['id']] = f'public/assets/covers/{slug}.png'
print('cover:', cover and f"{cover['name']} {cover['id']}")
site = json.load(open(f'src/content/components/{slug}.json'))['code'].get('usageGuidelines', [])
for i, n in enumerate(cards):
    pair, side = i // 2 + 1, ('do' if i % 2 == 0 else 'dont')
    label = find(n, lambda x: x['name'] == '#label')['characters']
    if label.lower().startswith('don') != (side == 'dont'):
        sys.exit(f'card {i + 1} is labelled "{label}" — Do/Don\'t cards are not in pairs')
    desc = find(n, lambda x: x['name'] == '#description')['characters']
    targets[find(n, lambda x: x['name'] == 'Sample')['id']] = f'public/assets/guidelines/{slug}-{pair}-{side}.png'
    have = site[pair - 1][side + 'Text'] if pair <= len(site) else None
    plain = lambda t: ' '.join(re.sub(r'<[^>]+>', '', t).replace('\u2019', "'").split())  # the site's <code> marks aside
    same = have is not None and plain(desc) == plain(have)
    print(f"{pair} {side:4} {'same' if same else 'DIFF'}  figma: {desc!r}" + ('' if same else f'\n           site:  {have!r}'))

r = get(f'https://api.figma.com/v1/images/{FILE}?' + urllib.parse.urlencode({'ids': ','.join(targets), 'format': 'png', 'scale': 2}))
for k, u in r['images'].items():
    if u: urllib.request.urlretrieve(u, targets[k])
    else: print('NO IMAGE', k)
print(f"exported {sum(1 for u in r['images'].values() if u)} of {len(targets)} · {len(cards) // 2} pairs in Figma, {len(site)} on the site")
