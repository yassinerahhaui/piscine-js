const citiesOnly = arr => arr.map(el => el.city)

const upperCasingStates = arr => arr.map(str => toCapitalize(str))

const fahrenheitToCelsius = (arr) => {
    return arr.map(el => {
        let num = el.split('°F')[0]
        let cel = Math.floor(((num - 32) * 5) / 9)
        return `${cel}°C`
    })
}
const trimTemp = (arr) => {
    return arr.map(el => {
        return { city: el.city,
            state: el.state,
            region: el.region,
            temperature: el.temperature.split(' ').join('')
        }
    })
}

const tempForecasts = (arr) => arr.map(el => {
    let cel = el.temperature.split(' ').join('')
    let num = cel.split('°F')[0]
    let res = Math.floor(((num - 32) * 5) / 9)
    return `${res}°Celsius in ${el.city}, ${el.state}`
})

const toCapitalize = (str) => {
    let arr = str.split(' ') || str.split('')
    let res = arr.map(el => `${el[0].toUpperCase()}${el.slice(1)}`)
    return res.join(' ')
}

// console.log(tempForecasts([
//     {
//         city: 'Pasadena',
//         temperature: ' 101 °F',
//         state: 'california',
//         region: 'West',
//     },
// ]));
// -> ['38°Celsius in Pasadena, California']

/* console.log(trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' },
])) *//* -> [
    { city: 'Los Angeles', temperature: '101°F' },
    { city: 'San Francisco', temperature: '84°F' },
  ] */
// console.log(toCapitalize("hello world"));


// console.log(citiesOnly([
//     {
//         city: 'Los Angeles',
//         temperature: '  101 °F   ',
//     },
//     {
//         city: 'San Francisco',
//         temperature: ' 84 ° F   ',
//     },
// ]));

// console.log(upperCasingStates(['alabama', 'new jersey']));

// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']));
// -> ['20°C', '15°C', '-4°C']