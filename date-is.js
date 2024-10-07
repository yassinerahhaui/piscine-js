const isValid = (date) => {
    if (typeof date === "string") {
        return false
    }
    return new Date(date).getTime() ? true : false
}
const isAfter = (arg1,arg2) => {
    if (typeof arg1 === "string" || typeof arg2 === "string") return false;
    let date1 = new Date(arg1).getTime()
    let date2 = new Date(arg2).getTime()
    return (date1.getTime() > date2.getTime())
}
const isBefore = (arg1, arg2) => {
    if (typeof arg1 === "string" || typeof arg2 === "string") return false;
    let date1 = new Date(arg1).getTime()
    let date2 = new Date(arg2).getTime()
    return (date1.getTime() < date2.getTime())
}
const isFuture = (arg) => {
    if (typeof arg === "string") return false;
    let date = new Date(arg).getTime()
    return (date.getTime() > Date.now().getTime())
}
const isPast = (arg) => {
    if (typeof arg === "string") return false;
    let date = new Date(arg).getTime()
    return (date.getTime() < Date.now().getTime())
}
// console.log(isValid(1393804800000));