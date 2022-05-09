import fetch from 'node-fetch';

(async () => {

  const response = await fetch("http://localhost:8080", {
    method: "POST",
    headers: {
      'Content-Type': 'text/plain'
    },
    body: '東京都千代田区霞が関1-3-1'
  });

  const data = await response.json();

  const{
    '住所': {
      '@type': btype,
      '表記': address,
      '都道府県': p,
      '都道府県コード': pcode,
      '市区町村': m,
      '市区町村コード': mcode,
      '町名': t,
      '丁目': c,
      '番地': b,
      '号': g,
    }
  } = data;

  console.log(btype, address, p, pcode, m, mcode, t, c, b, g);
})();
