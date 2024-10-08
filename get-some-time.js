const firstDayWeek = (numOfWeek, strYear) => {
    let date = new Date(0)
    date.setFullYear(Number(strYear))
    let day = (numOfWeek*7)-6
    date.setDate(day)
    if (numOfWeek > 1) {
        while(date.getDay() !== 1) {
            date.setHours(-24)
        }
    } else {
        date.setDate(1)
    }
    
    return formatDate(date.getDate(),date.getMonth(), date.getFullYear())
}
const formatDate = (dd, mm , yyyy) => {
    mm = Number(mm+1)
    let month = mm.toString().padStart(2,'0')
    let day = dd.toString().padStart(2, '0')
    return `${day}-${month}-${yyyy}`
}
// console.log(firstDayWeek(1,"1000"));