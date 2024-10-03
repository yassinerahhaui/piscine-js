const pyramid = (str, num) => {
    let space = (" ").repeat(str.length)
    let start = num - 1
    let end = num
    let x = num*2-1
    let result = ""
    for (let i = 1;i <=num; i++) {
        for (let j = 1;j <= x;j++) {
            if (j <= start) {
                result += space
            } else if (j > start && j <= end) {
                result += str
            } else {
                break
            }
        }
        start--
        end++
        if (i < num) result += "\n"
    }
    return result
}
// console.log(pyramid("abs",5));