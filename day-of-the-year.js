function dayOfTheYear(date) {
    let year = '2024';
    date.setFullYear(2024)
    let firstday = new Date(year + '-01-01').getTime();
    let dif = (date.getTime() - firstday) / 86400000;
    return dif+1;
}


// console.log(dayOfTheYear(new Date('1664-08-09')));
// console.log(dayOfTheYear(new Date('0001-01-01')));