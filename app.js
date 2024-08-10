
function anagrams(words) {
    let anagrams = {};

    words.forEach(word => {
        let sortedWord = word.split('').sort().join('')

        if (!anagrams[sortedWord]) {
            anagrams[sortedWord] = []
        }
        anagrams[sortedWord].push(word)
    })

    return Object.values(anagrams)
}

let words = ["bat", "tap", "cat", "tab", "pat"]
let result = anagrams(words)

console.log(result)