"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_urls_1 = __importDefault(require("get-urls"));
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
exports.default = (text, options = {}) => {
    return (get_urls_1.default(text, {
        forceHttps: options.forceHttps || true,
        removeTrailingSlash: options.removeTrailingSlash || true,
        sortQueryParameters: options.sortQueryParameters || true,
        stripAuthentication: options.stripAuthentication || true,
        stripHash: options.stripHash || false,
        stripProtocol: options.stripProtocol || false,
        stripWWW: options.stripWWW || false,
    })).values().next().value || false;
};
//# sourceMappingURL=index.js.map