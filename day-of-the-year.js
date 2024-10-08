const dayOfTheYear = (date) => {
    const d = new Date(date);
    if (d === date) return 1;
    let month = date.getMonth()
    let day = date.getDate()
    let count = 0
    let res = 0
    let daysofMonths = [31,28,31,30,31,30,31,30,31,30,31,30]
    let year = date.getFullYear()
    if (year%4 === 0 && (year%100 !== 0 || year%400 === 0)) daysofMonths[1] = 29;
    for (let d of daysofMonths) {
        res += d
        count++
        if (count === month) break
    }
    res += day
    return res
}

// console.log(dayOfTheYear(new Date('1664-08-09')));
console.log(dayOfTheYear(new Date('0001-01-01')));