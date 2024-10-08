const dayOfTheYear = (date) => {    
    let month = date.getMonth()
    let day = date.getDate()
    let res = day
    let daysofMonths = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30]
    let year = date.getFullYear()
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) daysofMonths[1] = 29;
    for (let i = 0; i < month; i++) {
        res += daysofMonths[i]
    }
    return res
}

// console.log(dayOfTheYear(new Date('1664-08-09')));
// console.log(dayOfTheYear(new Date('0001-01-01')));