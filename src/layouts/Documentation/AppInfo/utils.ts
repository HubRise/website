export const linkAppInfoIcon = (key: string) => {
  switch (key) {
    case "category":
      return "bolt"
    case "availability":
      return "location_on"
    case "price_range":
      return "credit_card"
    case "website":
      return "language"
    case "contact":
      return "mail"
    default:
      return "bolt"
  }
}
