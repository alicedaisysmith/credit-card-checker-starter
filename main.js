const validateCred = (array) => {
    const reversedArray = array.slice().reverse()
    const convertedArray = []
    for (let i = 0; i < reversedArray.length; i++) {
        if (i % 2 === 0) {
            convertedArray.push(reversedArray[i])
        } else {
            let doubledOddDigit = reversedArray[i] * 2
            if (doubledOddDigit > 9) {
                doubledOddDigit = doubledOddDigit - 9
            }
            convertedArray.push(doubledOddDigit)
        }
    }
    return convertedArray.reduce((a, b) => a + b, 0) % 10 === 0
}

const findInvalidCards = (cards) => {
    const invalidCards = []
    for (const card of cards) {
        if (!validateCred(card)) {
            invalidCards.push(card)
        }
    } 
    return invalidCards
} 

const idInvalidCardCompanies = (invalidNumbers) => {
    const companies = []
    for (const number of invalidNumbers) {
        if (number[0] === 3) {
            companies.push('Amex')
        } else if (number[0] === 4) {
            companies.push('Visa')
        } else if (number[0] === 5) {
            companies.push('Mastercard')
        } else if (number[0] === 6) {   
            companies.push('Discover')
        } else {
            console.log('Company not found.')
        }
    }
    // strip duplicates
    let uniqueCompanies = [...new Set(companies)]
    return uniqueCompanies 
} 

module.exports = {
    findInvalidCards, idInvalidCardCompanies
}