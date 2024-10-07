const addWeek = (date) => {
    let currentTime = new Date("0001-01-01").getTime()
    let time = date.getTime() - currentTime
    const day = (time / 1000 / 60 / 60 / 24 ) % 14
    const weeks = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
        'secondMonday', 
        'secondTuesday',
        'secondWednesday',
        'secondThursday',
        'secondFriday',
        'secondSaturday',
        'secondSunday'
    ]
    return weeks[day];
}
const timeTravel = (date) => {
    let res = date.date
    Date.parse("Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)")
    res.setHours(date.hour)
    res.setMinutes(date.minute)
    res.setSeconds(date.second)
    return res
}
// const time = Date.now() / 1000 / 60 / 60 / 24 / 365


// console.log(addWeek(new Date("2024-10-07")));
// console.log(timeTravel({
//     date: new Date('2020-05-12 23:25:22'),
//     hour: 21,
//     minute: 22,
//     second: 22,
//   }).toString());