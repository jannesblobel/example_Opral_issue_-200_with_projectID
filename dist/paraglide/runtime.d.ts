/**
 * Check if something is an available language tag.
 *
 * @example
 * 	if (isAvailableLanguageTag(params.locale)) {
 * 		setLanguageTag(params.locale)
 * 	} else {
 * 		setLanguageTag("en")
 * 	}
 *
 * @param {any} thing
 * @returns {thing is AvailableLanguageTag}
 */
export function isAvailableLanguageTag(thing: any): thing is "en" | "de" | "en-US";
/**
 * The project's source language tag.
 *
 * @example
 *   if (newlySelectedLanguageTag === sourceLanguageTag){
 *     // do nothing as the source language tag is the default language
 *     return
 *   }
 */
export const sourceLanguageTag: "en";
/**
 * The project's available language tags.
 *
 * @example
 *   if (availableLanguageTags.includes(userSelectedLanguageTag) === false){
 *     throw new Error("Language tag not available")
 *   }
 */
export const availableLanguageTags: readonly ["en", "de", "en-US"];
/**
 * Get the current language tag.
 *
 * @example
 *   if (languageTag() === "de"){
 *     console.log("Germany 🇩🇪")
 *   } else if (languageTag() === "nl"){
 *     console.log("Netherlands 🇳🇱")
 *   }
 *
 * @type {() => AvailableLanguageTag}
 */
export let languageTag: () => AvailableLanguageTag;
export function setLanguageTag(tag: AvailableLanguageTag | (() => AvailableLanguageTag)): void;
export function onSetLanguageTag(fn: (languageTag: AvailableLanguageTag) => void): void;
/**
 * A language tag that is available in the project.
 */
export type AvailableLanguageTag = (typeof availableLanguageTags)[number];
