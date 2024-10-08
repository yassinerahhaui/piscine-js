const countLeapYears = (date) => {
    let years = date.getFullYear()
    let res = 0
    for (let i = 1; i <= years; i++) {
        if (i%4 === 0) res++;
    }
    return res
}