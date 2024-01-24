# acw-sc-v2

## Install

```bash
git clone https://github.com/WangYihang/acw-sc-v2
cd acw-sc-v2
npm install
```

## API Usage

```python
import requests
with open("index.html") as f:
    response = requests.post('https://acw-sc-v2.authu.online/', data={'data': f.read()})
    print(response.text)
```

## Cli Usage

1. Put the HTML content into `assets/index.html`
2. Run `node scripts/cli.js`

```bash
$ node cli.js
acw_sc__v2=65afac17e880921014c4ead657413970d8b23ccb
```

## Web Usage

### Docker Compose

1. Run `docker compose up -d`
2. Open `http://localhost:3000/`

### Manually

1. Run `node scripts/server.js`
2. Open `http://localhost:3000/`


## Acknowledgement

* https://www.52pojie.cn/thread-1822807-1-1.html
* https://dev-coco.github.io/Online-Tools/JavaScript-Deobfuscator.html
