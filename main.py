import requests

headers = {'Content-Type': 'text/plain'}
address = '東京都千代田区霞が関1-3-1'.encode('utf-8')
r = requests.post('http://localhost:8080', headers=headers, data=address)
data = r.json()
print(data['住所']['都道府県'])
print(data['住所']['市区町村'])
print(data['住所']['町名'])
print(data['住所']['丁目'])
print(data['住所']['番地'])
print(data['住所']['号'])

