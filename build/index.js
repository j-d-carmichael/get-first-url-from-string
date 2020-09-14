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
 * @param {getUrls.Options} options - Options to control getUrls
 * @return {string}
 */
exports.default = (text, options = {}) => {
    return (get_urls_1.default(text, Object.assign({
        forceHttps: true,
        removeTrailingSlash: true,
        sortQueryParameters: false,
        stripAuthentication: true,
        stripHash: false,
        stripProtocol: false,
        stripWWW: false,
    }, options))).values().next().value || false;
};
//# sourceMappingURL=index.js.map