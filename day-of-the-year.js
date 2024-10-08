const dayOfTheYear = (date) => {
    let month = date.getMonth()
    let days = month * 30 + (month/2)
    days += date.getDate()
    return days
}