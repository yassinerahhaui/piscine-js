const repeat = (str, num) => {
    let i = 1
    let result = ""
    while (i <= num) {
        result += str
        i++
    }
    return result
}
// console.log(repeat("hello ", 3));