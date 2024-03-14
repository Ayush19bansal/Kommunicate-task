// 1 question
function getUrlParameterValue(url, parameter) {
    const queryString = url.split('?')[1];
    if (!queryString) return null;

    const params = queryString.split('&');
    const finalanswer = params.find(param => param.startsWith(parameter + '='));

    if (!finalanswer) return null;

    return finalanswer.split('=')[1];
}

// Example URL
var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

// Example usage
console.log(getUrlParameterValue(url, "utm_medium")); // Output: "webplugin"
console.log(getUrlParameterValue(url, "utm_campaign")); // Output: "poweredby"




//2nd question

function reverseNumber(number) {
    let numString = number.toString();
    let reversedString = '';
    
    for (let i = numString.length - 1; i >= 0; i--) {
        reversedString += numString[i];
    }
    
    let reversedNumber = parseInt(reversedString);
    console.log(reversedNumber);
}

// Example usage:
reverseNumber(149); // Output: 941
