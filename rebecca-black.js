const isFriday = (date) => (date.getDays() === 5)
const isWeekend = (date) => (date.getDays() === 0 || date.getDay() === 6)
const isLeapYear = (date) => (date.getFullYear() % 4 === 0)
const isLastDayOfMonth = (date) => {
    let month = date.getMonth()
    date.setHours(+24)
    let newmonth = date.getMonth()
    return (month !== newmonth)
}
// console.log(isLastDayOfMonth(new Date()));