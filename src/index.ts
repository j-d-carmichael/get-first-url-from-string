import getUrls from 'get-urls';

/**
 * Returns the 1st url found in a string.
 *   - Subsequent urls are ignored
 *   - All urls forced to https
 *   - All query params and hash params remain intact
 *   - All query params are sorted
 * @param {string} text - The input string to find URLs
 * @param {getUrls.Options} options - Options to control getUrls
 * @return {string}
 */
export default (text: string, options: getUrls.Options = {}): string | boolean => {
  return (getUrls(text, Object.assign({
    forceHttps: true,
    removeTrailingSlash: true,
    sortQueryParameters: false,
    stripAuthentication: true,
    stripHash: false,
    stripProtocol: false,
    stripWWW: false,
  }, options))).values().next().value || false;
};
