// const dataSet = "qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello/yassine?you=something&something=you&hi=jjjj qhttp://example.com/hello?you=something&something=you qhttp://example.com/hello?you=something&something=you&hi=jjjj&bb=nnnnn"
const regex = /https?:\/\/[^\s]+/g;
const getURL = data => data.match(regex)
const greedyQuery = data => {
    let list = data.match(regex)
    let res = []
    for (let item of list) {
        let arr = item.split("&")
        if (arr.length >= 3) res = [...res,item]
    }
    return res
}
const notSoGreedy = data => {
    let list = data.match(regex)
    let res = []
    for (let item of list) {
        let arr = item.split("&")
        if (arr.length <= 3 && arr.length >= 2) res = [...res,item]
    }
    return res
}

// console.log(getURL(dataSet));
// console.log(greedyQuery(dataSet));
// console.log(notSoGreedy(dataSet));