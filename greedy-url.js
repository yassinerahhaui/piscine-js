// const dataSet = "qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello/yassine?you=something&something=you&hi=jjjj qhttp://example.com/hello?you=something&something=you qhttp://example.com/hello?you=something&something=you&hi=jjjj&bb=nnnnn"
const getURL = data => {
    let regex = /https?:\/\/(www.)?\w+.\w+((\/\w+)*(\?(\w+=\w+)+(&\w+=\w+)*)?)/g
    return data.match(regex)
}
const greedyQuery = data => {
    let regex = /https?:\/\/(www.)?\w+.\w+\/\w+\?(\w+=\w+)&(\w+=\w+)(&(\w+=\w+))+/g
    return data.match(regex)
}
const notSoGreedy = data => {
    let regex = /https?:\/\/(www.)?\w+.\w+\/\w+\?(\w+=\w+)&(\w+=\w+)(&(\w+=\w+))?(?=(&(\w+=\w+)))/g
    return data.match(regex)
}

// console.log(getURL(dataSet));
// console.log(greedyQuery(dataSet));
// console.log(notSoGreedy(dataSet));