// Generates a random char
const getChar = () => {
    const charList = 'ABC DEF GHI JKL MNO PQR STU VWXYZ . ! , ? '
    const myChar = Math.floor(Math.random() * charList.length)
    return charList[myChar]
}

// Gets 100k chars
const getContent = () => {
    const content = []
    var x = ''
    for(let i = 0; i < 100000; i++) {
        x = getChar();
        content.push(x)
    }
    return content
}

// Output
var chars = getContent()
var result = chars.join('')
var resultContainer = document.getElementById("result-container");
resultContainer.innerHTML = result;