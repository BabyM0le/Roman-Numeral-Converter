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
    for(let i = 0; i < romanArray.length; i++) numArray.push(values[romanArray[i]])

    // Adds up numArray
    for(let i = 0; i < numArray.length; i++) {
        if(numArray[i] < numArray[i + 1]) {
            output += numArray[i + 1] - numArray[i]
            i += 1
        } else output += numArray[i]
    }

    if(input == '') document.getElementById('output').value = null
    else {
        document.getElementById('output').value = output
        document.getElementById('input').value = null
    }
    console.log("Output: " + output)
    console.log("Roman Numerals: " + romanArray)
    console.log("Numbers: " + numArray)
}

function copy() {
    navigator.clipboard.writeText(
		document.getElementById('output').value
	)
}