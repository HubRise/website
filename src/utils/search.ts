function normalizeText(string: string) {
  return string
    .normalize("NFD") // remove accents
    .replace(/[\u0300-\u036f\s\W]/g, "") // remove spaces and special characters
    .toLowerCase() // convert to lowercase
}

export function doesSearchTextMatch(originalText: string, searchedText: string) {
  originalText = normalizeText(originalText)
  searchedText = normalizeText(searchedText)

  return originalText.includes(searchedText)
}
