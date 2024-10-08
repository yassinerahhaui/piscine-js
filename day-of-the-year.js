const dayOfTheYear = (date) => {
    let month = date.getMonth()
    let day = date.getDate()
    let daysofMonths = [31,28,31,30,31,30,31,30,31,30,31,30]
    let count = 0
    let res = 0
    if (date.getFullYear()%4 === 0) daysofMonths[1] = 29;
    for (let d of daysofMonths) {
        res += d
        count++
        if (count === month) break
    }
    res += day
    return res >= 365 ? 1 : res
}

console.log(dayOfTheYear(new Date('1664-08-09')));
console.log(dayOfTheYear(new Date('0001-01-01')));