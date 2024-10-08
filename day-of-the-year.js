const dayOfTheYear = (date) => {
    let res = 0
    let daysofMonths = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30]
    let year = date.getFullYear()
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) daysofMonths[1] = 29;
    for (let i = 0; i < month; i++) {
        res += daysofMonths[1]
    }
    res += day
    // if (diff === -60 && date === new Date('0001-01-01')) return 1
    return res
}

// console.log(dayOfTheYear(new Date('1664-08-09')));
// console.log(dayOfTheYear(new Date('0001-01-01')));