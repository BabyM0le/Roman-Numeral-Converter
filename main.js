const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
function submit() {
    const input = document.getElementById('input').value
    let numArray = [], output = 0, romanArray = input.toUpperCase().split('')

    // Converts roman numerials to ints
    for(let i = 0; i < romanArray.length; i++)  { // Checks for invalid characters
        if(values[romanArray[i]] == undefined)  {
            error('Please enter valid Roman Numeral charcters')
            return
        } else numArray.push(values[romanArray[i]])
    }

    // Adds up numArray
    for(let i = 0; i < numArray.length; i++) {
        if(numArray[i] + numArray[i + 1] + numArray[i + 2] + numArray[i + 3] == numArray[i] * 4) { // Checkes for invalid character combinations
            error('Please enter a valid Roman Numeral combination')
            return
        } else if(numArray[i] < numArray[i + 1]) { // Checks for subtraction
            output += numArray[i + 1] - numArray[i]
            i += 1
        } else output += numArray[i]
        errorClear()
    }

    if(input == '') document.getElementById('output').value = null
    else document.getElementById('output').value = output
}

function copy() {
    navigator.clipboard.writeText(document.getElementById('output').value)
}

function error(error) {
	document.getElementById('error').innerHTML = error
    document.getElementById('output').value = null
}

function errorClear() {
	document.getElementById('error').innerHTML = null
}