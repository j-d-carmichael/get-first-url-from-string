# get-first-url-from-string

Import it, pass it a string of text. Will return **false** for no URL found, or the 1st URL found.

The default import is the typescript version, please import build/index.js if you don't use ts.

Default values:
```javascript
{
    forceHttps: true,
    removeTrailingSlash: true,
    sortQueryParameters: true,
    stripAuthentication: true,
    stripHash: false,
    stripProtocol: false,
    stripWWW: false,
}
```
