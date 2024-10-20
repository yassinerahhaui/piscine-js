const all = async (obj) => {
    let res = {}
    for(let key in obj){
        res[key] = await obj[key]
    }
    return res
}