# crypto-js

[![NPM](https://nodei.co/npm/crypto-js.png?downloads=true&stars=true)](https://nodei.co/npm/crypto-js/)

<iframe src="https://codesandbox.io/embed/libs-crypto-hash-v3ciq?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="libs-crypto-hash"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

@/libs/crypto

```js
import sha256 from "crypto-js/sha256";
import Base64 from "crypto-js/enc-base64";

export function getHashValue(value, length = 20) {
  return Base64.stringify(sha256(value)).substring(0, length);
}
```
