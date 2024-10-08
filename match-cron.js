const matchCron = (cron, date) => {
    cron = cron.split(' ')
    const dt = {
        min: date.getMinutes(),
        hour: date.getHours(),
        dayOfWeek: date.getDay(),
        dayOfMonth: date.getDate(),
        month: date.getMonth(),
    }

    if (cron[0] !== '*' && Number(cron[0]) !== dt.min) return false;
    if (cron[1] !== '*' && Number(cron[1]) !== dt.hour) return false;
    if (cron[2] !== '*' && Number(cron[2]) !== dt.dayOfMonth) return false;
    if (cron[3] !== '*' && Number(cron[3]) !== dt.month) return false;
    if (cron[4] !== '*' && Number(cron[4]) !== dt.dayOfWeek) return false;

    return true
}

// console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00')));
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00')));
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00')));