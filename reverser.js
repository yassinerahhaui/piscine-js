const reverse = (arr) => {
    let result = []
    for (let item of arr) {
        result = [item,...result]
    }
    if (typeof arr === "string") return result.join("")
    return result
}
// console.log(reverse("abcde"));