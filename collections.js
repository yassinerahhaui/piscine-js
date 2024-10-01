/*
    arrToSet: from Array to Set.
    arrToStr: from Array to string.
    setToArr: from Set to Array.
    setToStr: from Set to string.
    strToArr: from string to Array.
    strToSet: from string to Set.
    mapToObj: from Map to Object.
    objToArr: from Object to Array.
    objToMap: from Object to Map.
    arrToObj: from Array to Object.
    strToObj: from string to Object.
*/

const arrToSet = (arr) => {
    const result = new Set()
    arr.map(el=> result.add(el))
    return result
}
const arrToStr = (arr) => arr.join("")
const setToArr = (set) => {
    let n = 0
    const arr = []
    for (const v of set.values()) {
        arr[n] = v
        n++
    }
    return arr
};
const setToStr = (set) => setToArr(set).toString();
const strToArr = (str) => str.split("");
const strToSet = (str) => new Set(str.split(""));
const mapToObj = (map) => 
console.log(strToSet("hello"));