const groupPrice = (str) => {
    let prices = str.match(/([A-Z]+|\$)[\d]+.[\d]+/g) || []
    let result = []
    if (prices.length === 0) return []
    for (let p of prices) {
        let item = [p,...p.match(/\d+\.\d+/g)[0].split(".")]
        result = [...result,item]
    }
    return result
}
// console.log(groupPrice("$10.20"));