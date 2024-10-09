const filterShortStateName = (arr) => arr.filter((el) => el.length < 7)

const filterStartVowel = (arr) => arr.filter(el => /^[aeiou]/i.test(el))

const filter5Vowels = (arr) => arr.filter(el => {
    let str = el.match(/(a|e|i|o|u)*/ig).join('')
    return str.length >= 5
})

const filter1DistinctVowel = (arr) => arr.filter(el => {
    if (!/[aeiou]+/.test(el)) return false
    let vowels = el.match(/[aeiou]*/g)
    for (let v of vowels) {
        if (vowels[0]!== v) return false;
    }
    return true
})

const multiFilter = (arr) => arr.filter(el => {
    return (el.capital.length >= 8 && /^[^aeiou]/gi.test(el.name) && /[^aeiou]$/gi.test(el.tag) && el.region != "South")
})

// console.log(filter1DistinctVowel(["Alabaema", "gggggg"]));
// console.log(strREg.test(str));
