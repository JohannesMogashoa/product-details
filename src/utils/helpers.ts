export const format_to_currency = (value: number) => {
    return value.toLocaleString("en-ZA", { style: "currency", currency: "ZAR" })
}