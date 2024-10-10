const longWords = (arr) => {
    return arr.map(el=> (typeof el === 'string' && el.length >= 5)).reduce((total,cur)=> {
        if (!cur || !total) total = false
        return total
    })
}

// let arr = ["12345","12345","12345","12345"]
// console.log(longWords(arr));