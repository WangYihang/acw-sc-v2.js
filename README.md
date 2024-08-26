# acw-sc-v2

Input `html` file, output `acw_sc__v2` cookie. 

> For online demo, check [https://acw-sc-v2.vercel.app/](https://acw-sc-v2.vercel.app/).

The `html` file looks like this:

```html
<html><script>
var arg1='70D9569CD5E5895C84F284A09503B1598C5762A1';
var _0x4818=['\x63\x73\x4b\x48\x77\x71\x4d\x49,...
function setCookie(name,value){var expiredate=new Date();...
function reload(x) {setCookie("acw_sc__v2", x);...
</script></html>
```

## Install

```bash
git clone https://github.com/WangYihang/acw-sc-v2
cd acw-sc-v2
yarn install
```

## API Usage

1. Start API server: `node app.js`
2. Send `POST` request to `http://localhost:3000/`.

```python
import requests
with open("index.html") as f:
    response = requests.post('http://localhost:3000/', data={'data': f.read()})
    print(response.text)
```

## Cli Usage

1. Put the HTML content into `assets/index.html`
2. Run `node cli.js`

```bash
$ node cli.js
acw_sc__v2=65afac17e880921014c4ead657413970d8b23ccb
```

## Web Usage

### Docker (Recommended)

```bash
docker run --rm --interactive --tty --publish 3000:3000 ghcr.io/wangyihang/acw-sc-v2.js:main
```


### Docker Compose

1. Run `docker compose up -d`
2. Open `http://localhost:3000/`

### Manually

1. Run `node app.js`
2. Open `http://localhost:3000/`

## Acknowledgement

* https://www.52pojie.cn/thread-1822807-1-1.html
* https://dev-coco.github.io/Online-Tools/JavaScript-Deobfuscator.html

## References

* Python version for Client Code ([acw-sc-v2-py](https://github.com/WangYihang/acw-sc-v2-py))

* GoLang version for client code ([acw-sc-v2-go](https://github.com/WangYihang/acw-sc-v2-go))
