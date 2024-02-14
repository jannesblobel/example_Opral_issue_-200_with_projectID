/* eslint-disable */
/**
* This file contains language specific message functions for tree-shaking.
*
*! WARNING: Only import messages from this file if you want to manually
*! optimize your bundle. Else, import from the `messages.js` file.
*
* Your bundler will (in the future) automatically replace the index function
* with a language specific message function in the build step.
*/
/**
 * @param {{ languageTag: NonNullable<unknown> }} params
 * @returns {string}
 */
export var currentLanguageTag = function (params) {
    return "The current language tag is \"".concat(params.languageTag, "\".");
};
/**
 * @param {{ name: NonNullable<unknown>, count: NonNullable<unknown> }} params
 * @returns {string}
 */
export var greeting = function (params) {
    return "Welcome ".concat(params.name, "! You have ").concat(params.count, " messages.");
};
