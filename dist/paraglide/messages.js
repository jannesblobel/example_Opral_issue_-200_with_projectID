/* eslint-disable */
import { languageTag } from "./runtime.js";
import * as en from "./messages/en.js";
import * as de from "./messages/de.js";
import * as en_US from "./messages/en-US.js";
/**
 * This message has been compiled by [inlang paraglide](https://inlang.com/m/gerre34r/library-inlang-paraglideJs).
 *
 * - Don't edit the message's code. Use the [inlang ide extension](https://inlang.com/m/r7kp499g/app-inlang-ideExtension),
 *   the [web editor](https://inlang.com/m/tdozzpar/app-inlang-editor) instead, or edit the translation files manually.
 *
 * - The params are NonNullable<unknown> because the inlang SDK does not provide information on the type of a param (yet).
 *
 * @param {{ languageTag: NonNullable<unknown> }} params
 * @param {{ languageTag?: "en" | "de" }} options
 * @returns {string}
 */
export var currentLanguageTag = function (params, options) {
    var _a;
    if (options === void 0) { options = {}; }
    var tag = (_a = options.languageTag) !== null && _a !== void 0 ? _a : languageTag();
    if (tag === "de")
        return de.currentLanguageTag(params);
    if (tag === "en")
        return en.currentLanguageTag(params);
    // if the language tag does not exist, return undefined
    // 
    // the missing translation lint rule catches errors like this in CI/CD
    // see https://inlang.com/m/4cxm3eqi/messageLintRule-inlang-missingTranslation
    // @ts-expect-error - for better DX treat a message function is always returning a string
    return undefined;
};
/**
 * This message has been compiled by [inlang paraglide](https://inlang.com/m/gerre34r/library-inlang-paraglideJs).
 *
 * - Don't edit the message's code. Use the [inlang ide extension](https://inlang.com/m/r7kp499g/app-inlang-ideExtension),
 *   the [web editor](https://inlang.com/m/tdozzpar/app-inlang-editor) instead, or edit the translation files manually.
 *
 * - The params are NonNullable<unknown> because the inlang SDK does not provide information on the type of a param (yet).
 *
 * @param {{ name: NonNullable<unknown>, count: NonNullable<unknown> }} params
 * @param {{ languageTag?: "en" | "de" | "en-US" }} options
 * @returns {string}
 */
export var greeting = function (params, options) {
    var _a;
    if (options === void 0) { options = {}; }
    var tag = (_a = options.languageTag) !== null && _a !== void 0 ? _a : languageTag();
    if (tag === "de")
        return de.greeting(params);
    if (tag === "en")
        return en.greeting(params);
    if (tag === "en-US")
        return en_US.greeting(params);
    // if the language tag does not exist, return undefined
    // 
    // the missing translation lint rule catches errors like this in CI/CD
    // see https://inlang.com/m/4cxm3eqi/messageLintRule-inlang-missingTranslation
    // @ts-expect-error - for better DX treat a message function is always returning a string
    return undefined;
};
