export function currentLanguageTag(params: {
    languageTag: NonNullable<unknown>;
}, options?: {
    languageTag?: "en" | "de";
}): string;
export function greeting(params: {
    name: NonNullable<unknown>;
    count: NonNullable<unknown>;
}, options?: {
    languageTag?: "en" | "de" | "en-US";
}): string;
import { languageTag } from "./runtime.js";
