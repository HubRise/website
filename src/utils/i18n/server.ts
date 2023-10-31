import translationEn from "locales/en.json"
import translationFr from "locales/fr.json"

type DeepKeys<T, P extends string = ""> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? `${P}${"" extends P ? "" : "."}${K}` | DeepKeys<T[K], `${P}${"" extends P ? "" : "."}${K}`>
        : `${P}${"" extends P ? "" : "."}${K}`
    }[keyof T & string]
  : never

type TranslationType = typeof translationEn // Assuming translationEn and translationFr have the same structure

type TranslationKeys = DeepKeys<TranslationType>

export function getTranslation(language: "en" | "fr", path: TranslationKeys): string {
  // Implementation here
  const paths = path.split(".")
  let obj: any = language === "en" ? translationEn : translationFr

  for (const p of paths) {
    obj = obj[p]
    if (obj === undefined) return "Key not found"
  }

  return obj
}
