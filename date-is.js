const isValid = (date) => new Date(date).getTime() ? true : false
const isAfter = (date1,date2) => (date1.getTime() > date2.getTime())
const isBefore = (date1, date2) => (date1.getTime() < date2.getTime())
const isFuture = (date) => (date.getTime() > Date.now().getTime())
const isPast = (date) => (date.getTime() < Date.now().getTime())
// console.log(isValid(new Date()));