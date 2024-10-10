const longWords = (arr = []) => arr.map(el=> {
    return (typeof el === 'string' && el.length >= 5)
}).reduce((total,cur)=> {
    if (!cur || !total) total = false
    return total
})


const oneLongWord = (arr = []) => arr.reduce((total,el)=> {
    if (typeof el === "string" && el.length >= 10) total = true;
    return total
},false)


const noLongWords = (arr = []) => arr.reduce((total,el)=> {
    if (typeof el === "string" && el.length >= 7) total = false
    return total
},true)
