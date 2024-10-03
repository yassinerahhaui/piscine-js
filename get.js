const get = (src, path) => {
    let pathKey = path.split(".")
    let result = src
    for (let key of pathKey) {
        result = result[key]
        if (typeof result === "undefined") return undefined
    }
    return result
}

// console.log(get({ key: 'value' }, 'key'));
// console.log(get({ nested: { key: 'value' } }, 'nx.nx'));
// console.log(get({ nested: { key: 'value' } }, 'nested.key'));