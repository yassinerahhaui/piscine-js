const defaultCurry = (arg1) => (arg2) => {
    for (let [key,val] of Object.entries(arg2)) {
        arg1[key] = val;
    }
    return arg1
}
const reduceCurry = () => {}
const filterCurry = () => {}

const reduceScore = () => {}
const filterForce = () => {}
const mapAverage = () => {}
// console.log(defaultCurry({
//     http: 403,
//     connection: 'close',
//     contentType: 'multipart/form-data',
//   })({
//     http: 200,
//     connection: 'open',
//     requestMethod: 'GET'
//   }));
