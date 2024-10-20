const series = async (arr) => {
    let res = []
    for(let val of arr){
        res.push(await val())
    }
    return res
}