const filterShortStateName = (arr) => arr.filter((el) => el.length < 7)

const filterStartVowel = (arr) => arr.filter(el => /^[aeiou]/i.test(el))

const filter5Vowels = (arr) => arr.filter(el => {
    let str = el.match(/(a|e|i|o|u)*/ig).join('')
    return str.length >= 5
})

const filter1DistinctVowel = (arr) => arr.filter(el => {
    if (!/[aeiou]+/.test(el)) return false
    let vowels = el.match(/[aeiou]+/ig).join('').toLowerCase()
    for (let v of vowels) {
        if (vowels[0]!== v && v !== "") return false;
    }
    return true
})

const multiFilter = (arr) => arr.filter(el => {
    return (el.capital.length >= 8 && /^[^aeiou]/gi.test(el.name) && /[^aeiou]$/gi.test(el.tag) && el.region != "South")
})
// let ar = [
//     'Alabama',
//     'Alaska',
//     'Arkansas',
//     'Kansas',
//     'Maryland',
//     'Mississippi',
//     'New Jersey',
//     'Tennessee',
//   ]

// console.log(filter1DistinctVowel(ar));
// console.log(strREg.test(str));
