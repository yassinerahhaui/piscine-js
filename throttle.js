const throttle = (func, wait) => {
    let called = false;
    return (...args) => {
        if (!called) {
            func.apply(this, args);
            called = true
            setTimeout(() => {
                called = false
            }, wait)
        }
    }
};
const opThrottle = (func, wait, options = { leading: false, trailing: false }) => {
    let called = false
    let { leading, trailing } = options
    return (...args) => {
        if (!called) {
            called = true
            if (leading || (leading && trailing)) func.apply(this, args);
            setTimeout(() => {
                if (trailing && !leading) func.apply(this, args);
                called = false
            }, wait)
        }
    }
}