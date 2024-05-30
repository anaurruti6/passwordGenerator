const charAmountRange = document.getElementById("charAmountRange")
const charAmountNumber = document.getElementById("charAmountNumber")
const form = document.getElementById("passwordGeneratorForm")
const includeUpperCaseEl = document.getElementById("includeUpperCase")
const includeNumbersEl = document.getElementById("includeNumbers")
const includeSymbolsEl = document.getElementById("includeSymbols")

charAmountNumber.addEventListener("input", syncCharAmount)
charAmountRange.addEventListener("input", syncCharAmount)

form.addEventListener('submit', e => {
    e.preventDefault() /*Will stop out form from submitting and refreshing our page*/
    const includeUpperCase = includeUpperCaseEl.checked
    const includeNumbers = includeNumbersEl.checked
    const includeSymbols = includeSymbolsEl.checked
    const password = generatePaswword(charAmount, includeUpperCase, includeNumbers, includeSymbols)
})

function syncCharAmount(e) {
    const value = e.target.value
    charAmountRange.value = value
    charAmountNumber.value = value
}

