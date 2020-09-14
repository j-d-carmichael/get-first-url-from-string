import getUrls from 'get-urls';
declare const _default: (text: string, options?: getUrls.Options) => any;
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
export default _default;
