# get-first-url-from-string

Import it, pass it a string of text. Will return false for no URL found or the 1st URL found.

The default import is the typescript verion, please import build/index.js if you don't use ts.

Default values:
```
forceHttps: options.forceHttps || true,
removeTrailingSlash: options.removeTrailingSlash || true,
sortQueryParameters: options.sortQueryParameters || true,
stripAuthentication: options.stripAuthentication || true,
stripHash: options.stripHash || false,
stripProtocol: options.stripProtocol || false,
stripWWW: options.stripWWW || false,
```
