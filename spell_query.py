import requests
import json

def query(path):
    return requests.get('http://127.0.0.1:3000' + path).json()

result = {}

for spell in query('/api/spells')['results']:
    x = query(spell['url'])
    print(x)
    if x['level'] not in result:
        result[x['level']] = []
    result[x['level']].append(spell['index'])

print(json.dumps(result))