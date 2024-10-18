const throttle = (func, wait) => {
    let timeout;
    let called = false;

    return (...args) => {
        if (!called) {
            func.apply(this, args);
            called = true;
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            called = false;
        }, wait);
    };
};

const opThrottle = (func, wait, options = { leading: false, trailing: false }) => {
    let timeout;
    let called = false;
    const { leading, trailing } = options;

    return (...args) => {
        if (!called && leading) {
            func.apply(this, args);
            called = true;
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            if (trailing && called) {
                func.apply(this, args);
            }
            called = false;
        }, wait);
    };
};