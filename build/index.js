import getUrls from 'get-urls';
/**
 * Returns the 1st url found in a string.
 *   - Subsequent urls are ignored
 *   - All urls forced to https
 *   - All query params and hash params remain intact
 *   - All query params are sorted
 * @param {string} text - The input string to find URLs
 * @param options
 * @return {string}
 */
export default (function (text, options) {
    if (options === void 0) { options = {}; }
    return (getUrls(text, {
        forceHttps: options.forceHttps || true,
        removeTrailingSlash: options.removeTrailingSlash || true,
        sortQueryParameters: options.sortQueryParameters || true,
        stripAuthentication: options.stripAuthentication || true,
        stripHash: options.stripHash || false,
        stripProtocol: options.stripProtocol || false,
        stripWWW: options.stripWWW || false,
    })).values().next().value || '';
});
