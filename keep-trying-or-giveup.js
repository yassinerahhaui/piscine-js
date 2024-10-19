const retry = (count, callback) => async (...args) => {
    for (let i = 0; i <= count; i++) {
        try {
            return await callback(...args);
        } catch (error) {
            if (i === count) throw error;
        }
    }
}
const timeout =  (delay, callback) => async (...args) => {
    const maxTime = new Promise((_,reject) => {
        setTimeout(() => reject(new Error('timeout')), delay);
    })
    const res =  Promise.race([maxTime,callback(...args)])
    return res
}