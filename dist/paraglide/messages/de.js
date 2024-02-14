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
    return "Der aktuelle Sprachtag ist \"".concat(params.languageTag, "\".");
};
/**
 * @param {{ name: NonNullable<unknown>, count: NonNullable<unknown> }} params
 * @returns {string}
 */
export var greeting = function (params) {
    return "Hallo ".concat(params.name, "! Du hast ").concat(params.count, " Nachrichten.");
};
