const dayOfTheYear = (date) => {
    let month = date.getMonth()
    let days = month * 30
    days += date.getDate()
    if (month % 2 === 1) month++;
    return parseInt(days + (month/2))
}

console.log(dayOfTheYear(new Date('1664-08-09')));