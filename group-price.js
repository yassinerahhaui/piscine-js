const groupPrice = (str) => {
    let prices = str.match(/([A-Z]+|\$)[\d]+.[\d]+/g)
    let result = []
    for (let p of prices) {
        let price = ""
        if (p.match(/(\$)/g)) {
            price = p
        } else {
            price = p.match(/([A-Z]+)/g)
        }
        let item = [price,...p.match(/\d+\.\d+/g)[0].split(".")]
        result = [...result,item]
    }
    return result
}
// console.log(groupPrice("$10.20"));