'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (input) => {
    const scheme = '(?:https)';
    const hostname = '(\\:\\/\\/(?:www.|[a-zA-ZÀ-ž.]+)[a-zA-ZÀ-ž0-9\\-\\.]+\\.(?:[\\w]{1,}))?';
    const port = '(\:[0-9][0-9]{0,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])?';
    const path = '([a-zA-ZÀ-ž0-9\\-_\\.\\/\\+]+)?';
    const query = '(?:\\?$|[^\\s"]*)?';
    const hash = '(?:#[^\\s"]*)?';
    // As named groups for when IE finally goes away:
    // const scheme = '(?<SCHEME>(?:https))';
    // const hostname = '(?<HOSTNAME>\\:\\/\\/(?:www.|[a-zA-ZÀ-ž.]+)[a-zA-ZÀ-ž0-9\\-\\.]+\\.(?:[\\w]{1,}))?';
    // const port = '(?<PORT>\:[0-9][0-9]{0,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])?'
    // const path = '(?<PATH>[a-zA-ZÀ-ž0-9\\-_\\.\\/\\+]+)?';
    // const query = '(?<QUERY>(?:\\?$|[^\\s"]*)?)?';
    // const hash = '(?<HASH>(?:#[^\\s"]*)?)?';
    const regex = new RegExp(`(${scheme}${hostname}${port}${path}${query}${hash})`, 'gim');
    const out = regex.exec(input);
    if (out) {
        return out[0];
    }
    else {
        return '';
    }
};
//# sourceMappingURL=index.js.map