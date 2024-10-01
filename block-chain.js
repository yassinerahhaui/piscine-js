const blockChain = (data,prev) => {
    typeof prev === "undefined" ? prev = { index: 0, hash: '0' } : ''
    let index = prev.index + 1
    const block = {
        data: data,
        prev: prev,
        index: index,
        hash: hashCode(`${index}${prev.hash}${JSON.stringify(data)}`),
        }
    block.chain = (data) => blockChain(data, block)
    return block
}
